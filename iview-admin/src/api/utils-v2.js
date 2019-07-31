import axios from '@/libs/api.request'
import Qs from 'qs'
import { getLocalStorageToken } from '@/libs/util'
import * as ResponseStatus from '@/api/response-status'
import fileDownload from 'js-file-download'

/**
 * post请求，application/json
 * @param {*} url 请求url
 * @param {*} data json对象
 * @param {*} headers 如headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                          'Authorization': 'Bearer ' + getLocalStorageToken()
                        }
                      如果不需要传递headers，则直接使用{}
 */
export const doPostJson = (url, data, headers) => {
  headers['Authorization'] = 'Bearer ' + getLocalStorageToken()
  return axios.request({
    url: url,
    method: 'POST',
    data: data,
    headers: headers
  })
}

/**
 * post请求，application/x-www-form-urlencoded
 * @param {*} url 请求url
 * @param {*} data json对象
 * @param {*} headers 如headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                          'Authorization': 'Bearer ' + getLocalStorageToken()
                        }
                      如果不需要传递headers，则直接使用{}
 */
export const doPostQs = (url, data, headers) => {
  headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  headers['Authorization'] = 'Bearer ' + getLocalStorageToken()
  return axios.request({
    url: url,
    method: 'POST',
    data: Qs.stringify(data),
    headers: headers
  })
}

/**
 * get请求
 * @param {*} url 请求url，包含请求参数
 * @param {*} headers 如headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                          'Authorization': 'Bearer ' + getLocalStorageToken()
                        }
                      如果不需要传递headers，则直接使用{}
 */
export const doGet = (url, headers) => {
  headers['Authorization'] = 'Bearer ' + getLocalStorageToken()
  return axios.request({
    url: url,
    method: 'GET',
    headers: headers
  })
}

/**
 * 根据form数据对象添加数据
 * @param self 父组件页面
 */
export const add = (self) => {
  return new Promise((resolve, reject) => {
    let addEditComponent = self.$refs.addEditModal
    let addForm = addEditComponent.$refs.addForm
    addForm.validate(valid => {
      if (valid) {
        addEditComponent.loading.add = true
        doPostJson(addEditComponent.urls.addUrl, addEditComponent.form, {}).then(response => {
          addEditComponent.loading.add = false
          if (response.data.code !== ResponseStatus.OK) {
            self.$Message.error(response.data.message)
          } else {
            self.$Message.success(response.data.message)
            addForm.resetFields()
            addEditComponent.modal.add = false
            let tableComponent = self.$refs.table
            tableComponent.search()
          }
          resolve(response)
        }).catch(error => {
          console.log(error)
          addEditComponent.loading['add'] = false
          self.$Message.error('添加数据失败，稍候再试')
          reject(error)
        })
      }
    })
  })
}

/**
 * 根据form数据对象修改数据
 * @param self 父组件页面
 */
export const edit = (self) => {
  return new Promise((resolve, reject) => {
    let addEditComponent = self.$refs.addEditModal
    let editForm = addEditComponent.$refs.editForm
    editForm.validate(valid => {
      if (valid) {
        addEditComponent.loading.edit = true
        doPostJson(addEditComponent.urls.editUrl, addEditComponent.form, {}).then(response => {
          addEditComponent.loading.edit = false
          if (response.data.code !== ResponseStatus.OK) {
            self.$Message.error(response.data.message)
          } else {
            self.$Message.success(response.data.message)
            editForm.resetFields()
            addEditComponent.modal.edit = false
            let tableComponent = self.$refs.table
            tableComponent.search()
          }
          resolve(response)
        }).catch(error => {
          addEditComponent.loading.edit = false
          console.log(error)
          self.$Message.error('修改数据失败，稍候再试')
          reject(error)
        })
      }
    })
  })
}

/**
 * 根据id删除数据
 * @param tableComponent 表格组件
 * @param row 需要删除的数据对象
 */
export const remove = (tableComponent, row) => {
  return new Promise((resolve, reject) => {
    tableComponent.$Modal.confirm({
      title: '确认删除吗？',
      content: '确认删除选择的数据吗？',
      onOk: () => {
        doGet(tableComponent.urls.removeUrl + row.id, {}).then(response => {
          if (response.data.code !== ResponseStatus.OK) {
            tableComponent.$Message.error(response.data.message)
          } else {
            tableComponent.search()
          }
          resolve(response)
        }).catch(error => {
          console.log(error)
          tableComponent.$Message.error('删除数据失败，稍候再试')
          reject(error)
        })
      },
      onCancel: () => {

      }
    })
  })
}

/**
 * 根据所选择的数据批量删除
 * @param self 父组件页面
 */
