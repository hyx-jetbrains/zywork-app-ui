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
	<FormItem label="订单编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderIdMin">
	<InputNumber v-model="searchForm.goodsOrderIdMin" placeholder="请输入开始订单编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderIdMax">
	<InputNumber v-model="searchForm.goodsOrderIdMax" placeholder="请输入结束订单编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单号" prop="goodsOrderOrderNo">
	<Input v-model="searchForm.goodsOrderOrderNo" placeholder="请输入订单号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="订单金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderTotalAmountMin">
	<InputNumber v-model="searchForm.goodsOrderTotalAmountMin" placeholder="请输入开始订单金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderTotalAmountMax">
	<InputNumber v-model="searchForm.goodsOrderTotalAmountMax" placeholder="请输入结束订单金额（元）" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderPayAmountMin">
	<InputNumber v-model="searchForm.goodsOrderPayAmountMin" placeholder="请输入开始实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderPayAmountMax">
	<InputNumber v-model="searchForm.goodsOrderPayAmountMax" placeholder="请输入结束实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderDiscountAmountMin">
	<InputNumber v-model="searchForm.goodsOrderDiscountAmountMin" placeholder="请输入开始优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderDiscountAmountMax">
	<InputNumber v-model="searchForm.goodsOrderDiscountAmountMax" placeholder="请输入结束优惠金额（元）" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderIntegralAmountMin">
	<InputNumber v-model="searchForm.goodsOrderIntegralAmountMin" placeholder="请输入开始赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderIntegralAmountMax">
	<InputNumber v-model="searchForm.goodsOrderIntegralAmountMax" placeholder="请输入结束赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="运费（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderExpressFeeMin">
	<InputNumber v-model="searchForm.goodsOrderExpressFeeMin" placeholder="请输入开始运费（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderExpressFeeMax">
	<InputNumber v-model="searchForm.goodsOrderExpressFeeMax" placeholder="请输入结束运费（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="订单状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderOrderStatusMin">
	<InputNumber v-model="searchForm.goodsOrderOrderStatusMin" placeholder="请输入开始订单状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderOrderStatusMax">
	<InputNumber v-model="searchForm.goodsOrderOrderStatusMax" placeholder="请输入结束订单状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="支付时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderPayTimeMin">
	<DatePicker @on-change="searchForm.goodsOrderPayTimeMin=$event" :value="searchForm.goodsOrderPayTimeMin" placeholder="请输入开始支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderPayTimeMax">
	<DatePicker @on-change="searchForm.goodsOrderPayTimeMax=$event" :value="searchForm.goodsOrderPayTimeMax" placeholder="请输入结束支付时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付方式"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderPayTypeMin">
	<InputNumber v-model="searchForm.goodsOrderPayTypeMin" placeholder="请输入开始支付方式" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderPayTypeMax">
	<InputNumber v-model="searchForm.goodsOrderPayTypeMax" placeholder="请输入结束支付方式" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="支付订单号" prop="goodsOrderTransactionNo">
	<Input v-model="searchForm.goodsOrderTransactionNo" placeholder="请输入支付订单号"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否支付成功"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderPaySuccessMin">
	<InputNumber v-model="searchForm.goodsOrderPaySuccessMin" placeholder="请输入开始是否支付成功" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderPaySuccessMax">
	<InputNumber v-model="searchForm.goodsOrderPaySuccessMax" placeholder="请输入结束是否支付成功" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="发货时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderDeliverTimeMin">
	<DatePicker @on-change="searchForm.goodsOrderDeliverTimeMin=$event" :value="searchForm.goodsOrderDeliverTimeMin" placeholder="请输入开始发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderDeliverTimeMax">
	<DatePicker @on-change="searchForm.goodsOrderDeliverTimeMax=$event" :value="searchForm.goodsOrderDeliverTimeMax" placeholder="请输入结束发货时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="成交时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderDealTimeMin">
	<DatePicker @on-change="searchForm.goodsOrderDealTimeMin=$event" :value="searchForm.goodsOrderDealTimeMin" placeholder="请输入开始成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderDealTimeMax">
	<DatePicker @on-change="searchForm.goodsOrderDealTimeMax=$event" :value="searchForm.goodsOrderDealTimeMax" placeholder="请输入结束成交时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="订单备注" prop="goodsOrderRemark">
	<Input v-model="searchForm.goodsOrderRemark" placeholder="请输入订单备注"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsOrderCreateTimeMin=$event" :value="searchForm.goodsOrderCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsOrderCreateTimeMax=$event" :value="searchForm.goodsOrderCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderIsActiveMin">
	<InputNumber v-model="searchForm.goodsOrderIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderIsActiveMax">
	<InputNumber v-model="searchForm.goodsOrderIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderItemGoodsIdMin">
	<InputNumber v-model="searchForm.goodsOrderItemGoodsIdMin" placeholder="请输入开始商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemGoodsIdMax">
	<InputNumber v-model="searchForm.goodsOrderItemGoodsIdMax" placeholder="请输入结束商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="SKU编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderItemGoodsSkuIdMin">
	<InputNumber v-model="searchForm.goodsOrderItemGoodsSkuIdMin" placeholder="请输入开始SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemGoodsSkuIdMax">
	<InputNumber v-model="searchForm.goodsOrderItemGoodsSkuIdMax" placeholder="请输入结束SKU编号" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderItemSkuPicIdMin">
	<InputNumber v-model="searchForm.goodsOrderItemSkuPicIdMin" placeholder="请输入开始SKU图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemSkuPicIdMax">
	<InputNumber v-model="searchForm.goodsOrderItemSkuPicIdMax" placeholder="请输入结束SKU图片编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="售卖标题" prop="goodsOrderItemSkuTitle">
	<Input v-model="searchForm.goodsOrderItemSkuTitle" placeholder="请输入售卖标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU规格信息" prop="goodsOrderItemSkuInfo">
	<Input v-model="searchForm.goodsOrderItemSkuInfo" placeholder="请输入SKU规格信息"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="购买数量"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderItemQuantityMin">
	<InputNumber v-model="searchForm.goodsOrderItemQuantityMin" placeholder="请输入开始购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemQuantityMax">
	<InputNumber v-model="searchForm.goodsOrderItemQuantityMax" placeholder="请输入结束购买数量" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderItemPayAmountMin">
	<InputNumber v-model="searchForm.goodsOrderItemPayAmountMin" placeholder="请输入开始实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemPayAmountMax">
	<InputNumber v-model="searchForm.goodsOrderItemPayAmountMax" placeholder="请输入结束实付金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsOrderItemDiscountAmountMin">
	<InputNumber v-model="searchForm.goodsOrderItemDiscountAmountMin" placeholder="请输入开始优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemDiscountAmountMax">
	<InputNumber v-model="searchForm.goodsOrderItemDiscountAmountMax" placeholder="请输入结束优惠金额（元）" style="width: 100%;"/>
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
	<FormItem prop="goodsOrderItemIntegralAmountMin">
	<InputNumber v-model="searchForm.goodsOrderItemIntegralAmountMin" placeholder="请输入开始赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsOrderItemIntegralAmountMax">
	<InputNumber v-model="searchForm.goodsOrderItemIntegralAmountMax" placeholder="请输入结束赠送积分" style="width: 100%;"/>
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
        name: 'UserGoodsOrderItemSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-goods-order-item/admin/pager-cond'
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
goodsOrderId: null,
goodsOrderIdMin: null, 
goodsOrderIdMax: null, 
goodsOrderOrderNo: null,
goodsOrderTotalAmount: null,
goodsOrderTotalAmountMin: null, 
goodsOrderTotalAmountMax: null, 
goodsOrderPayAmount: null,
goodsOrderPayAmountMin: null, 
goodsOrderPayAmountMax: null, 
goodsOrderDiscountAmount: null,
goodsOrderDiscountAmountMin: null, 
goodsOrderDiscountAmountMax: null, 
goodsOrderIntegralAmount: null,
goodsOrderIntegralAmountMin: null, 
goodsOrderIntegralAmountMax: null, 
goodsOrderExpressFee: null,
goodsOrderExpressFeeMin: null, 
goodsOrderExpressFeeMax: null, 
goodsOrderOrderStatus: null,
goodsOrderOrderStatusMin: null, 
goodsOrderOrderStatusMax: null, 
goodsOrderPayTime: null,
goodsOrderPayTimeMin: null, 
goodsOrderPayTimeMax: null, 
goodsOrderPayType: null,
goodsOrderPayTypeMin: null, 
goodsOrderPayTypeMax: null, 
goodsOrderTransactionNo: null,
goodsOrderPaySuccess: null,
goodsOrderPaySuccessMin: null, 
goodsOrderPaySuccessMax: null, 
goodsOrderDeliverTime: null,
goodsOrderDeliverTimeMin: null, 
goodsOrderDeliverTimeMax: null, 
goodsOrderDealTime: null,
goodsOrderDealTimeMin: null, 
goodsOrderDealTimeMax: null, 
goodsOrderRemark: null,
goodsOrderCreateTime: null,
goodsOrderCreateTimeMin: null, 
goodsOrderCreateTimeMax: null, 
goodsOrderIsActive: null,
goodsOrderIsActiveMin: null, 
goodsOrderIsActiveMax: null, 
goodsOrderItemGoodsId: null,
goodsOrderItemGoodsIdMin: null, 
goodsOrderItemGoodsIdMax: null, 
goodsOrderItemGoodsSkuId: null,
goodsOrderItemGoodsSkuIdMin: null, 
goodsOrderItemGoodsSkuIdMax: null, 
goodsOrderItemSkuPicId: null,
goodsOrderItemSkuPicIdMin: null, 
goodsOrderItemSkuPicIdMax: null, 
goodsOrderItemSkuTitle: null,
goodsOrderItemSkuInfo: null,
goodsOrderItemQuantity: null,
goodsOrderItemQuantityMin: null, 
goodsOrderItemQuantityMax: null, 
goodsOrderItemPayAmount: null,
goodsOrderItemPayAmountMin: null, 
goodsOrderItemPayAmountMax: null, 
goodsOrderItemDiscountAmount: null,
goodsOrderItemDiscountAmountMin: null, 
goodsOrderItemDiscountAmountMax: null, 
goodsOrderItemIntegralAmount: null,
goodsOrderItemIntegralAmountMin: null, 
goodsOrderItemIntegralAmountMax: null, 
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
