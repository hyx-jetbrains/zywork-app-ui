<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsInfoId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.goodsInfoShopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">类目编号：</span><span v-text="form.goodsInfoCategoryId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品标题：</span><span v-text="form.goodsInfoTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">图文详情：</span><span v-text="form.goodsInfoIntro"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">上架状态：</span><span v-text="form.goodsInfoShelfStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">销量：</span><span v-text="form.goodsInfoSaleCount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">点击数：</span><span v-text="form.goodsInfoClickCount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsInfoCreateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsInfoIsActive"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺Logo：</span><span v-text="form.goodsShopLogo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺标题：</span><span v-text="form.goodsShopTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺等级：</span><span v-text="form.goodsShopLevel"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">上架状态：</span><span v-text="form.goodsSkuShelfStatus"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsSkuCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品图片编号：</span><span v-text="form.goodsPicId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">图片URL：</span><span v-text="form.goodsPicPicUrl"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">图片顺序：</span><span v-text="form.goodsPicPicOrder"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">属性编号：</span><span v-text="form.goodsCategoryAttributeAttrId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">属性排序：</span><span v-text="form.goodsCategoryAttributeAttrOrder"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否属性组合：</span><span v-text="form.goodsCategoryAttributeIsAttrGroup"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">属性名称：</span><span v-text="form.goodsAttributeAttrName"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">属性代码：</span><span v-text="form.goodsAttributeAttrCode"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">数据类型：</span><span v-text="form.goodsAttributeAttrType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">数据长度：</span><span v-text="form.goodsAttributeAttrLength"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否必填：</span><span v-text="form.goodsAttributeAttrRequired"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否前端显示：</span><span v-text="form.goodsAttributeAttrDisplay"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">属性值：</span><span v-text="form.goodsAttributeValueAttrValue"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsAttributeValueCreateTime"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsSkuAttributeValueDetail',
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
goodsInfoIsActive: null,
goodsShopLogo: null,
goodsShopTitle: null,
goodsShopLevel: null,
goodsSkuId: null,
goodsSkuShelfStatus: null,
goodsSkuCreateTime: null,
goodsPicId: null,
goodsPicPicUrl: null,
goodsPicPicOrder: null,
goodsCategoryAttributeAttrId: null,
goodsCategoryAttributeAttrOrder: null,
goodsCategoryAttributeIsAttrGroup: null,
goodsAttributeAttrName: null,
goodsAttributeAttrCode: null,
goodsAttributeAttrType: null,
goodsAttributeAttrLength: null,
goodsAttributeAttrRequired: null,
goodsAttributeAttrDisplay: null,
goodsAttributeValueAttrValue: null,
goodsAttributeValueCreateTime: null,

                }
            }
        },
        computed: {},
        mounted() {},
        methods: {}
    }
</script>

<style>
    .detail-info .ivu-col{
        margin-bottom: 10px;
    }

    .detail-title {
        font-weight: bold;
    }
</style>
