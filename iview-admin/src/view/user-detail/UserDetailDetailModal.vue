<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">昵称：</span><span v-text="form.nickname"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">头像地址：</span><span v-text="form.headicon"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">性别：</span><span v-text="form.gender"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">生日：</span><span v-text="form.birthday"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">年龄：</span><span v-text="form.age"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">QQ号：</span><span v-text="form.qq"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">QQ二维码：</span><span v-text="form.qqQrcode"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">微信号：</span><span v-text="form.wechat"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">微信二维码：</span><span v-text="form.wechatQrcode"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付宝账号：</span><span v-text="form.alipay"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付宝二维码：</span><span v-text="form.alipayQrcode"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">分享码：</span><span v-text="form.shareCode"></span></i-col>
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
        name: 'UserDetailDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
nickname: null,
headicon: null,
gender: null,
birthday: null,
age: null,
qq: null,
qqQrcode: null,
wechat: null,
wechatQrcode: null,
alipay: null,
alipayQrcode: null,
shareCode: null,
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
