import { getLocalStorageToken } from '@/libs/util'
import axios from '@/libs/api.request'
import Qs from 'qs'

/**
 * 部署流程
 * @param {*} process 
 */
export const deploy = (process) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/process-activiti/admin/do/deploy',
      method: 'POST',
      data: Qs.stringify({
        id: process.id,
        processName: process.processName,
        processKey: process.processKey,
        processPath: process.filePath
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer ' + getLocalStorageToken()
      }
    }).then(response => {
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
    self.loading.search = true
    self.table.loading = true
    axios.request({
      url: self.urls.searchUrl,
      method: 'POST',
      data: Qs.stringify(self.searchForm)
    }).then(response => {
      self.loading['search'] = false
      self.table.loading = false
      if (response.data.code !== 1001) {
        self.$Message.error(response.data.message)
      } else {
        self.page.total = response.data.data.total
        if (response.data.data.total !== 0) {
          self.table.tableDetails = response.data.data.rows
        } else {
          self.table.tableDetails = []
        }
      }
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
        axios.request({
          url: self.urls.removeOldUrl,
          method: 'POST',
          data: Qs.stringify({
            processKey: row.key
          })
        }).then(response => {
          if (response.data.code !== 1001) {
            self.$Message.error(response.data.message)
          } else {
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
        axios.request({
          url: self.urls.removeAllUrl,
          method: 'POST',
          data: Qs.stringify({
            processKey: row.key
          })
        }).then(response => {
          if (response.data.code !== 1001) {
            self.$Message.error(response.data.message)
          } else {
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