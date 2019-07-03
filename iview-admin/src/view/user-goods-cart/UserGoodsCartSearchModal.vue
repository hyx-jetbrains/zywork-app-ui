<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="用户编号"><Row>
	<i-col span="11">
	<FormItem prop="userIdMin">
	<InputNumber v-model="searchForm.userIdMin" placeholder="请输入开始用户编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userIdMax">
	<InputNumber v-model="searchForm.userIdMax" placeholder="请输入结束用户编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="手机号" prop="userPhone">
	<Input v-model="searchForm.userPhone" placeholder="请输入手机号"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="用户邮箱" prop="userEmail">
	<Input v-model="searchForm.userEmail" placeholder="请输入用户邮箱"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="昵称" prop="userDetailNickname">
	<Input v-model="searchForm.userDetailNickname" placeholder="请输入昵称"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="头像地址" prop="userDetailHeadicon">
	<Input v-model="searchForm.userDetailHeadicon" placeholder="请输入头像地址"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="购物编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCartIdMin">
	<InputNumber v-model="searchForm.goodsCartIdMin" placeholder="请输入开始购物编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCartIdMax">
	<InputNumber v-model="searchForm.goodsCartIdMax" placeholder="请输入结束购物编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="购买数量"><Row>
	<i-col span="11">
	<FormItem prop="goodsCartQuantityMin">
	<InputNumber v-model="searchForm.goodsCartQuantityMin" placeholder="请输入开始购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCartQuantityMax">
	<InputNumber v-model="searchForm.goodsCartQuantityMax" placeholder="请输入结束购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCartCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsCartCreateTimeMin=$event" :value="searchForm.goodsCartCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCartCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsCartCreateTimeMax=$event" :value="searchForm.goodsCartCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoIdMin">
	<InputNumber v-model="searchForm.goodsInfoIdMin" placeholder="请输入开始商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoIdMax">
	<InputNumber v-model="searchForm.goodsInfoIdMax" placeholder="请输入结束商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="SKU编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsSkuIdMin">
	<InputNumber v-model="searchForm.goodsSkuIdMin" placeholder="请输入开始SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsSkuIdMax">
	<InputNumber v-model="searchForm.goodsSkuIdMax" placeholder="请输入结束SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品图片编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsPicIdMin">
	<InputNumber v-model="searchForm.goodsPicIdMin" placeholder="请输入开始商品图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsPicIdMax">
	<InputNumber v-model="searchForm.goodsPicIdMax" placeholder="请输入结束商品图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="图片URL" prop="goodsPicPicUrl">
	<Input v-model="searchForm.goodsPicPicUrl" placeholder="请输入图片URL"/>
</FormItem>
</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetForm">清空</Button>
                <Button type="text" size="large" @click="cancelModal">取消</Button>
                <Button type="primary" size="large" @click="searchOkModal" :loading="loading.search">查询</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'UserGoodsCartSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-goods-cart/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    userId: null,
userIdMin: null, 
userIdMax: null, 
userPhone: null,
userEmail: null,
userDetailNickname: null,
userDetailHeadicon: null,
goodsCartId: null,
goodsCartIdMin: null, 
goodsCartIdMax: null, 
goodsCartQuantity: null,
goodsCartQuantityMin: null, 
goodsCartQuantityMax: null, 
goodsCartCreateTime: null,
goodsCartCreateTimeMin: null, 
goodsCartCreateTimeMax: null, 
goodsInfoId: null,
goodsInfoIdMin: null, 
goodsInfoIdMax: null, 
goodsSkuId: null,
goodsSkuIdMin: null, 
goodsSkuIdMax: null, 
goodsPicId: null,
goodsPicIdMin: null, 
goodsPicIdMax: null, 
goodsPicPicUrl: null,

                }
            }
        },
        computed: {},
        mounted() {},
        methods: {
            resetForm() {
                this.$refs.searchForm.resetFields()
            },
            cancelModal(modal) {
                this.modal.search = false
            },
            searchOkModal(modal) {
                this.modal.search = false
                this.$emit('searchTable')
            }
        }
    }
</script>

<style>
</style>
