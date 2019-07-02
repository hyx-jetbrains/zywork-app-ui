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
            <span class="detail-title">流程实例ID：</span>
            <span v-text="form.processInstanceId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">根流程实例ID：</span>
            <span v-text="form.rootProcessInstanceId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">开始用户ID：</span>
            <span v-text="form.startUserId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">开始时间：</span>
            <span v-text="form.startTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">流程定义ID：</span>
            <span v-text="form.processDefinitionId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">流程定义Key：</span>
            <span v-text="form.processDefinitionKey"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">流程定义Name：</span>
            <span v-text="form.processDefinitionName"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">流程定义版本：</span>
            <span v-text="form.processDefinitionVersion"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">部署ID：</span>
            <span v-text="form.deploymentId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">流程ID：</span>
            <span v-text="form.activityId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">流程Name：</span>
            <span v-text="form.activityName"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">修订版本：</span>
            <span v-text="form.revision"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">租户ID：</span>
            <span v-text="form.tenantId"></span>
          </i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'ActivitiDefinitionDetail',
  data() {
    return {
      modal: {
        detail: false
      },
      form: {
        id: null,
        processInstanceId: null,
        rootProcessInstanceId: null,
        tenantId: null,
        startUserId: null,
        startTime: null,
        processDefinitionId: null,
        processDefinitionKey: null,
        processDefinitionName: null,
        processDefinitionVersion: null,
        deploymentId: null,
        activityId: null,
        activityName: null,
        revision: null
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
