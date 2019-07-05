import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 用户提现审核，通过或未通过
 * @param {*} transactionNo 
 * @param {*} withdrawStatus 
 */
export const check = (transactionNo, withdrawStatus) => {
  return doPostQs('/withdraw/admin/check', {
    transactionNo: transactionNo,
    withdrawStatus: withdrawStatus
  }, {})
}

/**
 * 完成提现，成功或失败
 * @param {*} transactionNo 
 * @param {*} withdrawStatus 
 */
export const confirm = (transactionNo, withdrawStatus) => {
  return doPostQs('/withdraw/admin/confirm-human', {
    transactionNo: transactionNo,
    withdrawStatus: withdrawStatus
  }, {})
}