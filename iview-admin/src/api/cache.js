import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 获取Redis缓存信息
 */
export const redisCacheInfo = () => {
  return doGet('/redis-manage/info', {})
}

/**
 * 获取Redis指定的key，如不指定，则获取所有
 */
export const redisCacheKeys = (params) => {
  return doPostQs('/redis-manage/keys', params, {})
}

/**
 * 获取key的个数
 */
export const redisCacheKeysCount = () => {
  return doGet('/redis-manage/keys-count', {})
}

/**
 * 根据key获取value信息
 */
export const getValueByKey = (params) => {
  return doPostQs('/redis-manage/value', params, {})
}

/**
 * 根据key删除缓存信息
 */
export const delKey = (params) => {
  return doPostQs('/redis-manage/del-key', params, {})
}

/**
 * 删除所有缓存
 */
export const delKeys = (params) => {
  return doPostJson('/redis-manage/del-keys', params)
}
