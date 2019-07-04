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
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.goodsOrderId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单号：</span><span v-text="form.goodsOrderOrderNo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单金额（元）：</span><span v-text="form.goodsOrderTotalAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">实付金额（元）：</span><span v-text="form.goodsOrderPayAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠金额（元）：</span><span v-text="form.goodsOrderDiscountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.goodsOrderIntegralAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">运费（元）：</span><span v-text="form.goodsOrderExpressFee"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单状态：</span><span v-text="form.goodsOrderOrderStatus"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付时间：</span><span v-text="form.goodsOrderPayTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付方式：</span><span v-text="form.goodsOrderPayType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付订单号：</span><span v-text="form.goodsOrderTransactionNo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否支付成功：</span><span v-text="form.goodsOrderPaySuccess"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">发货时间：</span><span v-text="form.goodsOrderDeliverTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">成交时间：</span><span v-text="form.goodsOrderDealTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">收货人：</span><span v-text="form.goodsOrderLogisticsRealName"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.goodsOrderLogisticsPhone"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">省：</span><span v-text="form.goodsOrderLogisticsProvince"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">市：</span><span v-text="form.goodsOrderLogisticsCity"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">区/县：</span><span v-text="form.goodsOrderLogisticsDistrict"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">详细地址：</span><span v-text="form.goodsOrderLogisticsAddress"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否已发货：</span><span v-text="form.goodsOrderLogisticsIsDeliver"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">物流公司名称：</span><span v-text="form.goodsOrderLogisticsLogisticsCompany"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">物流公司编码：</span><span v-text="form.goodsOrderLogisticsLogisticsCode"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">物流单号：</span><span v-text="form.goodsOrderLogisticsLogisticsNo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsOrderLogisticsVersion"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsOrderLogisticsCreateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsOrderLogisticsUpdateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsOrderLogisticsIsActive"></span></i-col>
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsOrderLogisticsDetail',
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
goodsOrderLogisticsRealName: null,
goodsOrderLogisticsPhone: null,
goodsOrderLogisticsProvince: null,
goodsOrderLogisticsCity: null,
goodsOrderLogisticsDistrict: null,
goodsOrderLogisticsAddress: null,
goodsOrderLogisticsIsDeliver: null,
goodsOrderLogisticsLogisticsCompany: null,
goodsOrderLogisticsLogisticsCode: null,
goodsOrderLogisticsLogisticsNo: null,
goodsOrderLogisticsVersion: null,
goodsOrderLogisticsCreateTime: null,
goodsOrderLogisticsUpdateTime: null,
goodsOrderLogisticsIsActive: null,

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
