<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="类目父编号" prop="parentId">
	<InputNumber v-model="form.parentId" placeholder="请输入类目父编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类目名称" prop="title">
	<Input v-model="form.title" placeholder="请输入类目名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="类目描述" prop="description">
	<Input v-model="form.description" placeholder="请输入类目描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否热门" prop="isHot">
	<InputNumber v-model="form.isHot" placeholder="请输入是否热门" style="width: 100%;"/>
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
	<FormItem label="类目父编号" prop="parentId">
	<InputNumber v-model="form.parentId" placeholder="请输入类目父编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类目名称" prop="title">
	<Input v-model="form.title" placeholder="请输入类目名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="类目描述" prop="description">
	<Input v-model="form.description" placeholder="请输入类目描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否热门" prop="isHot">
	<InputNumber v-model="form.isHot" placeholder="请输入是否热门" style="width: 100%;"/>
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
        name: 'GoodsCategoryAddEdit',
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
                    addUrl: '/goods-category/admin/save',
                    batchAddUrl: '/goods-category/admin/batch-save',
                    editUrl: '/goods-category/admin/update',
                    batchEditUrl: '/goods-category/admin/batch-update'
                },
                form: {
                    id: null,
parentId: null,
title: null,
description: null,
isHot: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    parentId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
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
