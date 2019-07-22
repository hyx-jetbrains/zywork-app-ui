<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">佣金设置编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">角色编号：</span><span v-text="form.roleId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">商品编号：</span><span v-text="form.goodsId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">商品SKU编号：</span><span v-text="form.goodsSkuId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">分销商级别：</span><span v-text="form.distributionLevel"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">佣金比例：</span><span v-text="form.commissionPercent"></span></i-col>

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
        name: 'GoodsCommissionDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
roleId: null,
goodsId: null,
goodsSkuId: null,
distributionLevel: null,
commissionPercent: null,
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
