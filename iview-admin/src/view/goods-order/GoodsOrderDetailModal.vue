<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单号：</span><span v-text="form.orderNo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单金额（元）：</span><span v-text="form.totalAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">实付金额（元）：</span><span v-text="form.payAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠金额（元）：</span><span v-text="form.discountAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.integralAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">运费（元）：</span><span v-text="form.expressFee"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单状态：</span><span v-text="form.orderStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付时间：</span><span v-text="form.payTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付方式：</span><span v-text="form.payType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付订单号：</span><span v-text="form.transactionNo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否支付成功：</span><span v-text="form.paySuccess"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">发货时间：</span><span v-text="form.deliverTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">成交时间：</span><span v-text="form.dealTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单备注：</span><span v-text="form.remark"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col>
<i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsOrderDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
shopId: null,
orderNo: null,
totalAmount: null,
payAmount: null,
discountAmount: null,
integralAmount: null,
expressFee: null,
orderStatus: null,
payTime: null,
payType: null,
transactionNo: null,
paySuccess: null,
deliverTime: null,
dealTime: null,
remark: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

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
