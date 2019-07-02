<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="showChoseProcess" type="primary">选择流程</Button>&nbsp;
          <Input
            v-model="processKey"
            style="width: 200px"
            placeholder="输入流程key搜索，按回车搜索"
            @on-enter="searchTable"
          />&nbsp;
          <Button @click="searchTable" type="primary">搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <ActivitiHisInstanceTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
          />
        </Card>
      </i-col>
    </Row>
    <ActivitiHisInstanceDetailModal ref="detailModal"/>
    <ActivitiHisInstanceSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
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
import ActivitiHisInstanceTableMain from './ActivitiHisInstanceTableMain.vue'
import ActivitiHisInstanceDetailModal from './ActivitiHisInstanceDetailModal.vue'
import ActivitiHisInstanceSearchModal from './ActivitiHisInstanceSearchModal.vue'
import ProcessMainSingle from '@/view/process/ProcessMainSingle.vue'
export default {
  name: 'ActivitiHisInstanceMain',
  components: {
    ActivitiHisInstanceTableMain,
    ActivitiHisInstanceDetailModal,
    ActivitiHisInstanceSearchModal,
    ProcessMainSingle
  },
  data() {
    return {
      urls: {
      },
      processKey: '',
      modal: {
        process: false
      }
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    searchTable() {
      // utils.search(this)
      this.$refs.searchModal.searchForm.processKey = this.processKey
      process.searchTableData(this)
    },
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    },
    cancelModal() {
      if (this.modal.process) {
        this.modal.process = false
      }
    },
    // 选择流程
    showChoseProcess() {
      this.modal.process = true
    },
    // 确定选择的流程
    selectProcess(processRow) {
      this.processKey = processRow.processKey
      this.searchTable()
      this.modal.process = false
      
    }
  }
}
</script>

<style>
</style>
