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
                    <NoticeTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"
                    v-on:showContentModal="showContentModal"/>
                </Card>
            </i-col>
        </Row>
        <NoticeAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <NoticeSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <NoticeDetailModal ref="detailModal"/>
        <ContentModal ref="contentModal" :title="公告内容"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import NoticeTableMain from './NoticeTableMain.vue'
    import NoticeAddEditModal from './NoticeAddEditModal.vue'
    import NoticeSearchModal from './NoticeSearchModal.vue'
    import NoticeDetailModal from './NoticeDetailModal.vue'
    import ContentModal from '_c/content-modal'
    export default {
        name: 'NoticeMain',
        components: {
            NoticeTableMain,
            NoticeAddEditModal,
            NoticeSearchModal,
            NoticeDetailModal,
            ContentModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/notice/admin/batch-remove',
                    batchActiveUrl: '/notice/admin/batch-active'
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
                }
            },
            showContentModal(content) {
                let contentModal = this.$refs.contentModal
                contentModal.title = '公告内容'
                contentModal.content = content
                contentModal.contentModal = true
            }
        }
    }
</script>

<style>
</style>
