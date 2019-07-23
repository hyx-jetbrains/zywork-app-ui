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
import ImgModal from '_c/img-modal'

import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl

export default {
  name: 'AdvertisementTableMain',
  components: {
    ImgModal
  },
  data() {
    return {
      urls: {
        searchUrl: '/advertisement/admin/pager-cond',
        activeUrl: '/advertisement/admin/active',
        removeUrl: '/advertisement/admin/remove/'
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
            title: '广告编号',
            key: 'id',
            minWidth: 120,
            sortable: true
          },
          {
            title: '广告类型编号',
            key: 'adTypeId',
            minWidth: 120,
            sortable: true
          },
          {
            title: '广告标题',
            key: 'title',
            minWidth: 120,
            sortable: true
          },
          {
            title: '广告图片路径',
            key: 'picUrl',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '广告图片'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '广告图片URL',
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
            title: '广告图片',
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
            title: '广告顺序',
            key: 'adOrder',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '广告顺序'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '广告显示的顺序',
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
            title: '背景颜色',
            key: 'backgroundColor',
            minWidth: 120,
            sortable: true,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '背景颜色'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '可使用十六进制或RGB颜色',
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
            title: '关联页面链接',
            key: 'linkPageUrl',
            minWidth: 120,
            sortable: true
          },
          {
            title: '关联记录ID',
            key: 'linkId',
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
                      content: '广告版本号',
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
                      content: '广告创建时间',
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
                      content: '广告更新时间',
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
                      content: '广告是否激活',
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
                            name: 'showUploadModal'
                          }
                        },
                        '上传广告图片'
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
      } else if (itemName === 'showUploadModal') {
        this.$emit('showUploadModal', row.id)
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
