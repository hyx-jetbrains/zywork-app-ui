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
                    <GoodsShopTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal" v-on:showUploadModal="showUploadModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsShopAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsShopSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsShopDetailModal ref="detailModal"/>

        <UploadModal
          ref="uploadModal"
          @search="searchTable"
          :title="uploadModal.title"
          :format="uploadModal.format"
        />
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsShopTableMain from './GoodsShopTableMain.vue'
    import GoodsShopAddEditModal from './GoodsShopAddEditModal.vue'
    import GoodsShopSearchModal from './GoodsShopSearchModal.vue'
    import GoodsShopDetailModal from './GoodsShopDetailModal.vue'
    import UploadModal from '_c/upload-modal'
    export default {
        name: 'GoodsShopMain',
        components: {
            GoodsShopTableMain,
            GoodsShopAddEditModal,
            GoodsShopSearchModal,
            GoodsShopDetailModal,
            UploadModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-shop/admin/batch-remove',
                    batchActiveUrl: '/goods-shop/admin/batch-active'
                },
                uploadModal: {
                  title: '上传封面图片',
                  format: ['jpg', 'jpeg', 'png', 'bmp'],
                  uploadUrl: '/goods-shop/admin/upload/'
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
            /**
             * 上传店铺头像
             */
            showUploadModal(shopId) {
              this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + shopId
              this.$refs.uploadModal.uploadModal = true
            },
        }
    }
</script>

<style>
</style>