export const batchRemove = (self) => {
  return new Promise((resolve, reject) => {
    let tableComponent = self.$refs.table
    if (tableComponent.table.selections.length === 0) {
      self.$Message.warning('请选择需要批量删除的数据')
    } else {
      self.$Modal.confirm({
        title: '确认删除吗？',
        content: '确认批量删除选择的数据吗？',
        onOk: () => {
          let ids = []
          tableComponent.table.selections.forEach((row, index) => {
            ids.push(row.id)
          })
          doPostJson(self.urls.batchRemoveUrl, ids, {}).then(response => {
            if (response.data.code !== ResponseStatus.OK) {
              self.$Message.error(response.data.message)
            } else {
              self.$Message.success(response.data.message)
              tableComponent.table.selections = []
              tableComponent.search()
            }
            resolve(response)
          }).catch(error => {
            console.log(error)
            self.$Message.error('批量删除数据失败，稍候再试')
            reject(error)
          })
        },
        onCancel: () => {

        }
      })
    }
  })
}

/**
 * 激活或冻结数据
 * @param tableComponent 表格组件
 * @param row 需要激活或冻结的数据对象
 */
export const active = (tableComponent, row) => {
  return new Promise((resolve, reject) => {
    let isActive = row.isActive === 0 ? 1 : 0
    let data = {
      id: row.id,
      isActive: isActive
    } 
    doPostJson(tableComponent.urls.activeUrl, data, {}).then(response => {
      if (response.data.code !== ResponseStatus.OK) {
        tableComponent.$Message.error(response.data.message)
      } else {
        tableComponent.$Message.success(response.data.message)
      }
      tableComponent.search()
      resolve(response)
    }).catch(error => {
      console.log(error)
      self.$Message.error('激活或冻结数据失败，稍候再试')
      reject(error)
    })
  })
}

/**
 * 根据所选的项，批量激活或冻结数据
 * @param self 父组件页面
 * @param isActive 0表示需要激活，1表示需要冻结
 */
export const batchActive = (self, isActive) => {
  return new Promise((resolve, reject) => {
    let rowArray = []
    let tableComponent = self.$refs.table
    if (tableComponent.table.selections.length === 0) {
      self.$Message.warning('请选择需要批量' + (isActive === 0 ? '激活' : '冻结') + '的数据')
    } else {
      tableComponent.table.selections.forEach((row, index) => {
        if (row.isActive !== isActive) {
          rowArray.push({
            id: row.id,
            isActive: isActive
          })
        }
      })
      if (rowArray.length > 0) {
        doPostJson(self.urls.batchActiveUrl, rowArray, {}).then(response => {
          if (response.data.code !== ResponseStatus.OK) {
            self.$Message.error(response.data.message)
          } else {
            self.$Message.success(response.data.message)
            tableComponent.table.selections = []
            tableComponent.search()
          }
          resolve(response)
        }).catch(error => {
          console.log(error)
          self.$Message.error('批量激活或冻结数据失败，稍候再试')
          reject(error)
        })
      } else {
        self.$Message.warning('没有需要批量' + (isActive === 0 ? '激活' : '冻结') + '的数据')
      }
    }
  })
}

/**
 * 根据searchForm分页搜索
 * @param {*} self 父组件页面
 */
export const search = (self) => {
  return new Promise((resolve, reject) => {
    let tableComponent = self.$refs.table
    let searchComponent = self.$refs.searchModal
    searchComponent.searchForm.pageNo = tableComponent.pager.pageNo
    searchComponent.searchForm.pageSize = tableComponent.pager.pageSize
    searchComponent.searchForm.sortColumn = tableComponent.searchOpts.sortColumn
    searchComponent.searchForm.sortOrder = tableComponent.searchOpts.sortOrder
    searchComponent.loading.search = true
    tableComponent.table.loading = true
    doPostJson(tableComponent.urls.searchUrl, searchComponent.searchForm, {}).then(response => {
      if (response.data.code !== ResponseStatus.OK) {
        tableComponent.$Message.error(response.data.message)
      } else {
        tableComponent.pager.total = response.data.data.total
        tableComponent.table.tableRows = response.data.data.rows
      }
      searchComponent.loading.search = false
      tableComponent.table.loading = false
      resolve(response)
    }).catch(error => {
      console.log(error)
      searchComponent.loading.search = false
      tableComponent.table.loading = false
      tableComponent.$Message.error('加载数据失败，稍候再试')
      reject(error)
    })
  })
}

/**
 * table表格选中事件处理，记录所有被选中的项
 * @param tableComponent table组件
 * @param selections 事件返回值
 */
export const changeSelections = (tableComponent, selections) => {
  tableComponent.table.selections = selections
}

/**
 * 单选
 * @param {*} tableComponent
 * @param {*} currentRow 
 * @param {*} oldCurrentRow 
 */
export const changeCurrent = (tableComponent, currentRow, oldCurrentRow) => {
  tableComponent.table.currentRow = currentRow
}

/**
 * table表格排序事件处理
 * @param tableComponent table组件
 * @param sortColumn 排序字段信息
 */
