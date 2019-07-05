import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 获取所有模块
 */
export const getAllModule = () => {
  return doGet('/module/admin/all', {})
  }

/**
 * 根据模块id获取模块信息
 */
export const getModuleById = (id) => {
  return doGet('/module/admin/one/' + id, {})
}