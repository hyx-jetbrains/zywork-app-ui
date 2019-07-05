<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="店铺编号" prop="shopId">
	<InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类目编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类目编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品标题" prop="title">
	<Input v-model="form.title" placeholder="请输入商品标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="图文详情" prop="intro">
	<Input v-model="form.intro" placeholder="请输入图文详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="上架状态" prop="shelfStatus">
	<InputNumber v-model="form.shelfStatus" placeholder="请输入上架状态" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否热门" prop="isHot">
	<InputNumber v-model="form.isHot" placeholder="请输入是否热门" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="点击数" prop="clickCount">
	<InputNumber v-model="form.clickCount" placeholder="请输入点击数" style="width: 100%;"/>
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
	<FormItem label="店铺编号" prop="shopId">
	<InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类目编号" prop="categoryId">
	<InputNumber v-model="form.categoryId" placeholder="请输入类目编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品标题" prop="title">
	<Input v-model="form.title" placeholder="请输入商品标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="图文详情" prop="intro">
	<Input v-model="form.intro" placeholder="请输入图文详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="上架状态" prop="shelfStatus">
	<InputNumber v-model="form.shelfStatus" placeholder="请输入上架状态" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否热门" prop="isHot">
	<InputNumber v-model="form.isHot" placeholder="请输入是否热门" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="点击数" prop="clickCount">
	<InputNumber v-model="form.clickCount" placeholder="请输入点击数" style="width: 100%;"/>
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
        name: 'GoodsInfoAddEdit',
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
                    addUrl: '/goods-info/admin/save',
                    batchAddUrl: '/goods-info/admin/batch-save',
                    editUrl: '/goods-info/admin/update',
                    batchEditUrl: '/goods-info/admin/batch-update'
                },
                form: {
                    id: null,
shopId: null,
categoryId: null,
title: null,
intro: null,
shelfStatus: null,
isHot: null,
clickCount: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
categoryId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
intro: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 65535, message: '必须1-65535个字符', trigger: 'blur'}
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
