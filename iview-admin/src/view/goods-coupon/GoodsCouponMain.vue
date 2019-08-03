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
                    <GoodsCouponTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsCouponAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsCouponSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCouponDetailModal ref="detailModal"/>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsCouponTableMain from './GoodsCouponTableMain.vue'
    import GoodsCouponAddEditModal from './GoodsCouponAddEditModal.vue'
    import GoodsCouponSearchModal from './GoodsCouponSearchModal.vue'
    import GoodsCouponDetailModal from './GoodsCouponDetailModal.vue'
    export default {
        name: 'GoodsCouponMain',
        components: {
            GoodsCouponTableMain,
            GoodsCouponAddEditModal,
            GoodsCouponSearchModal,
            GoodsCouponDetailModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-coupon/admin/batch-remove',
                    batchActiveUrl: '/goods-coupon/admin/batch-active',
                    oneShopUrl: '/goods-shop/admin/one/',
                    oneCategoryUrl: '/goods-category/admin/one/',
                    oneGoodsUrl: '/goods-info/admin/one/'
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
            /**
             * 请求之后调用
             */
            showEditModalReq(row) {
              if (row.shopName && row.categoryName && row.goodsName) {
                let addEditModal = this.$refs.addEditModal
                addEditModal.modal.edit = true
                addEditModal.form = row
              }
            },
            showEditModal(row) {
                utils.doGet(this.urls.oneShopUrl + row.shopId, {}).then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    row.shopName = res.data.data.title
                    this.showEditModalReq(row)
                  } else {
                    this.$Message.error(res.data.message)
                  }
                }).catch(err => {
                  console.log(err)
                })
                utils.doGet(this.urls.oneCategoryUrl + row.categoryId, {}).then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    row.categoryName = res.data.data.title
                    this.showEditModalReq(row)
                  } else {
                    this.$Message.error(res.data.message)
                  }
                }).catch(err => {
                  console.log(err)
                })
                utils.doGet(this.urls.oneGoodsUrl + row.goodsId, {}).then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    row.goodsName = res.data.data.title
                    this.showEditModalReq(row)
                  } else {
                    this.$Message.error(res.data.message)
                  }
                }).catch(err => {
                  console.log(err)
                })
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
