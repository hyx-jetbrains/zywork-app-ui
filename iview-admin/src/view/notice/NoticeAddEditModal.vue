<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="860">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="公告标题" prop="title">
	<Input v-model="form.title" placeholder="请输入公告标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="公告摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入公告摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="公告内容" prop="content">
	<editor ref="editorAdd" :value="form.content" @on-change="handleChange" />
</FormItem>
	</i-col>
</Row>
<Row>
    <i-col span="12">
	<FormItem label="截止时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入截止时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
	<i-col span="12">
	<FormItem label="置顶状态" prop="stickStatus">
	<InputNumber v-model="form.stickStatus" placeholder="请输入置顶状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'add')">取消</Button>
                <Button type="primary" size="large" @click="add" :loading="loading.add">添加</Button>
            </div>
        </Modal>
        <Modal v-model="modal.edit" title="修改" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('editForm', $event)" width="860">
            <Form ref="editForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="公告标题" prop="title">
	<Input v-model="form.title" placeholder="请输入公告标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="公告摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入公告摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="公告内容" prop="content">
    <editor ref="editorEdit" :value="form.content" @on-change="handleChange" />
</FormItem>
	</i-col>
</Row>
<Row>
    <i-col span="12">
	<FormItem label="截止时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入截止时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
	<i-col span="12">
	<FormItem label="置顶状态" prop="stickStatus">
	<InputNumber v-model="form.stickStatus" placeholder="请输入置顶状态" style="width: 100%;"/>
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
    import Editor from '_c/editor'
    export default {
        name: 'NoticeAddEdit',
        components: {
            Editor
        },
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
                    addUrl: '/notice/admin/save',
                    batchAddUrl: '/notice/admin/batch-save',
                    editUrl: '/notice/admin/update',
                    batchEditUrl: '/notice/admin/batch-update'
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

                }
            }
        },
        computed: {},
        mounted() {
            this.$refs.editorAdd.initEditor('/notice/admin/upload-img')
            this.$refs.editorEdit.initEditor('/notice/admin/upload-img')
        },
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
            },
            handleChange (html, text) {
                this.form.content = html
            }
        }
    }
</script>

<style>
</style>
