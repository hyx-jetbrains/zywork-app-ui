<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">订单编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">店铺编号：</span><span v-text="form.shopId"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">收货人：</span><span v-text="form.realName"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.phone"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">省：</span><span v-text="form.province"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">市：</span><span v-text="form.city"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">区/县：</span><span v-text="form.district"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">详细地址：</span><span v-text="form.address"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否已发货：</span><span v-text="form.isDeliver"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">物流公司名称：</span><span v-text="form.logisticsCompany"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">物流公司编码：</span><span v-text="form.logisticsCode"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">物流单号：</span><span v-text="form.logisticsNo"></span></i-col>

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
        name: 'GoodsOrderLogisticsDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
shopId: null,
realName: null,
phone: null,
province: null,
city: null,
district: null,
address: null,
isDeliver: null,
logisticsCompany: null,
logisticsCode: null,
logisticsNo: null,
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
