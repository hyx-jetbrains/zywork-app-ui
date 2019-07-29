<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">商品评论编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">售卖标题：</span><span v-text="form.skuTitle"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">SKU规格信息：</span><span v-text="form.skuInfo"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">购买数量：</span><span v-text="form.quantity"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">评论等级：</span><span v-text="form.commentLevel"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">评分星级：</span><span v-text="form.commentRate"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">评论详情：</span><span v-text="form.comments"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">追加评论：</span><span v-text="form.appendComment"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">回复详情：</span><span v-text="form.reply"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">置顶状态：</span><span v-text="form.stickStatus"></span></i-col>

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
        name: 'GoodsCommentDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
shopId: null,
goodsId: null,
goodsSkuId: null,
skuTitle: null,
skuInfo: null,
quantity: null,
commentLevel: null,
commentRate: null,
comments: null,
appendComment: null,
reply: null,
stickStatus: null,
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
