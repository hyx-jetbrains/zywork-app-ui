import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 条件查询商品图片
 * @param {*} params 
 */
export const allPicByGoods = (params) => {
  return new Promise((resolve, reject) => {
    doPostJson('/goods-pic/admin/all-cond', params, {}).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 更新商品图片信息
 * @param {*} params 
 */
export const updateGoodsPic = (params) => {
  return doPostJson('/goods-pic/admin/batch-update', params, {})
}

/**
 * 根据图片id获取图片信息
 * @param {*} id 
 */
export const getPicById = (id) => {
  return doGet('/goods-pic/admin/one/' + id, {})
}