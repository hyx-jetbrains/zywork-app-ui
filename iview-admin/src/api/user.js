import axios from '@/libs/api.request'
import Qs from 'qs'
import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 登入
 */
export const login = (loginView) => {
  return axios.request({
    url: '/auth/login',
    method: 'POST',
    data: Qs.stringify(loginView.loginForm),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': ''
    }
  })
}
/**
* 获取用户信息
*/
export const getUserInfo = () => {
  return doGet('/user-userdetail/user/get', {})
}

/**
* 退出登入
*/
export const logout = () => {
  return doGet('/auth/logout', {})
}

/**
 * 获取用户详细信息
 * @param {*} id 用户id
 */
export const getUserDetail = (id) => {
  return doGet('/user-userdetail/admin/multi/' + id, {})
}

/**
 * 修改用户登入密码
 */
export const updateLoaginPassword = (params) => {
  return doPostQs('/pwd/update-login', params, {})
}

/**
 * 分配用户角色
 */
export const saveUserRole = (params) => {
  return doPostJson('/user-role/admin/batch-save', params, {})
}

/**
 * 获取登录用户的所有角色 
 */
export const getUserRoles = () => {
  return doGet('/user-role/user/list', {})
}

export const updateUserInfo = (params) => {
  return doPostJson('user-detail/user/update', params, {})
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
