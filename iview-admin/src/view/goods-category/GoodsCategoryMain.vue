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
          <GoodsCategoryTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showEditModal="showEditModal"
            v-on:showDetailModal="showDetailModal"
            v-on:showGoodsAttrOrderModal="showGoodsAttrOrderModal"
            v-on:showGoodsCategoryAttrDrawer="showGoodsCategoryAttrDrawer"
            v-on:showUploadModal="showUploadModal"
            v-on:showGoodsCategoryAttributeMainModal="showGoodsCategoryAttributeMainModal"
            v-on:showParentDetailModal="showParentDetailModal"
            v-on:showSearchTableModal="showSearchTableModal"
            v-on:addChildrenCategory="addChildrenCategory"
            v-on:seeChildrenCategory="seeChildrenCategory"
            v-on:seeGoodsInfo="seeGoodsInfo"
          />
        </Card>
      </i-col>
    </Row>
    <GoodsCategoryAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" />
    <GoodsCategorySearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <GoodsCategoryDetailModal ref="detailModal" />
    <GoodsAttributeOrderModal ref="goodsAttributeOrderModal" />
    <GoodsCategoryAttrsDrawer ref="goodsCategoryAttrsDrawer" />
    <UploadModal
      ref="uploadModal"
      @search="searchTable"
      :title="uploadModal.title"
      :format="uploadModal.format"
    />
    <GoodsCategoryAttributeMainModal ref="goodsCategoryAttributeMainModal" />
    <Modal v-model="modal.searchTableModal" title="选择父类目" :mask-closable="false" width="960">
      <goodsCategoryMainSingle ref="searchTableModal" v-on:confirmChoice="confirmChoice" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('searchTableModal')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
      </div>
    </Modal>
    <Modal v-model="modal.childrenCategory" :title="'查看《' + categoryTitle + '》的子类目'" :mask-closable="false" width="960">
      <GoodsCategoryMainShow ref="seeChildrenCategory" />
      <div slot="footer">
        <Button type="default" size="large" @click="cancelModal('childrenCategory')">关闭</Button>
      </div>
    </Modal>
    <Modal v-model="modal.goodsInfo" :title="'查看《' + categoryTitle + '》的商品信息'" :mask-closable="false" width="960">
      <GoodsInfoMainShow ref="seeGoodsInfoModal" />
      <div slot="footer">
        <Button type="default" size="large" @click="cancelModal('goodsInfo')">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import GoodsCategoryTableMain from './GoodsCategoryTableMain.vue'
