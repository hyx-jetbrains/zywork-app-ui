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
        name: 'UserGoodsOrderItemTable',
        data() {
            return {
                urls: {
                    searchUrl: '/user-goods-order-item/admin/pager-cond'
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
title: '订单编号',
key: 'goodsOrderId',
minWidth: 120,
sortable: true,
},
{
title: '订单号',
key: 'goodsOrderOrderNo',
minWidth: 120,
sortable: true,
},
{
title: '订单金额（元）',
key: 'goodsOrderTotalAmount',
minWidth: 120,
sortable: true,
},
{
title: '实付金额（元）',
key: 'goodsOrderPayAmount',
minWidth: 120,
sortable: true,
},
{
title: '优惠金额（元）',
key: 'goodsOrderDiscountAmount',
minWidth: 120,
sortable: true,
},
{
title: '赠送积分',
key: 'goodsOrderIntegralAmount',
minWidth: 120,
sortable: true,
},
{
title: '运费（元）',
key: 'goodsOrderExpressFee',
minWidth: 120,
sortable: true,
},
{
title: '订单状态',
key: 'goodsOrderOrderStatus',
minWidth: 120,
sortable: true,
},
{
title: '支付时间',
key: 'goodsOrderPayTime',
minWidth: 120,
sortable: true,
},
{
title: '支付方式',
key: 'goodsOrderPayType',
minWidth: 120,
sortable: true,
},
{
title: '支付订单号',
key: 'goodsOrderTransactionNo',
minWidth: 120,
sortable: true,
},
{
title: '是否支付成功',
key: 'goodsOrderPaySuccess',
minWidth: 120,
sortable: true,
},
{
title: '发货时间',
key: 'goodsOrderDeliverTime',
minWidth: 120,
sortable: true,
},
{
title: '成交时间',
key: 'goodsOrderDealTime',
minWidth: 120,
sortable: true,
},
{
title: '订单备注',
key: 'goodsOrderRemark',
minWidth: 120,
sortable: true,
},
{
title: '创建时间',
key: 'goodsOrderCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: '订单创建时间',
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
key: 'goodsOrderIsActive',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否激活'),
                h('Tooltip', {
                  props: {
                    content: '订单是否激活',
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
title: '商品编号',
key: 'goodsOrderItemGoodsId',
minWidth: 120,
sortable: true,
},
{
title: 'SKU编号',
key: 'goodsOrderItemGoodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: 'SKU图片编号',
key: 'goodsOrderItemSkuPicId',
minWidth: 120,
sortable: true,
},
{
title: '售卖标题',
key: 'goodsOrderItemSkuTitle',
minWidth: 120,
sortable: true,
},
{
title: 'SKU规格信息',
key: 'goodsOrderItemSkuInfo',
minWidth: 120,
sortable: true,
},
{
title: '购买数量',
key: 'goodsOrderItemQuantity',
minWidth: 120,
sortable: true,
},
{
title: '实付金额（元）',
key: 'goodsOrderItemPayAmount',
minWidth: 120,
sortable: true,
},
{
title: '优惠金额（元）',
key: 'goodsOrderItemDiscountAmount',
minWidth: 120,
sortable: true,
},
{
title: '赠送积分',
key: 'goodsOrderItemIntegralAmount',
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
