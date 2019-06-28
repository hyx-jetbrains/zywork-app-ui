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
	<FormItem label="积分" prop="integral">
	<InputNumber v-model="form.integral" placeholder="请输入积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="收入或支出" prop="type">
	<InputNumber v-model="form.type" placeholder="请输入收入或支出" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="收支类型" prop="subType">
	<Input v-model="form.subType" placeholder="请输入收支类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付方式" prop="payType">
	<InputNumber v-model="form.payType" placeholder="请输入支付方式" style="width: 100%;"/>
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
	<FormItem label="积分" prop="integral">
	<InputNumber v-model="form.integral" placeholder="请输入积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="收入或支出" prop="type">
	<InputNumber v-model="form.type" placeholder="请输入收入或支出" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="收支类型" prop="subType">
	<Input v-model="form.subType" placeholder="请输入收支类型"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付方式" prop="payType">
	<InputNumber v-model="form.payType" placeholder="请输入支付方式" style="width: 100%;"/>
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
        name: 'AccountDetailAddEdit',
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
                    addUrl: '/account-detail/admin/save',
                    batchAddUrl: '/account-detail/admin/batch-save',
                    editUrl: '/account-detail/admin/update',
                    batchEditUrl: '/account-detail/admin/batch-update'
                },
                form: {
                    id: null,
transactionNo: null,
userId: null,
amount: null,
integral: null,
type: null,
subType: null,
payType: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    transactionNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 32, message: '必须1-32个字符', trigger: 'blur'}
],
userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
subType: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
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
