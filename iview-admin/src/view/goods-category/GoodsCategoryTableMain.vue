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
    <ImgModal ref="imgModal" />
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
import ImgModal from '_c/img-modal'

import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl

export default {
  name: 'GoodsCategoryTableMain',
  components: {
    ImgModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/goods-category/admin/pager-cond',
        activeUrl: '/goods-category/admin/active',
        removeUrl: '/goods-category/admin/remove/',
        updateStatusUrl: '/goods-category/admin/update-status'
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
            title: '商品类目编号',
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
            title: '类目父编号',
            key: 'parentId',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '类目父编号'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '直接上级类目编号',
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
						        params.row.parentId,
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
						                name: 'moduleDetail'
						              }
						            },
						            '详情'
						          ),
						          h(
						            'DropdownItem',
						            {
						              props: {
						                name: 'showSearch'
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
            title: '类目名称',
            key: 'title',
            minWidth: 120,
            sortable: true
          },
          {
            title: '类目封面图',
            key: 'picUrl',
            minWidth: 120,
            sortable: true
          },
          {
            title: '类目封面图',
            key: 'picUrl',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              let imgSrc = params.row.picUrl
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
            title: '类目描述',
            key: 'description',
            minWidth: 120,
            sortable: true
          },
          {
            title: '是否热门',
            key: 'isHot',
            minWidth: 120,
            sortable: true,
            render: (h, params) => {
              return h(
                'i-switch',
                {
                  props: {
                    size: 'default',
                    value: params.row.isHot === 1
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    'on-change': status => {
                      this.updateStatus(params.row)
                    }
                  }
                },
                [
                  h(
                    'span',
                    {
                      slot: 'open'
                    },
                    '是'
                  ),
                  h(
                    'span',
                    {
                      slot: 'close'
                    },
                    '否'
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
                      content: '商品类目版本号',
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
                      content: '商品类目创建时间',
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
                      content: '商品类目更新时间',
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
                      content: '商品类目是否激活',
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
                            name: 'showAttrs'
                          }
                        },
                        '属性分配'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'orderAttrs'
                          }
                        },
                        '属性排序'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showGoodsCategoryAttributeMainModal'
                          }
                        },
                        '设置属性组合'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showUploadModal'
                          }
                        },
                        '上传封面图片'
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'addChildrenCategory'
                          }
                        },
                        '添加子类目'
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
      } else if (itemName === 'showAttrs') {
        this.$emit('showGoodsCategoryAttrDrawer', row.id)
      } else if (itemName === 'orderAttrs') {
        this.$emit('showGoodsAttrOrderModal', row.id)
      } else if (itemName === 'showUploadModal') {
        this.$emit('showUploadModal', row.id)
      } else if (itemName === 'showGoodsCategoryAttributeMainModal') {
        this.$emit('showGoodsCategoryAttributeMainModal', row.id)
      } else if (itemName === 'moduleDetail') {
        // 显示详情的弹窗
        this.$emit('showParentDetailModal', row.parentId)
      } else if (itemName === 'showSearch') {
        // 显示搜索的弹窗
        this.$emit('showSearchTableModal')
      } else if (itemName === 'addChildrenCategory') {
        // 添加子类目
        this.$emit('addChildrenCategory', row)
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
     * 更新是否热门
     */
    updateStatus(row) {
      // 默认是是否必填
      let status = row.isHot
      status = status === 0 ? 1 : 0
      let param = {
        id: row.id,
        isHot: status
      }
      utils.doPostJson(this.urls.updateStatusUrl, param, {}).then(res => {
        if (ResponseStatus.OK === res.data.code) {
          this.$Message.success(res.data.message)
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
