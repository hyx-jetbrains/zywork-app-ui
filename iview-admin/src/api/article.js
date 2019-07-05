import {doPostJson, doPostQs, doGet} from './utils-v2'

/**
* 获取文章分类下拉框
*/
export const getArticleCategorySelect = () => {
  return doGet('/article-category/admin/all', {})
}
