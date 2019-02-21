import axios from '@/libs/api.request'

/**
 * 根据商品类目编号查询所有商品属性
 * @param {*} id 
 */
export const getAttrsByCategoryId = (id) => {
    return axios.request({
        url: '/goods-category-attr/admin/multi/' + id,
        method: 'GET',
        data: ''
      })
}