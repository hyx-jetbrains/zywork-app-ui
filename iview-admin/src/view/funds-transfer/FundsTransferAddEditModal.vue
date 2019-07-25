<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="金额（元）" prop="amount">
	<InputNumber v-model="form.amount" placeholder="请输入金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="FROM" prop="fromUserId">
	<InputNumber v-model="form.fromUserId" placeholder="请输入FROM" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="TO" prop="toUserId">
	<InputNumber v-model="form.toUserId" placeholder="请输入TO" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类型" prop="transferType">
	<Input v-model="form.transferType" placeholder="请输入类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="描述" prop="transferDescription">
	<Input v-model="form.transferDescription" placeholder="请输入描述"/>
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
	<FormItem label="交易编号" prop="transactionNo">
	<Input v-model="form.transactionNo" placeholder="请输入交易编号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="金额（元）" prop="amount">
	<InputNumber v-model="form.amount" placeholder="请输入金额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="FROM" prop="fromUserId">
	<InputNumber v-model="form.fromUserId" placeholder="请输入FROM" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="TO" prop="toUserId">
	<InputNumber v-model="form.toUserId" placeholder="请输入TO" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="类型" prop="transferType">
	<Input v-model="form.transferType" placeholder="请输入类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="描述" prop="transferDescription">
	<Input v-model="form.transferDescription" placeholder="请输入描述"/>
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
        name: 'FundsTransferAddEdit',
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
                    addUrl: '/funds-transfer/admin/save',
                    batchAddUrl: '/funds-transfer/admin/batch-save',
                    editUrl: '/funds-transfer/admin/update',
                    batchEditUrl: '/funds-transfer/admin/batch-update'
                },
                form: {
                    id: null,
transactionNo: null,
userId: null,
amount: null,
fromUserId: null,
toUserId: null,
transferType: null,
transferDescription: null,


                },
                validateRules: {
                    transactionNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 32, message: '必须1-32个字符', trigger: 'blur'}
],
userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
amount: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
transferType: [
{type: 'string', min: 1, max: 10, message: '必须1-10个字符', trigger: 'blur'}
],
transferDescription: [
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
