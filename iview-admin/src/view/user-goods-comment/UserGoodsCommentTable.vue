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
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'

    export default {
        name: 'UserGoodsCommentTable',
        data() {
            return {
                urls: {
                    searchUrl: '/user-goods-comment/admin/pager-cond'
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
title: '商品评论编号',
key: 'goodsCommentId',
minWidth: 120,
sortable: true,
},
{
title: '商品编号',
key: 'goodsCommentGoodsId',
minWidth: 120,
sortable: true,
},
{
title: 'SKU编号',
key: 'goodsCommentGoodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: '售卖标题',
key: 'goodsCommentSkuTitle',
minWidth: 120,
sortable: true,
},
{
title: 'SKU规格信息',
key: 'goodsCommentSkuInfo',
minWidth: 120,
sortable: true,
},
{
title: '购买数量',
key: 'goodsCommentQuantity',
minWidth: 120,
sortable: true,
},
{
title: '评论等级',
key: 'goodsCommentCommentLevel',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '评论等级'),
                h('Tooltip', {
                  props: {
                    content: '好评中评差评',
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
title: '评分星级',
key: 'goodsCommentCommentRate',
minWidth: 120,
sortable: true,
},
{
title: '评论详情',
key: 'goodsCommentComments',
minWidth: 120,
sortable: true,
},
{
title: '追加评论',
key: 'goodsCommentAppendComment',
minWidth: 120,
sortable: true,
},
{
title: '回复详情',
key: 'goodsCommentReply',
minWidth: 120,
sortable: true,
},
{
title: '置顶状态',
key: 'goodsCommentStickStatus',
minWidth: 120,
sortable: true,
},
{
title: '版本号',
key: 'goodsCommentVersion',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '版本号'),
                h('Tooltip', {
                  props: {
                    content: '商品评论版本号',
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
title: '创建时间',
key: 'goodsCommentCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: '商品评论创建时间',
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
title: '更新时间',
key: 'goodsCommentUpdateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '更新时间'),
                h('Tooltip', {
                  props: {
                    content: '商品评论更新时间',
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
title: '是否激活',
key: 'goodsCommentIsActive',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否激活'),
                h('Tooltip', {
                  props: {
                    content: '商品评论是否激活',
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
            }
        }
    }
</script>

<style>
</style>
