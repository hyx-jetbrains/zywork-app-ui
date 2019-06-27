<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">第三方登录编号：</span><span v-text="form.userSocialId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">openid：</span><span v-text="form.userSocialOpenid"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">unionid：</span><span v-text="form.userSocialUnionId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">AccessToken：</span><span v-text="form.userSocialAccessToken"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">SessionKey：</span><span v-text="form.userSocialSessionKey"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">RefreshToken：</span><span v-text="form.userSocialRefreshToken"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">第三方登录类型：</span><span v-text="form.userSocialSocialType"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.userSocialVersion"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.userSocialCreateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.userSocialUpdateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.userSocialIsActive"></span></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserUserSocialDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userEmail: null,
userSocialId: null,
userSocialOpenid: null,
userSocialUnionId: null,
userSocialAccessToken: null,
userSocialSessionKey: null,
userSocialRefreshToken: null,
userSocialSocialType: null,
userSocialVersion: null,
userSocialCreateTime: null,
userSocialUpdateTime: null,
userSocialIsActive: null,

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
