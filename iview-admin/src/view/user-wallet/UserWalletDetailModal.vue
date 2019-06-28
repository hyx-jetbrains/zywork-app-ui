<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">钱包编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">支付密码：</span><span v-text="form.payPassword"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">人民币余额（元）：</span><span v-text="form.rmbBalance"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">可用余额（元）：</span><span v-text="form.usableRmbBalance"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">冻结余额（元）：</span><span v-text="form.frozenRmbBalance"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">总积分：</span><span v-text="form.integral"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">可用积分：</span><span v-text="form.usableIntegral"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">冻结积分：</span><span v-text="form.frozenIntegral"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserWalletDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
payPassword: null,
rmbBalance: null,
usableRmbBalance: null,
frozenRmbBalance: null,
integral: null,
usableIntegral: null,
frozenIntegral: null,
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
