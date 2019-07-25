<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="提现编号" prop="withdrawId">
	<InputNumber v-model="form.withdrawId" placeholder="请输入提现编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
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
	<FormItem label="提现编号" prop="withdrawId">
	<InputNumber v-model="form.withdrawId" placeholder="请输入提现编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
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
        name: 'FundsWithdrawCheckAddEdit',
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
                    addUrl: '/funds-withdraw-check/admin/save',
                    batchAddUrl: '/funds-withdraw-check/admin/batch-save',
                    editUrl: '/funds-withdraw-check/admin/update',
                    batchEditUrl: '/funds-withdraw-check/admin/batch-update'
                },
                form: {
                    id: null,
withdrawId: null,
transactionNo: null,
withdrawStatus: null,
withdrawDescription: null,
checkedUserId: null,


                },
                validateRules: {
                    withdrawId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
transactionNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 32, message: '必须1-32个字符', trigger: 'blur'}
],
withdrawStatus: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
withdrawDescription: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
checkedUserId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
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
