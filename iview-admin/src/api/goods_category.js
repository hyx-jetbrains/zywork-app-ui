import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
 * 批量保存商品类目的属性
 * @param {*} id 
 */
export const updateGoodsCategoryAttr = (params) => {
  return doPostJson('/goods-category-attr/admin/batch-save', params, {})
}