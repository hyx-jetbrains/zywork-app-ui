<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">提现审核编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">提现编号：</span><span v-text="form.withdrawId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">交易编号：</span><span v-text="form.transactionNo"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">提现状态：</span><span v-text="form.withdrawStatus"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">提现描述：</span><span v-text="form.withdrawDescription"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">审核人编号：</span><span v-text="form.checkedUserId"></span></i-col>
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
        name: 'FundsWithdrawCheckDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
withdrawId: null,
transactionNo: null,
withdrawStatus: null,
withdrawDescription: null,
checkedUserId: null,
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
