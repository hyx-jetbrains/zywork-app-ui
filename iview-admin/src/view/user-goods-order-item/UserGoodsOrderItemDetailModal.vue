<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">昵称：</span><span v-text="form.userDetailNickname"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">头像地址：</span><span v-text="form.userDetailHeadicon"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.goodsShopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺Logo：</span><span v-text="form.goodsShopLogo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺标题：</span><span v-text="form.goodsShopTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.goodsOrderId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单号：</span><span v-text="form.goodsOrderOrderNo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单金额（元）：</span><span v-text="form.goodsOrderTotalAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">实付金额（元）：</span><span v-text="form.goodsOrderPayAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠金额（元）：</span><span v-text="form.goodsOrderDiscountAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.goodsOrderIntegralAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">运费（元）：</span><span v-text="form.goodsOrderExpressFee"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单状态：</span><span v-text="form.goodsOrderOrderStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付时间：</span><span v-text="form.goodsOrderPayTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付方式：</span><span v-text="form.goodsOrderPayType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付订单号：</span><span v-text="form.goodsOrderTransactionNo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否支付成功：</span><span v-text="form.goodsOrderPaySuccess"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">发货时间：</span><span v-text="form.goodsOrderDeliverTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">成交时间：</span><span v-text="form.goodsOrderDealTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单备注：</span><span v-text="form.goodsOrderRemark"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsOrderVersion"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsOrderCreateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsOrderUpdateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsOrderIsActive"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsOrderItemGoodsId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsOrderItemGoodsSkuId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">售卖标题：</span><span v-text="form.goodsOrderItemSkuTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU规格信息：</span><span v-text="form.goodsOrderItemSkuInfo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">购买数量：</span><span v-text="form.goodsOrderItemQuantity"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">实付金额（元）：</span><span v-text="form.goodsOrderItemPayAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠金额（元）：</span><span v-text="form.goodsOrderItemDiscountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.goodsOrderItemIntegralAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品图片编号：</span><span v-text="form.goodsPicId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">图片URL：</span><span v-text="form.goodsPicPicUrl"></span></i-col>
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsOrderItemDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userEmail: null,
userDetailNickname: null,
userDetailHeadicon: null,
goodsShopId: null,
goodsShopLogo: null,
goodsShopTitle: null,
goodsOrderId: null,
goodsOrderOrderNo: null,
goodsOrderTotalAmount: null,
goodsOrderPayAmount: null,
goodsOrderDiscountAmount: null,
goodsOrderIntegralAmount: null,
goodsOrderExpressFee: null,
goodsOrderOrderStatus: null,
goodsOrderPayTime: null,
goodsOrderPayType: null,
goodsOrderTransactionNo: null,
goodsOrderPaySuccess: null,
goodsOrderDeliverTime: null,
goodsOrderDealTime: null,
goodsOrderRemark: null,
goodsOrderVersion: null,
goodsOrderCreateTime: null,
goodsOrderUpdateTime: null,
goodsOrderIsActive: null,
goodsOrderItemGoodsId: null,
goodsOrderItemGoodsSkuId: null,
goodsOrderItemSkuTitle: null,
goodsOrderItemSkuInfo: null,
goodsOrderItemQuantity: null,
goodsOrderItemPayAmount: null,
goodsOrderItemDiscountAmount: null,
goodsOrderItemIntegralAmount: null,
goodsPicId: null,
goodsPicPicUrl: null,

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
