<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户账号" prop="userAccount">
	<Input v-model="form.userAccount" placeholder="请输入用户账号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="执行说明" prop="description">
	<Input v-model="form.description" placeholder="请输入执行说明"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="User-Agent" prop="userAgent">
	<Input v-model="form.userAgent" placeholder="请输入User-Agent"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="请求URL" prop="requestUrl">
	<Input v-model="form.requestUrl" placeholder="请输入请求URL"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="请求方式" prop="requestMethod">
	<Input v-model="form.requestMethod" placeholder="请输入请求方式"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="请求参数" prop="requestParams">
	<Input v-model="form.requestParams" placeholder="请输入请求参数"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="响应编码" prop="responseCode">
	<InputNumber v-model="form.responseCode" placeholder="请输入响应编码" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="响应消息" prop="responseMsg">
	<Input v-model="form.responseMsg" placeholder="请输入响应消息"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="完整类名" prop="executeClass">
	<Input v-model="form.executeClass" placeholder="请输入完整类名"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="方法名称" prop="executeMethod">
	<Input v-model="form.executeMethod" placeholder="请输入方法名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="开始执行时间" prop="executeTime">
	<DatePicker @on-change="form.executeTime=$event" :value="form.executeTime" placeholder="请输入开始执行时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="执行耗时(ms)" prop="executeCostTime">
	<InputNumber v-model="form.executeCostTime" placeholder="请输入执行耗时(ms)" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否异常" prop="hasException">
	<InputNumber v-model="form.hasException" placeholder="请输入是否异常" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="异常消息" prop="exceptionMsg">
	<Input v-model="form.exceptionMsg" placeholder="请输入异常消息"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="IP地址" prop="executeIp">
	<Input v-model="form.executeIp" placeholder="请输入IP地址"/>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'add')">取消</Button>
                <Button type="primary" size="large" @click="add" :loading="loading.add">添加</Button>
            </div>
        </Modal>
        <Modal v-model="modal.edit" title="修改" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('editForm', $event)" width="760">
            <Form ref="editForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户账号" prop="userAccount">
	<Input v-model="form.userAccount" placeholder="请输入用户账号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="执行说明" prop="description">
	<Input v-model="form.description" placeholder="请输入执行说明"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="User-Agent" prop="userAgent">
	<Input v-model="form.userAgent" placeholder="请输入User-Agent"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="请求URL" prop="requestUrl">
	<Input v-model="form.requestUrl" placeholder="请输入请求URL"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="请求方式" prop="requestMethod">
	<Input v-model="form.requestMethod" placeholder="请输入请求方式"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="请求参数" prop="requestParams">
	<Input v-model="form.requestParams" placeholder="请输入请求参数"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="响应编码" prop="responseCode">
	<InputNumber v-model="form.responseCode" placeholder="请输入响应编码" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="响应消息" prop="responseMsg">
	<Input v-model="form.responseMsg" placeholder="请输入响应消息"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="完整类名" prop="executeClass">
	<Input v-model="form.executeClass" placeholder="请输入完整类名"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="方法名称" prop="executeMethod">
	<Input v-model="form.executeMethod" placeholder="请输入方法名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="开始执行时间" prop="executeTime">
	<DatePicker @on-change="form.executeTime=$event" :value="form.executeTime" placeholder="请输入开始执行时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="执行耗时(ms)" prop="executeCostTime">
	<InputNumber v-model="form.executeCostTime" placeholder="请输入执行耗时(ms)" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否异常" prop="hasException">
	<InputNumber v-model="form.hasException" placeholder="请输入是否异常" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="异常消息" prop="exceptionMsg">
	<Input v-model="form.exceptionMsg" placeholder="请输入异常消息"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="IP地址" prop="executeIp">
	<Input v-model="form.executeIp" placeholder="请输入IP地址"/>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
                <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'SysLogAddEdit',
        data() {
            return {
                modal: {
                    add: false,
                    edit: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/sys-log/admin/save',
                    batchAddUrl: '/sys-log/admin/batch-save',
                    editUrl: '/sys-log/admin/update',
                    batchEditUrl: '/sys-log/admin/batch-update'
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


                },
                validateRules: {
                    userAccount: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
description: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
],
userAgent: [
{type: 'string', min: 1, max: 1000, message: '必须1-1000个字符', trigger: 'blur'}
],
requestUrl: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
requestMethod: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
requestParams: [
{type: 'string', min: 1, max: 2000, message: '必须1-2000个字符', trigger: 'blur'}
],
responseMsg: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
executeClass: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
executeMethod: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
exceptionMsg: [
{type: 'string', min: 1, max: 2000, message: '必须1-2000个字符', trigger: 'blur'}
],
executeIp: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],

                }
            }
        },
        computed: {},
        mounted() {},
        methods: {
            changeModalVisibleResetForm(formRef, visible) {
                if (!visible) {
                    this.$refs[formRef].resetFields()
                }
            },
            resetFormCancelModal(formRef, modal) {
                this.modal[modal] = false
                this.$refs[formRef].resetFields()
            },
            add() {
                this.$emit('add')
            },
            edit() {
                this.$emit('edit')
            }
        }
    }
</script>

<style>
</style>
