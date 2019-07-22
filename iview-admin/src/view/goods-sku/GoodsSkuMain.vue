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
    <DistributionRatioModal
      ref="distributionRatioModal"
      v-on:setDistributionRatio="setDistributionRatio"
    />
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
        batchActiveUrl: '/goods-sku/admin/batch-active',
        batchSaveUrl: '/goods-commission/admin/batch-save',
        listCommissionUrl: '/goods-commission/admin/all-cond',
        listRoleUrl: '/role/admin/list-distribution-roles',
        distributionLevelUrl: '/distribution/admin/distribution-level'
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
      const goodsId = row.goodsId
      const goodsSkuId = row.id
      let distributionRatioModal = this.$refs.distributionRatioModal
      distributionRatioModal.setModal = true
      distributionRatioModal.goodsId = goodsId
      distributionRatioModal.goodsSkuId = goodsSkuId
      distributionRatioModal.title = '配置商品SKU的分销佣金比例'
      const params = {
        goodsId: goodsId,
        goodsSkuId: goodsSkuId,
        isActive: 0
      }
      this.loadData(params, distributionRatioModal)
    },
    /**
     * 请求后台接口，获取数据
     */
    loadData(param, distributionRatioModal) {
      // 先请求分销比例表
      utils
        .doPostJson(this.urls.listCommissionUrl, param, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            // 成功获取分销比例列表，继续获取角色
            let commissionList = res.data.data.rows
            utils
              .doGet(this.urls.listRoleUrl, {})
              .then(res1 => {
                if (ResponseStatus.OK === res1.data.code) {
                  // 成功获取角色列表，继续获取分销等级
                  let roleList = res1.data.data.rows
                  utils
                    .doGet(this.urls.distributionLevelUrl, {})
                    .then(res2 => {
                      if (ResponseStatus.OK === res2.data.code) {
                        // 成功获取分销等级，开始处理数据
                        let level = res2.data.data - 1
                        let levelArr = []
                        for (var i = 0; i < level; i++) {
                          levelArr.push(1 + i)
                        }
                        let rolesArr = []
                        let data = []
                        const commissionLen = commissionList.length
                        const roleLen = roleList.length
                        for (var i = 0; i < roleLen; i++) {
                          let roleItem = roleList[i]
                          let itemData = []
                          for (var j = 0; j < commissionLen; j++) {
                            let commissionItem = commissionList[j]
                            if (roleItem.id === commissionItem.roleId) {
                              itemData.push(commissionItem.commissionPercent)
                            }
                          }
                          rolesArr.push(roleItem)
                          data.push(itemData)
                        }
                        distributionRatioModal.rolesArr = rolesArr
                        distributionRatioModal.levelArr = levelArr
                        distributionRatioModal.ratioData = data
                      } else {
                        this.$Message.error(res2.data.message)
                      }
                    })
                    .catch(err2 => {
                      console.log(err2)
                    })
                } else {
                  this.$Message.error(res1.data.message)
                }
              })
              .catch(err1 => {
                console.log(err1)
              })
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * 设置分销比例
     */
    setDistributionRatio(listData) {
      let distributionRatioModal = this.$refs.distributionRatioModal
      distributionRatioModal.setLoading = true
      utils
        .doPostJson(this.urls.batchSaveUrl, listData, {})
        .then(res => {
          distributionRatioModal.setLoading = false
          if (ResponseStatus.OK === res.data.code) {
            distributionRatioModal.setModal = false
            this.$Message.success('分配成功')
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
