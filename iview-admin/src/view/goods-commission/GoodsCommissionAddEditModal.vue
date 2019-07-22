<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="角色编号" prop="roleId">
	<InputNumber v-model="form.roleId" placeholder="请输入角色编号" style="width: 100%;"/>
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
	<FormItem label="分销商级别" prop="distributionLevel">
	<InputNumber v-model="form.distributionLevel" placeholder="请输入分销商级别" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="佣金比例" prop="commissionPercent">
	<InputNumber v-model="form.commissionPercent" placeholder="请输入佣金比例" style="width: 100%;"/>
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
	<FormItem label="角色编号" prop="roleId">
	<InputNumber v-model="form.roleId" placeholder="请输入角色编号" style="width: 100%;"/>
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
	<FormItem label="分销商级别" prop="distributionLevel">
	<InputNumber v-model="form.distributionLevel" placeholder="请输入分销商级别" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="佣金比例" prop="commissionPercent">
	<InputNumber v-model="form.commissionPercent" placeholder="请输入佣金比例" style="width: 100%;"/>
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
        name: 'GoodsCommissionAddEdit',
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
                    addUrl: '/goods-commission/admin/save',
                    batchAddUrl: '/goods-commission/admin/batch-save',
                    editUrl: '/goods-commission/admin/update',
                    batchEditUrl: '/goods-commission/admin/batch-update'
                },
                form: {
                    id: null,
roleId: null,
goodsId: null,
goodsSkuId: null,
distributionLevel: null,
commissionPercent: null,
version: null,
createTime: null,
updateTime: null,
isActive: null,

                },
                validateRules: {
                    roleId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
distributionLevel: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
commissionPercent: [
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
