<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">昵称：</span><span v-text="form.userDetailNickname"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">头像地址：</span><span v-text="form.userDetailHeadicon"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">性别：</span><span v-text="form.userDetailGender"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">生日：</span><span v-text="form.userDetailBirthday"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">年龄：</span><span v-text="form.userDetailAge"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">QQ号：</span><span v-text="form.userDetailQq"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">QQ二维码：</span><span v-text="form.userDetailQqQrcode"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">微信号：</span><span v-text="form.userDetailWechat"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">微信二维码：</span><span v-text="form.userDetailWechatQrcode"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付宝账号：</span><span v-text="form.userDetailAlipay"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付宝二维码：</span><span v-text="form.userDetailAlipayQrcode"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">分享码：</span><span v-text="form.userDetailShareCode"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.userDetailVersion"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.userDetailCreateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.userDetailUpdateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.userDetailIsActive"></span></i-col><i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserUserDetailDetail',
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
userDetailGender: null,
userDetailBirthday: null,
userDetailAge: null,
userDetailQq: null,
userDetailQqQrcode: null,
userDetailWechat: null,
userDetailWechatQrcode: null,
userDetailAlipay: null,
userDetailAlipayQrcode: null,
userDetailShareCode: null,
userDetailVersion: null,
userDetailCreateTime: null,
userDetailUpdateTime: null,
userDetailIsActive: null,

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
