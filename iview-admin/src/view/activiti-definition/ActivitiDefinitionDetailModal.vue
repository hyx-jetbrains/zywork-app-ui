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
            <span class="detail-title">版本号：</span>
            <span v-text="form.version"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">部署ID：</span>
            <span v-text="form.deploymentId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">说明：</span>
            <span v-text="form.description"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">资源名称：</span>
            <span v-text="form.resourceName"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">图片资源名称：</span>
            <span v-text="form.diagramResourceName"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">类别：</span>
            <span v-text="form.category"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">是否有开始表单：</span>
            <span v-text="form.hasStartFormKey"></span>
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
        tenantId: null,
        name: null,
        key: null,
        deploymentTime: null,
        deploymentId: null,
        version: null,
        description: null,
        resourceName: null,
        diagramResourceName: null,
        category: null,
        hasStartFormKey: null,
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
