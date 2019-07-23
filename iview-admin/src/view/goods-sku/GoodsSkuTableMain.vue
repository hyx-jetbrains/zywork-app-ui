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
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'

export default {
  name: 'GoodsSkuTableMain',
  data() {
    return {
      urls: {
        searchUrl: '/goods-sku/admin/pager-cond',
        activeUrl: '/goods-sku/admin/active',
        removeUrl: '/goods-sku/admin/remove/',
        updateStatusUrl: '/goods-sku/admin/update-status'
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
            title: 'SKU编号',
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
            title: '商品编号',
            key: 'goodsId',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
						  return h(
						    'Dropdown',
						    {
						      on: {
						        'on-click': itemName => {
						          this.userOpt(itemName, params.row)
						        }
						      },
						      props: {
						        transfer: true
						      }
						    },
						    [
						      h('span', [
						        params.row.goodsId,
						        h('Icon', {
						          props: {
						            type: 'ios-list',
						            size: '25'
						          }
						        })
						      ]),
						      h(
						        'DropdownMenu',
						        {
						          slot: 'list'
						        },
						        [
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'goodsModuleDetail'
						              }
						            },
						            '详情'
						          ),
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'showGoodsSearch'
						              }
						            },
						            '搜索'
						          )
						        ]
						      )
						    ]
						  )
						}
          },
          {
            title: '商品图片编号',
            key: 'picId',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              if (!params.row.picId) {
                return h(
                  '',
                  {},
                  ''
                )
              }
						  return h(
						    'Dropdown',
						    {
						      on: {
						        'on-click': itemName => {
						          this.userOpt(itemName, params.row)
						        }
						      },
						      props: {
						        transfer: true
						      }
						    },
						    [
						      h('span', [
						        params.row.picId,
						        h('Icon', {
						          props: {
						            type: 'ios-list',
						            size: '25'
						          }
						        })
						      ]),
						      h(
						        'DropdownMenu',
						        {
						          slot: 'list'
						        },
						        [
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'picModuleDetail'
						              }
						            },
						            '详情'
						          ),
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'showPicSearch'
						              }
						            },
						            '搜索'
						          )
						        ]
						      )
						    ]
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
                      content: 'SKU版本号',
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
                      content: 'SKU更新时间',
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
                      content: 'SKU是否激活',
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
              return h(
                'i-switch',
                {
                  props: {
                    size: 'large',
                    value: params.row.isActive === 0
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    'on-change': status => {
                      this.active(params.row)
                    }
                  }
                },
                [
                  h(
                    'span',
                    {
                      slot: 'open'
                    },
                    '激活'
                  ),
                  h(
                    'span',
                    {
                      slot: 'close'
                    },
                    '冻结'
                  )
                ]
              )
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              return h(
                'Dropdown',
                {
                  on: {
                    'on-click': itemName => {
                      this.userOpt(itemName, params.row)
                    }
                  },
                  props: {
                    transfer: true
                  }
                },
                [
                  h(
                    'Button',
                    {
                      props: {
                        type: 'primary',
                        size: 'small'
                      }
                    },
                    [
                      '选择操作 ',
                      h('Icon', {
                        props: {
                          type: 'ios-arrow-down'
                        }
                      })
                    ]
                  ),
                  h(
                    'DropdownMenu',
                    {
                      slot: 'list'
                    },
                    [
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showEdit'
                          }
                        },
                        '编辑'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showDetail'
                          }
                        },
                        '详情'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'remove'
                          }
                        },
                        [
                          h(
                            'span',
                            {
                              style: {
                                color: 'red'
                              }
                            },
                            '删除'
                          )
                        ]
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'imgModal'
                          }
                        },
                        '图片设置'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'detailModal'
                          }
                        },
                        '详情设置'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'distributionRatio'
                          }
                        },
                        '分销比例'
                      )
                    ]
                  )
                ]
              )
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
    userOpt(itemName, row) {
      if (itemName === 'showEdit') {
        this.$emit('showEditModal', JSON.parse(JSON.stringify(row)))
      } else if (itemName === 'showDetail') {
        this.$emit('showDetailModal', row)
      } else if (itemName === 'remove') {
        utils.remove(this, row)
      } else if (itemName === 'imgModal') {
        this.$emit('showGoodsSkuPicModal', row)
      } else if (itemName === 'detailModal') {
        this.$emit('showSkuDetailModal', row)
      } else if (itemName === 'distributionRatio') {
        this.$emit('showDistributionRatio', row)
      } else if (itemName === 'goodsModuleDetail') {
        this.$emit('showAttrDetailModal', row.goodsId, 0)
      } else if (itemName === 'showGoodsSearch') {
        this.$emit('showSearchTableModal', 0)
      } else if (itemName === 'picModuleDetail') {
        this.$emit('showAttrDetailModal', row.picId, 1)
      } else if (itemName === 'showPicSearch') {
        this.$emit('showSearchTableModal', 1)
      } 
    },
    active(row) {
      utils.active(this, row)
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
     * 更新上下架状态
     */
    updateShelfStatus(row) {
      let shelfStatus = row.shelfStatus === 0 ? 1 : 0
      let data = {
        id: row.id,
        shelfStatus: shelfStatus
      }
      let tip = shelfStatus === 0 ? '上架成功' : '下架成功'
      utils.doPostJson(this.urls.updateStatusUrl, data, {}).then(res => {
        if (res.data.code === ResponseStatus.OK) {
          this.$Message.success(tip)
          this.search()
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
