<template>
  <div>
    <Modal v-model="modal.search" title="高级搜索" width="860">
      <Form ref="searchForm" :model="searchForm" :label-width="80">
        <FormItem prop="idMin">
          <Input v-model="searchForm.processName" placeholder="输入流程名称搜索" style="width: 100%;"/>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetForm">清空</Button>
        <Button type="text" size="large" @click="cancelModal">取消</Button>
        <Button type="primary" size="large" @click="searchOkModal" :loading="loading.search">查询</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'ActivitiDeploymentSearch',
  data() {
    return {
      modal: {
        search: false
      },
      loading: {
        search: false
      },
      urls: {
        searchUrl: '/process-activiti/admin/query/all-deployment'
      },
      searchForm: {
        pageNo: 1,
        pageSize: 10,
        sortColumn: null,
        sortOrder: null,
        processName: '',
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    resetForm() {
      this.$refs.searchForm.resetFields()
    },
    cancelModal(modal) {
      this.modal.search = false
    },
    searchOkModal(modal) {
      if (!this.processName) {
        this.searchForm.processName = this.processName
      }
      this.modal.search = false
      this.$emit('searchTable')
    }
  }
}
</script>

<style>
</style>
