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
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">性别：</span><span v-text="form.userDetailGender"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠券编号：</span><span v-text="form.goodsCouponId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品类目编号：</span><span v-text="form.goodsCouponCategoryId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.goodsCouponShopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsCouponGoodsId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品SKU编号：</span><span v-text="form.goodsCouponGoodsSkuId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠券标题：</span><span v-text="form.goodsCouponTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">最小消费金额（元）：</span><span v-text="form.goodsCouponUseMinAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">满减优惠金额（元）：</span><span v-text="form.goodsCouponDiscountAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">满减折扣：</span><span v-text="form.goodsCouponDiscountPercent"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">赠送积分：</span><span v-text="form.goodsCouponIntegralAmount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠券总量：</span><span v-text="form.goodsCouponTotalCount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠券使用范围：</span><span v-text="form.goodsCouponCouponUsableRange"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠券类型：</span><span v-text="form.goodsCouponCouponType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">开始时间：</span><span v-text="form.goodsCouponStartTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">到期时间：</span><span v-text="form.goodsCouponDueTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">有效时间：</span><span v-text="form.goodsCouponValidDays"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">领券编号：</span><span v-text="form.goodsUserCouponId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠券状态：</span><span v-text="form.goodsUserCouponCouponStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsUserCouponVersion"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsUserCouponCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsUserCouponUpdateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsUserCouponIsActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsCouponDetail',
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
userDetailGender: null,
goodsCouponId: null,
goodsCouponCategoryId: null,
goodsCouponShopId: null,
goodsCouponGoodsId: null,
goodsCouponGoodsSkuId: null,
goodsCouponTitle: null,
goodsCouponUseMinAmount: null,
goodsCouponDiscountAmount: null,
goodsCouponDiscountPercent: null,
goodsCouponIntegralAmount: null,
goodsCouponTotalCount: null,
goodsCouponCouponUsableRange: null,
goodsCouponCouponType: null,
goodsCouponStartTime: null,
goodsCouponDueTime: null,
goodsCouponValidDays: null,
goodsUserCouponId: null,
goodsUserCouponCouponStatus: null,
goodsUserCouponVersion: null,
goodsUserCouponCreateTime: null,
goodsUserCouponUpdateTime: null,
goodsUserCouponIsActive: null,

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
