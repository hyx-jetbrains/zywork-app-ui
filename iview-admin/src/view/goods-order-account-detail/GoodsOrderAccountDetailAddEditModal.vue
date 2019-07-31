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
	<FormItem label="订单编号" prop="orderId">
	<InputNumber v-model="form.orderId" placeholder="请输入订单编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单账目编号" prop="orderAccountId">
	<InputNumber v-model="form.orderAccountId" placeholder="请输入订单账目编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠/增加金额" prop="accountAmount">
	<InputNumber v-model="form.accountAmount" placeholder="请输入优惠/增加金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠/增加类型" prop="accountType">
	<Input v-model="form.accountType" placeholder="请输入优惠/增加类型"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠/增加方式" prop="accountSubType">
	<Input v-model="form.accountSubType" placeholder="请输入优惠/增加方式"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="账目描述" prop="description">
	<Input v-model="form.description" placeholder="请输入账目描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="账目状态" prop="accountStatus">
	<InputNumber v-model="form.accountStatus" placeholder="请输入账目状态" style="width: 100%;"/>
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
	<FormItem label="订单编号" prop="orderId">
	<InputNumber v-model="form.orderId" placeholder="请输入订单编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单账目编号" prop="orderAccountId">
	<InputNumber v-model="form.orderAccountId" placeholder="请输入订单账目编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠/增加金额" prop="accountAmount">
	<InputNumber v-model="form.accountAmount" placeholder="请输入优惠/增加金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠/增加类型" prop="accountType">
	<Input v-model="form.accountType" placeholder="请输入优惠/增加类型"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠/增加方式" prop="accountSubType">
	<Input v-model="form.accountSubType" placeholder="请输入优惠/增加方式"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="账目描述" prop="description">
	<Input v-model="form.description" placeholder="请输入账目描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="账目状态" prop="accountStatus">
	<InputNumber v-model="form.accountStatus" placeholder="请输入账目状态" style="width: 100%;"/>
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
        name: 'GoodsOrderAccountDetailAddEdit',
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
                    addUrl: '/goods-order-account-detail/admin/save',
                    batchAddUrl: '/goods-order-account-detail/admin/batch-save',
                    editUrl: '/goods-order-account-detail/admin/update',
                    batchEditUrl: '/goods-order-account-detail/admin/batch-update'
                },
                form: {
                    shopId: null,
orderId: null,
orderAccountId: null,
accountAmount: null,
accountType: null,
accountSubType: null,
description: null,
accountStatus: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
orderId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
orderAccountId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
accountAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
accountType: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
accountSubType: [
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
