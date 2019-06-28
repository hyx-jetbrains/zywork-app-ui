<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">银行卡编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">持卡人姓名：</span><span v-text="form.accountName"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">银行代码：</span><span v-text="form.bankCode"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">银行名称：</span><span v-text="form.bankName"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">银行卡号：</span><span v-text="form.bankcardNo"></span></i-col>
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
        name: 'UserBankcardDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
accountName: null,
bankCode: null,
bankName: null,
bankcardNo: null,
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
