<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="订单编号"><Row>
	<i-col span="11">
	<FormItem prop="idMin">
	<InputNumber v-model="searchForm.idMin" placeholder="请输入开始订单编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="idMax">
	<InputNumber v-model="searchForm.idMax" placeholder="请输入结束订单编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
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
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺编号"><Row>
	<i-col span="11">
	<FormItem prop="shopIdMin">
	<InputNumber v-model="searchForm.shopIdMin" placeholder="请输入开始店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="shopIdMax">
	<InputNumber v-model="searchForm.shopIdMax" placeholder="请输入结束店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="订单号" prop="orderNo">
	<Input v-model="searchForm.orderNo" placeholder="请输入订单号"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="totalAmountMin">
	<InputNumber v-model="searchForm.totalAmountMin" placeholder="请输入开始订单金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="totalAmountMax">
	<InputNumber v-model="searchForm.totalAmountMax" placeholder="请输入结束订单金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
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
</i-col>
</Row>
<Row>
	<i-col span="12">
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
</i-col><i-col span="12">
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
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="运费（元）"><Row>
	<i-col span="11">
	<FormItem prop="expressFeeMin">
	<InputNumber v-model="searchForm.expressFeeMin" placeholder="请输入开始运费（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="expressFeeMax">
	<InputNumber v-model="searchForm.expressFeeMax" placeholder="请输入结束运费（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="订单状态"><Row>
	<i-col span="11">
	<FormItem prop="orderStatusMin">
	<InputNumber v-model="searchForm.orderStatusMin" placeholder="请输入开始订单状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="orderStatusMax">
	<InputNumber v-model="searchForm.orderStatusMax" placeholder="请输入结束订单状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付时间"><Row>
	<i-col span="11">
	<FormItem prop="payTimeMin">
	<DatePicker @on-change="searchForm.payTimeMin=$event" :value="searchForm.payTimeMin" placeholder="请输入开始支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="payTimeMax">
	<DatePicker @on-change="searchForm.payTimeMax=$event" :value="searchForm.payTimeMax" placeholder="请输入结束支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="支付方式"><Row>
	<i-col span="11">
	<FormItem prop="payTypeMin">
	<InputNumber v-model="searchForm.payTypeMin" placeholder="请输入开始支付方式" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="payTypeMax">
	<InputNumber v-model="searchForm.payTypeMax" placeholder="请输入结束支付方式" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付订单号" prop="transactionNo">
	<Input v-model="searchForm.transactionNo" placeholder="请输入支付订单号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否支付成功"><Row>
	<i-col span="11">
	<FormItem prop="paySuccessMin">
	<InputNumber v-model="searchForm.paySuccessMin" placeholder="请输入开始是否支付成功" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="paySuccessMax">
	<InputNumber v-model="searchForm.paySuccessMax" placeholder="请输入结束是否支付成功" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="发货时间"><Row>
	<i-col span="11">
	<FormItem prop="deliverTimeMin">
	<DatePicker @on-change="searchForm.deliverTimeMin=$event" :value="searchForm.deliverTimeMin" placeholder="请输入开始发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="deliverTimeMax">
	<DatePicker @on-change="searchForm.deliverTimeMax=$event" :value="searchForm.deliverTimeMax" placeholder="请输入结束发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="成交时间"><Row>
	<i-col span="11">
	<FormItem prop="dealTimeMin">
	<DatePicker @on-change="searchForm.dealTimeMin=$event" :value="searchForm.dealTimeMin" placeholder="请输入开始成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="dealTimeMax">
	<DatePicker @on-change="searchForm.dealTimeMax=$event" :value="searchForm.dealTimeMax" placeholder="请输入结束成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单备注" prop="remark">
	<Input v-model="searchForm.remark" placeholder="请输入订单备注"/>
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
        name: 'GoodsOrderSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-order/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    id: null,
idMin: null, 
idMax: null, 
userId: null,
userIdMin: null, 
userIdMax: null, 
shopId: null,
shopIdMin: null, 
shopIdMax: null, 
orderNo: null,
totalAmount: null,
totalAmountMin: null, 
totalAmountMax: null, 
payAmount: null,
payAmountMin: null, 
payAmountMax: null, 
discountAmount: null,
discountAmountMin: null, 
discountAmountMax: null, 
integralAmount: null,
integralAmountMin: null, 
integralAmountMax: null, 
expressFee: null,
expressFeeMin: null, 
expressFeeMax: null, 
orderStatus: null,
orderStatusMin: null, 
orderStatusMax: null, 
payTime: null,
payTimeMin: null, 
payTimeMax: null, 
payType: null,
payTypeMin: null, 
payTypeMax: null, 
transactionNo: null,
paySuccess: null,
paySuccessMin: null, 
paySuccessMax: null, 
deliverTime: null,
deliverTimeMin: null, 
deliverTimeMax: null, 
dealTime: null,
dealTimeMin: null, 
dealTimeMax: null, 
remark: null,
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
