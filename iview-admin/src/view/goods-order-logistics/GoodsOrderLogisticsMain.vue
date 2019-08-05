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
                    <GoodsOrderLogisticsTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"
                      v-on:moduleDetail="moduleDetail" v-on:showSearch="showSearch" v-on:showDelivery="showDelivery" />
                </Card>
            </i-col>
        </Row>
        <GoodsOrderLogisticsAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" v-on:deliveryGoods="deliveryGoods"/>
        <GoodsOrderLogisticsSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsOrderLogisticsDetailModal ref="detailModal"/>

        <GoodsOrderDetailModal v-if="type == 0" ref="attrDetailModal" />
        <GoodsShopDetailModal v-if="type == 1" ref="attrDetailModal" />
        <Modal v-model="modal.searchOrderModal" title="属性条件搜索" :mask-closable="true" width="960">
          <GoodsOrderMainSingle
            ref="searchOrderModal"
            v-on:confirmChoice="confirmChoice"
          />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('searchOrderModal')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
        <Modal v-model="modal.searchShopModal" title="属性条件搜索" :mask-closable="true" width="960">
          <GoodsShopMainSingle
            ref="searchShopModal"
            v-on:confirmChoice="confirmChoice"
          />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('searchShopModal')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsOrderLogisticsTableMain from './GoodsOrderLogisticsTableMain.vue'
    import GoodsOrderLogisticsAddEditModal from './GoodsOrderLogisticsAddEditModal.vue'
    import GoodsOrderLogisticsSearchModal from './GoodsOrderLogisticsSearchModal.vue'
    import GoodsOrderLogisticsDetailModal from './GoodsOrderLogisticsDetailModal.vue'
    import GoodsOrderDetailModal from '../goods-order/GoodsOrderDetailModal.vue'
    import GoodsOrderMainSingle from '../goods-order/GoodsOrderMainSingle.vue'
    import GoodsShopDetailModal from '../goods-shop/GoodsShopDetailModal.vue'
    import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
    export default {
        name: 'GoodsOrderLogisticsMain',
        components: {
            GoodsOrderLogisticsTableMain,
            GoodsOrderLogisticsAddEditModal,
            GoodsOrderLogisticsSearchModal,
            GoodsOrderLogisticsDetailModal,
            GoodsOrderDetailModal,
            GoodsOrderMainSingle,
            GoodsShopDetailModal,
            GoodsShopMainSingle
        },
        data() {
            return {
                type: 0,
                modal: {
                  searchOrderModal: false,
                  searchShopModal: false
                },
                urls: {
                    batchRemoveUrl: '/goods-order-logistics/admin/batch-remove',
                    batchActiveUrl: '/goods-order-logistics/admin/batch-active',
                    oneOrderUrl: '/goods-order/admin/one/',
                    oneShopUrl: '/goods-shop/admin/one/',
                    deliveryUrl: '/goods-order/admin/delivery/'
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
            showModal(modal) {
              this.modal[modal] = true
            },
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
             * 显示详情
             */
            moduleDetail(row, type) {
              this.type = type
              let url = this.urls.oneOrderUrl
              let id = row.id
              if (type == 1) {
                url = this.urls.oneShopUrl
                id = row.shopId
              }
              utils
                .doGet(url + id, {})
                .then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    const myRow = res.data.data
                    let detailModal = this.$refs.attrDetailModal
                    detailModal.modal.detail = true
                    detailModal.form = myRow
                  } else {
                    this.$Message.error(res.data.message)
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            },
            /**
             * 显示搜索的弹窗
             */
            showSearch(type) {
              this.type = type
              if (type === 0) {
                this.showModal('searchOrderModal')
                this.$refs.searchOrderModal.searchTable()
              } else if (type === 1) {
                this.showModal('searchShopModal')
                this.$refs.searchShopModal.searchTable()
              }
            },
            /**
             * 底部的确认选择
             */
            bottomConfirmChoice() {
              this.$refs.searchTableModal.confirmSelection()
            },
            /**
             * 确认选择
             */
            confirmChoice(row) {
              this.cancelModal('searchTableModal')
              let searchModal = this.$refs.searchModal
              if (this.type === 0) {
                searchModal.searchForm.idMin = searchModal.searchForm.idMax =
                row.id
              } else if (this.type === 1) {
                searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax =
                row.id
              }
              this.searchTable()
            },
            /**
             *  显示确认发货的模态窗
             */
            showDelivery(row, isDelivery) {
              if (isDelivery !== 0) {
                this.$Message.warning('发货失败，该订单不是待发货状态')
                return;
              }
              let addEditModal = this.$refs.addEditModal
              addEditModal.modal.delivery = true
              addEditModal.form = row
            },
            /**
             * 发货
             */
            deliveryGoods(form) {
              utils.edit(this)
              utils
                .doGet(this.urls.deliveryUrl + form.id, {})
                .then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    let addEditModal = this.$refs.addEditModal
                    addEditModal.modal.delivery = false
                  } else {
                    this.$Message.error(res.data.message)
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            }
        }
    }
</script>

<style>
</style>
