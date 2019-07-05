import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 获取指定角色权限
 */
export const getMultiPermission = (params) => {
  return doGet('/role-permission/admin/multi/' + params, {})
}
/**
 * 获取当前登入用户的所有权限
 */
export const getUserPermission = () => {
  return doGet('/module-permission/user/all', {})
}

/**
 * 批量保存权限
 * @param {} params 参数
 */
export const batchSavePermission = (params) => {
  return doPostJson('/role-permission/admin/batch-save', params, {})
}

/**
 * 根据用户id查询用户角色
 */
export const getUserRoleByUserId = (id) => {
  return doGet('/user-role/admin/multi/' + id, {})
}
