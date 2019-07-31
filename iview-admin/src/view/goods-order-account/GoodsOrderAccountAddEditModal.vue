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
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="总金额" prop="totalAmount">
	<InputNumber v-model="form.totalAmount" placeholder="请输入总金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="实付金额" prop="payAmount">
	<InputNumber v-model="form.payAmount" placeholder="请输入实付金额" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="总优惠金额" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入总优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="平台优惠金额" prop="platDiscountAmount">
	<InputNumber v-model="form.platDiscountAmount" placeholder="请输入平台优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺优惠金额" prop="shopDiscountAmount">
	<InputNumber v-model="form.shopDiscountAmount" placeholder="请输入店铺优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺分账金额" prop="shopAmount">
	<InputNumber v-model="form.shopAmount" placeholder="请输入店铺分账金额" style="width: 100%;"/>
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
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="总金额" prop="totalAmount">
	<InputNumber v-model="form.totalAmount" placeholder="请输入总金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="实付金额" prop="payAmount">
	<InputNumber v-model="form.payAmount" placeholder="请输入实付金额" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="总优惠金额" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入总优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="平台优惠金额" prop="platDiscountAmount">
	<InputNumber v-model="form.platDiscountAmount" placeholder="请输入平台优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="店铺优惠金额" prop="shopDiscountAmount">
	<InputNumber v-model="form.shopDiscountAmount" placeholder="请输入店铺优惠金额" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺分账金额" prop="shopAmount">
	<InputNumber v-model="form.shopAmount" placeholder="请输入店铺分账金额" style="width: 100%;"/>
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
        name: 'GoodsOrderAccountAddEdit',
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
                    addUrl: '/goods-order-account/admin/save',
                    batchAddUrl: '/goods-order-account/admin/batch-save',
                    editUrl: '/goods-order-account/admin/update',
                    batchEditUrl: '/goods-order-account/admin/batch-update'
                },
                form: {
                    shopId: null,
orderId: null,
transactionNo: null,
totalAmount: null,
payAmount: null,
discountAmount: null,
platDiscountAmount: null,
shopDiscountAmount: null,
shopAmount: null,
accountStatus: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
orderId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
transactionNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
totalAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
payAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
discountAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
platDiscountAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
shopDiscountAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
shopAmount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
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
