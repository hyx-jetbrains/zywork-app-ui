<template>
  <div>
    <Drawer title="分配角色权限" v-model="userRoleDrawerFlag" width="1200" @on-close="closeDrawer">
      <RoleMainMultiple ref="roleMainMultiple" @closeDrawer="closeDrawer"/>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="closeDrawer">取消</Button>
        <Button type="primary" @click="updateRole">确认选择</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import RoleMainMultiple from '@/view/role/RoleMainMultiple.vue'
import { getUserRoleByUserId } from '@/api/role'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'UserRoleAssignDrawer',
  components: {
    RoleMainMultiple
  },
  data() {
    return {
      userRoleDrawerFlag: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    initData(userId) {
      getUserRoleByUserId(userId).then(res => {
          const data = res.data
          if (data.code !== ResponseStatus.OK) {
            this.$Message.error(data.message)
            return
          }
          let roleMainMultiple = this.$refs.roleMainMultiple
          roleMainMultiple.selectedData = data.data.rows
          roleMainMultiple.selectedDataIdProp = 'roleId'
          roleMainMultiple.extraData.userId = userId
          roleMainMultiple.searchTable()
        }).catch(err => {
          this.$Message.error(err)
        })
    },
    closeDrawer() {
      // 关闭抽屉清空选择项
      this.userRoleDrawerFlag = false
      this.$refs.roleMainMultiple.cancelSelect()
    },
    updateRole() {
      this.$refs.roleMainMultiple.confirmSelection()
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
