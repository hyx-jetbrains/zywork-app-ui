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
	<i-col span="11"><span class="detail-title">商品评论编号：</span><span v-text="form.goodsCommentId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsCommentGoodsId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsCommentGoodsSkuId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">售卖标题：</span><span v-text="form.goodsCommentSkuTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU规格信息：</span><span v-text="form.goodsCommentSkuInfo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">购买数量：</span><span v-text="form.goodsCommentQuantity"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">评论等级：</span><span v-text="form.goodsCommentCommentLevel"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">评分星级：</span><span v-text="form.goodsCommentCommentRate"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">评论详情：</span><span v-text="form.goodsCommentComments"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">追加评论：</span><span v-text="form.goodsCommentAppendComment"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">回复详情：</span><span v-text="form.goodsCommentReply"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">置顶状态：</span><span v-text="form.goodsCommentStickStatus"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.goodsCommentVersion"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsCommentCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.goodsCommentUpdateTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.goodsCommentIsActive"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsCommentDetail',
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
goodsCommentId: null,
goodsCommentGoodsId: null,
goodsCommentGoodsSkuId: null,
goodsCommentSkuTitle: null,
goodsCommentSkuInfo: null,
goodsCommentQuantity: null,
goodsCommentCommentLevel: null,
goodsCommentCommentRate: null,
goodsCommentComments: null,
goodsCommentAppendComment: null,
goodsCommentReply: null,
goodsCommentStickStatus: null,
goodsCommentVersion: null,
goodsCommentCreateTime: null,
goodsCommentUpdateTime: null,
goodsCommentIsActive: null,

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
