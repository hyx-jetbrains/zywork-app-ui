<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">订单账目编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.orderId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">交易编号：</span><span v-text="form.transactionNo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">总金额：</span><span v-text="form.totalAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">实付金额：</span><span v-text="form.payAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">总优惠金额：</span><span v-text="form.discountAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">平台优惠金额：</span><span v-text="form.platDiscountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺优惠金额：</span><span v-text="form.shopDiscountAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺分账金额：</span><span v-text="form.shopAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">账目状态：</span><span v-text="form.accountStatus"></span></i-col>
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
        name: 'GoodsOrderAccountDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
shopId: null,
orderId: null,
transactionNo: null,
totalAmount: null,
payAmount: null,
discountAmount: null,
platDiscountAmount: null,
shopDiscountAmount: null,
shopAmount: null,
accountStatus: null,
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
