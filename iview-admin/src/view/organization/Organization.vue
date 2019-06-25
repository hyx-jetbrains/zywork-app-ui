<template>
  <div>
      <Tabs value="orgTree" @on-click="refresh">
        <TabPane label="结构树" name="orgTree">
          <organization-org-view ref="organizationOrgView"/>
        </TabPane>
        <TabPane label="列表" name="listTable">
          <organization-main ref="organizationMain"/>
        </TabPane>
      </Tabs>
  </div>
</template>

<script>
import OrganizationOrgView from './OrganizationOrgView.vue'
import OrganizationMain from './OrganizationMain.vue'

export default {
  name: 'Organization',
  components: {
    OrganizationOrgView,
    OrganizationMain
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    refresh(tabName) {
      if (tabName === 'orgTree') {
        this.$refs.organizationOrgView.getDepartmentData()
      } else if (tabName === 'listTable') {
        this.$refs.organizationMain.searchTable()
      }
    }
  }
}
</script>

<style>
</style>
