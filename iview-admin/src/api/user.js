import axios from '@/libs/api.request'
import Qs from 'qs'

/**
 * 登入
 */
export const login = (loginForm) => {
  var token = ''
  if (window.localStorage) {
    token = window.localStorage.getItem('token') === null ? '' : window.localStorage.getItem('token')
  }
  return axios.request({
    url: '/auth/login',
    method: 'POST',
    data: Qs.stringify(loginForm),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'Bearer ' + token
    }
  })
}
/**
* 获取用户信息
*/
export const getUserInfo = () => {
  var token = ''
  if (window.localStorage) {
    token = window.localStorage.getItem('token') === null ? '' : window.localStorage.getItem('token')
  }
  return axios.request({
    url: '/user-userdetail/get',
    method: 'GET',
    data: '',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'Bearer ' + token
    }
  })
}

/**
* 退出登入
*/
export const logout = () => {
  return axios.request({
    url: '/user-userdetail/get',
    method: 'POST',
    data: '',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
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
