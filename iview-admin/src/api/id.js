import axios from '@/libs/api.request'
/**
 * 根据模块id获取模块信息
 */
export const getModuleById = (id) => {
  return axios.request({
    url: '/module/admin/one/' + id,
    method: 'GET',
    data: ''
  })
}

/**
 * 根据用户id查询用户角色
 */
export const getUserRoleByUserId = (id) => {
  return axios.request({
    url: '/user-role/admin/multi/' + id,
    method: 'GET',
    data: ''
  })
}
