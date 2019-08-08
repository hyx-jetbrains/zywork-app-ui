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
              <DropdownItem name="batchInactive">
                <span style="color: red;">批量冻结</span>
              </DropdownItem>
              <DropdownItem name="batchRemove" divided>
                <span style="color: red;">批量删除</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>&nbsp;
          <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <GoodsInfoTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showEditModal="showEditModal"
            v-on:showDetailModal="showDetailModal"
            v-on:showImgMrgModal="showImgMrgModal"
            v-on:showGoodsPicOrderModal="showGoodsPicOrderModal"
            v-on:showGoodsSkuMain="showGoodsSkuMain"
            v-on:showAttrDetailModal="showAttrDetailModal"
            v-on:showSearchTableModal="showSearchTableModal"
            v-on:showDistributionRatio="showDistributionRatio"
            v-on:showGoodsHotSetModal="showGoodsHotSetModal"
          />
        </Card>
      </i-col>
    </Row>
    <GoodsInfoAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" />
    <GoodsInfoSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <GoodsInfoDetailModal ref="detailModal" />
    <UploadImgModal
      ref="uploadModal"
      :title="uploadModal.title"
      :format="uploadModal.format"
      :multiple="true"
    />
    <GoodsPicOrderModal ref="goodsPicOrderModal" />
    <Modal :transfer="false" v-model="modal.skuModal" title="商品SKU管理" width="80%">
      <GoodsSkuMain ref="goodsSkuMain" />
      <div slot="footer">
        <Button type="text" size="large" @click="modal.skuModal = false">关闭</Button>
      </div>
    </Modal>
    <GoodsShopDetailModal ref="shopDetailModal" />
    <Modal v-model="modal.searchTableShopModal" title="选择店铺查询" :mask-closable="false" width="960">
      <GoodsShopMainSingle ref="searchTableShopModal" v-on:confirmChoice="confirmChoiceShop" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('searchTableShopModal')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoiceShop">查询</Button>
      </div>
    </Modal>
    <GoodsCategoryDetailModal ref="categoryDetailModal" />
    <Modal
      v-model="modal.searchTableCategoryModal"
      title="选择类目查询"
      :mask-closable="false"
      width="960"
    >
      <GoodsCategoryMainSingle
        ref="searchTableCategoryModal"
        v-on:confirmChoice="confirmChoiceCategory"
      />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('searchTableCategoryModal')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoiceCategory">确认选择</Button>
      </div>
    </Modal>
    <DistributionRatioModal ref="distributionRatioModal" />
    <GoodsHotSetModal ref="goodsHotSetModal" v-on:searchTable="searchTable"/>
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
import GoodsShopDetailModal from '../goods-shop/GoodsShopDetailModal.vue'
import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
import GoodsCategoryDetailModal from '../goods-category/GoodsCategoryDetailModal.vue'
import GoodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
import DistributionRatioModal from '_c/distribution-ratio-modal'
import { allPicByGoods } from '@/api/goods_pic'
import * as ResponseStatus from '@/api/response-status'
import GoodsSkuMain from '../goods-sku/GoodsSkuMain.vue'
import GoodsHotSetModal from './GoodsHotSetModal.vue'
export default {
  name: 'GoodsInfoMain',
  components: {
    GoodsInfoTableMain,
    GoodsInfoAddEditModal,
    GoodsInfoSearchModal,
    GoodsInfoDetailModal,
    UploadImgModal,
    GoodsPicOrderModal,
    GoodsSkuMain,
    GoodsShopDetailModal,
    GoodsShopMainSingle,
    GoodsCategoryDetailModal,
    GoodsCategoryMainSingle,
    DistributionRatioModal,
    GoodsHotSetModal
  },
  data() {
    return {
      urls: {
        batchRemoveUrl: '/goods-info/admin/batch-remove',
        batchActiveUrl: '/goods-info/admin/batch-active',
        oneShopUrl: '/goods-shop/admin/one/',
        oneCategoryUrl: '/goods-category/admin/one/'
      },
      uploadModal: {
        title: '商品图片管理',
        format: ['jpg', 'jpeg', 'png', 'bmp'],
        uploadUrl: '/goods-pic/admin/upload/',
        removeUrl: '/goods-pic/admin/remove/'
      },
      modal: {
        skuModal: false,
        searchTableCategoryModal: false,
        searchTableShopModal: false
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
      // 清空辅助的name
      addEditModal.form.shopName = addEditModal.form.categoryName = ''
    },
    add() {
      utils.add(this)
    },
    showEditModal(row) {
      let addEditModal = this.$refs.addEditModal
      utils
        .doGet(this.urls.oneShopUrl + row.shopId, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            const title = res.data.data.title
            if (title) {
              row.shopName = title
            }
            utils
              .doGet(this.urls.oneCategoryUrl + row.categoryId, {})
              .then(res => {
                if (ResponseStatus.OK === res.data.code) {
                  const title = res.data.data.title
                  if (title) {
                    row.categoryName = title
                  }

                  addEditModal.modal.edit = true
                  addEditModal.form = row
                } else {
                  this.$Message.error(res.data.message)
                }
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
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
    showImgMrgModal(row) {
      let params = {
        goodsId: row.id,
        sortColumn: 'picOrder',
        sortOrder: 'asc'
      }
      allPicByGoods(params)
        .then(response => {
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
        })
        .catch(error => {
          console.log(error)
        })
      this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + row.shopId + '/' + row.id
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
      allPicByGoods(params)
        .then(response => {
          if (response.data.code === ResponseStatus.OK) {
            if (response.data.data.rows.length > 0) {
              this.modal.skuModal = true
              let goodsSkuMain = this.$refs.goodsSkuMain
              goodsSkuMain.$refs.addEditModal.form.goodsId = goodsId
              goodsSkuMain.$refs.searchModal.searchForm.goodsId = goodsId
              goodsSkuMain.$refs.goodsSkuPicModal.currentPicId =
                response.data.data.rows[0].id
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
        })
        .catch(error => {
          console.log(error)
        })
    },
    showModal(modal) {
      utils.showModal(this, modal)
    },
    cancelModal(modal) {
      utils.cancelModal(this, modal)
    },
    /**
     * 显示详情弹窗
     */
    showAttrDetailModal(id, type) {
      let url = this.urls.oneShopUrl
      if (type === 1) {
        url = this.urls.oneCategoryUrl
      }
      utils
        .doGet(url + id, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            const row = res.data.data
            let detailModal = this.$refs.shopDetailModal
            if (type === 1) {
              detailModal = this.$refs.categoryDetailModal
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
     * 显示搜索弹窗
     */
    showSearchTableModal(type) {
      if (type === 0) {
        this.modal['searchTableShopModal'] = true
        this.$refs.searchTableShopModal.searchTable()
      } else if (type === 1) {
        this.modal['searchTableCategoryModal'] = true
        this.$refs.searchTableCategoryModal.searchTable()
      }
    },
    /**
     * 底部的确认选择店铺
     */
    bottomConfirmChoiceShop() {
      this.$refs.choiceShopModal.confirmSelection()
    },
    /**
     * 确认选择店铺
     */
    confirmChoiceShop(row) {
      this.cancelModal('searchTableShopModal')
      let searchModal = this.$refs.searchModal
      searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax =
        row.id
      this.searchTable()
    },
    /**
     * 底部的确认选择类目
     */
    bottomConfirmChoiceCategory() {
      this.$refs.choiceCategoryModal.confirmSelection()
    },
    /**
     * 确认选择类目
     */
    confirmChoiceCategory(row) {
      this.cancelModal('searchTableCategoryModal')
      let searchModal = this.$refs.searchModal
      searchModal.searchForm.categoryIdMin = searchModal.searchForm.categoryIdMax =
        row.id
      this.searchTable()
    },
    /**
     * 显示分销比例配置弹窗
     */
    showDistributionRatio(row) {
      let distributionRatioModal = this.$refs.distributionRatioModal
      distributionRatioModal.title = '配置 《'+row.title+'》 的分销佣金比例'
      const params = {
        goodsId: row.id,
        isActive: 0
      }
      distributionRatioModal.loadData(params, 'goods', row.id)
    },
    showGoodsHotSetModal(row) {
      let goodsHotSetModal = this.$refs.goodsHotSetModal
      goodsHotSetModal.modal.hot = true
      goodsHotSetModal.form.shopId = row.shopId
      goodsHotSetModal.form.goodsId = row.id
      goodsHotSetModal.loadHotData()
    }
  }
}
</script>

<style>
</style>
