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
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="拼团价格" prop="grouponPrice">
	<InputNumber v-model="form.grouponPrice" placeholder="请输入拼团价格" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="成团人数" prop="grouponPersonCount">
	<InputNumber v-model="form.grouponPersonCount" placeholder="请输入成团人数" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="开始时间" prop="beginTime">
	<DatePicker @on-change="form.beginTime=$event" :value="form.beginTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="结束时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入结束时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="拼团价格" prop="grouponPrice">
	<InputNumber v-model="form.grouponPrice" placeholder="请输入拼团价格" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="成团人数" prop="grouponPersonCount">
	<InputNumber v-model="form.grouponPersonCount" placeholder="请输入成团人数" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="开始时间" prop="beginTime">
	<DatePicker @on-change="form.beginTime=$event" :value="form.beginTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="结束时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入结束时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'GoodsGrouponAddEdit',
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
                    addUrl: '/goods-groupon/admin/save',
                    batchAddUrl: '/goods-groupon/admin/batch-save',
                    editUrl: '/goods-groupon/admin/update',
                    batchEditUrl: '/goods-groupon/admin/batch-update'
                },
                form: {
                    shopId: null,
goodsId: null,
goodsSkuId: null,
grouponPrice: null,
grouponPersonCount: null,
beginTime: null,
endTime: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsSkuId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
grouponPrice: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
grouponPersonCount: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
beginTime: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'}
],
endTime: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'}
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
