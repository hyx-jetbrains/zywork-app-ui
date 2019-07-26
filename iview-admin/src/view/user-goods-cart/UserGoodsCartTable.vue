<template>
    <div>
        <Table ref="dataTable" stripe :loading="table.loading" :columns="table.tableColumns" :data="table.tableRows"
               style="margin-top:20px;" @on-selection-change="changeSelection" @on-sort-change="changeSort"></Table>
        <div style="margin: 20px; overflow: hidden">
            <div style="float: right;">
                <Page :total="pager.total" :current="pager.pageNo" @on-change="changePageNo" @on-page-size-change="changePageSize"
                      showSizer showTotal></Page>
            </div>
        </div>
        <ImgModal ref="imgModal" />
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import headImg from '@/assets/images/head.png'
    import ImgModal from '_c/img-modal'

import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl

    export default {
        name: 'UserGoodsCartTable',
        components: {
          ImgModal
        },
        data() {
            return {
                urls: {
                    searchUrl: '/user-goods-cart/admin/pager-cond'
                },
                pager: {
                    pageNo: 1,
                    pageSize: 10,
                    total: 0
                },
                searchOpts: {
                    sortColumn: null,
                    sortOrder: null,
                },
                table: {
                    loading: false,
                    tableColumns: [{
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
                                return h('span', params.index + (this.pager.pageNo - 1) * this.pager.pageSize + 1)
                            }
                        },
                        {
title: '用户编号',
key: 'userId',
minWidth: 120,
sortable: true,
},
{
title: '手机号',
key: 'userPhone',
minWidth: 120,
sortable: true,
},
{
title: '用户邮箱',
key: 'userEmail',
minWidth: 120,
sortable: true,
},
{
title: '昵称',
key: 'userDetailNickname',
minWidth: 120,
sortable: true,
},
{
title: '头像地址',
key: 'userDetailHeadicon',
minWidth: 120,
sortable: true,
render: (h, params) => {
              let imgSrc = params.row.userDetailHeadicon
              if (!imgSrc) {
                imgSrc = headImg
              } else {
                if (imgSrc.indexOf('http') < 0) {
                  imgSrc = cdnUrl + '/' + imgSrc
                }
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
                    borderRadius: '50%'
                  }
                },
                ''
              )
            }
},
{
title: '购物编号',
key: 'goodsCartId',
minWidth: 120,
sortable: true,
},
{
title: '购买数量',
key: 'goodsCartQuantity',
minWidth: 120,
sortable: true,
},
{
title: '创建时间',
key: 'goodsCartCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: '购物创建时间',
                    placement: 'top',
                    transfer: true,
                    maxWidth: 500
                  }
                }, [
                  h('Icon', {
                    props: {
                      type: 'ios-help-circle'
                    },
                    style: {
                      marginLeft: '3px'
                    }
                  })
                ])
              ])
            }
},
{
title: '店铺编号',
key: 'goodsShopId',
minWidth: 120,
sortable: true,
},
{
title: '店铺Logo',
key: 'goodsShopLogo',
minWidth: 120,
sortable: true,
},
{
title: '店铺标题',
key: 'goodsShopTitle',
minWidth: 120,
sortable: true,
},
{
title: '商品编号',
key: 'goodsInfoId',
minWidth: 120,
sortable: true,
},
{
title: '商品标题',
key: 'goodsInfoTitle',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '商品标题'),
                h('Tooltip', {
                  props: {
                    content: '商品的统一标题',
                    placement: 'top',
                    transfer: true,
                    maxWidth: 500
                  }
                }, [
                  h('Icon', {
                    props: {
                      type: 'ios-help-circle'
                    },
                    style: {
                      marginLeft: '3px'
                    }
                  })
                ])
              ])
            }
},
{
title: 'SKU编号',
key: 'goodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: '商品图片编号',
key: 'goodsPicId',
minWidth: 120,
sortable: true,
},
{
title: '图片URL',
key: 'goodsPicPicUrl',
minWidth: 120,
sortable: true,
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
                            title: '操作',
                            key: 'action',
                            width: 80,
                            align: 'center',
                            fixed: 'right',
                            render: (h, params) => {
                                return h('div', [
                                    h('Button', {
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
                                    }, '详情')
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
