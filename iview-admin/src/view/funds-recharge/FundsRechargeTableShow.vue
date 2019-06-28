<template>
    <div>
        <Table ref="dataTable" highlight-row stripe :loading="table.loading" :columns="table.tableColumns" :data="table.tableRows"
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
        name: 'FundsRechargeTableShow',
        data() {
            return {
                urls: {
                    searchUrl: '/funds-recharge/admin/pager-cond'
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
title: '充值编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '交易编号',
key: 'transactionNo',
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
title: '充值金额（元）',
key: 'amount',
minWidth: 120,
sortable: true,
},
{
title: '充值类型',
key: 'rechargeType',
minWidth: 120,
sortable: true,
},
{
title: '是否成功',
key: 'isSuccess',
minWidth: 120,
sortable: true,
},
{
title: '商户订单号',
key: 'outTradeNo',
minWidth: 120,
sortable: true,
},
{
title: '支付系统订单号',
key: 'tradeNo',
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
                    content: '充值版本号',
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
                    content: '充值创建时间',
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
                    content: '充值更新时间',
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
                    content: '充值是否激活',
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
                            title: "操作",
                            key: "action",
                            width: 120,
                            align: "center",
                            fixed: "right",
                            render: (h, params) => {
                                return h(
                                    "Dropdown",
                                    {
                                        on: {
                                            "on-click": itemName => {
                                                this.userOpt(itemName, params.row);
                                            }
                                        },
                                        props: {
                                            transfer: true
                                        }
                                    },
                                    [
                                        h(
                                            "Button",
                                            {
                                                props: {
                                                    type: "primary",
                                                    size: "small"
                                                }
                                            },
                                            [
                                                "选择操作 ",
                                                h("Icon", {
                                                    props: {
                                                        type: "ios-arrow-down"
                                                    }
                                                })
                                            ]
                                        ),
                                        h(
                                            "DropdownMenu",
                                            {
                                                slot: "list"
                                            },
                                            [
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "showDetail"
                                                        }
                                                    },
                                                    "详情"
                                                )
                                            ]
                                        )
                                    ]
                                );
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
                if (itemName === "showDetail") {
                    this.$emit('showDetailModal', row)
                }
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
