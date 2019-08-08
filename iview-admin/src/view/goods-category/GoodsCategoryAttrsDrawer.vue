<template>
  <div>
    <Drawer title="选择商品属性" v-model="goodsCategoryAttrsDrawer" width="960" @on-close="closeDrawer">
      <GoodsAttributeMainMultiple ref="goodsAttributeMainMultiple" @closeDrawer="closeDrawer" @showCategoryModal="showCategoryModal"/>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="closeDrawer">取消</Button>
        <Button type="primary" @click="updateAttrs">确认选择</Button>
      </div>
    </Drawer>
    <Modal v-model="modal.choice" title="选择需要引用属性的类目" :mask-closable="false" width="960">
      <GoodsCategoryMainSingle ref="choiceModal" v-on:confirmChoice="confirmChoice" />
      <div slot="footer">
         <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
         <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>         </div>
    </Modal>
  </div>
</template>

<script>
import GoodsAttributeMainMultiple from '@/view/goods-attribute/GoodsAttributeMainMultiple.vue'
import GoodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
import { getAttrsByCategory } from '@/api/goods_attribute'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'GoodsCategoryAttrsDrawer',
  components: {
    GoodsAttributeMainMultiple,
    GoodsCategoryMainSingle
  },
  data() {
    return {
      goodsCategoryAttrsDrawer: false,
      modal: {
        choice: false
      },
      urls: {
        listCategoryAttrUrl: '/goods-category-attr/admin/list-by-category/'
      },
      goodsCategoryId: null
    }
  },
  computed: {},
  mounted() {},
  methods: {
    initData(id) {
      this.goodsCategoryId = id
      var params = {
        goodsCategoryId: id
      }
      getAttrsByCategory(params).then(res => {
          const data = res.data
          if (data.code !== ResponseStatus.OK) {
            this.$Message.error(data.message)
            return
          }
          let goodsAttributeMainMultiple = this.$refs.goodsAttributeMainMultiple
          this.goodsCategoryAttrsDrawer = true
          goodsAttributeMainMultiple.selectedData = data.data.rows
          goodsAttributeMainMultiple.selectedDataIdProp = 'goodsAttributeId'
          goodsAttributeMainMultiple.extraData.categoryId = id
          goodsAttributeMainMultiple.searchTable()
        }).catch(err => {
          this.$Message.error(err)
        })
    },
    closeDrawer() {
      // 关闭抽屉清空选择项
      this.goodsCategoryAttrsDrawer = false
      this.$refs.goodsAttributeMainMultiple.cancelSelect()
    },
    updateAttrs() {
      this.$refs.goodsAttributeMainMultiple.confirmSelection()
    },
    showModal(modal) {
      utils.showModal(this, modal)
    },
    cancelModal(modal) {
      utils.cancelModal(this, modal)
    },
    /**
     * 显示选择需要引用类目的属性弹窗
      */
    showCategoryModal() {
      this.showModal('choice')
      let choiceModal = this.$refs.choiceModal
      let searchModal = choiceModal.$refs.searchModal
      // 只能引用3级类目的属性
      searchModal.searchForm.categoryLevel = 3
      choiceModal.searchTable()
    },
    /**
     * 底部的确认选择
     */
    bottomConfirmChoice() {
      this.$refs.choiceModal.confirmSelection()
    },
    /**
     * 确认选择
    */
  confirmChoice(row) {
    if (this.goodsCategoryId === row.id) {
      this.$Message.error('不能引用该类目的属性，请选择其他类目')
      return
    }
    var params = {
      goodsCategoryId: row.id
    }
    getAttrsByCategory(params).then(res => {
      const data = res.data
      if (data.code !== ResponseStatus.OK) {
       this.$Message.error(data.message)
       return
      }
      if (data.data.total <= 0) {
        this.$Message.error('该类目还没有分配属性，请选择其他的类目')
       return
      }
      let goodsAttributeMainMultiple = this.$refs.goodsAttributeMainMultiple
      goodsAttributeMainMultiple.selectedData = data.data.rows
      goodsAttributeMainMultiple.selectedDataIdProp = 'goodsAttributeId'
      goodsAttributeMainMultiple.extraData.categoryId = this.goodsCategoryId
      goodsAttributeMainMultiple.searchTable()
      this.cancelModal('choice')
    }).catch(err => {
      this.$Message.error(err)
    })
  },
  }
}
</script>

<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>
