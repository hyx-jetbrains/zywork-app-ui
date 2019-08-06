<template>
    <div>
        <Table ref="dataTable" highlight-row stripe :loading="table.loading" :columns="table.tableColumns" :data="table.tableRows"
               style="margin-top:20px;" @on-current-change="changeCurrent" @on-sort-change="changeSort"></Table>
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
        name: 'GoodsCommentTableSingle',
        data() {
            return {
                urls: {
                    searchUrl: '/goods-comment/admin/pager-cond'
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
                        width: 60,
                        align: 'center',
                        fixed: 'left',
                        render: (h, params) => {
                            return h('span', params.index + (this.pager.pageNo - 1) * this.pager.pageSize + 1)
                        }
                    },
                        {
title: '商品评论编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '用户编号',
key: 'userId',
minWidth: 120,
sortable: true,
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
sortable: true,
},
{
title: 'SKU编号',
key: 'goodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: 'SKU图片',
key: 'skuPicId',
minWidth: 120,
sortable: true,
},
{
title: '售卖标题',
key: 'skuTitle',
minWidth: 120,
sortable: true,
},
{
title: 'SKU规格信息',
key: 'skuInfo',
minWidth: 120,
sortable: true,
},
{
title: '购买数量',
key: 'quantity',
minWidth: 120,
sortable: true,
},
{
title: '价格',
key: 'price',
minWidth: 120,
sortable: true,
},
{
title: '评论等级',
key: 'commentLevel',
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
key: 'commentRate',
minWidth: 120,
sortable: true,
},
{
title: '评论详情',
key: 'comments',
minWidth: 120,
sortable: true,
},
{
title: '追加评论',
key: 'appendComment',
minWidth: 120,
sortable: true,
},
{
title: '回复详情',
key: 'reply',
minWidth: 120,
sortable: true,
},
{
title: '置顶状态',
key: 'stickStatus',
minWidth: 120,
sortable: true,
},
{
title: '版本号',
key: 'version',
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
key: 'createTime',
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
key: 'updateTime',
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
key: 'isActive',
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
                            title: '激活状态',
                            key: 'isActive',
                            minWidth: 100,
                            align: 'center',
                            render: (h, params) => {
                                return h('span', params.row.isActive === 0 ? '激活': '冻结')
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
            }
        }
    }
</script>

<style>
</style>
