<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">订单项编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.orderId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU图片编号：</span><span v-text="form.skuPicId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">售卖标题：</span><span v-text="form.skuTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU属性JSON：</span><span v-text="form.skuInfo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">购买数量：</span><span v-text="form.quantity"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">实付金额（元）：</span><span v-text="form.payAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠金额（元）：</span><span v-text="form.discountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.integralAmount"></span></i-col>
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
        name: 'GoodsOrderItemDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
orderId: null,
goodsId: null,
goodsSkuId: null,
skuPicId: null,
skuTitle: null,
skuInfo: null,
quantity: null,
payAmount: null,
discountAmount: null,
integralAmount: null,
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
