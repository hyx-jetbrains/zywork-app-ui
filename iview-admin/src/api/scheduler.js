import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 获取所有类名
 */
export const jobClassess = () => {
  return doGet('/scheduler/admin/job-classes', {})
}

/**
 * 修改定时任务的cron表达式并重新调度
 */
export const modify = (params) => {
  return doPostQs('/scheduler/admin/modify', params, {})
}
/**
 * 操作定时任务:启动，暂停，回复，停止，删除
 */
export const optJob = (url, params) => {
  return doPostQs(url, params, {})
}
