<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="支付密码" prop="payPassword">
	<Input v-model="form.payPassword" placeholder="请输入支付密码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="人民币余额（元）" prop="rmbBalance">
	<InputNumber v-model="form.rmbBalance" placeholder="请输入人民币余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="可用余额（元）" prop="usableRmbBalance">
	<InputNumber v-model="form.usableRmbBalance" placeholder="请输入可用余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="冻结余额（元）" prop="frozenRmbBalance">
	<InputNumber v-model="form.frozenRmbBalance" placeholder="请输入冻结余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="总积分" prop="integral">
	<InputNumber v-model="form.integral" placeholder="请输入总积分" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="可用积分" prop="usableIntegral">
	<InputNumber v-model="form.usableIntegral" placeholder="请输入可用积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="冻结积分" prop="frozenIntegral">
	<InputNumber v-model="form.frozenIntegral" placeholder="请输入冻结积分" style="width: 100%;"/>
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
	<FormItem label="支付密码" prop="payPassword">
	<Input v-model="form.payPassword" placeholder="请输入支付密码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="人民币余额（元）" prop="rmbBalance">
	<InputNumber v-model="form.rmbBalance" placeholder="请输入人民币余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="可用余额（元）" prop="usableRmbBalance">
	<InputNumber v-model="form.usableRmbBalance" placeholder="请输入可用余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="冻结余额（元）" prop="frozenRmbBalance">
	<InputNumber v-model="form.frozenRmbBalance" placeholder="请输入冻结余额（元）" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="总积分" prop="integral">
	<InputNumber v-model="form.integral" placeholder="请输入总积分" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="可用积分" prop="usableIntegral">
	<InputNumber v-model="form.usableIntegral" placeholder="请输入可用积分" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="冻结积分" prop="frozenIntegral">
	<InputNumber v-model="form.frozenIntegral" placeholder="请输入冻结积分" style="width: 100%;"/>
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
        name: 'UserWalletAddEdit',
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
                    addUrl: '/user-wallet/admin/save',
                    batchAddUrl: '/user-wallet/admin/batch-save',
                    editUrl: '/user-wallet/admin/update',
                    batchEditUrl: '/user-wallet/admin/batch-update'
                },
                form: {
                    id: null,
payPassword: null,
rmbBalance: null,
usableRmbBalance: null,
frozenRmbBalance: null,
integral: null,
usableIntegral: null,
frozenIntegral: null,


                },
                validateRules: {
                    payPassword: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
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
