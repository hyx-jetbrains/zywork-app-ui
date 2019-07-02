<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="860">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="类别编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类别编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="文章标题" prop="title">
	<Input v-model="form.title" placeholder="请输入文章标题"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="封面图片" prop="coverImg">
	<Input v-model="form.coverImg" placeholder="请输入封面图片"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="文章摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入文章摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="文章内容" prop="content">
	<editor ref="editorAdd" :value="form.content" @on-change="handleChange" />
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
	<FormItem label="类别编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类别编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="文章标题" prop="title">
	<Input v-model="form.title" placeholder="请输入文章标题"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="封面图片" prop="coverImg">
	<Input v-model="form.coverImg" placeholder="请输入封面图片"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="文章摘要" prop="summary">
	<Input v-model="form.summary" placeholder="请输入文章摘要"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="文章内容" prop="content">
	<editor ref="editorEdit" :value="form.content" @on-change="handleChange" />
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="阅读量" prop="viewCount">
	<InputNumber v-model="form.viewCount" placeholder="请输入阅读量" style="width: 100%;"/>
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
        name: 'ArticleAddEdit',
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
                    addUrl: '/article/admin/save',
                    batchAddUrl: '/article/admin/batch-save',
                    editUrl: '/article/admin/update',
                    batchEditUrl: '/article/admin/batch-update'
                },
                form: {
                    id: null,
categoryId: null,
title: null,
coverImg: null,
summary: null,
content: null,
viewCount: null,
version: null,
createId: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    categoryId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
coverImg: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
summary: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
content: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 65535, message: '必须1-65535个字符', trigger: 'blur'}
],

                }
            }
        },
        computed: {},
        mounted() {
            this.$refs.editorAdd.initEditor('/article/admin/upload-img')
            this.$refs.editorEdit.initEditor('/article/admin/upload-img')
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
            },
        }
    }
</script>

<style>
</style>
