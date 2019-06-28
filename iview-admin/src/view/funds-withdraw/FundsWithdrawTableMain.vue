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
    import {check, confirm} from '@/api/withdraw.js'
    import * as ResponseStatus from '@/api/response-status'

    export default {
        name: 'FundsWithdrawTableMain',
        data() {
            return {
                urls: {
                    searchUrl: '/funds-withdraw/admin/pager-cond',
                    activeUrl: '/funds-withdraw/admin/active',
                    removeUrl: '/funds-withdraw/admin/remove/'
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
title: '提现编号',
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
title: '交易编号',
key: 'transactionNo',
minWidth: 120,
sortable: true,
},
{
title: '提现金额（元）',
key: 'amount',
minWidth: 120,
sortable: true,
},
{
title: '提现银行卡',
key: 'bankcardId',
minWidth: 120,
sortable: true,
},
{
title: '提现状态',
key: 'withdrawStatus',
minWidth: 120,
sortable: true,
},
{
title: '提现描述',
key: 'withdrawDescription',
minWidth: 120,
sortable: true,
},
{
title: '审核人编号',
key: 'checkedUserId',
minWidth: 120,
sortable: true,
},
{
title: '审核时间',
key: 'checkedTime',
minWidth: 120,
sortable: true,
},
{
title: '完成时间',
key: 'completeTime',
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
                    content: '提现版本号',
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
                    content: '提现创建时间',
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
                    content: '提现更新时间',
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
                    content: '提现是否激活',
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
                                return h('i-switch', {
                                    props: {
                                        size: 'large',
                                        value: params.row.isActive === 0
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        'on-change': (status) => {
                                            this.active(params.row)
                                        }
                                    }
                                }, [
                                    h('span', {
                                        slot: 'open'
                                    }, '激活'),
                                    h('span', {
                                        slot: 'close'
                                    }, '冻结')
                                ])
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
                                                            name: "showEdit"
                                                        }
                                                    },
                                                    "编辑"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "showDetail"
                                                        }
                                                    },
                                                    "详情"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "remove"
                                                        }
                                                    },
                                                    [
                                                        h(
                                                            "span",
                                                            {
                                                                style: {
                                                                    color: "red"
                                                                }
                                                            },
                                                            "删除"
                                                        )
                                                    ]
                                                ),
                                                h('DropdownItem', {
                                                    props:{
                                                    name: 'checkPass'
                                                    }
                                                }, '审核通过'),
                                                h('DropdownItem', {
                                                    props:{
                                                    name: 'checkNotPass'
                                                    }
                                                }, '审核不通过'),
                                                h('DropdownItem', {
                                                    props:{
                                                    name: 'withdrawSuccess'
                                                    }
                                                }, '提现成功'),
                                                h('DropdownItem', {
                                                    props:{
                                                    name: 'withdrawFail'
                                                    }
                                                }, '提现失败')
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
                if (itemName === "showEdit") {
                    this.$emit('showEditModal', JSON.parse(JSON.stringify(row)))
                } else if (itemName === "showDetail") {
                    this.$emit('showDetailModal', row)
                } else if (itemName === "remove") {
                    utils.remove(this, row);
                }  else if (itemName === 'checkPass') {
                    check(row.transactionNo, 1).then(response => {
                        if (response.data.code === ResponseStatus.OK) {
                            this.search()
                        } else {
                            this.$Message.error(response.data.message)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                } else if (itemName === 'checkNotPass') {
                    check(row.transactionNo, 2).then(response => {
                        if (response.data.code === ResponseStatus.OK) {
                            this.search()
                        } else {
                            this.$Message.error(response.data.message)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                } else if (itemName === 'withdrawSuccess') {
                    confirm(row.transactionNo, 4).then(response => {
                        if (response.data.code === ResponseStatus.OK) {
                            this.search()
                        } else {
                            this.$Message.error(response.data.message)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                } else if (itemName === 'withdrawFail') {
                    confirm(row.transactionNo, 5).then(response => {
                        if (response.data.code === ResponseStatus.OK) {
                            this.search()
                        } else {
                         this.$Message.error(response.data.message)
                        }
                    }).catch(error => {
                        console.log(error)
                    })
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
            }
        }
    }
</script>

<style>
</style>
