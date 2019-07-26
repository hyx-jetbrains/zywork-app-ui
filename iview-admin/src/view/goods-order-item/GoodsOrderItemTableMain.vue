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
        name: 'GoodsOrderItemTableMain',
        data() {
            return {
                urls: {
                    searchUrl: '/goods-order-item/admin/pager-cond',
                    activeUrl: '/goods-order-item/admin/active',
                    removeUrl: '/goods-order-item/admin/remove/'
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
title: '订单项编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '订单编号',
key: 'orderId',
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
title: 'SKU图片编号',
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
title: '实付金额（元）',
key: 'payAmount',
minWidth: 120,
sortable: true,
},
{
title: '优惠金额（元）',
key: 'discountAmount',
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
title: '版本号',
key: 'version',
minWidth: 120,
sortable: true,
renderHeader: (h, params) => {
              return h('span', [
                h('span', '版本号'),
                h('Tooltip', {
                  props: {
                    content: '订单项版本号',
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
                    content: '订单项创建时间',
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
                    content: '订单项更新时间',
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
                    content: '订单项是否激活',
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
