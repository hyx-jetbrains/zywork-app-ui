<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
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
          <ActivitiDefinitionTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
            v-on:showImg="showImg"
          />
        </Card>
      </i-col>
    </Row>
    <ActivitiDefinitionDetailModal ref="detailModal" />
    <ActivitiDefinitionSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <Modal v-model="modal.process" title="选择流程" width="860">
      <ProcessMainSingle ref="processChose" @selectProcess="selectProcess" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal">取消</Button>
      </div>
    </Modal>
    <Modal v-model="modal.img" title="流程图" width="1200">
      <Row style="text-align: center;">
        <img :src="imgUrl" />
      </Row>
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
import ActivitiDefinitionTableMain from './ActivitiDefinitionTableMain.vue'
import ActivitiDefinitionDetailModal from './ActivitiDefinitionDetailModal.vue'
import ActivitiDefinitionSearchModal from './ActivitiDefinitionSearchModal.vue'
import ProcessMainSingle from '@/view/process/ProcessMainSingle.vue'
export default {
  name: 'ActivitiDefinitionMain',
  components: {
    ActivitiDefinitionTableMain,
    ActivitiDefinitionDetailModal,
    ActivitiDefinitionSearchModal,
    ProcessMainSingle
  },
  data() {
    return {
      imgUrl: '',
      urls: {
        showActivitiImgUrl: '/process-activiti/admin/query/bpmn-png'
      },
      processName: '',
      modal: {
        process: false,
        img: false
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
    // 显示流程图
    showImg(row) {
      const params = {
        processKey: row.key,
        version: row.version
      }
      process.showActivitiImg(this, params)
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
      if (this.modal.img) {
        this.modal.img = false
      }
    },
    // 选择流程
    showChoseProcess() {
      this.modal.process = true
    },
    // 确定选择的流程
    selectProcess(processRow) {
      this.processName = processRow.processName
      process
        .searchTableData(this)
        .then(res => {
          if (res.data.code === ResponseStatus.OK) {
            this.modal.process = false
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
    }
  }
}
</script>

<style>
</style>
