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
	<FormItem label="性别"><Row>
	<i-col span="11">
	<FormItem prop="userDetailGenderMin">
	<InputNumber v-model="searchForm.userDetailGenderMin" placeholder="请输入开始性别" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailGenderMax">
	<InputNumber v-model="searchForm.userDetailGenderMax" placeholder="请输入结束性别" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponIdMin">
	<InputNumber v-model="searchForm.goodsCouponIdMin" placeholder="请输入开始优惠券编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponIdMax">
	<InputNumber v-model="searchForm.goodsCouponIdMax" placeholder="请输入结束优惠券编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="商品类目编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponCategoryIdMin">
	<InputNumber v-model="searchForm.goodsCouponCategoryIdMin" placeholder="请输入开始商品类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponCategoryIdMax">
	<InputNumber v-model="searchForm.goodsCouponCategoryIdMax" placeholder="请输入结束商品类目编号" style="width: 100%;"/>
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
	<FormItem prop="goodsCouponShopIdMin">
	<InputNumber v-model="searchForm.goodsCouponShopIdMin" placeholder="请输入开始店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponShopIdMax">
	<InputNumber v-model="searchForm.goodsCouponShopIdMax" placeholder="请输入结束店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="商品编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponGoodsIdMin">
	<InputNumber v-model="searchForm.goodsCouponGoodsIdMin" placeholder="请输入开始商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponGoodsIdMax">
	<InputNumber v-model="searchForm.goodsCouponGoodsIdMax" placeholder="请输入结束商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品SKU编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponGoodsSkuIdMin">
	<InputNumber v-model="searchForm.goodsCouponGoodsSkuIdMin" placeholder="请输入开始商品SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponGoodsSkuIdMax">
	<InputNumber v-model="searchForm.goodsCouponGoodsSkuIdMax" placeholder="请输入结束商品SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠券标题" prop="goodsCouponTitle">
	<Input v-model="searchForm.goodsCouponTitle" placeholder="请输入优惠券标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="最小消费金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponUseMinAmountMin">
	<InputNumber v-model="searchForm.goodsCouponUseMinAmountMin" placeholder="请输入开始最小消费金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponUseMinAmountMax">
	<InputNumber v-model="searchForm.goodsCouponUseMinAmountMax" placeholder="请输入结束最小消费金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="满减优惠金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponDiscountAmountMin">
	<InputNumber v-model="searchForm.goodsCouponDiscountAmountMin" placeholder="请输入开始满减优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponDiscountAmountMax">
	<InputNumber v-model="searchForm.goodsCouponDiscountAmountMax" placeholder="请输入结束满减优惠金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="满减折扣"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponDiscountPercentMin">
	<InputNumber v-model="searchForm.goodsCouponDiscountPercentMin" placeholder="请输入开始满减折扣" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponDiscountPercentMax">
	<InputNumber v-model="searchForm.goodsCouponDiscountPercentMax" placeholder="请输入结束满减折扣" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="赠送积分"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponIntegralAmountMin">
	<InputNumber v-model="searchForm.goodsCouponIntegralAmountMin" placeholder="请输入开始赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponIntegralAmountMax">
	<InputNumber v-model="searchForm.goodsCouponIntegralAmountMax" placeholder="请输入结束赠送积分" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券总量"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponTotalCountMin">
	<InputNumber v-model="searchForm.goodsCouponTotalCountMin" placeholder="请输入开始优惠券总量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponTotalCountMax">
	<InputNumber v-model="searchForm.goodsCouponTotalCountMax" placeholder="请输入结束优惠券总量" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠券使用范围"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponCouponUsableRangeMin">
	<InputNumber v-model="searchForm.goodsCouponCouponUsableRangeMin" placeholder="请输入开始优惠券使用范围" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponCouponUsableRangeMax">
	<InputNumber v-model="searchForm.goodsCouponCouponUsableRangeMax" placeholder="请输入结束优惠券使用范围" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券类型"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponCouponTypeMin">
	<InputNumber v-model="searchForm.goodsCouponCouponTypeMin" placeholder="请输入开始优惠券类型" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponCouponTypeMax">
	<InputNumber v-model="searchForm.goodsCouponCouponTypeMax" placeholder="请输入结束优惠券类型" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="开始时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponStartTimeMin">
	<DatePicker @on-change="searchForm.goodsCouponStartTimeMin=$event" :value="searchForm.goodsCouponStartTimeMin" placeholder="请输入开始开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponStartTimeMax">
	<DatePicker @on-change="searchForm.goodsCouponStartTimeMax=$event" :value="searchForm.goodsCouponStartTimeMax" placeholder="请输入结束开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="到期时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponDueTimeMin">
	<DatePicker @on-change="searchForm.goodsCouponDueTimeMin=$event" :value="searchForm.goodsCouponDueTimeMin" placeholder="请输入开始到期时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponDueTimeMax">
	<DatePicker @on-change="searchForm.goodsCouponDueTimeMax=$event" :value="searchForm.goodsCouponDueTimeMax" placeholder="请输入结束到期时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="有效时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCouponValidDaysMin">
	<InputNumber v-model="searchForm.goodsCouponValidDaysMin" placeholder="请输入开始有效时间" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCouponValidDaysMax">
	<InputNumber v-model="searchForm.goodsCouponValidDaysMax" placeholder="请输入结束有效时间" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="领券编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponIdMin">
	<InputNumber v-model="searchForm.goodsUserCouponIdMin" placeholder="请输入开始领券编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponIdMax">
	<InputNumber v-model="searchForm.goodsUserCouponIdMax" placeholder="请输入结束领券编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="优惠券状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponCouponStatusMin">
	<InputNumber v-model="searchForm.goodsUserCouponCouponStatusMin" placeholder="请输入开始优惠券状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponCouponStatusMax">
	<InputNumber v-model="searchForm.goodsUserCouponCouponStatusMax" placeholder="请输入结束优惠券状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponVersionMin">
	<InputNumber v-model="searchForm.goodsUserCouponVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponVersionMax">
	<InputNumber v-model="searchForm.goodsUserCouponVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsUserCouponCreateTimeMin=$event" :value="searchForm.goodsUserCouponCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsUserCouponCreateTimeMax=$event" :value="searchForm.goodsUserCouponCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponUpdateTimeMin">
	<DatePicker @on-change="searchForm.goodsUserCouponUpdateTimeMin=$event" :value="searchForm.goodsUserCouponUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponUpdateTimeMax">
	<DatePicker @on-change="searchForm.goodsUserCouponUpdateTimeMax=$event" :value="searchForm.goodsUserCouponUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="goodsUserCouponIsActiveMin">
	<InputNumber v-model="searchForm.goodsUserCouponIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsUserCouponIsActiveMax">
	<InputNumber v-model="searchForm.goodsUserCouponIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'UserGoodsCouponSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-goods-coupon/admin/pager-cond'
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
userDetailGender: null,
userDetailGenderMin: null, 
userDetailGenderMax: null, 
goodsCouponId: null,
goodsCouponIdMin: null, 
goodsCouponIdMax: null, 
goodsCouponCategoryId: null,
goodsCouponCategoryIdMin: null, 
goodsCouponCategoryIdMax: null, 
goodsCouponShopId: null,
goodsCouponShopIdMin: null, 
goodsCouponShopIdMax: null, 
goodsCouponGoodsId: null,
goodsCouponGoodsIdMin: null, 
goodsCouponGoodsIdMax: null, 
goodsCouponGoodsSkuId: null,
goodsCouponGoodsSkuIdMin: null, 
goodsCouponGoodsSkuIdMax: null, 
goodsCouponTitle: null,
goodsCouponUseMinAmount: null,
goodsCouponUseMinAmountMin: null, 
goodsCouponUseMinAmountMax: null, 
goodsCouponDiscountAmount: null,
goodsCouponDiscountAmountMin: null, 
goodsCouponDiscountAmountMax: null, 
goodsCouponDiscountPercent: null,
goodsCouponDiscountPercentMin: null, 
goodsCouponDiscountPercentMax: null, 
goodsCouponIntegralAmount: null,
goodsCouponIntegralAmountMin: null, 
goodsCouponIntegralAmountMax: null, 
goodsCouponTotalCount: null,
goodsCouponTotalCountMin: null, 
goodsCouponTotalCountMax: null, 
goodsCouponCouponUsableRange: null,
goodsCouponCouponUsableRangeMin: null, 
goodsCouponCouponUsableRangeMax: null, 
goodsCouponCouponType: null,
goodsCouponCouponTypeMin: null, 
goodsCouponCouponTypeMax: null, 
goodsCouponStartTime: null,
goodsCouponStartTimeMin: null, 
goodsCouponStartTimeMax: null, 
goodsCouponDueTime: null,
goodsCouponDueTimeMin: null, 
goodsCouponDueTimeMax: null, 
goodsCouponValidDays: null,
goodsCouponValidDaysMin: null, 
goodsCouponValidDaysMax: null, 
goodsUserCouponId: null,
goodsUserCouponIdMin: null, 
goodsUserCouponIdMax: null, 
goodsUserCouponCouponStatus: null,
goodsUserCouponCouponStatusMin: null, 
goodsUserCouponCouponStatusMax: null, 
goodsUserCouponVersion: null,
goodsUserCouponVersionMin: null, 
goodsUserCouponVersionMax: null, 
goodsUserCouponCreateTime: null,
goodsUserCouponCreateTimeMin: null, 
goodsUserCouponCreateTimeMax: null, 
goodsUserCouponUpdateTime: null,
goodsUserCouponUpdateTimeMin: null, 
goodsUserCouponUpdateTimeMax: null, 
goodsUserCouponIsActive: null,
goodsUserCouponIsActiveMin: null, 
goodsUserCouponIsActiveMax: null, 

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
