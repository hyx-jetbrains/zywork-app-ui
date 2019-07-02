<template>
  <div>
    <Table
      ref="dataTable"
      stripe
      :loading="table.loading"
      :columns="table.tableColumns"
      :data="table.tableRows"
      style="margin-top:20px;"
      @on-selection-change="changeSelection"
      @on-sort-change="changeSort"
    ></Table>
    <div style="margin: 20px; overflow: hidden">
      <div style="float: right;">
        <Page
          :total="pager.total"
          :current="pager.pageNo"
          @on-change="changePageNo"
          @on-page-size-change="changePageSize"
          showSizer
          showTotal
        ></Page>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'

export default {
  name: 'ActivitiDefinitionTableMain',
  data() {
    return {
      urls: {
        searchUrl: '/process-activiti/admin/query/all-his-process-instance'
      },
      pager: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      searchOpts: {
        sortColumn: null,
        sortOrder: null
      },
      table: {
        loading: false,
        tableColumns: [
          {
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
              return h(
                'span',
                params.index +
                  (this.searchForm.pageNo - 1) * this.searchForm.pageSize +
                  1
              )
            }
          },
          {
            title: '流程编号',
            key: 'id',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '流程编号'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '流程的编号',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '流程实例ID',
            key: 'processInstanceId',
            minWidth: 120
          },
          {
            title: '流程定义ID',
            key: 'processDefinitionId',
            minWidth: 120
          },
          {
            title: '开始时间',
            key: 'startTime',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '开始时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '流程的开始时间',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '结束时间',
            key: 'endTime',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '结束时间'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '流程的结束时间',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '持续时间（毫秒）',
            key: 'durationInMillis',
            minWidth: 120
          },
          {
            title: '死亡原因',
            key: 'deleteReason',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '死亡原因'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '流程的死亡原因',
                      placement: 'top',
                      transfer: true,
                      maxWidth: 500
                    }
                  },
                  [
                    h('Icon', {
                      props: {
                        type: 'ios-help-circle'
                      },
                      style: {
                        marginLeft: '3px'
                      }
                    })
                  ]
                )
              ])
            }
          },
          {
            title: '开始活动ID',
            key: 'startActivityId',
            minWidth: 120
          },
          {
            title: '结束活动ID',
            key: 'endActivityId',
            minWidth: 120
          },
          {
            title: '商务钥匙',
            key: 'businessKey',
            minWidth: 120
          },
          {
            title: '开始用户ID',
            key: 'startUserId',
            minWidth: 120
          },
          {
            title: '顶级流程实例ID',
            key: 'superProcessInstanceId',
            minWidth: 120
          },
          {
            title: '名称',
            key: 'name',
            minWidth: 120
          },
          {
            title: '本地名称',
            key: 'localizedName',
            minWidth: 120
          },
          {
            title: '说明',
            key: 'description',
            minWidth: 120
          },
          {
            title: '本地说明',
            key: 'localizedDescription',
            minWidth: 120
          },
          {
            title: '流程定义Key',
            key: 'processDefinitionKey',
            minWidth: 120
          },
          {
            title: '流程定义Name',
            key: 'processDefinitionName',
            minWidth: 120
          },
          {
            title: '流程定义版本',
            key: 'processDefinitionVersion',
            minWidth: 120
          },
          {
            title: '部署ID',
            key: 'deploymentId',
            minWidth: 120
          },
          {
            title: '租户ID',
            key: 'tenantId',
            minWidth: 120
          },
          {
            title: '操作',
            key: 'action',
            width: 120,
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              return h(
                'Dropdown',
                {
                  on: {
                    'on-click': itemName => {
                      this.userOpt(itemName, params.row)
                    }
                  },
                  props: {
                    transfer: true
                  }
                },
                [
                  h(
                    'Button',
                    {
                      props: {
                        type: 'primary',
                        size: 'small'
                      }
                    },
                    [
                      '选择操作 ',
                      h('Icon', {
                        props: {
                          type: 'ios-arrow-down'
                        }
                      })
                    ]
                  ),
                  h(
                    'DropdownMenu',
                    {
                      slot: 'list'
                    },
                    [
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showDetail'
                          }
                        },
                        '详情'
                      )
                    ]
                  )
                ]
              )
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
      if (itemName === 'showDetail') {
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
