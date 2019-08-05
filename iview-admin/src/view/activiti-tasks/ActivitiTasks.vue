<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <ButtonGroup>
            <Button :type="assigneeTasksBtn" @click="initBtn(0)">指派人任务</Button>
            <Button :type="candidateTasksBtn" @click="initBtn(1)">候选人任务</Button>
            <Button :type="groupTasksBtn" @click="initBtn(2)">候选组任务</Button>
          </ButtonGroup>
          &nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <ActivitiTaskTableMain ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
          />
        </Card>
      </i-col>
    </Row>
    <ActivitiTaskDetailModal ref="detailModal"/>
    <ActivitiTaskSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as process from '@/api/process'
import * as ResponseStatus from '@/api/response-status'
import ActivitiTaskTableMain from '../activiti-task/ActivitiTaskTableMain.vue'
import ActivitiTaskDetailModal from '../activiti-task/ActivitiTaskDetailModal.vue'
import ActivitiTaskSearchModal from '../activiti-task/ActivitiTaskSearchModal.vue'

export default {
  name: 'ActivitiInstance',
  components: {
    ActivitiTaskTableMain,
    ActivitiTaskDetailModal,
    ActivitiTaskSearchModal
  },
  data() {
    return {
      type: this.$route.params.type,
      assigneeTasksBtn: 'default',
      candidateTasksBtn: 'default',
      groupTasksBtn: 'default',
    }
  },
  computed: {},
  mounted() {
    if (this.type !== undefined) {
      this.initBtn(this.type)
    } else {
      this.$Message.error("参数错误")
      this.$router.push({
        name: this.$config.homeName
      })
    }
  },
  methods: {
    /**
     * 显示详情的modal
     */
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    },
    searchTable() {
      // utils.search(this)
      process.searchTableData(this)
    },
    // 初始化按钮
    initBtn(type) {
      let searchUrl = ''
      if (type === 0) {
        // 指派人任务
        searchUrl = '/process-activiti/admin/query/assignee-tasks'
        this.assigneeTasksBtn = 'primary'
        this.candidateTasksBtn = 'default'
        this.groupTasksBtn = 'default'
      } else if (type === 1) {
        // 候选人任务
        searchUrl = '/process-activiti/admin/query/candidate-tasks'
        this.assigneeTasksBtn = 'default'
        this.candidateTasksBtn = 'primary'
        this.groupTasksBtn = 'default'
      } else if (type === 2) {
        // 候选组任务
        searchUrl = '/process-activiti/admin/query/group-tasks'
        this.assigneeTasksBtn = 'default'
        this.candidateTasksBtn = 'default'
        this.groupTasksBtn = 'primary'
      }
      let table = this.$refs.table
      table.urls.searchUrl = searchUrl
      process.searchTableData(this)
    },
    
  }
}
</script>

<style>
</style>
