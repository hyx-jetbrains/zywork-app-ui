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
  </div>
</template>

<script>
import GoodsInfoAttrDetailModal from './GoodsInfoAttrDetailModal.vue'
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'

export default {
  name: 'GoodsInfoTableMain',
  components: {
    GoodsInfoAttrDetailModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/goods-info/admin/pager-cond',
        activeUrl: '/goods-info/admin/active',
        removeUrl: '/goods-info/admin/remove/',
        updateShelfStatusUrl: '/goods-info/admin/update-shelf-status'
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
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
            title: '店铺编号',
            key: 'shopId',
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
						        params.row.shopId,
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
						                name: 'shopModuleDetail'
						              }
						            },
						            '详情'
						          ),
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'showShopSearch'
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
            title: '类目编号',
            key: 'categoryId',
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
						        params.row.categoryId,
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
						                name: 'categoryModuleDetail'
						              }
						            },
						            '详情'
						          ),
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'showCategorySearch'
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
            },
            render: (h, params) => {
              let tagText = '普'
              let tagColor = 'blue'
              if (params.row.hotId) {
                tagText = '热'
                tagColor = 'red'
              }
              if (params.row.agentCount > 0) {
                if (tagText === '热') {
                  tagText += ' 代'
                } else {
                  tagText = '代'
                } 
                tagColor = 'magenta'
              }
              if (params.row.grouponCount > 0) {
                if (tagText === '热') {
                  tagText += ' 拼'
                } else {
                  tagText = '拼'
                } 
                tagText = '拼'
                tagColor = 'orange'
              }
              if (params.row.seckillCount > 0) {
                if (tagText === '热') {
                  tagText += ' 秒'
                } else {
                  tagText = '秒'
                } 
                tagColor = 'green'
              }
              if (params.row.promotionCount > 0) {
                if (tagText === '热') {
                  tagText += ' 促'
                } else {
                  tagText = '促'
                } 
                tagColor = 'cyan'
              }
              return h('span',
                [
                  h('tag', {
                    props: {
                      color: tagColor
                    }
                  }, tagText),
                  h('span', params.row.title)
                ]
              )    
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
                            name: 'imgMgrModal'
                          }
                        },
                        '图片管理'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'imgOrderModal'
                          }
                        },
                        '图片排序'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'skuMgrModal'
                          }
                        },
                        '商品SKU管理'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'distributionRatio'
                          }
                        },
                        '商品分销比例'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'setHot'
                          }
                        },
                        '设为热门'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'cancelHot',
                            disabled: params.row.hotId ? false : true
                          }
                        },
                        '取消热门'
                      ),
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
      } else if (itemName === 'imgMgrModal') {
        this.$emit('showImgMrgModal', row)
      } else if (itemName === 'imgOrderModal') {
        this.$emit('showGoodsPicOrderModal', row.id)
      } else if (itemName === 'skuMgrModal') {
        this.$emit('showGoodsSkuMain', row.id)
      } else if (itemName === 'shopModuleDetail') {
        this.$emit('showAttrDetailModal', row.shopId, 0)
      } else if (itemName === 'showShopSearch') {
        this.$emit('showSearchTableModal', 0)
      } else if (itemName === 'categoryModuleDetail') {
        this.$emit('showAttrDetailModal', row.categoryId, 1)
      } else if (itemName === 'showCategorySearch') {
        this.$emit('showSearchTableModal', 1)
      } else if (itemName === 'distributionRatio') {
        this.$emit('showDistributionRatio', row)
      } else if (itemName === 'cancelHot') {
        this.cancelHot(row.hotId)
      } else if (itemName === 'setHot') {
        this.$emit('showGoodsHotSetModal', row.id)
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
          this.search()
        } else {
          this.$Message.error(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    cancelHot(hotId) {
      if (!hotId) {
        return
      }
      this.$Modal.confirm({
      title: '确认取消热门吗？',
      content: '确认取消热门商品吗？',
      onOk: () => {
        utils.doPostJson('/goods-hot/admin/active', {
              id: hotId,
              isActive: 1
            }, {}).then(response => {
              if (response.data.code === ResponseStatus.OK) {
                this.$Message.success('已取消热门商品')
                this.search()
              } else {
                this.$Message.error(response.data.message)
              }
            }).catch(error => {
              console.log(error)
            })
      },
      onCancel: () => {

      }
    })
    }
  }
}
</script>

<style>
</style>
