<template>
  <div>
    <Modal v-model="modal.detail" title="详情" width="760">
      <div class="detail-info">
        <Row>
          <i-col span="11">
            <span class="detail-title">商品编号：</span>
            <span v-text="form.goodsInfoId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">店铺编号：</span>
            <span v-text="form.goodsInfoShopId"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">类目编号：</span>
            <span v-text="form.goodsInfoCategoryId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">商品标题：</span>
            <span v-text="form.goodsInfoTitle"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">图片顺序：</span>
            <span v-text="form.goodsPicPicOrder"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">商品上架状态：</span>
            <span v-text="form.goodsInfoShelfStatus"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">销量：</span>
            <span v-text="form.goodsInfoSaleCount"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">点击数：</span>
            <span v-text="form.goodsInfoClickCount"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">创建时间：</span>
            <span v-text="form.goodsInfoCreateTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">店铺Logo：</span>
            <span v-text="form.goodsShopLogo"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">店铺标题：</span>
            <span v-text="form.goodsShopTitle"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">店铺等级：</span>
            <span v-text="form.goodsShopLevel"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">SKU编号：</span>
            <span v-text="form.goodsSkuId"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">SKU上架状态：</span>
            <span v-text="form.goodsSkuShelfStatus"></span>
          </i-col>
        </Row>
        <Row>
          <i-col span="11">
            <span class="detail-title">创建时间：</span>
            <span v-text="form.goodsSkuCreateTime"></span>
          </i-col>
          <i-col span="2"></i-col>
          <i-col span="11">
            <span class="detail-title">图片URL：</span>
            <span v-text="form.goodsPicPicUrl"></span>
          </i-col>
        </Row>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfoSkuPicDetail',
  data() {
    return {
      modal: {
        detail: false
      },
      form: {
        goodsInfoId: null,
        goodsInfoShopId: null,
        goodsInfoCategoryId: null,
        goodsInfoTitle: null,
        goodsInfoIntro: null,
        goodsInfoShelfStatus: null,
        goodsInfoSaleCount: null,
        goodsInfoClickCount: null,
        goodsInfoCreateTime: null,
        goodsShopLogo: null,
        goodsShopTitle: null,
        goodsShopLevel: null,
        goodsSkuId: null,
        goodsSkuShelfStatus: null,
        goodsSkuCreateTime: null,
        goodsPicPicUrl: null,
        goodsPicPicOrder: null
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style>
.detail-info .ivu-col {
  margin-bottom: 10px;
}

.detail-title {
  font-weight: bold;
}
</style>
