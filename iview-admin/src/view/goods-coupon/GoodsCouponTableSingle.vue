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
        name: 'GoodsCouponTableSingle',
        data() {
            return {
                urls: {
                    searchUrl: '/goods-coupon/admin/pager-cond'
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
title: '优惠券编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '商品类目编号',
key: 'categoryId',
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
title: '商品SKU编号',
key: 'goodsSkuId',
minWidth: 120,
sortable: true,
},
{
title: '优惠券标题',
key: 'title',
minWidth: 120,
sortable: true,
},
{
title: '最小消费金额（元）',
key: 'useMinAmount',
minWidth: 120,
sortable: true,
},
{
title: '满减优惠金额（元）',
key: 'discountAmount',
minWidth: 120,
sortable: true,
},
{
title: '满减折扣',
key: 'discountPercent',
minWidth: 120,
sortable: true,
},
{
title: '赠送积分',
key: 'integralAmount',
minWidth: 120,
sortable: true,
},
{
title: '优惠券总量',
key: 'totalCount',
minWidth: 120,
sortable: true,
},
{
title: '优惠券使用范围',
key: 'couponUsableRange',
minWidth: 120,
sortable: true,
render: (h, params) => {
  const row = params.row
  let color = row.couponUsableRange === 0 ? 'primary' : 
              row.couponUsableRange === 1 ? 'warning' : 
              row.couponUsableRange === 2 ? 'success' : 
              row.couponUsableRange === 3 ? 'magenta' :
              row.couponUsableRange === 4 ? 'lime' : 'error'
  let txt = row.couponUsableRange === 0 ? '平台优惠券' : 
              row.couponUsableRange === 1 ? '类目优惠券' : 
              row.couponUsableRange === 2 ? '店铺优惠券' : 
              row.couponUsableRange === 3 ? '商品优惠券' :
              row.couponUsableRange === 4 ? '单品优惠券' : '未知'
  return h('Tag', {
    props: {
      color: color
    }
  }, txt)
}
},
{
title: '优惠券类型',
key: 'couponType',
minWidth: 120,
sortable: true,
render: (h, params) => {
  const row = params.row
  let color = row.couponType === 0 ? 'primary' : row.couponType === 1 ? 'warning' : row.couponType === 2 ? 'success' : 'error'
  let txt = row.couponType === 0 ? '现金券' : row.couponType === 1 ? '折扣券' : row.couponType === 2 ? '积分券' : '未知'
  return h('Tag', {
    props: {
      color: color
    }
  }, txt)
}
},
{
title: '开始时间',
key: 'startTime',
minWidth: 120,
sortable: true,
},
{
title: '到期时间',
key: 'dueTime',
minWidth: 120,
sortable: true,
},
{
title: '有效时间',
key: 'validDays',
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
                    content: '优惠券版本号',
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
                    content: '优惠券创建时间',
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
                    content: '优惠券更新时间',
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
                    content: '优惠券是否激活',
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
            this.search()
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
