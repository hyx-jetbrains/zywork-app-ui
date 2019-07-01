<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">公告编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">公告标题：</span><span v-text="form.title"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">公告摘要：</span><span v-text="form.summary"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">公告内容：</span><span>请在表格中点击查看</span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">截止时间：</span><span v-text="form.endTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">置顶状态：</span><span v-text="form.stickStatus"></span></i-col>
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
        name: 'NoticeDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
title: null,
summary: null,
content: null,
endTime: null,
stickStatus: null,
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
