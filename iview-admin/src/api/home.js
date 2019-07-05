import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 统计注册用户数，包括所有注册用户数，今日新增注册用户数，昨日新增注册用户数
 */
export const regCount = () => {
  return doPostJson('/user-liveness-stat/reg-count', {}, {})
}

/**
 * 指定时间周期内的总新增用户数
 */
export const regAllCountByDate = (params) => {
  return doPostQs('/user-liveness-stat/reg-all-count-by-date', params, {})
}

/**
 * 获取指定周期内的总活跃用户数
 */
export const allDau = (params) => {
  return doPostQs('/user-liveness-stat/all-dau', params, {})
}

/**
 * 获取指定周期内的每日活跃用户数（用于echarts统计）
 */
export const dauByDate = (params) => {
  return doPostQs('/user-liveness-stat/dau-by-date', params, {})
}

/**
 * 指定时间周期内的每日新增用户数（用于echarts统计）
 */
export const regCountByDate = (params) => {
  return doPostQs('/user-liveness-stat/reg-count-by-date', params, {})
}
