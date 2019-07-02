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
        searchUrl: '/process-activiti/admin/query/all-tasks'
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
            title: '任务编号',
            key: 'id',
            minWidth: 120
          },
          {
            title: '任务拥有者',
            key: 'owner',
            minWidth: 120
          },
          {
            title: '任务名称',
            key: 'name',
            minWidth: 120
          },
          {
            title: '任务执行者',
            key: 'assignee',
            minWidth: 120
          },
          {
            title: '原任务执行者',
            key: 'originalAssignee',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '原任务执行者'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '原任务执行者',
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
            title: '父级任务ID',
            key: 'parentTaskId',
            minWidth: 120
          },
          {
            title: '执行者ID',
            key: 'executionId',
            minWidth: 120
          },
          {
            title: '流程实例ID',
            key: 'processInstanceId',
            minWidth: 120
          },
          {
            title: '任务定义Key',
            key: 'taskDefinitionKey',
            minWidth: 120
          },
          {
            title: 'formKey',
            key: 'formKey',
            minWidth: 120
          },
          {
            title: '说明',
            key: 'description',
            minWidth: 120,
            renderHeader: (h, params) => {
              return h('span', [
                h('span', '说明'),
                h(
                  'Tooltip',
                  {
                    props: {
                      content: '流程说明',
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
            title: '优先级',
            key: 'priority',
            minWidth: 120
          },
          {
            title: '创建时间',
            key: 'createTime',
            minWidth: 120
          },
          {
            title: '结束日期',
            key: 'dueDate',
            minWidth: 120
          },
          {
            title: '修订版本',
            key: 'revision',
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
                      ),
                      h(
                        'DropdownItem',
                        {
                          props: {
                            name: 'showImg'
                          }
                        },
                        '显示动态图'
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
      } else if (itemName === 'showImg') {
        // 显示动态流程图
        this.$emit('showImg', row)
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
