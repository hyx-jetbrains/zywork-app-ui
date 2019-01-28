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
