<template>
  <Card shadow style="height: 100%;width: 100%;overflow:hidden">
    <div class="department-outer">
      <div class="zoom-box">
        <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
      </div>
      <div class="view-box">
        <org-view
          v-if="data"
          :data="data"
          :zoom-handled="zoomHandled"
          @on-menu-click="handleMenuClick"
        ></org-view>
      </div>
    </div>
  </Card>
</template>

<script>
import OrgView from './components/org-view.vue'
import ZoomController from './components/zoom-controller.vue'
// import { getOrgData } from '@/api/data'
import './index.less'
const menuDic = {
  edit: '编辑部门',
  detail: '查看部门',
  new: '新增子部门',
  delete: '删除部门'
}
export default {
  name: 'org_tree_page',
  components: {
    OrgView,
    ZoomController
  },
  // props: {
  //   data: null
  // },
  data() {
    return {
      data: {"id":1,"label":"赣州智悦科技有限公司","children":[{"id":2,"label":"研发部","children":[{"id":4,"label":"研发一部","children":[]}]},{"id":3,"label":"市场部","children":[]}]},
      zoom: 80
    }
  },
  computed: {
    zoomHandled() {
      return this.zoom / 100
    }
  },
  methods: {
    setDepartmentData(data) {
      data.isRoot = true
      return data
    },
    handleMenuClick({ data, key }) {
      console.log(data, key)
      this.$Message.success({
        duration: 5,
        content: `点击了《${data.label}》节点的'${menuDic[key]}'菜单`
      })
    },
    getDepartmentData() {
      // getOrgData().then(res => {
      //   const { data } = res
      //   this.data = data
      // })
    }
  },
  mounted() {
    // this.getDepartmentData()
  }
}
</script>

<style>
</style>
