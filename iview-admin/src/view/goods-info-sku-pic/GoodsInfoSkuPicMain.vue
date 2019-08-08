<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <GoodsInfoSkuPicTable
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
            v-on:showAttrDetailModal="showAttrDetailModal"
            v-on:showSearchTableModal="showSearchTableModal"
          />
        </Card>
      </i-col>
    </Row>
    <GoodsInfoSkuPicSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <GoodsInfoSkuPicDetailModal ref="detailModal" />
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
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
import GoodsInfoSkuPicTable from './GoodsInfoSkuPicTable.vue'
import GoodsInfoSkuPicSearchModal from './GoodsInfoSkuPicSearchModal.vue'
import GoodsInfoSkuPicDetailModal from './GoodsInfoSkuPicDetailModal.vue'
import GoodsShopDetailModal from '../goods-shop/GoodsShopDetailModal.vue'
import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
import GoodsCategoryDetailModal from '../goods-category/GoodsCategoryDetailModal.vue'
import GoodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
export default {
  name: 'GoodsInfoSkuPicMain',
  components: {
    GoodsInfoSkuPicTable,
    GoodsInfoSkuPicSearchModal,
    GoodsInfoSkuPicDetailModal,
    GoodsShopDetailModal,
    GoodsShopMainSingle,
    GoodsCategoryDetailModal,
    GoodsCategoryMainSingle,
  },
  data() {
    return {
      urls: {
        oneShopUrl: '/goods-shop/admin/one/',
        oneCategoryUrl: '/goods-category/admin/one/'
      },
      modal: {
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
    showDetailModal(row) {
      let detailModal = this.$refs.detailModal
      detailModal.modal.detail = true
      detailModal.form = row
    },
    showSearchModal() {
      let searchModal = this.$refs.searchModal
      searchModal.modal.search = true
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
        this.showModal('searchTableShopModal')
        this.$refs.searchTableShopModal.searchTable()
      } else if (type === 1) {
        this.showModal('searchTableCategoryModal')
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
      searchModal.searchForm.goodsInfoShopIdMin = searchModal.searchForm.goodsInfoShopIdMax =
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
      searchModal.searchForm.goodsInfoCategoryIdMin = searchModal.searchForm.goodsInfoCategoryIdMax =
        row.id
      this.searchTable()
    },
  }
}
</script>

<style>
</style>
