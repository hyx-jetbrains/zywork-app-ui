<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">优惠券编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品类目编号：</span><span v-text="form.categoryId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠券标题：</span><span v-text="form.title"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">最小消费金额（元）：</span><span v-text="form.useMinAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">满减优惠金额（元）：</span><span v-text="form.discountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">满减折扣：</span><span v-text="form.discountPercent"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.integralAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠券总量：</span><span v-text="form.totalCount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠券使用范围：</span><span v-text="form.couponUsableRange"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠券类型：</span><span v-text="form.couponType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">开始时间：</span><span v-text="form.startTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">到期时间：</span><span v-text="form.dueTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">有效时间：</span><span v-text="form.validDays"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsCouponDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
categoryId: null,
shopId: null,
goodsId: null,
goodsSkuId: null,
title: null,
useMinAmount: null,
discountAmount: null,
discountPercent: null,
integralAmount: null,
totalCount: null,
couponUsableRange: null,
couponType: null,
startTime: null,
dueTime: null,
validDays: null,
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
