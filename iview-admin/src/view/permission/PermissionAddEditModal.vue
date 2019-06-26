<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="所属模块" prop="moduleId">
	<InputNumber v-model="form.moduleId" placeholder="请输入所属模块" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="权限标题" prop="title">
	<Input v-model="form.title" placeholder="请输入权限标题"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="权限字符串" prop="permission">
	<Input v-model="form.permission" placeholder="请输入权限字符串"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="权限描述" prop="description">
	<Input v-model="form.description" placeholder="请输入权限描述"/>
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
	<FormItem label="所属模块" prop="moduleId">
	<InputNumber v-model="form.moduleId" placeholder="请输入所属模块" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="权限标题" prop="title">
	<Input v-model="form.title" placeholder="请输入权限标题"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="权限字符串" prop="permission">
	<Input v-model="form.permission" placeholder="请输入权限字符串"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="权限描述" prop="description">
	<Input v-model="form.description" placeholder="请输入权限描述"/>
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
        name: 'PermissionAddEdit',
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
                    addUrl: '/permission/admin/save',
                    batchAddUrl: '/permission/admin/batch-save',
                    editUrl: '/permission/admin/update',
                    batchEditUrl: '/permission/admin/batch-update'
                },
                form: {
                    id: null,
moduleId: null,
title: null,
permission: null,
description: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    moduleId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
permission: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
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
