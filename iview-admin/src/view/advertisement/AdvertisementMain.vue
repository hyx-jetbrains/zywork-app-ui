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
                    <AdvertisementTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" 
                    v-on:showDetailModal="showDetailModal" v-on:showUploadModal="showUploadModal"/>
                </Card>
            </i-col>
        </Row>
        <AdvertisementAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <AdvertisementSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <AdvertisementDetailModal ref="detailModal"/>
        <UploadModal ref="uploadModal" @search="searchTable" :title="uploadModal.title" :format="uploadModal.format"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import AdvertisementTableMain from './AdvertisementTableMain.vue'
    import AdvertisementAddEditModal from './AdvertisementAddEditModal.vue'
    import AdvertisementSearchModal from './AdvertisementSearchModal.vue'
    import AdvertisementDetailModal from './AdvertisementDetailModal.vue'
    import UploadModal from '_c/upload-modal'
    export default {
        name: 'AdvertisementMain',
        components: {
            AdvertisementTableMain,
            AdvertisementAddEditModal,
            AdvertisementSearchModal,
            AdvertisementDetailModal,
            UploadModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/advertisement/admin/batch-remove',
                    batchActiveUrl: '/advertisement/admin/batch-active'
                },
                uploadModal: {
                    title: '上传广告图片',
                    format: ['jpg', 'jpeg', 'png', 'bmp'],
                    uploadUrl: '/advertisement/admin/upload/'
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
            showUploadModal(adId) {
                this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + adId
                this.$refs.uploadModal.uploadModal = true
            }
        }
    }
</script>

<style>
</style>
