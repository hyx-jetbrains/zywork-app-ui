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
                    <GoodsInfoTableMain ref="table" v-on:searchTable="searchTable" v-on:showEditModal="showEditModal" 
                    v-on:showDetailModal="showDetailModal" v-on:showImgMrgModal="showImgMrgModal" 
                    v-on:showGoodsPicOrderModal="showGoodsPicOrderModal" v-on:showGoodsSkuMain="showGoodsSkuMain"/>
                </Card>
            </i-col>
        </Row>
        <GoodsInfoAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit"/>
        <GoodsInfoSearchModal ref="searchModal" v-on:searchTable="searchTable"/>
        <GoodsInfoDetailModal ref="detailModal"/>
        <UploadImgModal ref="uploadModal" :title="uploadModal.title" :format="uploadModal.format" :multiple="true"/>
        <GoodsPicOrderModal ref="goodsPicOrderModal"/>
        <Modal :transfer="false" v-model="skuModal" title="商品SKU管理" width="80%">
            <GoodsSkuMain ref="goodsSkuMain"/>
            <div slot="footer">
                <Button type="text" size="large" @click="skuModal = false">关闭</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import * as utils from '@/api/utils-v2'
    import GoodsInfoTableMain from './GoodsInfoTableMain.vue'
    import GoodsInfoAddEditModal from './GoodsInfoAddEditModal.vue'
    import GoodsInfoSearchModal from './GoodsInfoSearchModal.vue'
    import GoodsInfoDetailModal from './GoodsInfoDetailModal.vue'
    import UploadImgModal from '_c/upload-img-modal'
    import GoodsPicOrderModal from '../goods-pic/GoodsPicOrderModal.vue'
    import {allPicByGoods} from '@/api/goods_pic'
    import * as ResponseStatus from '@/api/response-status'
    import GoodsSkuMain from '../goods-sku/GoodsSkuMain.vue'
    export default {
        name: 'GoodsInfoMain',
        components: {
            GoodsInfoTableMain,
            GoodsInfoAddEditModal,
            GoodsInfoSearchModal,
            GoodsInfoDetailModal,
            UploadImgModal,
            GoodsPicOrderModal,
            GoodsSkuMain
        },
        data() {
            return {
                urls: {
                    batchRemoveUrl: '/goods-info/admin/batch-remove',
                    batchActiveUrl: '/goods-info/admin/batch-active'
                },
                 uploadModal: {
                    title: '商品图片管理',
                    format: ['jpg','jpeg','png','bmp'],
                    uploadUrl: '/goods-pic/admin/upload/',
                    removeUrl: '/goods-pic/admin/remove/'
                },
                skuModal: false
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
            showImgMrgModal(row) {
                let params = {
                    goodsId: row.id,
                    sortColumn: 'picOrder',
                    sortOrder: 'asc'
                }
                allPicByGoods(params).then(response => {
                    if (response.data.code === ResponseStatus.OK) {
                    this.$refs.uploadModal.defaultList = []
                    response.data.data.rows.forEach((img, index) => {
                        this.$refs.uploadModal.defaultList.push({
                        name: img.id,
                        url: '/' + img.picUrl
                        })
                    })
                    this.$refs.uploadModal.updateUploadList('default')
                    }
                }).catch(error => {
                    console.log(error)
                })
                this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + row.id
                this.$refs.uploadModal.removeUrl = this.uploadModal.removeUrl
                this.$refs.uploadModal.uploadModal = true
            },
            showGoodsPicOrderModal(goodsId) {
                let goodsPicOrderModal = this.$refs.goodsPicOrderModal
                goodsPicOrderModal.modal.picOrder = true
                goodsPicOrderModal.initData(goodsId)
            },
            showGoodsSkuMain(goodsId) {
                let params = {
                    goodsId: goodsId,
                    sortColumn: 'picOrder',
                    sortOrder: 'asc'
                }
                allPicByGoods(params).then(response => {
                    if (response.data.code === ResponseStatus.OK) {
                    if (response.data.data.rows.length > 0) {
                        this.skuModal = true
                        let goodsSkuMain = this.$refs.goodsSkuMain
                        goodsSkuMain.$refs.addEditModal.form.goodsId = goodsId
                        goodsSkuMain.$refs.searchModal.searchForm.goodsId = goodsId
                        goodsSkuMain.$refs.goodsSkuPicModal.currentPicId = response.data.data.rows[0].id
                        goodsSkuMain.searchTable()
                    } else {
                        this.$Notice.warning({
                        title: '提示',
                        desc: '此商品还未设置图片，请先进入图片管理菜单设置图片'
                        })
                    }
                    } else {
                    this.$Message.error(response.data.message)
                    }
                }).catch(error => {
                    console.log(error)
                })
                
            }
        }
    }
</script>

<style>
</style>
