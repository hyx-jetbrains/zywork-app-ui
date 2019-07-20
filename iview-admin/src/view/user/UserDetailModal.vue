<template>
  <div>
    <Modal v-model="modal.detail" title="详情" width="760">
      <div class="detail-info">
        <Row>
          <i-col span="11">
            <span class="detail-title">用户编号：</span>
            <span v-text="form.id"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">手机号：</span>
            <span v-text="form.phone"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">用户邮箱：</span>
            <span v-text="form.email"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">是否激活：</span>
            <span v-text="form.isActive"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">加密盐值：</span>
            <span v-text="form.salt"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">版本号：</span>
            <span v-text="form.version"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">创建时间：</span>
            <span v-text="form.createTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">更新时间：</span>
            <span v-text="form.updateTime"></span>
          </i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  data() {
    return {
      modal: {
        detail: false
      },
      form: {
        id: null,
        phone: null,
        email: null,
        password: null,
        salt: null,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
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
