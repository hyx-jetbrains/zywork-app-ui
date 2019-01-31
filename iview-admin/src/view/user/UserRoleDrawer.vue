<template>
  <div>
    <Drawer title="分配角色权限" v-model="userRoleDrawerFlag" width="900" @on-close="closeDrawer">
      <role-list ref="roleList"/>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="closeDrawer">取消</Button>
        <Button type="primary" @click="updateRole">分配角色</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import roleList from '@/view/role/RoleList.vue'
import { getUserRoleByUserId } from '@/api/id'
export default {
  name: 'UserRoleDrawer',
  components: {
    roleList
  },
  data() {
    return {
      userRoleDrawerFlag: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    initData(id) {
      getUserRoleByUserId(id)
        .then(res => {
          const data = res.data
          if (data.code !== 1001) {
            this.$Message.error(data.message)
            return
          }
          this.userRoleDrawerFlag = true
          this.$refs.roleList.initTableData(data.data.rows)
        })
        .catch(err => {
          this.$Message.error(err)
        })
    },
    closeDrawer() {
      // 关闭抽屉清空选择项
      this.userRoleDrawerFlag = false
      this.$refs.roleList.cancelSelect()
    },
    updateRole() {
      this.$refs.roleList.confirmSelection()
    }
  }
}
</script>

<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>
