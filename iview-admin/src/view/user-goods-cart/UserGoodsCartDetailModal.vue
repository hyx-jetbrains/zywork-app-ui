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
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">购物编号：</span><span v-text="form.goodsCartId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">购买数量：</span><span v-text="form.goodsCartQuantity"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.goodsCartCreateTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.goodsShopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺Logo：</span><span v-text="form.goodsShopLogo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺标题：</span><span v-text="form.goodsShopTitle"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsInfoId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品标题：</span><span v-text="form.goodsInfoTitle"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品图片编号：</span><span v-text="form.goodsPicId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">图片URL：</span><span v-text="form.goodsPicPicUrl"></span></i-col>

</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsCartDetail',
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
goodsCartId: null,
goodsCartQuantity: null,
goodsCartCreateTime: null,
goodsShopId: null,
goodsShopLogo: null,
goodsShopTitle: null,
goodsInfoId: null,
goodsInfoTitle: null,
goodsSkuId: null,
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