export const changeSort = (tableComponent, sortColumn) => {
  if (sortColumn.order === 'normal') {
    tableComponent.searchOpts.sortColumn = ''
    tableComponent.searchOpts.sortOrder = ''
  } else {
    tableComponent.searchOpts.sortColumn = sortColumn.key
    tableComponent.searchOpts.sortOrder = sortColumn.order
  }
  tableComponent.search()
}

/**
 * 分页组件页码改变事件处理
 * @param tableComponent table组件
 * @param pageNo 修改后的页码
 */
export const changePageNo = (tableComponent, pageNo) => {
  tableComponent.pager.pageNo = pageNo
  tableComponent.search()
}

/**
 * 分页组件每页大小改变事件处理
 * @param tableComponent table组件
 * @param pageSize 修改后的每页大小
 */
export const changePageSize = (tableComponent, pageSize) => {
  tableComponent.pager.pageSize = pageSize
  tableComponent.search()
}

/**
 * 带有选中数据表格的搜索，需要把已经选中的数据勾选上
 * @param {*} self this
 * @param {*} dataIdProp
 */
export const initSelectTableData = (self, dataIdProp) => {
  return new Promise((resolve, reject) => {
    let tableComponent = self.$refs.table
    let searchComponent = self.$refs.searchModal
    searchComponent.searchForm.pageNo = tableComponent.pager.pageNo
    searchComponent.searchForm.pageSize = tableComponent.pager.pageSize
    searchComponent.searchForm.sortColumn = tableComponent.searchOpts.sortColumn
    searchComponent.searchForm.sortOrder = tableComponent.searchOpts.sortOrder
    searchComponent.loading.search = true
    tableComponent.table.loading = true
    doPostJson(tableComponent.urls.searchUrl, searchComponent.searchForm, {}).then(response => {
      if (response.data.code !== ResponseStatus.OK) {
        self.$Message.error(response.data.message)
      } else {
        if (self.selectedData != null && self.selectedDataIdProp != null) {
          response.data.data.rows.forEach((dataItem, index) => {
            self.selectedData.forEach(selectedDataRow => {
              if (dataItem[dataIdProp || 'id'] === selectedDataRow[self.selectedDataIdProp]) {
                response.data.data.rows[index]._checked = true
                tableComponent.table.selections.push(response.data.data.rows[index])
              }
            }) 
          })
        }
        tableComponent.pager.total = response.data.data.total
        tableComponent.table.tableRows = response.data.data.rows
        searchComponent.loading.search = false
        tableComponent.table.loading = false
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
 * 根据路由名字打开一个新的tabl
 * @param {*} self this
 * @param {*} path 路由路径
 * @param {*} params 参数
 */
export const openTab = (self, path, params) => {
  self.$router.push({
    path: path,
    query: params
  })
}

/**
 * 导出json文件
 * @param self this
 */
export const exportJson = (self) => {
  axios.request({
    url: self.urls.exportUrl,
    method: 'GET',
    responseType: 'blob',
    data: ''
  }).then(response => {
    console.log(response)
    // fileDownload(JSON.stringify(response.data), self.exportFileName)
    fileDownload(response.data, self.exportFileName)
  }).catch(error => {
    console.log(error)
    self.$Message.error('导出失败，稍候再试')
  })
}

/**
 * 取指定多少天前或多少天后的时间
 * getDate(7)：7天后的时间
 * getDate(-7)：7天前的时间
 */
export const getDate = (days) => {
  var date1 = new Date()
  var time1 =
    date1.getFullYear() +
    '-' +
    (date1.getMonth() + 1) +
    '-' +
    date1.getDate()
  var date2 = new Date(date1)
  date2.setDate(date1.getDate() + days)
  var time2 =
    date2.getFullYear() +
    '-' +
    ((date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)) +
    '-' +
    (date2.getDate() < 10 ? '0' + date2.getDate() : date2.getDate())
  return time2
}

/**
 * 解析text文本到JSON对象
 * @param {*} data 
 */
export const parseJson = (data) => {
  return new Promise((resolve, reject) => {
    let json = JSON.parse(data)
    resolve(json)
  })
}

/**
 * 读取arrayBuffer数据到FileReader对象中，FileReader中存储字符串
 * @param {*} arrayBufferData 
 */
export const arrayBufferToReader = (arrayBufferData) => {
  let blob = new Blob([arrayBufferData])
  let reader = new FileReader()
  reader.readAsText(blob, 'utf-8')
  return reader
}

/**
 * 把arrayBuffer数据转化成指定类型的图片
 * @param {*} imageType 
 * @param {*} arrayBufferData 
 */
export const arrayBufferToImage = (imageType, arrayBufferData) => {
  return 'data:image/' + imageType + ';base64,' + btoa(
    new Uint8Array(arrayBufferData).reduce((data, byte) => data + String.fromCharCode(byte), '')
  )
}
    