<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">手机号：</span><span v-text="form.userPhone"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户邮箱：</span><span v-text="form.userEmail"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">消息编号：</span><span v-text="form.messageId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">消息标题：</span><span v-text="form.messageTitle"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">消息摘要：</span><span v-text="form.messageSummary"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">消息内容：</span><span v-text="form.messageContent"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">消息类型：</span><span v-text="form.messageMessageType"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">关联页面链接：</span><span v-text="form.messageLinkPageUrl"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">关联记录ID：</span><span v-text="form.messageLinkId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.messageVersion"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">是否已读：</span><span v-text="form.userMessageIsRead"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.userMessageCreateTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.userMessageUpdateTime"></span></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserUserMessageDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    userId: null,
userPhone: null,
userEmail: null,
messageId: null,
messageTitle: null,
messageSummary: null,
messageContent: null,
messageMessageType: null,
messageLinkPageUrl: null,
messageLinkId: null,
messageVersion: null,
userMessageIsRead: null,
userMessageCreateTime: null,
userMessageUpdateTime: null,

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
