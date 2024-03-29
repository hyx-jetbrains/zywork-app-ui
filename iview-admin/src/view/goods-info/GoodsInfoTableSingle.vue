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
    <GoodsInfoAttrDetailModal ref="attrDetailModal" />
  </div>
</template>

<script>
import GoodsInfoAttrDetailModal from './GoodsInfoAttrDetailModal.vue'
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'

export default {
  name: 'GoodsInfoTableSingle',
  components: {
    GoodsInfoAttrDetailModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/goods-info/admin/pager-cond'
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
            title: '商品编号',
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
            title: '店铺编号',
            key: 'shopId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '类目编号',
            key: 'categoryId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '商品标题',
            key: 'title',
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
            key: 'intro',
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
            key: 'shelfStatus',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              return h(
                'i-switch',
                {
                  props: {
                    size: 'large',
                    value: params.row.shelfStatus === 0
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    'on-change': status => {
                      this.updateShelfStatus(params.row)
                    }
                  }
                },
                [
                  h(
                    'span',
                    {
                      slot: 'open'
                    },
                    '上架'
                  ),
                  h(
                    'span',
                    {
                      slot: 'close'
                    },
                    '下架'
                  )
                ]
              )
            }
          },
          {
            title: '销量',
            key: 'saleCount',
            minWidth: 120,
            sortable: true
          },
          {
            title: '点击数',
            key: 'clickCount',
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
                      content: '商品版本号',
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
                      content: '商品更新时间',
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
     * 显示商品图文详情
     */
    showAttrDetailModal(row) {
      let attrDetailModal = this.$refs.attrDetailModal
      attrDetailModal.form = row
      attrDetailModal.modal.attrDetail = true
    },
    /**
     * 更新上下架状态
     */
    updateShelfStatus(row) {
      let shelfStatus = row.shelfStatus === 0 ? 1 : 0
      let data = {
        id: row.id,
        shelfStatus: shelfStatus
      }
      let tip = shelfStatus === 0 ? '上架成功' : '下架成功'
      utils.doPostJson(this.urls.updateShelfStatusUrl, data, {}).then(res => {
        if (res.data.code === ResponseStatus.OK) {
          this.$Message.success(tip)
          
        } else {
          this.$Message.error(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>
