import axios from '@/libs/api.request'
import Qs from 'qs'

/**
 * 登入
 * @param self this
 */
export const login = (self) => {
  var token = ''
  if (window.localStorage) {
    token = window.localStorage.getItem('token') === null ? '' : window.localStorage.getItem('token')
  }
  return axios.request({
    url: self.urls.loginUrl,
    method: 'POST',
    data: Qs.stringify(self.loginForm),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': 'Bearer ' + token
    }
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (self) => {
  return axios.request({
    url: self.urls.logoutUrl,
    method: 'POST',
    data: '',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
