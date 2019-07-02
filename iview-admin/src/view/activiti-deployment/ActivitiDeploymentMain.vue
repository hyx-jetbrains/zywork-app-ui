<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="removeAll" type="error">删除所有版本部署</Button>&nbsp;
          <Button @click="showChoseProcess" type="primary">选择流程</Button>&nbsp;
          <Input
            v-model="processName"
            style="width: 200px"
            placeholder="输入流程名称搜索，按回车搜索"
            @on-enter="searchTable"
          />&nbsp;
          <Button @click="searchTable" type="primary">搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <ActivitiDeploymentTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
            v-on:removeOld="removeOld"
          />
        </Card>
      </i-col>
    </Row>
    <ActivitiDeploymentDetailModal ref="detailModal"/>
    <ActivitiDeploymentSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
    <Modal v-model="modal.process" title="选择流程" width="860">
      <ProcessMainSingle ref="processChose" @selectProcess="selectProcess" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as process from '@/api/process'
import * as ResponseStatus from '@/api/response-status'
import ActivitiDeploymentTableMain from './ActivitiDeploymentTableMain.vue'
import ActivitiDeploymentDetailModal from './ActivitiDeploymentDetailModal.vue'
import ActivitiDeploymentSearchModal from './ActivitiDeploymentSearchModal.vue'
import ProcessMainSingle from '@/view/process/ProcessMainSingle.vue'
export default {
  name: 'ActivitiDeploymentMain',
  components: {
    ActivitiDeploymentTableMain,
    ActivitiDeploymentDetailModal,
    ActivitiDeploymentSearchModal,
    ProcessMainSingle
  },
  data() {
    return {
      urls: {
        removeOldUrl: '/process-activiti/admin/do/remove-old-deployment',
        removeAllUrl: '/process-activiti/admin/do/remove-all-deployment'
      },
      processName: '',
      modal: {
        process: false
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    searchTable() {
      // utils.search(this)
      this.$refs.searchModal.searchForm.processName = this.processName
      process.searchTableData(this)
    },
    // 删除指定的单个流程
    removeOld(row) {
      process.removeOld(this, row)
    },
    // 删除指定流程所有的流程部署
    removeAll() {
      if (this.$refs.table.table.selections.length !== 1) {
        this.$Message.error('请选择一条记录')
        return
      }
      const row = this.$refs.table.table.selections[0]
      process.removeAll(this, row)
    },
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    },
    cancelModal() {
      this.modal.process = false
    },
    // 选择流程
    showChoseProcess() {
      this.modal.process = true
    },
    // 确定选择的流程
    selectProcess(processRow) {
      this.processName = processRow.processName
      this.searchTable()
      this.modal.process = false
      
    }
  }
}
</script>

<style>
</style>