import GoodsCategoryAddEditModal from './GoodsCategoryAddEditModal.vue'
import GoodsCategorySearchModal from './GoodsCategorySearchModal.vue'
import GoodsCategoryDetailModal from './GoodsCategoryDetailModal.vue'
import GoodsAttributeOrderModal from '../goods-attribute/GoodsAttributeOrderModal.vue'
import GoodsCategoryAttrsDrawer from './GoodsCategoryAttrsDrawer.vue'
import goodsCategoryMainSingle from './GoodsCategoryMainSingle.vue'
import GoodsCategoryMainShow from './GoodsCategoryMainShow.vue'
import GoodsInfoMainShow from '../goods-info/GoodsInfoMainShow.vue'
import UploadModal from '_c/upload-modal'
import GoodsCategoryAttributeMainModal from '../goods-category-attr/GoodsCategoryAttributeMainModal.vue'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'GoodsCategoryMain',
  components: {
    GoodsCategoryTableMain,
    GoodsCategoryAddEditModal,
    GoodsCategorySearchModal,
    GoodsCategoryDetailModal,
    GoodsAttributeOrderModal,
    GoodsCategoryAttrsDrawer,
    UploadModal,
    GoodsCategoryAttributeMainModal,
    goodsCategoryMainSingle,
    GoodsCategoryMainShow,
    GoodsInfoMainShow
  },
  data() {
    return {
      categoryTitle: '',
      modal: {
        searchTableModal: false,
        childrenCategory: false,
        goodsInfo: false
      },
      urls: {
        batchRemoveUrl: '/goods-category/admin/batch-remove',
        batchActiveUrl: '/goods-category/admin/batch-active',
        oneUrl: '/goods-category/admin/one/'
      },
      uploadModal: {
        title: '上传封面图片',
        format: ['jpg', 'jpeg', 'png', 'bmp'],
        uploadUrl: '/goods-category/admin/upload/'
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
      addEditModal.parentName = '顶级类目'
    },
    add() {
      utils.add(this)
    },
    showEditModal(row) {
      let addEditModal = this.$refs.addEditModal
      if (row.parentId === 0) {
        addEditModal.parentName = '顶级类目'
        addEditModal.modal.edit = true
        addEditModal.form = row
      } else {
        utils
          .doGet(this.urls.oneUrl + row.parentId, {})
          .then(res => {
            if (ResponseStatus.OK === res.data.code) {
              const title = res.data.data.title
              if (title) {
                addEditModal.parentName = title
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
      }
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
    showGoodsAttrOrderModal(categoryId) {
      this.$refs.goodsAttributeOrderModal.attrsOrderModal = true
      this.$refs.goodsAttributeOrderModal.initData(categoryId)
    },
    showGoodsCategoryAttrDrawer(categoryId) {
      this.$refs.goodsCategoryAttrsDrawer.initData(categoryId)
    },
    showUploadModal(categoryId) {
      this.$refs.uploadModal.uploadUrl = this.uploadModal.uploadUrl + categoryId
      this.$refs.uploadModal.uploadModal = true
    },
    showGoodsCategoryAttributeMainModal(categoryId) {
      utils
        .doPostJson(
          '/goods-category-attr/admin/all-cond',
          {
            goodsCategoryId: categoryId,
            goodsCategoryAttributeIsAttrGroup: 1
          },
          {}
        )
        .then(response => {
          if (response.data.code === ResponseStatus.OK) {
            let goodsCategoryAttributeMainModal = this.$refs
              .goodsCategoryAttributeMainModal
            goodsCategoryAttributeMainModal.categoryAttributeModal = true
            let goodsCategoryAttributeMain =
              goodsCategoryAttributeMainModal.$refs.goodsCategoryAttributeMain
            goodsCategoryAttributeMain.selectedData = response.data.data.rows
            goodsCategoryAttributeMain.selectedDataIdProp = 'goodsAttributeId'
            goodsCategoryAttributeMain.extraData.categoryId = categoryId
            let goodsCategoryAttrSearchModal =
              goodsCategoryAttributeMain.$refs.searchModal
            goodsCategoryAttrSearchModal.searchForm.goodsCategoryId = categoryId
            goodsCategoryAttrSearchModal.searchForm.goodsCategoryIdMin = categoryId
            goodsCategoryAttrSearchModal.searchForm.goodsCategoryIdMax = categoryId
            goodsCategoryAttributeMain.searchTable()
          } else {
            this.$Message.error(response.data.message)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    /**
     * 显示父级的详情
     */
    showParentDetailModal(id) {
      if (id === 0) {
        this.$Message.warning('该类目是顶级类目')
        return
      }
      utils
          .doGet(this.urls.oneUrl + id, {})
          .then(res => {
            if (ResponseStatus.OK === res.data.code) {
              this.showDetailModal(res.data.data)
            } else {
              this.$Message.error(res.data.message)
            }
          })
          .catch(err => {
            console.log(err)
          })
    },
    /**
     * 显示模态窗
     */
    showModal(modal) {
      this.modal[modal] = true
    },
    /**
     * 取消模态窗
     */
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 显示查询的模态窗
     */
    showSearchTableModal() {
      this.modal['searchTableModal'] = true
      this.$refs.searchTableModal.searchTable()
    },
    /**
     * 底部的确认选择父级类目
     */
    bottomConfirmChoice() {
      this.$refs.searchTableModal.confirmSelection()
    },
    /**
     * 确认选择父级类目
     */
    confirmChoice(row) {
      this.modal['searchTableModal'] = false
      let searchModal = this.$refs.searchModal
      searchModal.searchForm.parentIdMin = searchModal.searchForm.parentIdMax = row.id
      this.searchTable()
    },
    /**
     * 添加子类目
     */
    addChildrenCategory(row) {
      let addEditModal = this.$refs.addEditModal
      addEditModal.modal.add = true
      addEditModal.parentName = row.title
      addEditModal.form.parentId = row.id
      addEditModal.form.categoryLevel = row.categoryLevel + 1
    },
    /**
     * 查看子类目
     */
    seeChildrenCategory(row) {
      this.showModal('childrenCategory')
      this.categoryTitle = row.title
      let seeChildrenCategory = this.$refs.seeChildrenCategory
      let searchModal = seeChildrenCategory.$refs.searchModal
      searchModal.searchForm.parentIdMin = row.id
      searchModal.searchForm.parentIdMax = row.id
      seeChildrenCategory.searchTable()
    },
    /**
     * 查看商品
     */
    seeGoodsInfo(row) {
      this.showModal('goodsInfo')
      this.categoryTitle = row.title
      let seeGoodsInfoModal = this.$refs.seeGoodsInfoModal
      let searchModal = seeGoodsInfoModal.$refs.searchModal
      searchModal.searchForm.categoryIdMin = row.id
      searchModal.searchForm.categoryIdMax = row.id
      seeGoodsInfoModal.searchTable()
    }
  }
}
</script>

<style>
</style>
