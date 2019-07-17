<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="订单项编号"><Row>
	<i-col span="11">
	<FormItem prop="idMin">
	<InputNumber v-model="searchForm.idMin" placeholder="请输入开始订单项编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="idMax">
	<InputNumber v-model="searchForm.idMax" placeholder="请输入结束订单项编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="订单编号"><Row>
	<i-col span="11">
	<FormItem prop="orderIdMin">
	<InputNumber v-model="searchForm.orderIdMin" placeholder="请输入开始订单编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="orderIdMax">
	<InputNumber v-model="searchForm.orderIdMax" placeholder="请输入结束订单编号" style="width: 100%;"/>
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
	<FormItem prop="goodsIdMin">
	<InputNumber v-model="searchForm.goodsIdMin" placeholder="请输入开始商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsIdMax">
	<InputNumber v-model="searchForm.goodsIdMax" placeholder="请输入结束商品编号" style="width: 100%;"/>
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
	<FormItem label="SKU图片编号"><Row>
	<i-col span="11">
	<FormItem prop="skuPicIdMin">
	<InputNumber v-model="searchForm.skuPicIdMin" placeholder="请输入开始SKU图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="skuPicIdMax">
	<InputNumber v-model="searchForm.skuPicIdMax" placeholder="请输入结束SKU图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="售卖标题" prop="skuTitle">
	<Input v-model="searchForm.skuTitle" placeholder="请输入售卖标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU规格信息" prop="skuInfo">
	<Input v-model="searchForm.skuInfo" placeholder="请输入SKU规格信息"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="购买数量"><Row>
	<i-col span="11">
	<FormItem prop="quantityMin">
	<InputNumber v-model="searchForm.quantityMin" placeholder="请输入开始购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="quantityMax">
	<InputNumber v-model="searchForm.quantityMax" placeholder="请输入结束购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="实付金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="payAmountMin">
	<InputNumber v-model="searchForm.payAmountMin" placeholder="请输入开始实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="payAmountMax">
	<InputNumber v-model="searchForm.payAmountMax" placeholder="请输入结束实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="discountAmountMin">
	<InputNumber v-model="searchForm.discountAmountMin" placeholder="请输入开始优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="discountAmountMax">
	<InputNumber v-model="searchForm.discountAmountMax" placeholder="请输入结束优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="赠送积分"><Row>
	<i-col span="11">
	<FormItem prop="integralAmountMin">
	<InputNumber v-model="searchForm.integralAmountMin" placeholder="请输入开始赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="integralAmountMax">
	<InputNumber v-model="searchForm.integralAmountMax" placeholder="请输入结束赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="versionMin">
	<InputNumber v-model="searchForm.versionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="versionMax">
	<InputNumber v-model="searchForm.versionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="createTimeMin">
	<DatePicker @on-change="searchForm.createTimeMin=$event" :value="searchForm.createTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="createTimeMax">
	<DatePicker @on-change="searchForm.createTimeMax=$event" :value="searchForm.createTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="updateTimeMin">
	<DatePicker @on-change="searchForm.updateTimeMin=$event" :value="searchForm.updateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="updateTimeMax">
	<DatePicker @on-change="searchForm.updateTimeMax=$event" :value="searchForm.updateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="isActiveMin">
	<InputNumber v-model="searchForm.isActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="isActiveMax">
	<InputNumber v-model="searchForm.isActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
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
        name: 'GoodsOrderItemSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-order-item/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    id: null,
idMin: null, 
idMax: null, 
orderId: null,
orderIdMin: null, 
orderIdMax: null, 
goodsId: null,
goodsIdMin: null, 
goodsIdMax: null, 
goodsSkuId: null,
goodsSkuIdMin: null, 
goodsSkuIdMax: null, 
skuPicId: null,
skuPicIdMin: null, 
skuPicIdMax: null, 
skuTitle: null,
skuInfo: null,
quantity: null,
quantityMin: null, 
quantityMax: null, 
payAmount: null,
payAmountMin: null, 
payAmountMax: null, 
discountAmount: null,
discountAmountMin: null, 
discountAmountMax: null, 
integralAmount: null,
integralAmountMin: null, 
integralAmountMax: null, 
version: null,
versionMin: null, 
versionMax: null, 
createTime: null,
createTimeMin: null, 
createTimeMax: null, 
updateTime: null,
updateTimeMin: null, 
updateTimeMax: null, 
isActive: null,
isActiveMin: null, 
isActiveMax: null, 

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
