<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">订单账目详情编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.orderId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">订单账目编号：</span><span v-text="form.orderAccountId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠/增加金额：</span><span v-text="form.accountAmount"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">优惠/增加类型：</span><span v-text="form.accountType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">优惠/增加方式：</span><span v-text="form.accountSubType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">账目描述：</span><span v-text="form.description"></span></i-col>

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
        name: 'GoodsOrderAccountDetailDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
shopId: null,
orderId: null,
orderAccountId: null,
accountAmount: null,
accountType: null,
accountSubType: null,
description: null,
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
