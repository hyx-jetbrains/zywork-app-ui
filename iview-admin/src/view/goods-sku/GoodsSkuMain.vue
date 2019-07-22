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
          <GoodsSkuTableMain
            ref="table"
            v-on:searchTable="searchTable"
            v-on:showEditModal="showEditModal"
            v-on:showDetailModal="showDetailModal"
            v-on:showGoodsSkuPicModal="showGoodsSkuPicModal"
            v-on:showSkuDetailModal="showSkuDetailModal"
            v-on:showDistributionRatio="showDistributionRatio"
          />
        </Card>
      </i-col>
    </Row>
    <GoodsSkuAddEditModal ref="addEditModal" v-on:add="add" v-on:edit="edit" />
    <GoodsSkuSearchModal ref="searchModal" v-on:searchTable="searchTable" />
    <GoodsSkuDetailModal ref="detailModal" />
    <GoodsSkuPicModal ref="goodsSkuPicModal" v-on:searchTable="searchTable" />
    <SkuDetailModal ref="skuDetailModal" />
    <DistributionRatioModal ref="distributionRatioModal" />
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
import GoodsSkuTableMain from './GoodsSkuTableMain.vue'
import GoodsSkuAddEditModal from './GoodsSkuAddEditModal.vue'
import GoodsSkuSearchModal from './GoodsSkuSearchModal.vue'
import GoodsSkuDetailModal from './GoodsSkuDetailModal.vue'
import GoodsSkuPicModal from './GoodsSkuPicModal.vue'
import DistributionRatioModal from '_c/distribution-ratio-modal'
import SkuDetailModal from '_c/sku-detail-modal'
export default {
  name: 'GoodsSkuMain',
  components: {
    GoodsSkuTableMain,
    GoodsSkuAddEditModal,
    GoodsSkuSearchModal,
    GoodsSkuDetailModal,
    GoodsSkuPicModal,
    SkuDetailModal,
    DistributionRatioModal
  },
  data() {
    return {
      urls: {
        batchRemoveUrl: '/goods-sku/admin/batch-remove',
        batchActiveUrl: '/goods-sku/admin/batch-active'
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
    showGoodsSkuPicModal(row) {
      let goodsSkuPicModal = this.$refs.goodsSkuPicModal
      goodsSkuPicModal.goodsId = row.goodsId
      goodsSkuPicModal.skuId = row.id
      goodsSkuPicModal.currentPicId = row.picId
      goodsSkuPicModal.modal.imgModal = true
      goodsSkuPicModal.loadPics()
    },
    showSkuDetailModal(row) {
      let skuDetailModal = this.$refs.skuDetailModal
      skuDetailModal.modal.skuDetailModal = true
      utils
        .doGet('/goods-info/admin/one/' + row.goodsId, {})
        .then(response => {
          if (response.data.data) {
            skuDetailModal.categoryId = response.data.data.categoryId
            skuDetailModal.skuId = row.id
            skuDetailModal.chooseSkuId = row.id
            skuDetailModal.goodsId = row.goodsId
            skuDetailModal.loadSkusByGoodsId()
            skuDetailModal.loadAllAttrVals()
          } else {
            this.$Message.error('未查询到商品对应的类目')
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    /**
     * 显示分销比例配置弹窗
     */
    showDistributionRatio(row) {
      let distributionRatioModal = this.$refs.distributionRatioModal
      distributionRatioModal.title = '配置商品SKU的分销佣金比例'
      const params = {
        goodsId: row.goodsId,
        goodsSkuId: row.id,
        isActive: 0
      }
      distributionRatioModal.loadData(params, 'goodsSku', row.id)
    }
  }
}
</script>

<style>
</style>
