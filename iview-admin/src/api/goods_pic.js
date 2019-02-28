import { getLocalStorageToken } from '@/libs/util'
import axios from '@/libs/api.request'
import Qs from 'qs'

/**
 * 条件查询商品图片
 * @param {*} params 
 */
export const allPicByGoods = (params) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/goods-pic/admin/all-cond',
      method: 'POST',
      data: params
    }).then(response => {
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
  return axios.request({
    url: '/goods-pic/admin/batch-update',
    method: 'POST',
    data: params
  })
}