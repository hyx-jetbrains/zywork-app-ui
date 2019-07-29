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
	<FormItem label="售卖标题" prop="skuTitle">
	<Input v-model="form.skuTitle" placeholder="请输入售卖标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU规格信息" prop="skuInfo">
	<Input v-model="form.skuInfo" placeholder="请输入SKU规格信息"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论等级" prop="commentLevel">
	<InputNumber v-model="form.commentLevel" placeholder="请输入评论等级" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评分星级" prop="commentRate">
	<InputNumber v-model="form.commentRate" placeholder="请输入评分星级" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论详情" prop="comments">
	<Input v-model="form.comments" placeholder="请输入评论详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="追加评论" prop="appendComment">
	<Input v-model="form.appendComment" placeholder="请输入追加评论"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="回复详情" prop="reply">
	<Input v-model="form.reply" placeholder="请输入回复详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="置顶状态" prop="stickStatus">
	<InputNumber v-model="form.stickStatus" placeholder="请输入置顶状态" style="width: 100%;"/>
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
	<FormItem label="售卖标题" prop="skuTitle">
	<Input v-model="form.skuTitle" placeholder="请输入售卖标题"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="SKU规格信息" prop="skuInfo">
	<Input v-model="form.skuInfo" placeholder="请输入SKU规格信息"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量" prop="quantity">
	<InputNumber v-model="form.quantity" placeholder="请输入购买数量" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论等级" prop="commentLevel">
	<InputNumber v-model="form.commentLevel" placeholder="请输入评论等级" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评分星级" prop="commentRate">
	<InputNumber v-model="form.commentRate" placeholder="请输入评分星级" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="评论详情" prop="comments">
	<Input v-model="form.comments" placeholder="请输入评论详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="追加评论" prop="appendComment">
	<Input v-model="form.appendComment" placeholder="请输入追加评论"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="回复详情" prop="reply">
	<Input v-model="form.reply" placeholder="请输入回复详情"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="置顶状态" prop="stickStatus">
	<InputNumber v-model="form.stickStatus" placeholder="请输入置顶状态" style="width: 100%;"/>
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
        name: 'GoodsCommentAddEdit',
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
                    addUrl: '/goods-comment/admin/save',
                    batchAddUrl: '/goods-comment/admin/batch-save',
                    editUrl: '/goods-comment/admin/update',
                    batchEditUrl: '/goods-comment/admin/batch-update'
                },
                form: {
                    id: null,
userId: null,
shopId: null,
goodsId: null,
goodsSkuId: null,
skuTitle: null,
skuInfo: null,
quantity: null,
commentLevel: null,
commentRate: null,
comments: null,
appendComment: null,
reply: null,
stickStatus: null,

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
comments: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 1000, message: '必须1-1000个字符', trigger: 'blur'}
],
appendComment: [
{type: 'string', min: 1, max: 1000, message: '必须1-1000个字符', trigger: 'blur'}
],
reply: [
{type: 'string', min: 1, max: 1000, message: '必须1-1000个字符', trigger: 'blur'}
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
