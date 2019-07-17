<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">昵称：</span><span v-text="form.userDetailNickname"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">头像地址：</span><span v-text="form.userDetailHeadicon"></span></i-col>

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
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsOrderDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userDetailNickname: null,
userDetailHeadicon: null,
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
