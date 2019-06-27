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
    import {
        modify,
        optJob
    } from '@/api/scheduler'
    import * as ResponseStatus from '@/api/response-status'

    export default {
        name: 'SchedulerTableMain',
        data() {
            return {
                urls: {
                    searchUrl: '/scheduler/admin/pager-cond',
                    activeUrl: '/scheduler/admin/active',
                    removeUrl: '/scheduler/admin/remove/',
                    startJobUrl: '/scheduler/admin/start',
                    removeJobUrl: '/scheduler/admin/del',
                    stopJobUrl: '/scheduler/admin/stop',
                    pauseJobUrl: '/scheduler/admin/pause',
                    resumeJobUrl: '/scheduler/admin/resume'
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
title: '作业编号',
key: 'id',
minWidth: 120,
sortable: true,
},
{
title: '作业名称',
key: 'name',
minWidth: 120,
sortable: true,
},
{
title: '完整类名',
key: 'className',
minWidth: 120,
sortable: true,
},
{
title: 'cron表达式',
key: 'cronExpression',
minWidth: 120,
sortable: true,
},
{
title: '作业组名称',
key: 'groupName',
minWidth: 120,
sortable: true,
},
{
title: '触发器名称',
key: 'triggerName',
minWidth: 120,
sortable: true,
},
{
title: '触发器组',
key: 'triggerGroup',
minWidth: 120,
sortable: true,
},
{
title: '作业描述',
key: 'description',
minWidth: 120,
sortable: true,
},
{
title: '作业状态',
key: 'jobStatus',
minWidth: 120,
sortable: true,
render: (h, params) => {
              const row = params.row
              let color;
              let text;
              if (row.jobStatus === 0) {
                  color = '#696c6f'
                  text = '未启动'
              } else if (row.jobStatus === 1) {
                  color = '#2af543'
                  text = '运行中'
              } else if (row.jobStatus === 2) {
                  color = '#f70404'
                  text = '已停止'
              } else if (row.jobStatus === 3) {
                  color = '#2d8cf0'
                  text = '已暂停'
              } else if (row.jobStatus === 4) {
                  color = '#750312'
                  text = '已移除'
              }
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
title: '状态更新时间',
key: 'jobStatusTime',
minWidth: 120,
sortable: true,
},
{
title: '自动启动',
key: 'autoStart',
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
                    content: '作业版本号',
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
                    content: '作业创建时间',
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
                    content: '作业更新时间',
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
                    content: '作业是否激活',
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
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "startJob",
                                                            disabled: (params.row.jobStatus === 0 
                                                            || params.row.jobStatus === 2
                                                            || params.row.jobStatus === 4) ? false : true
                                                        }
                                                    },
                                                    "启动任务"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "pauseJob",
                                                            disabled: params.row.jobStatus === 1 ? false : true
                                                        }
                                                    },
                                                    "暂停任务"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "resumeJob",
                                                            disabled: params.row.jobStatus === 3 ? false : true
                                                        }
                                                    },
                                                    "恢复任务"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "stopJob",
                                                            disabled: (params.row.jobStatus === 1
                                                            || params.row.jobStatus === 3) ? false : true
                                                        }
                                                    },
                                                    "停止任务"
                                                ),
                                                h(
                                                    "DropdownItem",
                                                    {
                                                        props: {
                                                            name: "removeJob",
                                                            disabled: params.row.jobStatus === 0 ? false : true
                                                        }
                                                    },
                                                    "移除任务"
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
                },
                cronForm: {
                    cronExp: null,
                    jobGroup: null,
                    jobId: null,
                    jobName: null,
                    triggerGroup: null,
                    triggerName: null,
                    jobClassName: null
                },
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
                } else if (itemName === "startJob") {
                    if (row.jobStatus === 0 || row.jobStatus === 2 || row.jobStatus === 4) {
                        this.initCronForm(row)
                        this.optOneJob(this.urls.startJobUrl)
                    }
                } else if (itemName === "pauseJob") {
                    if (row.jobStatus === 1) {
                        this.initCronForm(row)
                        this.optOneJob(this.urls.pauseJobUrl)
                    }
                } else if (itemName === "resumeJob") {
                    if (row.jobStatus === 3) {
                        this.initCronForm(row)
                        this.optOneJob(this.urls.resumeJobUrl)
                    }
                } else if (itemName === "stopJob") {
                    if (row.jobStatus === 1 || row.jobStatus === 3) {
                        this.initCronForm(row)
                        this.optOneJob(this.urls.stopJobUrl)
                    }
                } else if (itemName === "removeJob") {
                    if (row.jobStatus === 0) {
                        this.initCronForm(row)
                        this.optOneJob(this.urls.removeJobUrl)
                    }
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
            initCronForm(row) {
                this.cronForm.cronExp = row.cronExpression
                this.cronForm.jobGroup = row.groupName
                this.cronForm.jobId = row.id
                this.cronForm.jobName = row.name
                this.cronForm.triggerName = row.triggerName
                this.cronForm.triggerGroup = row.triggerGroup
                this.cronForm.jobClassName = row.className
            },
            optOneJob(url) {
                optJob(url, this.cronForm).then(res => {
                    const data = res.data
                    if (data.code !== ResponseStatus.OK) {
                        this.$Message.error(data.message)
                        return
                    }
                    this.$Message.success(data.message)
                    this.search()
                }).catch(err => {
                    this.$Message.error(err)
                })
            }
        }
    }
</script>

<style>
</style>
