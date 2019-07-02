<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <ActivitiTaskTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
            v-on:showImg="showImg"
          />
        </Card>
      </i-col>
    </Row>
    <ActivitiTaskDetailModal ref="detailModal"/>
    <ActivitiTaskSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
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
import ActivitiTaskTableMain from './ActivitiTaskTableMain.vue'
import ActivitiTaskDetailModal from './ActivitiTaskDetailModal.vue'
import ActivitiTaskSearchModal from './ActivitiTaskSearchModal.vue'
export default {
  name: 'ActivitiTaskMain',
  components: {
    ActivitiTaskTableMain,
    ActivitiTaskDetailModal,
    ActivitiTaskSearchModal
  },
  data() {
    return {
      imgUrl: '',
      urls: {
        showActivitiImgUrl: '/process-activiti/user/query/bpmn-activity-png'
      },
      modal: {
        img: false
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
    // 显示流程图
    showImg(row) {
      const params = {
          processKey: row.key,
          version: row.version
        }
        process.showActivitiImg(this, params)
    },
    cancelModal() {
      if (this.modal.img) {
        this.modal.img = false
      }
    },
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    }
  }
}
</script>

<style>
</style>
