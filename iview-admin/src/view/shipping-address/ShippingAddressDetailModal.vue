<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">收货地址编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>

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
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">地址别名：</span><span v-text="form.addressAlias"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">详细地址：</span><span v-text="form.address"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">门牌号：</span><span v-text="form.area"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否默认：</span><span v-text="form.isDefault"></span></i-col>
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
        name: 'ShippingAddressDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
realName: null,
phone: null,
province: null,
city: null,
district: null,
addressAlias: null,
address: null,
area: null,
isDefault: null,
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
