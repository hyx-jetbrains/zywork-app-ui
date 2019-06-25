<template>
  <div>
      <Tabs value="orgTree">
        <TabPane label="结构树" name="orgTree">
          <organization-org-view/>
        </TabPane>
        <TabPane label="列表" name="listTable">
          <organization-main style="z-index: 100"/>
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
  methods: {}
}
</script>

<style>
</style>
