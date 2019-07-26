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
	<FormItem label="收货人" prop="realName">
	<Input v-model="form.realName" placeholder="请输入收货人"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="手机号" prop="phone">
	<Input v-model="form.phone" placeholder="请输入手机号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="省" prop="province">
	<Input v-model="form.province" placeholder="请输入省"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="市" prop="city">
	<Input v-model="form.city" placeholder="请输入市"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="区/县" prop="district">
	<Input v-model="form.district" placeholder="请输入区/县"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="详细地址" prop="address">
	<Input v-model="form.address" placeholder="请输入详细地址"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否已发货" prop="isDeliver">
	<InputNumber v-model="form.isDeliver" placeholder="请输入是否已发货" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="物流公司名称" prop="logisticsCompany">
	<Input v-model="form.logisticsCompany" placeholder="请输入物流公司名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="物流公司编码" prop="logisticsCode">
	<Input v-model="form.logisticsCode" placeholder="请输入物流公司编码"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="物流单号" prop="logisticsNo">
	<Input v-model="form.logisticsNo" placeholder="请输入物流单号"/>
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
	<FormItem label="收货人" prop="realName">
	<Input v-model="form.realName" placeholder="请输入收货人"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="手机号" prop="phone">
	<Input v-model="form.phone" placeholder="请输入手机号"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="省" prop="province">
	<Input v-model="form.province" placeholder="请输入省"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="市" prop="city">
	<Input v-model="form.city" placeholder="请输入市"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="区/县" prop="district">
	<Input v-model="form.district" placeholder="请输入区/县"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="详细地址" prop="address">
	<Input v-model="form.address" placeholder="请输入详细地址"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="是否已发货" prop="isDeliver">
	<InputNumber v-model="form.isDeliver" placeholder="请输入是否已发货" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="物流公司名称" prop="logisticsCompany">
	<Input v-model="form.logisticsCompany" placeholder="请输入物流公司名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="物流公司编码" prop="logisticsCode">
	<Input v-model="form.logisticsCode" placeholder="请输入物流公司编码"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="物流单号" prop="logisticsNo">
	<Input v-model="form.logisticsNo" placeholder="请输入物流单号"/>
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
        name: 'GoodsOrderLogisticsAddEdit',
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
                    addUrl: '/goods-order-logistics/admin/save',
                    batchAddUrl: '/goods-order-logistics/admin/batch-save',
                    editUrl: '/goods-order-logistics/admin/update',
                    batchEditUrl: '/goods-order-logistics/admin/batch-update'
                },
                form: {
                    shopId: null,
realName: null,
phone: null,
province: null,
city: null,
district: null,
address: null,
isDeliver: null,
logisticsCompany: null,
logisticsCode: null,
logisticsNo: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
realName: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
phone: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 11, message: '必须1-11个字符', trigger: 'blur'}
],
province: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
city: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
district: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
address: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
logisticsCompany: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
logisticsCode: [
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
logisticsNo: [
{type: 'string', min: 1, max: 32, message: '必须1-32个字符', trigger: 'blur'}
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
