<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.goodsShopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.goodsShopUserId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">类目编号：</span><span v-text="form.goodsShopCategoryId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">主体类型：</span><span v-text="form.goodsShopSubjectType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺Logo：</span><span v-text="form.goodsShopLogo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺标题：</span><span v-text="form.goodsShopTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺简介：</span><span v-text="form.goodsShopIntro"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺等级：</span><span v-text="form.goodsShopLevel"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺认证编号：</span><span v-text="form.goodsShopCertificationId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">认证详情JSON：</span><span v-text="form.goodsShopCertificationDetail"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺审核编号：</span><span v-text="form.goodsShopCheckId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核状态：</span><span v-text="form.goodsShopCheckCheckStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">审核描述：</span><span v-text="form.goodsShopCheckCheckDescription"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核人编号：</span><span v-text="form.goodsShopCheckCheckedUserId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsShopCheckVersion"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsShopCheckCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsShopCheckUpdateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsShopCheckIsActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'GoodsShopCertificationCheckDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    goodsShopId: null,
goodsShopUserId: null,
goodsShopCategoryId: null,
goodsShopSubjectType: null,
goodsShopLogo: null,
goodsShopTitle: null,
goodsShopIntro: null,
goodsShopLevel: null,
goodsShopCertificationId: null,
goodsShopCertificationDetail: null,
goodsShopCheckId: null,
goodsShopCheckCheckStatus: null,
goodsShopCheckCheckDescription: null,
goodsShopCheckCheckedUserId: null,
goodsShopCheckVersion: null,
goodsShopCheckCreateTime: null,
goodsShopCheckUpdateTime: null,
goodsShopCheckIsActive: null,

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
