<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">提现编号：</span><span v-text="form.fundsWithdrawId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">交易编号：</span><span v-text="form.fundsWithdrawTransactionNo"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">提现金额（元）：</span><span v-text="form.fundsWithdrawAmount"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">提现状态：</span><span v-text="form.fundsWithdrawWithdrawStatus"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">提现描述：</span><span v-text="form.fundsWithdrawWithdrawDescription"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">审核人编号：</span><span v-text="form.fundsWithdrawCheckedUserId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核时间：</span><span v-text="form.fundsWithdrawCheckedTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">完成时间：</span><span v-text="form.fundsWithdrawCompleteTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.fundsWithdrawVersion"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.fundsWithdrawCreateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.fundsWithdrawUpdateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.fundsWithdrawIsActive"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">银行卡编号：</span><span v-text="form.userBankcardId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">持卡人姓名：</span><span v-text="form.userBankcardAccountName"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">银行代码：</span><span v-text="form.userBankcardBankCode"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">银行名称：</span><span v-text="form.userBankcardBankName"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">银行卡号：</span><span v-text="form.userBankcardBankcardNo"></span></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserWithdrawCheckDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userEmail: null,
fundsWithdrawId: null,
fundsWithdrawTransactionNo: null,
fundsWithdrawAmount: null,
fundsWithdrawWithdrawStatus: null,
fundsWithdrawWithdrawDescription: null,
fundsWithdrawCheckedUserId: null,
fundsWithdrawCheckedTime: null,
fundsWithdrawCompleteTime: null,
fundsWithdrawVersion: null,
fundsWithdrawCreateTime: null,
fundsWithdrawUpdateTime: null,
fundsWithdrawIsActive: null,
userBankcardId: null,
userBankcardAccountName: null,
userBankcardBankCode: null,
userBankcardBankName: null,
userBankcardBankcardNo: null,

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
