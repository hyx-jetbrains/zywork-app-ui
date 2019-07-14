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
        name: 'GoodsInfoSkuPicTable',
        data() {
            return {
                urls: {
                    searchUrl: '/goods-info-sku-pic/admin/pager-cond'
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
title: '商品编号',
key: 'goodsInfoId',
minWidth: 120,
sortable: true,
},
{
title: '店铺编号',
key: 'goodsInfoShopId',
minWidth: 120,
sortable: true,
},
{
title: '类目编号',
key: 'goodsInfoCategoryId',
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
title: '图文详情',
key: 'goodsInfoIntro',
minWidth: 120,
sortable: true,
},
{
title: '上架状态',
key: 'goodsInfoShelfStatus',
minWidth: 120,
sortable: true,
},
{
title: '销量',
key: 'goodsInfoSaleCount',
minWidth: 120,
sortable: true,
},
{
title: '点击数',
key: 'goodsInfoClickCount',
minWidth: 120,
sortable: true,
},
{
title: '创建时间',
key: 'goodsInfoCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: '商品创建时间',
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
title: '上架状态',
key: 'goodsSkuShelfStatus',
minWidth: 120,
sortable: true,
},
{
title: '创建时间',
key: 'goodsSkuCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: 'SKU创建时间',
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
title: '图片顺序',
key: 'goodsPicPicOrder',
minWidth: 120,
sortable: true,
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