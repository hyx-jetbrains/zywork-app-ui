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
                    <GoodsCommentTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" v-on:showDetailModal="showDetailModal" 
                      v-on:showImgModal="showImgModal" v-on:showReplyModal="showReplyModal"/>
                </Card>
            </i-col>
        </Row>
        <GoodsCommentAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" v-on:reply="reply"/>
        <GoodsCommentSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsCommentDetailModal ref="detailModal"/>
        <GoodsCommentPicImgDetailModal ref="imgDetailModal" />
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsCommentTableMain from './GoodsCommentTableMain.vue'
    import GoodsCommentAddEditModal from './GoodsCommentAddEditModal.vue'
    import GoodsCommentSearchModal from './GoodsCommentSearchModal.vue'
    import GoodsCommentDetailModal from './GoodsCommentDetailModal.vue'
    import GoodsCommentPicImgDetailModal from '../goods-comment-pic/GoodsCommentPicImgDetailModal.vue'
    export default {
        name: 'GoodsCommentMain',
        components: {
            GoodsCommentTableMain,
            GoodsCommentAddEditModal,
            GoodsCommentSearchModal,
            GoodsCommentDetailModal,
            GoodsCommentPicImgDetailModal
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-comment/admin/batch-remove',
                    batchActiveUrl: '/goods-comment/admin/batch-active',
                    listPicUrl: '/goods-comment-pic/admin/all-cond'
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
            /**
             * 查看图片详情
             */
            showImgModal(id) {
              utils.doPostJson(this.urls.listPicUrl, {commentId: id}, {}).then(res => {
                if (res.data.code === ResponseStatus.OK) {
                  if (res.data.data.rows.length > 0) {
                    let imgDetailModal = this.$refs.imgDetailModal
                    imgDetailModal.formList = res.data.data.rows
                    imgDetailModal.modal.detail = true
                  } else {
                    this.$Message.warning('暂无图片')
                  }
                } else {
                  this.$Message.error(res.data.message)
                }
              }).catch(err => {
                console.log(err)
              })
            },
            /**
             * 显示回复的窗口
             */
            showReplyModal(row) {
                let addEditModal = this.$refs.addEditModal
                addEditModal.modal.reply = true
                addEditModal.form = row
            },
            /**
             * 回复
             */
            reply() {
              utils.edit(this).then(res => {
                let addEditModal = this.$refs.addEditModal
                addEditModal.modal.reply = false
              })
            }
        }
    }
</script>

<style>
</style>
