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
	<FormItem label="订单号" prop="orderNo">
	<Input v-model="form.orderNo" placeholder="请输入订单号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单金额（元）" prop="totalAmount">
	<InputNumber v-model="form.totalAmount" placeholder="请输入订单金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="实付金额（元）" prop="payAmount">
	<InputNumber v-model="form.payAmount" placeholder="请输入实付金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠金额（元）" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入优惠金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="赠送积分" prop="integralAmount">
	<InputNumber v-model="form.integralAmount" placeholder="请输入赠送积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="运费（元）" prop="expressFee">
	<InputNumber v-model="form.expressFee" placeholder="请输入运费（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="订单状态" prop="orderStatus">
	<InputNumber v-model="form.orderStatus" placeholder="请输入订单状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付时间" prop="payTime">
	<DatePicker @on-change="form.payTime=$event" :value="form.payTime" placeholder="请输入支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="支付方式" prop="payType">
	<InputNumber v-model="form.payType" placeholder="请输入支付方式" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付订单号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入支付订单号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否支付成功" prop="paySuccess">
	<InputNumber v-model="form.paySuccess" placeholder="请输入是否支付成功" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="发货时间" prop="deliverTime">
	<DatePicker @on-change="form.deliverTime=$event" :value="form.deliverTime" placeholder="请输入发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="成交时间" prop="dealTime">
	<DatePicker @on-change="form.dealTime=$event" :value="form.dealTime" placeholder="请输入成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单备注" prop="remark">
	<Input v-model="form.remark" placeholder="请输入订单备注"/>
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
	<FormItem label="订单号" prop="orderNo">
	<Input v-model="form.orderNo" placeholder="请输入订单号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单金额（元）" prop="totalAmount">
	<InputNumber v-model="form.totalAmount" placeholder="请输入订单金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="实付金额（元）" prop="payAmount">
	<InputNumber v-model="form.payAmount" placeholder="请输入实付金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠金额（元）" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入优惠金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="赠送积分" prop="integralAmount">
	<InputNumber v-model="form.integralAmount" placeholder="请输入赠送积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="运费（元）" prop="expressFee">
	<InputNumber v-model="form.expressFee" placeholder="请输入运费（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="订单状态" prop="orderStatus">
	<InputNumber v-model="form.orderStatus" placeholder="请输入订单状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付时间" prop="payTime">
	<DatePicker @on-change="form.payTime=$event" :value="form.payTime" placeholder="请输入支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="支付方式" prop="payType">
	<InputNumber v-model="form.payType" placeholder="请输入支付方式" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付订单号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入支付订单号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否支付成功" prop="paySuccess">
	<InputNumber v-model="form.paySuccess" placeholder="请输入是否支付成功" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="发货时间" prop="deliverTime">
	<DatePicker @on-change="form.deliverTime=$event" :value="form.deliverTime" placeholder="请输入发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="成交时间" prop="dealTime">
	<DatePicker @on-change="form.dealTime=$event" :value="form.dealTime" placeholder="请输入成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单备注" prop="remark">
	<Input v-model="form.remark" placeholder="请输入订单备注"/>
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
        name: 'GoodsOrderAddEdit',
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
                    addUrl: '/goods-order/admin/save',
                    batchAddUrl: '/goods-order/admin/batch-save',
                    editUrl: '/goods-order/admin/update',
                    batchEditUrl: '/goods-order/admin/batch-update'
                },
                form: {
                    id: null,
userId: null,
orderNo: null,
totalAmount: null,
payAmount: null,
discountAmount: null,
integralAmount: null,
expressFee: null,
orderStatus: null,
payTime: null,
payType: null,
transactionNo: null,
paySuccess: null,
deliverTime: null,
dealTime: null,
remark: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
orderNo: [
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
integralAmount: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
orderStatus: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
transactionNo: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
remark: [
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
