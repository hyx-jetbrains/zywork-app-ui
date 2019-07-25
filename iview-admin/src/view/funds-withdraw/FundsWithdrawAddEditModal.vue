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
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="提现金额（元）" prop="amount">
	<InputNumber v-model="form.amount" placeholder="请输入提现金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="提现银行卡" prop="bankcardId">
	<InputNumber v-model="form.bankcardId" placeholder="请输入提现银行卡" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="提现状态" prop="withdrawStatus">
	<InputNumber v-model="form.withdrawStatus" placeholder="请输入提现状态" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="提现描述" prop="withdrawDescription">
	<Input v-model="form.withdrawDescription" placeholder="请输入提现描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核人编号" prop="checkedUserId">
	<InputNumber v-model="form.checkedUserId" placeholder="请输入审核人编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核时间" prop="checkedTime">
	<DatePicker @on-change="form.checkedTime=$event" :value="form.checkedTime" placeholder="请输入审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="完成时间" prop="completeTime">
	<DatePicker @on-change="form.completeTime=$event" :value="form.completeTime" placeholder="请输入完成时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="提现金额（元）" prop="amount">
	<InputNumber v-model="form.amount" placeholder="请输入提现金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="提现银行卡" prop="bankcardId">
	<InputNumber v-model="form.bankcardId" placeholder="请输入提现银行卡" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="提现状态" prop="withdrawStatus">
	<InputNumber v-model="form.withdrawStatus" placeholder="请输入提现状态" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="提现描述" prop="withdrawDescription">
	<Input v-model="form.withdrawDescription" placeholder="请输入提现描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核人编号" prop="checkedUserId">
	<InputNumber v-model="form.checkedUserId" placeholder="请输入审核人编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="审核时间" prop="checkedTime">
	<DatePicker @on-change="form.checkedTime=$event" :value="form.checkedTime" placeholder="请输入审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="完成时间" prop="completeTime">
	<DatePicker @on-change="form.completeTime=$event" :value="form.completeTime" placeholder="请输入完成时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'FundsWithdrawAddEdit',
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
                    addUrl: '/funds-withdraw/admin/save',
                    batchAddUrl: '/funds-withdraw/admin/batch-save',
                    editUrl: '/funds-withdraw/admin/update',
                    batchEditUrl: '/funds-withdraw/admin/batch-update'
                },
                form: {
                    id: null,
userId: null,
transactionNo: null,
amount: null,
bankcardId: null,
withdrawStatus: null,
withdrawDescription: null,
checkedUserId: null,
checkedTime: null,
completeTime: null,


                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
transactionNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 32, message: '必须1-32个字符', trigger: 'blur'}
],
amount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
bankcardId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
withdrawDescription: [
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
