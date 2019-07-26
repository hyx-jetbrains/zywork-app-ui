<template>
  <div>
    <Table
      ref="dataTable"
      highlight-row
      stripe
      :loading="table.loading"
      :columns="table.tableColumns"
      :data="table.tableRows"
      style="margin-top:20px;"
      @on-current-change="changeCurrent"
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
    <ImgModal ref="imgModal" />
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import ImgModal from '_c/img-modal'

import config from '@/config'
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? config.baseUrl.dev
    : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl
export default {
  name: 'GoodsPicTableSingle',
  components: {
    ImgModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/goods-pic/admin/pager-cond'
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
            title: '商品图片编号',
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
title: '店铺编号',
key: 'shopId',
minWidth: 120,
sortable: true,
},
          {
            title: '商品编号',
            key: 'goodsId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '图片URL',
            key: 'picUrl',
            minWidth: 120,
            sortable: true
          },
          {
            title: '图片',
            key: 'picUrl',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              let imgSrc = params.row.picUrl
              if (!imgSrc) {
                return h('span', {}, '暂无图片')
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
            key: 'picOrder',
            minWidth: 120,
            sortable: true
          },
          {
            title: '版本号',
            key: 'version',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '版本号'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品图片版本号',
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
            title: '创建时间',
            key: 'createTime',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品图片创建时间',
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
            title: '更新时间',
            key: 'updateTime',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '更新时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品图片更新时间',
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
            key: 'isActive',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否激活'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '商品图片是否激活',
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
            title: '激活状态',
            key: 'isActive',
            minWidth: 100,
            align: 'center',
            render: (h, params) => {
              return h('span', params.row.isActive === 0 ? '激活' : '冻结')
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
        currentRow: {}
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
    changeCurrent(currentRow, oldCurrentRow) {
      utils.changeCurrent(this, currentRow, oldCurrentRow)
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
