<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="手机号" prop="phone">
	<Input v-model="form.phone" placeholder="请输入手机号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户邮箱" prop="email">
	<Input v-model="form.email" placeholder="请输入用户邮箱"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="登录密码" prop="password">
	<Input v-model="form.password" placeholder="请输入登录密码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="加密盐值" prop="salt">
	<Input v-model="form.salt" placeholder="请输入加密盐值"/>
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
	<FormItem label="手机号" prop="phone">
	<Input v-model="form.phone" placeholder="请输入手机号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="用户邮箱" prop="email">
	<Input v-model="form.email" placeholder="请输入用户邮箱"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="登录密码" prop="password">
	<Input v-model="form.password" placeholder="请输入登录密码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="加密盐值" prop="salt">
	<Input v-model="form.salt" placeholder="请输入加密盐值"/>
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
        name: 'UserAddEdit',
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
                    addUrl: '/user/admin/save',
                    batchAddUrl: '/user/admin/batch-save',
                    editUrl: '/user/admin/update',
                    batchEditUrl: '/user/admin/batch-update'
                },
                form: {
                    id: null,
phone: null,
email: null,
password: null,
salt: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    phone: [
{type: 'string', min: 1, max: 11, message: '必须1-11个字符', trigger: 'blur'}
],
email: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
password: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
salt: [
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
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
