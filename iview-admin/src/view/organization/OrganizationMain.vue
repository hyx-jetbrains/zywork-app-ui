<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showAddModal" type="primary">添加</Button>&nbsp;
                    <Dropdown @on-click="batchOpt">
                        <Button type="primary">
                            批量操作
                            <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem name="batchActive">批量激活</DropdownItem>
                            <DropdownItem name="batchInactive"><span style="color: red;">批量冻结</span></DropdownItem>
                            <DropdownItem name="batchRemove" divided><span style="color: red;">批量删除</span></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>&nbsp;
                    <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
                    <Tooltip content="刷新" placement="right">
                        <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
                    </Tooltip>
                    <OrganizationTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"
                      v-on:showParentDetailModal="showParentDetailModal"
                      v-on:showSearchTableModal="showSearchTableModal"/>
                </Card>
            </i-col>
        </Row>
        <OrganizationAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <OrganizationSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <OrganizationDetailModal ref="detailModal"/>

        <Modal v-model="modal.searchTableModal" title="选择父类目" :mask-closable="false" width="960">
          <OrganizationMainSingle ref="searchTableModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchTableModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
          </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import OrganizationTableMain from './OrganizationTableMain.vue'
    import OrganizationAddEditModal from './OrganizationAddEditModal.vue'
    import OrganizationSearchModal from './OrganizationSearchModal.vue'
    import OrganizationDetailModal from './OrganizationDetailModal.vue'
    import OrganizationMainSingle from './OrganizationMainSingle.vue'
    export default {
        name: 'OrganizationMain',
        components: {
            OrganizationTableMain,
            OrganizationAddEditModal,
            OrganizationSearchModal,
            OrganizationDetailModal,
            OrganizationMainSingle
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/organization/admin/batch-remove',
                    batchActiveUrl: '/organization/admin/batch-active',
                    oneOrganizationUrl: '/organization/admin/one/'
                },
                modal: {
                  searchTableModal: false
                }
            }
        },
        computed: {},
        mounted() {},
        methods: {
            searchTable() {
                utils.search(this)
            },
            showAddModal() {
                let addEditModal = this.$refs.addEditModal
                addEditModal.modal.add = true
            },
            add() {
                utils.add(this)
            },
            showEditModal(row) {
                let addEditModal = this.$refs.addEditModal
                if (row.parentId === 0) {
                  row.parentName = '顶级组织'
                  addEditModal.modal.edit = true
                  addEditModal.form = row
                } else {
                  utils
                    .doGet(this.urls.oneOrganizationUrl + row.parentId, {})
                    .then(res => {
                      if (ResponseStatus.OK === res.data.code) {
                        const title = res.data.data.title
                        if (title) {
                          row.parentName = title
                        }
                        addEditModal.modal.edit = true
                        addEditModal.form = row
                      } else {
                        this.$Message.error(res.data.message)
                      }
                    })
                    .catch(err => {
                      console.log(err)
                    })
                }
            },
            edit() {
                utils.edit(this)
            },
            showDetailModal(row) {
                let detailModal = this.$refs.detailModal
                detailModal.modal.detail = true
                detailModal.form = row
            },
            showSearchModal() {
                let searchModal = this.$refs.searchModal
                searchModal.modal.search = true
            },
            batchOpt(itemName) {
                if (itemName === 'batchActive') {
                    utils.batchActive(this, 0)
                } else if (itemName === 'batchInactive') {
                    utils.batchActive(this, 1)
                } else if (itemName === 'batchRemove') {
                    utils.batchRemove(this)
                }
            },
            /**
             * 显示父级的详情
             */
            showParentDetailModal(id) {
              if (id === 0) {
                this.$Message.warning('该类目是顶级类目')
                return
              }
              utils
                  .doGet(this.urls.oneOrganizationUrl + id, {})
                  .then(res => {
                    if (ResponseStatus.OK === res.data.code) {
                      this.showDetailModal(res.data.data)
                    } else {
                      this.$Message.error(res.data.message)
                    }
                  })
                  .catch(err => {
                    console.log(err)
                  })
            },
            /**
             * 显示查询的模态窗
             */
            showSearchTableModal() {
              this.modal['searchTableModal'] = true
              this.$refs.searchTableModal.searchTable()
            },
            showModal(modal) {
              utils.showModal(this, modal)
            },
            cancelModal(modal) {
              utils.cancelModal(this, modal)
            },
            /**
             * 底部的确认选择父级类目
             */
            bottomConfirmChoice() {
              this.$refs.searchTableModal.confirmSelection()
            },
            /**
             * 确认选择父级类目
             */
            confirmChoice(row) {
              this.cancelModal('searchTableModal')
              let searchModal = this.$refs.searchModal
              searchModal.searchForm.parentIdMin = searchModal.searchForm.parentIdMax = row.id
              this.searchTable()
            },
        }
    }
</script>

<style>
</style>
