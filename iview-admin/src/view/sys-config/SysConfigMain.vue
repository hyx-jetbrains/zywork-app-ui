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
                    <SysConfigTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <SysConfigAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <SysConfigSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <SysConfigDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import SysConfigTableMain from './SysConfigTableMain.vue'
    import SysConfigAddEditModal from './SysConfigAddEditModal.vue'
    import SysConfigSearchModal from './SysConfigSearchModal.vue'
    import SysConfigDetailModal from './SysConfigDetailModal.vue'
    export default {
        name: 'SysConfigMain',
        components: {
            SysConfigTableMain,
            SysConfigAddEditModal,
            SysConfigSearchModal,
            SysConfigDetailModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/sys-config/admin/batch-remove',
                    batchActiveUrl: '/sys-config/admin/batch-active'
                },
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
                addEditModal.form = JSON.parse(JSON.stringify(row))
                addEditModal.form.value = JSON.parse(row.value)
                addEditModal.form.comment = JSON.parse(row.comment)
                addEditModal.modal.edit = true
            },
            edit() {
                utils.edit(this)
            },
            showDetailModal(row) {
                let detailModal = this.$refs.detailModal
                detailModal.form = JSON.parse(JSON.stringify(row))
                detailModal.form.value = JSON.parse(row.value)
                detailModal.form.comment = JSON.parse(row.comment)
                detailModal.modal.detail = true
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
            }
        }
    }
</script>

<style>
</style>
