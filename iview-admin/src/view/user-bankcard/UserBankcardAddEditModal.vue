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
	<FormItem label="持卡人姓名" prop="accountName">
	<Input v-model="form.accountName" placeholder="请输入持卡人姓名"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="银行代码" prop="bankCode">
	<Input v-model="form.bankCode" placeholder="请输入银行代码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="银行名称" prop="bankName">
	<Input v-model="form.bankName" placeholder="请输入银行名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="银行卡号" prop="bankcardNo">
	<Input v-model="form.bankcardNo" placeholder="请输入银行卡号"/>
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
	<FormItem label="持卡人姓名" prop="accountName">
	<Input v-model="form.accountName" placeholder="请输入持卡人姓名"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="银行代码" prop="bankCode">
	<Input v-model="form.bankCode" placeholder="请输入银行代码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="银行名称" prop="bankName">
	<Input v-model="form.bankName" placeholder="请输入银行名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="银行卡号" prop="bankcardNo">
	<Input v-model="form.bankcardNo" placeholder="请输入银行卡号"/>
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
        name: 'UserBankcardAddEdit',
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
                    addUrl: '/user-bankcard/admin/save',
                    batchAddUrl: '/user-bankcard/admin/batch-save',
                    editUrl: '/user-bankcard/admin/update',
                    batchEditUrl: '/user-bankcard/admin/batch-update'
                },
                form: {
                    id: null,
userId: null,
accountName: null,
bankCode: null,
bankName: null,
bankcardNo: null,


                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
accountName: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 10, message: '必须1-10个字符', trigger: 'blur'}
],
bankCode: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
bankName: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
bankcardNo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 25, message: '必须1-25个字符', trigger: 'blur'}
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
