import axios from '@/libs/api.request'

/**
 * 指保存商品类目的属性
 * @param {*} id 
 */
export const saveCategoryAttrs = (params) => {
    return axios.request({
        url: '/goods-category-attr/admin/batch-save',
        method: 'POST',
        data: params
      })
}