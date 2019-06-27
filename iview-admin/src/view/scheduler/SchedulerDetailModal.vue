<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">作业编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">作业名称：</span><span v-text="form.name"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">完整类名：</span><span v-text="form.className"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">cron表达式：</span><span v-text="form.cronExpression"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">作业组名称：</span><span v-text="form.groupName"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">触发器名称：</span><span v-text="form.triggerName"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">触发器组：</span><span v-text="form.triggerGroup"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">作业描述：</span><span v-text="form.description"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">作业状态：</span><span v-text="form.jobStatus"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">状态更新时间：</span><span v-text="form.jobStatusTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">自动启动：</span><span v-text="form.autoStart"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">创建时间：</span><span v-text="form.createTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">更新时间：</span><span v-text="form.updateTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否激活：</span><span v-text="form.isActive"></span></i-col><i-col span="2"></i-col>
</Row>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'SchedulerDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
name: null,
className: null,
cronExpression: null,
groupName: null,
triggerName: null,
triggerGroup: null,
description: null,
jobStatus: null,
jobStatusTime: null,
autoStart: null,
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
