<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">账目编号：</span><span v-text="form.id"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">交易编号：</span><span v-text="form.transactionNo"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">金额（元）：</span><span v-text="form.amount"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">收入或支出：</span><span v-text="form.type"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">收支类型：</span><span v-text="form.subType"></span></i-col>

</Row>
<Row>
	<i-col span="11"><span class="detail-title">支付方式：</span><span v-text="form.payType"></span></i-col>
<i-col span="2"></i-col><i-col span="11"><span class="detail-title">账目备注：</span><span v-text="form.remark"></span></i-col>

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
        name: 'PlatformAccountDetailDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
transactionNo: null,
userId: null,
amount: null,
type: null,
subType: null,
payType: null,
remark: null,
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
