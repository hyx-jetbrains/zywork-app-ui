<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="昵称" prop="nickname">
	<Input v-model="form.nickname" placeholder="请输入昵称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="头像地址" prop="headicon">
	<Input v-model="form.headicon" placeholder="请输入头像地址"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="性别" prop="gender">
	<InputNumber v-model="form.gender" placeholder="请输入性别" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="生日" prop="birthday">
	<DatePicker @on-change="form.birthday=$event" :value="form.birthday" placeholder="请输入生日" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="年龄" prop="age">
	<InputNumber v-model="form.age" placeholder="请输入年龄" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="QQ号" prop="qq">
	<Input v-model="form.qq" placeholder="请输入QQ号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="QQ二维码" prop="qqQrcode">
	<Input v-model="form.qqQrcode" placeholder="请输入QQ二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="微信号" prop="wechat">
	<Input v-model="form.wechat" placeholder="请输入微信号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="微信二维码" prop="wechatQrcode">
	<Input v-model="form.wechatQrcode" placeholder="请输入微信二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="支付宝账号" prop="alipay">
	<Input v-model="form.alipay" placeholder="请输入支付宝账号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付宝二维码" prop="alipayQrcode">
	<Input v-model="form.alipayQrcode" placeholder="请输入支付宝二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="分享码" prop="shareCode">
	<Input v-model="form.shareCode" placeholder="请输入分享码"/>
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
	<FormItem label="昵称" prop="nickname">
	<Input v-model="form.nickname" placeholder="请输入昵称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="头像地址" prop="headicon">
	<Input v-model="form.headicon" placeholder="请输入头像地址"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="性别" prop="gender">
	<InputNumber v-model="form.gender" placeholder="请输入性别" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="生日" prop="birthday">
	<DatePicker @on-change="form.birthday=$event" :value="form.birthday" placeholder="请输入生日" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="年龄" prop="age">
	<InputNumber v-model="form.age" placeholder="请输入年龄" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="QQ号" prop="qq">
	<Input v-model="form.qq" placeholder="请输入QQ号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="QQ二维码" prop="qqQrcode">
	<Input v-model="form.qqQrcode" placeholder="请输入QQ二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="微信号" prop="wechat">
	<Input v-model="form.wechat" placeholder="请输入微信号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="微信二维码" prop="wechatQrcode">
	<Input v-model="form.wechatQrcode" placeholder="请输入微信二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="支付宝账号" prop="alipay">
	<Input v-model="form.alipay" placeholder="请输入支付宝账号"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付宝二维码" prop="alipayQrcode">
	<Input v-model="form.alipayQrcode" placeholder="请输入支付宝二维码"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="分享码" prop="shareCode">
	<Input v-model="form.shareCode" placeholder="请输入分享码"/>
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
        name: 'UserDetailAddEdit',
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
                    addUrl: '/user-detail/admin/save',
                    batchAddUrl: '/user-detail/admin/batch-save',
                    editUrl: '/user-detail/admin/update',
                    batchEditUrl: '/user-detail/admin/batch-update'
                },
                form: {
                    id: null,
nickname: null,
headicon: null,
gender: null,
birthday: null,
age: null,
qq: null,
qqQrcode: null,
wechat: null,
wechatQrcode: null,
alipay: null,
alipayQrcode: null,
shareCode: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    nickname: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
headicon: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
qq: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
qqQrcode: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
wechat: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
wechatQrcode: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
alipay: [
{type: 'string', min: 1, max: 100, message: '必须1-100个字符', trigger: 'blur'}
],
alipayQrcode: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
shareCode: [
{type: 'string', min: 1, max: 36, message: '必须1-36个字符', trigger: 'blur'}
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
