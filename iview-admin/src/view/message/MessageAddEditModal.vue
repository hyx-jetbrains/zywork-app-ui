<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="消息标题" prop="title">
	<Input v-model="form.title" placeholder="请输入消息标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="消息摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入消息摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="消息内容" prop="content">
	<Input v-model="form.content" placeholder="请输入消息内容"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="消息类型" prop="messageType">
	<Input v-model="form.messageType" placeholder="请输入消息类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="关联页面链接" prop="linkPageUrl">
	<Input v-model="form.linkPageUrl" placeholder="请输入关联页面链接"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="关联记录ID" prop="linkId">
	<InputNumber v-model="form.linkId" placeholder="请输入关联记录ID" style="width: 100%;"/>
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
	<FormItem label="消息标题" prop="title">
	<Input v-model="form.title" placeholder="请输入消息标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="消息摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入消息摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="消息内容" prop="content">
	<Input v-model="form.content" placeholder="请输入消息内容"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="消息类型" prop="messageType">
	<Input v-model="form.messageType" placeholder="请输入消息类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="关联页面链接" prop="linkPageUrl">
	<Input v-model="form.linkPageUrl" placeholder="请输入关联页面链接"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="关联记录ID" prop="linkId">
	<InputNumber v-model="form.linkId" placeholder="请输入关联记录ID" style="width: 100%;"/>
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
        name: 'MessageAddEdit',
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
                    addUrl: '/message/admin/save',
                    batchAddUrl: '/message/admin/batch-save',
                    editUrl: '/message/admin/update',
                    batchEditUrl: '/message/admin/batch-update'
                },
                form: {
                    id: null,
title: null,
summary: null,
content: null,
messageType: null,
linkPageUrl: null,
linkId: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
summary: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
content: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 5000, message: '必须1-5000个字符', trigger: 'blur'}
],
messageType: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
linkPageUrl: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
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
