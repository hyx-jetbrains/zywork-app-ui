import axios from '@/libs/api.request'
import { getLocalStorageToken } from '@/libs/util'

var token = getLocalStorageToken()
/**
 * 获取所有模块
 */
export const getAllModule = () => {
  return axios.request({
    url: '/module/admin/all',
    method: 'GET',
    data: '',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}
/**
 * 获取指定角色权限
 */
export const getMultiPermission = (params) => {
  return axios.request({
    url: '/role-permission/admin/multi/' + params,
    method: 'GET',
    data: '',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}
/**
 * 获取当前登入用户的所有权限
 */
export const getUserPermission = () => {
  return axios.request({
    url: '/module-permission/user/all',
    method: 'GET',
    data: '',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}

/**
 * 批量保存权限
 * @param {} params 参数
 */
export const batchSavePermission = (params) => {
  return axios.request({
    url: '/role-permission/admin/batch-save',
    method: 'POST',
    data: params,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}
