<template>
  <div>
    <Row>
      <i-col span="24">
        <Card>
          <Button @click="setAttrGroup" type="primary">设置属性组合</Button>&nbsp;
          <Button @click="showSearchModal" type="primary">高级搜索</Button>&nbsp;
          <Tooltip content="刷新" placement="right">
            <Button icon="md-refresh" type="success" shape="circle" @click="searchTable"></Button>
          </Tooltip>
          <GoodsCategoryAttributeTable
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showDetailModal="showDetailModal"
            v-on:showAttrDetailModal="showAttrDetailModal"
            v-on:showSearchTableModal="showSearchTableModal"
          />
        </Card>
      </i-col>
    </Row>
    <GoodsCategoryAttributeSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <GoodsCategoryAttributeDetailModal ref="detailModal" />
    <GoodsAttributeDetailModal ref="attrDetailModal" />
    <Modal v-model="modal.searchTableModal" title="选择商品属性" :mask-closable="false" width="960">
      <goodsAttributeMainSingle ref="searchTableModal" v-on:confirmChoice="confirmChoice" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('searchTableModal')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import GoodsCategoryAttributeTable from './GoodsCategoryAttributeTable.vue'
import GoodsCategoryAttributeSearchModal from './GoodsCategoryAttributeSearchModal.vue'
import GoodsCategoryAttributeDetailModal from './GoodsCategoryAttributeDetailModal.vue'
import GoodsAttributeDetailModal from '../goods-attribute/GoodsAttributeDetailModal.vue'
import goodsAttributeMainSingle from '../goods-attribute/GoodsAttributeMainSingle.vue'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'GoodsCategoryAttributeMain',
  components: {
    GoodsCategoryAttributeTable,
    GoodsCategoryAttributeSearchModal,
    GoodsCategoryAttributeDetailModal,
    GoodsAttributeDetailModal,
    goodsAttributeMainSingle
  },
  data() {
    return {
      modal: {
        searchTableModal: false
      },
      urls: {
        oneUrl: '/goods-attribute/admin/one/'
      },
      selectedData: [],
      selectedDataIdProp: '',
      extraData: {}
    }
  },
  computed: {},
  mounted() {},
  methods: {
    searchTable() {
      // utils.search(this)
      utils.initSelectTableData(this, 'goodsAttributeId')
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
    setAttrGroup() {
      let tableComponent = this.$refs.table
      if (tableComponent.table.selections.length === 0) {
        this.$Message.warning('请先选择需要设置为属性组合的属性')
        return
      }
      this.$Spin.show()
      // 保存属性排序
      var params = []
      tableComponent.table.selections.forEach((item, index) => {
        params.push({
          goodsCategoryId: this.extraData.categoryId,
          goodsAttributeId: item.goodsAttributeId,
          goodsCategoryAttributeIsAttrGroup: 1
        })
      })
      utils
        .doPostJson('/goods-category-attr/admin/update-attr-group', params, {})
        .then(response => {
          this.$Spin.hide()
          if (response.data.code === ResponseStatus.OK) {
            this.$emit('closeModal')
            this.$Message.success('成功设置类目属性组合')
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    showSearchTableModal() {
      this.modal['searchTableModal'] = true
    },
    /**
     * 取消模态窗
     */
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 显示商品属性的详情
     */
    showAttrDetailModal(id) {
      utils
        .doGet(this.urls.oneUrl + id, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            const row = res.data.data
            let detailModal = this.$refs.attrDetailModal
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
     * 底部的确认选择属性类目
     */
    bottomConfirmChoice() {
      this.$refs.searchTableModal.confirmSelection()
    },
    /**
     * 确认选择商品属性
     */
    confirmChoice(row) {
      this.modal['searchTableModal'] = false
      this.$refs.searchModal.searchForm.goodsAttributeIdMin = this.$refs.searchModal.searchForm.goodsAttributeIdMax = row.id
      this.searchTable()
    },
  }
}
</script>

<style>
</style>
