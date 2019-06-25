<template>
  <div>
    <Card>
          <Row style="height: 550px;">
            <div class="department-outer">
              <div class="tip-box">
                <!-- <b style="margin-right: 20px;">powered by <a target="blank" href="https://github.com/lison16">Lison</a></b>
                <a target="blank" href="https://github.com/lison16/v-org-tree" style="margin-right: 10px;">v-org-tree文档</a>-->
                <Tooltip content="刷新" placement="right">
                  <Button icon="md-refresh" type="success" shape="circle" @click="getDepartmentData"></Button>
                </Tooltip>
              </div>
              <div class="zoom-box">
                <zoom-controller v-model="zoom" :min="20" :max="200"></zoom-controller>
              </div>
              <div class="view-box">
                <org-view
                  v-if="orgTreeData"
                  :data="orgTreeData"
                  :zoom-handled="zoomHandled"
                  @on-menu-click="handleMenuClick"
                ></org-view>
              </div>
            </div>
          </Row>
          <Spin size="large" fix v-if="orgTreeSpinShow"></Spin>
          <OrganizationAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
          <OrganizationDetailModal ref="detailModal"/>
    </Card>
  </div>
</template>

<script>
import axios from '@/libs/api.request'
import * as utils from '@/api/utils-v2'
import OrgView from './components/org-view.vue'
import ZoomController from './components/zoom-controller.vue'
import * as ResponseStatus from '@/api/response-status'
import OrganizationAddEditModal from './OrganizationAddEditModal.vue'
import OrganizationDetailModal from './OrganizationDetailModal.vue'
import './index.less'
const menuDic = {
  edit: '编辑部门',
  detail: '查看部门',
  new: '新增子部门',
  delete: '删除部门'
}

export default {
  name: 'OrganizationOrgView',
  components: {
    OrgView,
    ZoomController,
    OrganizationAddEditModal,
    OrganizationDetailModal
  },
  data() {
    return {
      orgTreeData: null,
      zoom: 100,
      orgTreeSpinShow: false,
      urls: {
        allCondUrl: '/organization/admin/all-cond',
        removeUrl: '/organization/admin/remove/'
      },
      orgRows: []
    }
  },
  computed: {
    zoomHandled() {
      return this.zoom / 100
    }
  },
  mounted() {
    this.getDepartmentData()
  },
  methods: {
    handleMenuClick({ data, key }) {
      const keyStr = JSON.stringify(key)
      const row = this.getRow(data.id)
      if (keyStr === '"edit"') {
        // 编辑部门
        this.showEditModal(JSON.parse(JSON.stringify(row)))
      } else if (keyStr === '"detail"') {
        // 查看部门
        this.showDetailModal(JSON.parse(JSON.stringify(row)))
      } else if (keyStr === '"new"') {
        // 新增子部门
        this.showAddModal(data.id)
      } else if (keyStr === '"delete"') {
        // 删除部门
        this.remove(data.id)
      }
    },
    getDepartmentData() {
      this.orgTreeSpinShow = true
      axios.request({
        url: this.urls.allCondUrl,
        method: 'POST',
        data: {
          sortColumn: 'createTime',
          sortOrder: 'asc'
        }
      }).then(res => {
        this.orgTreeSpinShow = false
        const data = res.data
        if (data.code !== ResponseStatus.OK) {
          this.$Message.error(data.message)
          return
        }
        this.orgRows = data.data.rows
        let theElement = {
          id: 0,
          label: '',
          children: []
        }
        this.orgTreeData = this.getOrgTree()
      }).catch(err => {
        this.$Message.error(err)
      })
    },
    getOrgTree() {
      let rootElement = {
        id: this.orgRows[0].id,
        label: this.orgRows[0].title,
        children: []
      }
      let currentElements = [rootElement] // 当前正在循环的同一级数据
      while (currentElements.length > 0) {
        let nextElements = [] // 下一次需要循环的同一级数据
        currentElements.forEach((currentEle, index) => {
          for (let i = 0, len = this.orgRows.length; i < len; i++) {
            let rowData = this.orgRows[i]
            if (rowData.parentId === currentEle.id) {
              let ele = {
                id: rowData.id,
                label: rowData.title,
                children: []
              }
              currentEle.children.push(ele)
              nextElements.push(ele)
            }
          }
        })
        currentElements = []
        currentElements = nextElements
      }
      return rootElement
    },
    // 根据id取表格行数据
    getRow(id) {
      var row = Object
      this.orgRows.forEach(item => {
        if (item.id === id) {
          row = item
          return row
        }
      })
      return row
    },
    showAddModal(parentId) {
      let addEditModal = this.$refs.addEditModal
      addEditModal.form.parentId = parentId
      addEditModal.modal.add = true
    },
    add() {
      let addEditComponent = this.$refs.addEditModal
      let addForm = addEditComponent.$refs.addForm
      addForm.validate(valid => {
        if (valid) {
          addEditComponent.loading.add = true
          axios.request({
            url: addEditComponent.urls.addUrl,
            method: 'POST',
            data: addEditComponent.form
          }).then(response => {
            addEditComponent.loading.add = false
            if (response.data.code !== ResponseStatus.OK) {
              this.$Message.error(response.data.message)
            } else {
              this.$Message.success(response.data.message)
              addForm.resetFields()
              addEditComponent.modal.add = false
              this.getDepartmentData()
            }
          }).catch(error => {
            console.log(error)
            this.loading['add'] = false
            this.$Message.error('添加数据失败，稍候再试')
          })
        }
      })
    },
    showEditModal(row) {
      let addEditModal = this.$refs.addEditModal
      addEditModal.modal.edit = true
      addEditModal.form = row
    },
    edit() {
      let addEditComponent = this.$refs.addEditModal
      let editForm = addEditComponent.$refs.editForm
      editForm.validate(valid => {
        if (valid) {
          addEditComponent.loading.edit = true
          axios.request({
            url: addEditComponent.urls.editUrl,
            method: 'POST',
            data: addEditComponent.form
          }).then(response => {
            addEditComponent.loading.edit = false
            if (response.data.code !== ResponseStatus.OK) {
              this.$Message.error(response.data.message)
            } else {
              this.$Message.success(response.data.message)
              editForm.resetFields()
              addEditComponent.modal.edit = false
              this.getDepartmentData()
            }
          }).catch(error => {
            addEditComponent.loading.edit = false
            console.log(error)
            this.$Message.error('修改数据失败，稍候再试')
          })
        }
      })
    },
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    },
    remove(id) {
      this.$Modal.confirm({
          title: '确认删除吗？',
          content: '确认删除选择的数据吗？',
          onOk: () => {
            axios.request({
              url:this.urls.removeUrl + id,
              method: 'GET'
            }).then(response => {
              if (response.data.code === ResponseStatus.OK) {
                this.getDepartmentData()
              } else {
                this.$Message.error(response.data.message)
              }
            }).catch(error => {
              console.log(error)
            })
          },
          onCancel: () => {

          }
        })
    }
  }
}
</script>

<style>
</style>
