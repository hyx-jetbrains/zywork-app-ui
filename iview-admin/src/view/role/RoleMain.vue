<template>
    <div>
        <Row>
            <i-col span="24">
                <Card>
                    <Button @click="showAddModal" type="primary">添加</Button>&nbsp;
                    <Dropdown @on-click="batchOpt">
                        <Button type="primary">导入导出
                        <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                        <DropdownItem name="import">
                            导入角色
                        </DropdownItem>
                        <DropdownItem name="export">
                            <span style="color: green;">导出角色</span>
                        </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>&nbsp;
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
                    <RoleTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" 
                    v-on:showDetailModal="showDetailModal" v-on:showRolePermissionAssignDrawer="showRolePermissionAssignDrawer"/>
                </Card>
            </i-col>
        </Row>
        <RoleAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <RoleSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <RoleDetailModal ref="detailModal"/>
        <UploadModal ref="uploadModal" @search="search" :title="uploadModal.title" :format="uploadModal.format"/>
        <RolePermissionAssignDrawer ref="rolePermissionAssignDrawer"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import RoleTableMain from './RoleTableMain.vue'
    import RoleAddEditModal from './RoleAddEditModal.vue'
    import RoleSearchModal from './RoleSearchModal.vue'
    import RoleDetailModal from './RoleDetailModal.vue'
    import UploadModal from '_c/upload-modal'
    import RolePermissionAssignDrawer from '@/view/role-permission/RolePermissionAssignDrawer.vue'
    export default {
        name: 'RoleMain',
        components: {
            RoleTableMain,
            RoleAddEditModal,
            RoleSearchModal,
            RoleDetailModal,
            UploadModal,
            RolePermissionAssignDrawer
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/role/admin/batch-remove',
                    batchActiveUrl: '/role/admin/batch-active',
                    exportUrl: '/permission-import-export/export-roles'
                },
                uploadModal: {
                    title: '导入角色信息',
                    format: ['json'],
                    uploadUrl: '/permission-import-export/import-role'
                },
                exportFileName: 'roles.json',
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
                addEditModal.modal.edit = true
                addEditModal.form = row
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
                }   else if (itemName === 'import') {
                    this.showUploadModal()
                } else if (itemName === 'export') {
                    utils.exportJson(this)
                }
            },
            showUploadModal() {
                this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl
                this.$refs.uploadModal.uploadModal = true
            },
            showRolePermissionAssignDrawer(roleId) {
                let rolePermissionAssignDrawer = this.$refs.rolePermissionAssignDrawer
                rolePermissionAssignDrawer.drawerFlag = true
                rolePermissionAssignDrawer.initData(roleId)
            }
        }
    }
</script>

<style>
</style>
