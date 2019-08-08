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
                    <GoodsUserCouponTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal"
                      v-on:showAttrDetailModal="showAttrDetailModal" v-on:showSearchTableModal="showSearchTableModal" />
                </Card>
            </i-col>
        </Row>
        <GoodsUserCouponAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsUserCouponSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsUserCouponDetailModal ref="detailModal"/>
       
        <UserDetailDetailModal ref="userDetailModal" />
        <Modal v-model="modal.searchUserModal" title="选择用户查询" :mask-closable="false" width="960">
          <UserDetailMainSingle ref="searchUserModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchUserModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">查询</Button>
          </div>
        </Modal>
        <GoodsCouponDetailModal ref="couponDetailModal" />
        <Modal v-model="modal.searchCouponModal" title="选择优惠券查询" :mask-closable="false" width="960">
          <GoodsCouponMainSingle ref="searchCouponModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('searchCouponModal')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">查询</Button>
          </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsUserCouponTableMain from './GoodsUserCouponTableMain.vue'
    import GoodsUserCouponAddEditModal from './GoodsUserCouponAddEditModal.vue'
    import GoodsUserCouponSearchModal from './GoodsUserCouponSearchModal.vue'
    import GoodsUserCouponDetailModal from './GoodsUserCouponDetailModal.vue'
    import UserDetailDetailModal from '../user-detail/UserDetailDetailModal.vue'
    import UserDetailMainSingle from '../user-detail/UserDetailMainSingle.vue'
    import GoodsCouponDetailModal from '../goods-coupon/GoodsCouponDetailModal.vue'
    import GoodsCouponMainSingle from '../goods-coupon/GoodsCouponMainSingle.vue'
    export default {
        name: 'GoodsUserCouponMain',
        components: {
            GoodsUserCouponTableMain,
            GoodsUserCouponAddEditModal,
            GoodsUserCouponSearchModal,
            GoodsUserCouponDetailModal,
            UserDetailDetailModal,
            UserDetailMainSingle,
            GoodsCouponDetailModal,
            GoodsCouponMainSingle
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-user-coupon/admin/batch-remove',
                    batchActiveUrl: '/goods-user-coupon/admin/batch-active',
                    oneUserUrl: '/user-detail/admin/one/',
                    oneCouponUrl: '/goods-coupon/admin/one/'
                },
                attrType: null,
                modal: {
                  searchUserModal: false,
                  searchCouponModal: false,
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
            showEditModalReq(row) {
              if (row.userName && row.couponName) {
                let addEditModal = this.$refs.addEditModal
                addEditModal.modal.edit = true
                addEditModal.form = row
              }
            },
            showEditModal(row) {
                utils.doGet(this.urls.oneUserUrl + row.userId, {}).then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    row.userName = res.data.data.nickname
                    this.showEditModalReq(row)
                  } else {
                    this.$Message.error(res.data.message)
                  }
                }).catch(err => {
                  console.log(err)
                })
                utils.doGet(this.urls.oneCouponUrl + row.couponId, {}).then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    row.couponName = res.data.data.title
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
              utils.showModal(this, modal)
            },
            cancelModal(modal) {
              utils.cancelModal(this, modal)
            },
            /**
             * 显示属性详情
             */
            showAttrDetailModal(id, type) {
              this.attrType = type
              let url = ''
              if (type === 0) {
                url = this.urls.oneUserUrl
              } else if (type === 1) {
                url = this.urls.oneCouponUrl
              }
              utils
                .doGet(url + id, {})
                .then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    const row = res.data.data
                    let detailModal
                    if (type === 0) {
                      detailModal = this.$refs.userDetailModal
                    } else if (type === 1) {
                      detailModal = this.$refs.couponDetailModal
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
              let refName = ''
              if (type === 0) {
                refName = 'searchUserModal'
              } else if (type === 1) {
                refName = 'searchCouponModal'
              }
              this.showModal(refName)
              this.$refs[refName].searchTable()
            },
            /**
             * 底部的确认选择
             */
            bottomConfirmChoice() {
              let type = this.attrType
              let refName = ''
              if (type === 0) {
                refName = 'searchUserModal'
              } else if (type === 1) {
                refName = 'searchCouponModal'
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
                refName = 'searchUserModal'
                searchModal.searchForm.userIdMin = searchModal.searchForm.userIdMax =
                row.id
              } else if (type === 1) {
                refName = 'searchCouponModal'
                searchModal.searchForm.couponIdMin = searchModal.searchForm.couponIdMax =
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
