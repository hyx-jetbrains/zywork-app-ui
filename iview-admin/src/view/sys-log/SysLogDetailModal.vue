<template>
    <div>
        <Modal v-model="modal.detail" title="详情" width="760">
            <div class="detail-info">
                <Row>
	<i-col span="11"><span class="detail-title">日志编号：</span><span v-text="form.id"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">用户编号：</span><span v-text="form.userId"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">用户账号：</span><span v-text="form.userAccount"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">执行说明：</span><span v-text="form.description"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">User-Agent：</span><span v-text="form.userAgent"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">请求URL：</span><span v-text="form.requestUrl"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">请求方式：</span><span v-text="form.requestMethod"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">请求参数：</span><span v-text="form.requestParams"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">响应编码：</span><span v-text="form.responseCode"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">响应消息：</span><span v-text="form.responseMsg"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">完整类名：</span><span v-text="form.executeClass"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">方法名称：</span><span v-text="form.executeMethod"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">开始执行时间：</span><span v-text="form.executeTime"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">执行耗时(ms)：</span><span v-text="form.executeCostTime"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">是否异常：</span><span v-text="form.hasException"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">异常消息：</span><span v-text="form.exceptionMsg !== null ? '请在表格中点击查看' : ''"></span></i-col>
</Row>
<Row>
	<i-col span="11"><span class="detail-title">IP地址：</span><span v-text="form.executeIp"></span></i-col><i-col span="2"></i-col><i-col span="11"><span class="detail-title">版本号：</span><span v-text="form.version"></span></i-col>
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
        name: 'SysLogDetail',
        data() {
            return {
                modal: {
                    detail: false
                },
                form: {
                    id: null,
userId: null,
userAccount: null,
description: null,
userAgent: null,
requestUrl: null,
requestMethod: null,
requestParams: null,
responseCode: null,
responseMsg: null,
executeClass: null,
executeMethod: null,
executeTime: null,
executeCostTime: null,
hasException: null,
exceptionMsg: null,
executeIp: null,
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
