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
            <span class="detail-title">流程定义ID：</span>
            <span v-text="form.processDefinitionId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">开始时间：</span>
            <span v-text="form.startTime"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">结束时间：</span>
            <span v-text="form.endTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">持续时间（毫秒）：</span>
            <span v-text="form.durationInMillis"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">死亡原因：</span>
            <span v-text="form.deleteReason"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">开始活动ID：</span>
            <span v-text="form.startActivityId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">结束活动ID：</span>
            <span v-text="form.endActivityId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">开始用户ID：</span>
            <span v-text="form.startUserId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">商务钥匙：</span>
            <span v-text="form.businessKey"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">顶级流程实例ID：</span>
            <span v-text="form.superProcessInstanceId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">名称：</span>
            <span v-text="form.name"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">本地名称：</span>
            <span v-text="form.localizedName"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">说明：</span>
            <span v-text="form.description"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">本地说明：</span>
            <span v-text="form.localizedDescription"></span>
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
            <span class="detail-title">租户ID：</span>
            <span v-text="form.tenantId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title"></span>
            <span></span>
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
        processDefinitionId: null,
        startTime: null,
        endTime: null,
        durationInMillis: null,
        deleteReason: null,
        endActivityId: null,
        businessKey: null,
        startUserId: null,
        startActivityId: null,
        superProcessInstanceId: null,
        tenantId: null,
        name: null,
        localizedName: null,
        description: null,
        localizedDescription: null,
        processDefinitionKey: null,
        processDefinitionName: null,
        processDefinitionVersion: null,
        deploymentId: null
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
