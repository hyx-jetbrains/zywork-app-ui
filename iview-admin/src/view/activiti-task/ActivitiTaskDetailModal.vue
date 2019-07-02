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
            <span class="detail-title">任务拥有者：</span>
            <span v-text="form.owner"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">任务名称：</span>
            <span v-text="form.name"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">执行者：</span>
            <span v-text="form.assignee"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">原执行者：</span>
            <span v-text="form.originalAssignee"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">父级ID：</span>
            <span v-text="form.parentTaskId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">执行ID：</span>
            <span v-text="form.executionId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">流程实例ID：</span>
            <span v-text="form.processInstanceId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">任务定义Key：</span>
            <span v-text="form.taskDefinitionKey"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">formKey：</span>
            <span v-text="form.formKey"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">任务ID：</span>
            <span v-text="form.tenantId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">说明：</span>
            <span v-text="form.description"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">优先级：</span>
            <span v-text="form.priority"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">创建时间：</span>
            <span v-text="form.createTime"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">结束日期：</span>
            <span v-text="form.dueDate"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">修订版本：</span>
            <span v-text="form.revision"></span>
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
        owner: null,
        name: null,
        assignee: null,
        originalAssignee: null,
        parentTaskId: null,
        executionId: null,
        processInstanceId: null,
        taskDefinitionKey: null,
        formKey: null,
        tenantId: null,
        description: null,
        priority: null,
        createTime: null,
        dueDate: null,
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
