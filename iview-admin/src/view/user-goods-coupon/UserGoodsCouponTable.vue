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
        name: 'UserGoodsCouponTable',
        data() {
            return {
                urls: {
                    searchUrl: '/user-goods-coupon/admin/pager-cond'
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
title: '性别',
key: 'userDetailGender',
minWidth: 120,
sortable: true,
},
{
title: '优惠券编号',
key: 'goodsCouponId',
minWidth: 120,
sortable: true,
},
{
title: '商品类目编号',
key: 'goodsCouponCategoryId',
minWidth: 120,
sortable: true,
},
{
title: '店铺编号',
key: 'goodsCouponShopId',
minWidth: 120,
sortable: true,
},
{
title: '商品编号',
key: 'goodsCouponGoodsId',
minWidth: 120,
sortable: true,
},
{
title: '商品SKU编号',
key: 'goodsCouponGoodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: '优惠券标题',
key: 'goodsCouponTitle',
minWidth: 120,
sortable: true,
},
{
title: '最小消费金额（元）',
key: 'goodsCouponUseMinAmount',
minWidth: 120,
sortable: true,
},
{
title: '满减优惠金额（元）',
key: 'goodsCouponDiscountAmount',
minWidth: 120,
sortable: true,
},
{
title: '满减折扣',
key: 'goodsCouponDiscountPercent',
minWidth: 120,
sortable: true,
},
{
title: '赠送积分',
key: 'goodsCouponIntegralAmount',
minWidth: 120,
sortable: true,
},
{
title: '优惠券总量',
key: 'goodsCouponTotalCount',
minWidth: 120,
sortable: true,
},
{
title: '优惠券使用范围',
key: 'goodsCouponCouponUsableRange',
minWidth: 120,
sortable: true,
},
{
title: '优惠券类型',
key: 'goodsCouponCouponType',
minWidth: 120,
sortable: true,
},
{
title: '开始时间',
key: 'goodsCouponStartTime',
minWidth: 120,
sortable: true,
},
{
title: '到期时间',
key: 'goodsCouponDueTime',
minWidth: 120,
sortable: true,
},
{
title: '有效时间',
key: 'goodsCouponValidDays',
minWidth: 120,
sortable: true,
},
{
title: '领券编号',
key: 'goodsUserCouponId',
minWidth: 120,
sortable: true,
},
{
title: '优惠券状态',
key: 'goodsUserCouponCouponStatus',
minWidth: 120,
sortable: true,
},
{
title: '版本号',
key: 'goodsUserCouponVersion',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '版本号'),
                h('Tooltip', {
                  props: {
                    content: '领券版本号',
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
key: 'goodsUserCouponCreateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '创建时间'),
                h('Tooltip', {
                  props: {
                    content: '领券创建时间',
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
key: 'goodsUserCouponUpdateTime',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '更新时间'),
                h('Tooltip', {
                  props: {
                    content: '领券更新时间',
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
key: 'goodsUserCouponIsActive',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '是否激活'),
                h('Tooltip', {
                  props: {
                    content: '领券是否激活',
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
