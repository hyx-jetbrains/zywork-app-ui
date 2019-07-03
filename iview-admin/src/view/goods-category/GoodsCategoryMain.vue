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
                    <GoodsCategoryTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" 
                    v-on:showDetailModal="showDetailModal" v-on:showGoodsAttrOrderModal="showGoodsAttrOrderModal"
                    v-on:showGoodsCategoryAttrDrawer="showGoodsCategoryAttrDrawer"/>
                </Card>
            </i-col>
        </Row>
        <GoodsCategoryAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsCategorySearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCategoryDetailModal ref="detailModal"/>
        <GoodsAttributeOrderModal ref="goodsAttributeOrderModal"/>
        <GoodsCategoryAttrsDrawer ref="goodsCategoryAttrsDrawer" />
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsCategoryTableMain from './GoodsCategoryTableMain.vue'
    import GoodsCategoryAddEditModal from './GoodsCategoryAddEditModal.vue'
    import GoodsCategorySearchModal from './GoodsCategorySearchModal.vue'
    import GoodsCategoryDetailModal from './GoodsCategoryDetailModal.vue'
    import GoodsAttributeOrderModal from '../goods-attribute/GoodsAttributeOrderModal.vue'
    import GoodsCategoryAttrsDrawer from './GoodsCategoryAttrsDrawer.vue'
    export default {
        name: 'GoodsCategoryMain',
        components: {
            GoodsCategoryTableMain,
            GoodsCategoryAddEditModal,
            GoodsCategorySearchModal,
            GoodsCategoryDetailModal,
            GoodsAttributeOrderModal,
            GoodsCategoryAttrsDrawer
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-category/admin/batch-remove',
                    batchActiveUrl: '/goods-category/admin/batch-active'
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
            showGoodsAttrOrderModal(categoryId) {
                this.$refs.goodsAttributeOrderModal.attrsOrderModal = true
                this.$refs.goodsAttributeOrderModal.initData(categoryId)
            },
            showGoodsCategoryAttrDrawer(categoryId) {
                this.$refs.goodsCategoryAttrsDrawer.initData(categoryId)
            }
        }
    }
</script>

<style>
</style>
