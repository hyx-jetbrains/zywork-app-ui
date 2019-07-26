<template>
  <div>
    <Table
      ref="dataTable"
      stripe
      :loading="table.loading"
      :columns="table.tableColumns"
      :data="table.tableRows"
      style="margin-top:20px;"
      @on-selection-change="changeSelection"
      @on-sort-change="changeSort"
    ></Table>
    <div style="margin: 20px; overflow: hidden">
      <div style="float: right;">
        <Page
          :total="pager.total"
          :current="pager.pageNo"
          @on-change="changePageNo"
          @on-page-size-change="changePageSize"
          showSizer
          showTotal
        ></Page>
      </div>
    </div>
    <GoodsInfoAttrDetailModal ref="attrDetailModal" />
    <ImgModal ref="imgModal" />
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
import GoodsInfoAttrDetailModal from '../goods-info/GoodsInfoAttrDetailModal.vue'
import ImgModal from '_c/img-modal'

import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl

export default {
  name: 'GoodsSkuAttributeValueTable',
  components: {
    GoodsInfoAttrDetailModal,
    ImgModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/goods-sku-attr-val/admin/pager-cond',
        goodsOneUrl: '/goods-info/admin/one/'
      },
      pager: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      searchOpts: {
        sortColumn: null,
        sortOrder: null
      },
      table: {
        loading: false,
        tableColumns: [
          {
            type: 'selection',
            width: 45,
            key: 'id',
            align: 'center',
            fixed: 'left'
          },
          {
            width: 60,
            align: 'center',
            fixed: 'left',
            render: (h, params) => {
              return h(
                'span',
                params.index + (this.pager.pageNo - 1) * this.pager.pageSize + 1
              )
            }
          },
          {
            title: '商品编号',
            key: 'goodsInfoId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '店铺编号',
            key: 'goodsInfoShopId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '类目编号',
            key: 'goodsInfoCategoryId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '商品标题',
            key: 'goodsInfoTitle',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '商品标题'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品的统一标题',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '图文详情',
            key: 'goodsInfoIntro',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              return h(
                'a',
                {
                  on: {
                    click: () => {
                      this.showAttrDetailModal(params.row)
                    }
                  }
                },
                '点击查看'
              )
            }
          },
          {
            title: '上架状态',
            key: 'goodsInfoShelfStatus',
            minWidth: 120,
            sortable: true
          },
          {
            title: '销量',
            key: 'goodsInfoSaleCount',
            minWidth: 120,
            sortable: true
          },
          {
            title: '点击数',
            key: 'goodsInfoClickCount',
            minWidth: 120,
            sortable: true
          },
          {
            title: '创建时间',
            key: 'goodsInfoCreateTime',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品创建时间',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '是否激活',
            key: 'goodsInfoIsActive',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否激活'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品是否激活',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '店铺Logo',
            key: 'goodsShopLogo',
            minWidth: 120,
            sortable: true
          },
          {
            title: '店铺标题',
            key: 'goodsShopTitle',
            minWidth: 120,
            sortable: true
          },
          {
            title: '店铺等级',
            key: 'goodsShopLevel',
            minWidth: 120,
            sortable: true
          },
          {
            title: 'SKU编号',
            key: 'goodsSkuId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '上架状态',
            key: 'goodsSkuShelfStatus',
            minWidth: 120,
            sortable: true
          },
          {
            title: '创建时间',
            key: 'goodsSkuCreateTime',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: 'SKU创建时间',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '商品图片编号',
            key: 'goodsPicId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '图片URL',
            key: 'goodsPicPicUrl',
            minWidth: 120,
            sortable: true
          },
          {
            title: '图片',
            key: 'goodsPicPicUrl',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              let imgSrc = params.row.goodsPicPicUrl
              if (!imgSrc) {
                return h('span',{},'暂无图片')
              }
              if (imgSrc.indexOf('http') < 0) {
                imgSrc = cdnUrl + '/' + imgSrc
              }
              return h(
                'img',
                {
                  attrs: {
                    src: imgSrc
                  },
                  style: {
                    width: '60px',
                    height: '60px',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      this.showImgModal(imgSrc)
                    }
                  }
                },
                ''
              )
            }
          },
          {
            title: '图片顺序',
            key: 'goodsPicPicOrder',
            minWidth: 120,
            sortable: true
          },
          {
            title: '属性编号',
            key: 'goodsCategoryAttributeAttrId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '属性排序',
            key: 'goodsCategoryAttributeAttrOrder',
            minWidth: 120,
            sortable: true
          },
          {
            title: '是否属性组合',
            key: 'goodsCategoryAttributeIsAttrGroup',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否属性组合'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content:
                        '如果是属性组合，则在前端商品详情中可根据此属性进行SKU的组合',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '属性名称',
            key: 'goodsAttributeAttrName',
            minWidth: 120,
            sortable: true
          },
          {
            title: '属性代码',
            key: 'goodsAttributeAttrCode',
            minWidth: 120,
            sortable: true
          },
          {
            title: '数据类型',
            key: 'goodsAttributeAttrType',
            minWidth: 120,
            sortable: true
          },
          {
            title: '数据长度',
            key: 'goodsAttributeAttrLength',
            minWidth: 120,
            sortable: true
          },
          {
            title: '是否必填',
            key: 'goodsAttributeAttrRequired',
            minWidth: 120,
            sortable: true
          },
          {
            title: '是否前端显示',
            key: 'goodsAttributeAttrDisplay',
            minWidth: 120,
            sortable: true
          },
          {
            title: '属性值',
            key: 'goodsAttributeValueAttrValue',
            minWidth: 120,
            sortable: true
          },
          {
            title: '创建时间',
            key: 'goodsAttributeValueCreateTime',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品属性值创建时间',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },

          {
            title: '操作',
            key: 'action',
            width: 80,
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.showDetail(params.row)
                      }
                    }
                  },
                  '详情'
                )
              ])
            }
          }
        ],
        tableRows: [],
        selections: []
      }
    }
  },
  computed: {},
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.$emit('searchTable')
    },
    showDetail(row) {
      this.$emit('showDetailModal', row)
    },
    changeSelection(selections) {
      utils.changeSelections(this, selections)
    },
    changeSort(sortColumn) {
      utils.changeSort(this, sortColumn)
    },
    changePageNo(pageNo) {
      utils.changePageNo(this, pageNo)
    },
    changePageSize(pageSize) {
      utils.changePageSize(this, pageSize)
    },
    /**
     * 显示商品图文详情
     */
    showAttrDetailModal(row) {
      let attrDetailModal = this.$refs.attrDetailModal
      utils.doGet(this.urls.goodsOneUrl + row.goodsInfoId, {}).then(res => {
        if (ResponseStatus.OK === res.data.code) {
          attrDetailModal.form = res.data.data
          attrDetailModal.modal.attrDetail = true
        } else {
          this.$Message.error(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 显示图片预览的弹窗
     */
    showImgModal(src) {
      let imgModal = this.$refs.imgModal
      imgModal.modal.img = true
      imgModal.imgSrc = src
    }
  }
}
</script>

<style>
</style>
