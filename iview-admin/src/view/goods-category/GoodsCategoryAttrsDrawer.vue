<template>
  <div>
    <Drawer title="选择商品属性" v-model="goodsCategoryAttrsDrawer" width="900" @on-close="closeDrawer">
      <GoodsAttributeMainMultiple ref="goodsAttributeMainMultiple" @closeDrawer="closeDrawer"/>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="closeDrawer">取消</Button>
        <Button type="primary" @click="updateAttrs">确认选择</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import GoodsAttributeMainMultiple from '@/view/goods-attribute/GoodsAttributeMainMultiple.vue'
import { getAttrsByCategory } from '@/api/goods_attribute'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'GoodsCategoryAttrsDrawer',
  components: {
    GoodsAttributeMainMultiple
  },
  data() {
    return {
      goodsCategoryAttrsDrawer: false
    }
  },
  computed: {},
  mounted() {},
  methods: {
    initData(id) {
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
    }
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
