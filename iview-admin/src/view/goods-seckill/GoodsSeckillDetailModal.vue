<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">秒杀编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">秒杀价格：</span><span v-text="form.seckillPrice"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">秒杀总数量：</span><span v-text="form.seckillTotal"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">开始时间：</span><span v-text="form.beginTime"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">结束时间：</span><span v-text="form.endTime"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">秒杀结束时间：</span><span v-text="form.seckillEndTime"></span></i-col>
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
        name: 'GoodsSeckillDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
shopId: null,
goodsId: null,
goodsSkuId: null,
seckillPrice: null,
seckillTotal: null,
beginTime: null,
endTime: null,
seckillEndTime: null,
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
