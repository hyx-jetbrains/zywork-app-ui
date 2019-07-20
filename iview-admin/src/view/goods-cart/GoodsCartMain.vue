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
                    <GoodsCartTableMain ref="table" 
                      v-on:searchTable="searchTable" 
                      v-on:showEditModal="showEditModal" 
                      v-on:showDetailModal="showDetailModal"
                      v-on:showAttrDetailModal="showAttrDetailModal"
                      v-on:showSearchTableModal="showSearchTableModal"
                    />
                </Card>
            </i-col>
        </Row>
        <GoodsCartAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsCartSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCartDetailModal ref="detailModal"/>
        <UserDetailModal v-if="modal.type === 0" ref="attrDetailmodal" />
        <GoodsInfoDetailModal v-if="modal.type === 1" ref="attrDetailmodal" />
        <Modal v-model="modal.searchTableModal" title="选择查询条件" :mask-closable="false" width="960">
          <UserMainSingle v-if="modal.type === 0" ref="searchTableModal" v-on:confirmChoice="confirmChoice" />
          <GoodsInfoMainSingle v-if="modal.type === 1" ref="searchTableModal" v-on:confirmChoice="confirmChoice" />
        <div slot="footer">
          <Button type="text" size="large" @click="cancelModal('searchTableModal')">取消</Button>
          <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsCartTableMain from './GoodsCartTableMain.vue'
    import GoodsCartAddEditModal from './GoodsCartAddEditModal.vue'
    import GoodsCartSearchModal from './GoodsCartSearchModal.vue'
    import GoodsCartDetailModal from './GoodsCartDetailModal.vue'
    import UserDetailModal from '../user/UserDetailModal.vue'
    import UserMainSingle from '../user/UserMainSingle.vue'
    import GoodsInfoDetailModal from '../goods-info/GoodsInfoDetailModal.vue'
    import GoodsInfoMainSingle from '../goods-info/GoodsInfoMainSingle.vue'
    export default {
        name: 'GoodsCartMain',
        components: {
            GoodsCartTableMain,
            GoodsCartAddEditModal,
            GoodsCartSearchModal,
            GoodsCartDetailModal,
            UserDetailModal,
            UserMainSingle,
            GoodsInfoDetailModal,
            GoodsInfoMainSingle
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-cart/admin/batch-remove',
                    batchActiveUrl: '/goods-cart/admin/batch-active',
                    oneUserUrl: '/user/admin/one/',
                    oneGoodsInfoUrl: '/goods-info/admin/one/'
                },
                modal: {
                  searchTableModal: false,
                  type: -1
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
            showModal(modal) {
              this.modal[modal] = true
            },
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
             * 显示详情弹窗
             */
            showAttrDetailModal(id, type) {
              this.modal.type = type
              let url = ''
              if (type === 0) {
                url = this.urls.oneUserUrl
              } else if (type === 1) {
                url = this.urls.oneGoodsInfoUrl
              }
              utils
                .doGet(url + id, {})
                .then(res => {
                  if (ResponseStatus.OK === res.data.code) {
                    const row = res.data.data
                    let detailModal = this.$refs.attrDetailmodal
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
             * 显示搜索弹窗
             */
            showSearchTableModal(type) {
              this.modal.type = type
              this.showModal('searchTableModal')
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
              if (this.modal.type === 0) {
                searchModal.searchForm.userIdMin = searchModal.searchForm.userIdMax = row.id
              } else if (this.modal.type === 1) {
                searchModal.searchForm.goodsIdMin = searchModal.searchForm.goodsIdMax = row.id
              }
              this.searchTable()
            },
        }
    }
</script>

<style>
</style>
