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
                    <GoodsOrderLogisticsTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsOrderLogisticsAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsOrderLogisticsSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsOrderLogisticsDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsOrderLogisticsTableMain from './GoodsOrderLogisticsTableMain.vue'
    import GoodsOrderLogisticsAddEditModal from './GoodsOrderLogisticsAddEditModal.vue'
    import GoodsOrderLogisticsSearchModal from './GoodsOrderLogisticsSearchModal.vue'
    import GoodsOrderLogisticsDetailModal from './GoodsOrderLogisticsDetailModal.vue'
    export default {
        name: 'GoodsOrderLogisticsMain',
        components: {
            GoodsOrderLogisticsTableMain,
            GoodsOrderLogisticsAddEditModal,
            GoodsOrderLogisticsSearchModal,
            GoodsOrderLogisticsDetailModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-order-logistics/admin/batch-remove',
                    batchActiveUrl: '/goods-order-logistics/admin/batch-active'
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
            }
        }
    }
</script>

<style>
</style>