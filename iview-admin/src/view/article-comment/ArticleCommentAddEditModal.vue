<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="文章编号" prop="articleId">
	<InputNumber v-model="form.articleId" placeholder="请输入文章编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评论标题" prop="title">
	<Input v-model="form.title" placeholder="请输入评论标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论详情" prop="content">
	<Input v-model="form.content" placeholder="请输入评论详情"/>
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
	<FormItem label="文章编号" prop="articleId">
	<InputNumber v-model="form.articleId" placeholder="请输入文章编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评论标题" prop="title">
	<Input v-model="form.title" placeholder="请输入评论标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论详情" prop="content">
	<Input v-model="form.content" placeholder="请输入评论详情"/>
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
        name: 'ArticleCommentAddEdit',
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
                    addUrl: '/article-comment/admin/save',
                    batchAddUrl: '/article-comment/admin/batch-save',
                    editUrl: '/article-comment/admin/update',
                    batchEditUrl: '/article-comment/admin/batch-update'
                },
                form: {
                    id: null,
articleId: null,
userId: null,
title: null,
content: null,


                },
                validateRules: {
                    articleId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
content: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
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
