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
                    <GoodsCouponTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"
                        v-on:showAttrDetailModal="showAttrDetailModal" v-on:showSearchTableModal="showSearchTableModal" />
                </Card>
            </i-col>
        </Row>
        <GoodsCouponAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsCouponSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCouponDetailModal ref="detailModal"/>
        <GoodsCategoryDetailModal ref="categoryDetailModal" />
        <Modal v-model="modal.searchCategoryModal" title="选择类目查询" :mask-closable="false" width="960">
          <GoodsCategoryMainSingle ref="searchCategoryModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchCategoryModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">查询</Button>
          </div>
        </Modal>
        <GoodsShopDetailModal ref="shopDetailModal" />
        <Modal v-model="modal.searchShopModal" title="选择类目查询" :mask-closable="false" width="960">
          <GoodsShopMainSingle ref="searchShopModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchShopModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">查询</Button>
          </div>
        </Modal>
        <GoodsInfoDetailModal ref="goodsDetailModal" />
        <Modal v-model="modal.searchGoodsModal" title="选择类目查询" :mask-closable="false" width="960">
          <GoodsInfoMainSingle ref="searchGoodsModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchGoodsModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">查询</Button>
          </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsCouponTableMain from './GoodsCouponTableMain.vue'
    import GoodsCouponAddEditModal from './GoodsCouponAddEditModal.vue'
    import GoodsCouponSearchModal from './GoodsCouponSearchModal.vue'
    import GoodsCouponDetailModal from './GoodsCouponDetailModal.vue'
    import GoodsCategoryDetailModal from '../goods-category/GoodsCategoryDetailModal.vue'
    import GoodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
    import GoodsShopDetailModal from '../goods-shop/GoodsShopDetailModal.vue'
    import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
    import GoodsInfoDetailModal from '../goods-info/GoodsInfoDetailModal.vue'
    import GoodsInfoMainSingle from '../goods-info/GoodsInfoMainSingle.vue'
    export default {
        name: 'GoodsCouponMain',
        components: {
            GoodsCouponTableMain,
            GoodsCouponAddEditModal,
            GoodsCouponSearchModal,
            GoodsCouponDetailModal,
            GoodsCategoryDetailModal,
            GoodsCategoryMainSingle,
            GoodsShopDetailModal,
            GoodsShopMainSingle,
            GoodsInfoDetailModal,
            GoodsInfoMainSingle
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
                attrType: null,
                modal: {
                  searchCategoryModal: false,
                  searchShopModal: false,
                  searchGoodsModal: false
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
            },
            showModal(modal) {
              this.modal[modal] = true
            },
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
             * 显示属性详情
             */
            showAttrDetailModal(id, type) {
              this.attrType = type
              let url = ''
              if (type === 0) {
                url = this.urls.oneCategoryUrl
              } else if (type === 1) {
                url = this.urls.oneShopUrl
              } else if (type === 2) {
                url = this.urls.oneGoodsUrl
              }
              utils
                .doGet(url + id, {})
                .then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    const row = res.data.data
                    let detailModal
                    if (type === 0) {
                      detailModal = this.$refs.categoryDetailModal
                    } else if (type === 1) {
                      detailModal = this.$refs.shopDetailModal
                    } else if (type === 2) {
                      detailModal = this.$refs.goodsDetailModal
                    }
                    detailModal.modal.detail = true
                    detailModal.form = row
                  } else {
                    this.$Message.error(res.data.message)
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            },
            /**
             * 显示搜索模态窗
             */
            showSearchTableModal(type) {
              this.attrType = type
              if (type === 0) {
                this.showModal('searchCategoryModal')
                this.$refs.searchCategoryModal.searchTable()
              } else if (type === 1) {
                this.showModal('searchShopModal')
                this.$refs.searchShopModal.searchTable()
              } else if (type === 2) {
                this.showModal('searchGoodsModal')
                this.$refs.searchGoodsModal.searchTable()
              }
            },
            /**
             * 底部的确认选择
             */
            bottomConfirmChoice() {
              let type = this.attrType
              let refName = ''
              if (type === 0) {
                refName = 'searchCategoryModal'
              } else if (type === 1) {
                refName = 'searchShopModal'
              } else if (type === 2) {
                refName = 'searchGoodsModal'
              }
              this.$refs[refName].confirmSelection()
            },
            /**
             * 确认选择
             */
            confirmChoice(row) {
              let searchModal = this.$refs.searchModal
              let type = this.attrType
              let refName = ''
              if (type === 0) {
                refName = 'searchCategoryModal'
                searchModal.searchForm.categoryIdMin = searchModal.searchForm.categoryIdMax =
                row.id
              } else if (type === 1) {
                refName = 'searchShopModal'
                searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax =
                row.id
              } else if (type === 2) {
                refName = 'searchGoodsModal'
                searchModal.searchForm.goodsIdMin = searchModal.searchForm.goodsIdMax =
                row.id
              }
              this.cancelModal(refName)
              this.searchTable()
            },
        }
    }
</script>

<style>
</style>
