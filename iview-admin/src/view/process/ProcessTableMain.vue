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
    import * as process from '@/api/process'
    import * as ResponseStatus from '@/api/response-status'

    export default {
        name: 'ProcessTableMain',
        data() {
            return {
                urls: {
                    searchUrl: '/process/admin/pager-cond',
                    activeUrl: '/process/admin/active',
                    removeUrl: '/process/admin/remove/'
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
title: '流程编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '流程Name',
key: 'processName',
minWidth: 120,
sortable: true,
},
{
title: '流程Key',
key: 'processKey',
minWidth: 120,
sortable: true,
},
{
title: '流程文件路径',
key: 'filePath',
minWidth: 120,
sortable: true,
},
{
title: '流程描述',
key: 'description',
minWidth: 120,
sortable: true,
},
{
title: '是否部署',
key: 'isDeploy',
minWidth: 120,
sortable: true,
render: (h, params) => {
              const row = params.row
              const color = row.isDeploy === 1 ? 'success' : row.isDeploy === 0 ? 'default' : 'error'
              const text = row.isDeploy === 1 ? '已部署' : row.isDeploy === 0 ? '未部署': '未知'
              return h(
                'Tag',
                {
                  props: {
                      color: color
                  }
                },
                text
              )
            }
},
{
title: '部署时间',
key: 'deployTime',
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
                    content: '流程版本号',
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
                    content: '流程上传时间',
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
                    content: '流程更新时间',
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
                    content: '流程是否激活',
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
                                                h(
                                                    'DropdownItem',
                                                    {
                                                    props: {
                                                        name: 'showUploadModal'
                                                    }
                                                    },
                                                    '上传流程ZIP'
                                                ),
                                                h(
                                                    'DropdownItem',
                                                    {
                                                    props: {
                                                        name: 'deploy'
                                                    }
                                                    },
                                                    '部署流程'
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
                if (itemName === "showEdit") {
                    this.$emit('showEditModal', JSON.parse(JSON.stringify(row)))
                } else if (itemName === "showDetail") {
                    this.$emit('showDetailModal', row)
                } else if (itemName === "remove") {
                    utils.remove(this, row);
                } else if (itemName === 'showUploadModal') {
                    this.$emit('showUploadModal', row.id)
                } else if (itemName === 'deploy') {
                    this.deploy(row)
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
            },
            deploy(process) {
                if (process.isDeploy === 1) {
                    this.$Modal.confirm({
                    title: '确认部署吗？',
                    content: '此流程已经部署，是否再次部署？',
                    onOk: () => {
                        this.doDeploy(process)
                    },
                    onCancel: () => {}
                    })
                } else {
                    this.doDeploy(process)
                }
            },
            doDeploy(row) {
            this.$Notice.info({
                title: '流程部署',
                desc: '正在部署流程：' + row.processName
            })
            let self = this
            process.deploy(row).then(response => {
                if (response.data.code !== ResponseStatus.OK) {
                    this.$Notice.error({
                    title: '流程部署',
                    desc: response.data.message
                    })
                } else {
                    this.$Notice.success({
                    title: '流程部署',
                    desc: response.data.message
                    })
                    self.search(self)
                }
                }).catch(error => {
                    console.log(error)
                    self.$Message.error('流程部署失败，稍候再试')
                })
            },
        }
    }
</script>

<style>
</style>
