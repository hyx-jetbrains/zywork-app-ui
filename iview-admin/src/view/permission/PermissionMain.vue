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
                            导入权限
                        </DropdownItem>
                        <DropdownItem name="export">
                            <span style="color: green;">导出权限</span>
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
                    <PermissionTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" 
                    v-on:showDetailModal="showDetailModal" v-on:showModuleDetailModal="showModuleDetailModal"
                    v-on:showModuleMainSingle="showModuleMainSingle"/>
                </Card>
            </i-col>
        </Row>
        <PermissionAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <PermissionSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <PermissionDetailModal ref="detailModal"/>
        <UploadModal ref="uploadModal" @search="searchTable" :title="uploadModal.title" :format="uploadModal.format"/>
        <ModuleDetailModal ref="moduleDetailModal"/>
        <Modal :transfer="false" fullscreen v-model="moduleMainSingle" title="搜索主表信息">
            <ModuleMainSingle ref="moduleMainSingle" v-on:confirmSelection="confirmModuleMainSingleSelection"/>
            <div slot="footer">
                <Button type="text" size="large" @click="cancelModuleMainSingle">取消</Button>
                <Button type="primary" size="large" @click="confirmModuleMainSingle">确认选择</Button>
            </div>
        </Modal>
        
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import PermissionTableMain from './PermissionTableMain.vue'
    import PermissionAddEditModal from './PermissionAddEditModal.vue'
    import PermissionSearchModal from './PermissionSearchModal.vue'
    import PermissionDetailModal from './PermissionDetailModal.vue'
    import UploadModal from '_c/upload-modal'
    import ModuleDetailModal from '@/view/module/ModuleDetailModal.vue'
    import ModuleMainSingle from '@/view/module/ModuleMainSingle.vue'
    import {getModuleById} from '@/api/module'
    import * as ResponseStatus from '@/api/response-status'
    export default {
        name: 'PermissionMain',
        components: {
            PermissionTableMain,
            PermissionAddEditModal,
            PermissionSearchModal,
            PermissionDetailModal,
            UploadModal,
            ModuleDetailModal,
            ModuleMainSingle
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/permission/admin/batch-remove',
                    batchActiveUrl: '/permission/admin/batch-active',
                    exportUrl: '/permission-import-export/export-permission'
                },
                uploadModal: {
                    title: '导入权限信息',
                    format: ['json'],
                    uploadUrl: '/permission-import-export/import-permission'
                },
                exportFileName: 'permission.json',
                moduleMainSingle: false
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
                } else if (itemName === 'import') {
                    this.showUploadModal()
                } else if (itemName === 'export') {
                    utils.exportJson(this)
                }
            },
            showUploadModal() {
                this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl
                this.$refs.uploadModal.uploadModal = true
            },
            showModuleDetailModal(moduleId) {
                getModuleById(moduleId).then(res => {
                    const data = res.data
                    if (data.code === ResponseStatus.OK) {
                        let moduleDetailModal = this.$refs.moduleDetailModal
                        moduleDetailModal.form = data.data
                        moduleDetailModal.modal.detail = true
                    } else {
                        this.$Message.error(data.message)
                    }
                }).catch(err => {
                    this.$Message.error(err)
                })
            }, 
            showModuleMainSingle() {
                this.moduleMainSingle = true
            },
            cancelModuleMainSingle() {
                this.moduleMainSingle = false
            },
            confirmModuleMainSingleSelection(moduleId) {
                this.moduleMainSingle= false
                let searchModal = this.$refs.searchModal
                searchModal.searchForm.moduleIdMin = moduleId
                searchModal.searchForm.moduleIdMax = moduleId
                utils.search(this)
            },
            confirmModuleMainSingle() {
                this.$refs.moduleMainSingle.confirmSelection()
            }
        }
    }
</script>

<style>
</style>
