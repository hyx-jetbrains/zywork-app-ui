import {parseJson, arrayBufferToReader, arrayBufferToImage, doPostJson, doPostQs, doGet} from "@/api/utils-v2"
import axios from '@/libs/api.request'
import Qs from 'qs'
import * as ResponseStatus from '@/api/response-status'

/**
 * 部署流程
 * @param {*} process 
 */
export const deploy = (process) => {
  return new Promise((resolve, reject) => {
    doPostQs('/process-activiti/admin/do/deploy', {
      id: process.id,
      processName: process.processName,
      processKey: process.processKey,
      processPath: process.filePath
    }, {}).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 查询流程相关的table信息
 */
export const searchTableData = (self) => {
  return new Promise((resolve, reject) => {
    let tableComponent = self.$refs.table
    let searchComponent = self.$refs.searchModal
    searchComponent.loading.search = true
    tableComponent.table.loading = true
    doPostQs(tableComponent.urls.searchUrl, searchComponent.searchForm, {}).then(response => {
      searchComponent.loading.search = false
      tableComponent.table.loading = false
      if (response.data.code !== ResponseStatus.OK) {
        tableComponent.$Message.error(response.data.message)
      } else {
        tableComponent.pager.total = response.data.data.total
        if (response.data.data.total !== 0) {
          tableComponent.table.tableRows = response.data.data.rows
        } else {
          tableComponent.table.tableRows = []
        }
      }
      resolve(response)
    }).catch(error => {
      console.log(error)
      searchComponent.loading.search = false
      tableComponent.table.loading = false
      self.$Message.error('加载数据失败，稍候再试')
      reject(error)
    })
  })
}

/**
 * 删除旧版本部署
 * @param self this
 * @param row 需要删除的数据对象
 */
export const removeOld = (self, row) => {
  return new Promise((resolve, reject) => {
    self.$Modal.confirm({
      title: '确认删除吗？',
      content: '确认删除旧版本的部署吗？',
      onOk: () => {
        doPostQs(self.urls.removeOldUrl, {
          processKey: row.key
        }, {}).then(response => {
          if (response.data.code !== ResponseStatus.OK) {
            self.$Message.error(response.data.message)
          } else {
            self.$Message.success(response.data.message)
            searchTableData(self)
          }
          resolve(response)
        }).catch(error => {
          console.log(error)
          self.$Message.error('删除数据失败，稍候再试')
          reject(error)
        })
      },
      onCancel: () => {
        self.$Message.warning('取消操作')
      }
    })
  })
}

/**
 * 删除所有版本部署
 * @param self this
 * @param row 需要删除的数据对象
 */
export const removeAll = (self, row) => {
  return new Promise((resolve, reject) => {
    self.$Modal.confirm({
      title: '确认删除吗？',
      content: '确认删除所有版本的部署吗？',
      onOk: () => {
        doPostQs(self.urls.removeAllUrl, {
          processKey: row.key
        }, {}).then(response => {
          if (response.data.code !== ResponseStatus.OK) {
            self.$Message.error(response.data.message)
          } else {
            self.$Message.success(response.data.message)
            searchTableData(self)
          }
          resolve(response)
        }).catch(error => {
          console.log(error)
          self.$Message.error('删除数据失败，稍候再试')
          reject(error)
        })
      },
      onCancel: () => {
        self.$Message.warning('取消操作')
      }
    })
  })
}

/**
 * 查询待办任务,用于首页查询三个待办任务：指派人任务，候选人任务，候选组任务
 */
export const searchWaitTask = (self, url) => {
  return new Promise((resolve, reject) => {
    doPostQs(url, self.taskParamForm, {}).then(response => {
      resolve(response)
    }).catch(error => {
      console.log(error)
      self.loading['search'] = false
      self.table.loading = false
      self.$Message.error('加载数据失败，稍候再试')
      reject(error)
    })
  })
}

/**
 * 显示流程图
 * @param self this
 * @param row 显示流程图的对象
 */
export const showActivitiImg = (self, params) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: self.urls.showActivitiImgUrl,
      method: 'POST',
      data: Qs.stringify(params),
      responseType: "arraybuffer"
    }).then(response => {
      let arrayBufferData = response.data
      let reader = arrayBufferToReader(arrayBufferData)
      reader.onload = function (e) {
        parseJson(reader.result).then(json => {
          if (json.code !== ResponseStatus.OK) {
            self.$Message.error(json.message)
            return
          }
        }).catch(error => {
          self.modal.img = true
          self.imgUrl = arrayBufferToImage('png', arrayBufferData)
        })
      }
      resolve(response)
    }).catch(error => {
      console.log(error)
      self.$Message.error('加载数据失败，稍候再试')
      reject(error)
    })
  })
}