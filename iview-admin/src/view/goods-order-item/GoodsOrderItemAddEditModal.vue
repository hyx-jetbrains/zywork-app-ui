<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="订单编号" prop="orderId">
	<InputNumber v-model="form.orderId" placeholder="请输入订单编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU图片编号" prop="skuPicId">
	<InputNumber v-model="form.skuPicId" placeholder="请输入SKU图片编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="售卖标题" prop="skuTitle">
	<Input v-model="form.skuTitle" placeholder="请输入售卖标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU属性JSON" prop="skuInfo">
	<Input v-model="form.skuInfo" placeholder="请输入SKU属性JSON"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
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
	<FormItem label="订单编号" prop="orderId">
	<InputNumber v-model="form.orderId" placeholder="请输入订单编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU图片编号" prop="skuPicId">
	<InputNumber v-model="form.skuPicId" placeholder="请输入SKU图片编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="售卖标题" prop="skuTitle">
	<Input v-model="form.skuTitle" placeholder="请输入售卖标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU属性JSON" prop="skuInfo">
	<Input v-model="form.skuInfo" placeholder="请输入SKU属性JSON"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
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
        name: 'GoodsOrderItemAddEdit',
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
                    addUrl: '/goods-order-item/admin/save',
                    batchAddUrl: '/goods-order-item/admin/batch-save',
                    editUrl: '/goods-order-item/admin/update',
                    batchEditUrl: '/goods-order-item/admin/batch-update'
                },
                form: {
                    id: null,
orderId: null,
goodsId: null,
goodsSkuId: null,
skuPicId: null,
skuTitle: null,
skuInfo: null,
quantity: null,
payAmount: null,
discountAmount: null,
integralAmount: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    orderId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsSkuId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
skuPicId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
skuTitle: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
],
skuInfo: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
quantity: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
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
