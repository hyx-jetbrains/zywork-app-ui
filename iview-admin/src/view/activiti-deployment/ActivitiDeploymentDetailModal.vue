<template>
  <div>
    <Modal v-model="modal.detail" title="详情" width="760">
      <div class="detail-info">
        <Row>
          <i-col span="11">
            <span class="detail-title">流程编号：</span>
            <span v-text="form.id"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">流程Name：</span>
            <span v-text="form.name"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">流程Key：</span>
            <span v-text="form.key"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">部署时间：</span>
            <span v-text="form.deploymentTime"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">租户ID：</span>
            <span v-text="form.tenantId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11"></i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'ActivitiDeploymeDetail',
  data() {
    return {
      modal: {
        detail: false
      },
      form: {
        id: null,
        tenantId: null,
        name: null,
        key: null,
        deploymentTime: null
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style>
.detail-info .ivu-col {
  margin-bottom: 10px;
}

.detail-title {
  font-weight: bold;
}
</style>
