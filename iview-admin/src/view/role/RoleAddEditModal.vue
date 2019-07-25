<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="角色标题" prop="title">
	<Input v-model="form.title" placeholder="请输入角色标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="角色描述" prop="description">
	<Input v-model="form.description" placeholder="请输入角色描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否默认" prop="isDefault">
	<InputNumber v-model="form.isDefault" placeholder="请输入是否默认" style="width: 100%;"/>
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
	<FormItem label="角色标题" prop="title">
	<Input v-model="form.title" placeholder="请输入角色标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="角色描述" prop="description">
	<Input v-model="form.description" placeholder="请输入角色描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否默认" prop="isDefault">
	<InputNumber v-model="form.isDefault" placeholder="请输入是否默认" style="width: 100%;"/>
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
        name: 'RoleAddEdit',
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
                    addUrl: '/role/admin/save',
                    batchAddUrl: '/role/admin/batch-save',
                    editUrl: '/role/admin/update',
                    batchEditUrl: '/role/admin/batch-update'
                },
                form: {
                    id: null,
title: null,
description: null,
isDefault: null,


                },
                validateRules: {
                    title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
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
