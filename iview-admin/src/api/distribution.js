import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 查询指定用户的直接上级用户
 * @param {*} userId 
 */
export const directAboveUsers = (userId) => {
  return doPostQs('/distribution/admin/direct-above', {
    userId: userId,
    pageNo: 1,
    pageSize: 1000
  }, {})
}

/**
 * 查询指定用户的直接下级用户
 * @param {*} userId 
 */
export const directBelowUsers = (userId) => {
  return doPostQs('/distribution/admin/direct-below', {
    userId: userId,
    pageNo: 1,
    pageSize: 1000
  }, {})
}