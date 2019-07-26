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
	<FormItem label="店铺编号" prop="shopId">
	<InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
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
	<FormItem label="店铺编号" prop="shopId">
	<InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入SKU编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
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
        name: 'GoodsCartAddEdit',
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
                    addUrl: '/goods-cart/admin/save',
                    batchAddUrl: '/goods-cart/admin/batch-save',
                    editUrl: '/goods-cart/admin/update',
                    batchEditUrl: '/goods-cart/admin/batch-update'
                },
                form: {
                    userId: null,
shopId: null,
goodsId: null,
goodsSkuId: null,
quantity: null,

                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsSkuId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
quantity: [
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
