import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 根据goods条件查询所有SKU
 * @param {*} id 
 */
export const allSkusByGoods = (params) => {
  return doPostJson('/goods-sku/admin/all-cond', params, {})
}

/**
 * 批量保存商品sku属性值
 * @param {*} params 
 */
export const batchSaveGoodsAttrVals = (params) => {
  return doPostJson('/goods-attribute-value/admin/batch-save', params, {})
}