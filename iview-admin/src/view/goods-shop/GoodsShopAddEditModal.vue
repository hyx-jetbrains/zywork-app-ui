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
	<FormItem label="类目编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类目编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="主体类型" prop="subjectType">
	<InputNumber v-model="form.subjectType" placeholder="请输入主体类型" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺Logo" prop="logo">
	<Input v-model="form.logo" placeholder="请输入店铺Logo"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺标题" prop="title">
	<Input v-model="form.title" placeholder="请输入店铺标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺简介" prop="intro">
	<Input v-model="form.intro" placeholder="请输入店铺简介"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺等级" prop="level">
	<InputNumber v-model="form.level" placeholder="请输入店铺等级" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核状态" prop="checkStatus">
	<InputNumber v-model="form.checkStatus" placeholder="请输入审核状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核描述" prop="checkDescription">
	<Input v-model="form.checkDescription" placeholder="请输入审核描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核人编号" prop="checkedUserId">
	<InputNumber v-model="form.checkedUserId" placeholder="请输入审核人编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核时间" prop="checkedTime">
	<DatePicker @on-change="form.checkedTime=$event" :value="form.checkedTime" placeholder="请输入审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem label="类目编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类目编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="主体类型" prop="subjectType">
	<InputNumber v-model="form.subjectType" placeholder="请输入主体类型" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺Logo" prop="logo">
	<Input v-model="form.logo" placeholder="请输入店铺Logo"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺标题" prop="title">
	<Input v-model="form.title" placeholder="请输入店铺标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺简介" prop="intro">
	<Input v-model="form.intro" placeholder="请输入店铺简介"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺等级" prop="level">
	<InputNumber v-model="form.level" placeholder="请输入店铺等级" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核状态" prop="checkStatus">
	<InputNumber v-model="form.checkStatus" placeholder="请输入审核状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核描述" prop="checkDescription">
	<Input v-model="form.checkDescription" placeholder="请输入审核描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核人编号" prop="checkedUserId">
	<InputNumber v-model="form.checkedUserId" placeholder="请输入审核人编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核时间" prop="checkedTime">
	<DatePicker @on-change="form.checkedTime=$event" :value="form.checkedTime" placeholder="请输入审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'GoodsShopAddEdit',
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
                    addUrl: '/goods-shop/admin/save',
                    batchAddUrl: '/goods-shop/admin/batch-save',
                    editUrl: '/goods-shop/admin/update',
                    batchEditUrl: '/goods-shop/admin/batch-update'
                },
                form: {
                    id: null,
userId: null,
categoryId: null,
subjectType: null,
logo: null,
title: null,
intro: null,
level: null,
checkStatus: null,
checkDescription: null,
checkedUserId: null,
checkedTime: null,


                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
categoryId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
subjectType: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
logo: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
intro: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
checkDescription: [
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
