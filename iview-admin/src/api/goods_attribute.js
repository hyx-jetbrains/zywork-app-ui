import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 根据商品类目条件查询所有商品属性
 * @param {*}
 */
export const getAttrsByCategory = (params) => {
  return doPostJson('/goods-category-attr/admin/all-cond', params, {})
}

/**
 * 批量更新类目属性排序
 * @param {*} params 
 */
export const updateGoodsCategoryAttr = (params) => {
  return doPostJson('/goods-category-attr/admin/batch-update', params, {})
}

/**
 * 根据条件查询sku属性值
 * @param {*} params 
 */
export const skuAttrVals = (params) => {
  return doPostJson('/goods-sku-attr-val/admin/all-cond', params, {})
}