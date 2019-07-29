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
	<FormItem label="店铺编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopIdMin">
	<InputNumber v-model="searchForm.goodsShopIdMin" placeholder="请输入开始店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopIdMax">
	<InputNumber v-model="searchForm.goodsShopIdMax" placeholder="请输入结束店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺Logo" prop="goodsShopLogo">
	<Input v-model="searchForm.goodsShopLogo" placeholder="请输入店铺Logo"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="店铺标题" prop="goodsShopTitle">
	<Input v-model="searchForm.goodsShopTitle" placeholder="请输入店铺标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品评论编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentIdMin">
	<InputNumber v-model="searchForm.goodsCommentIdMin" placeholder="请输入开始商品评论编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentIdMax">
	<InputNumber v-model="searchForm.goodsCommentIdMax" placeholder="请输入结束商品评论编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="商品编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentGoodsIdMin">
	<InputNumber v-model="searchForm.goodsCommentGoodsIdMin" placeholder="请输入开始商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentGoodsIdMax">
	<InputNumber v-model="searchForm.goodsCommentGoodsIdMax" placeholder="请输入结束商品编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentGoodsSkuIdMin">
	<InputNumber v-model="searchForm.goodsCommentGoodsSkuIdMin" placeholder="请输入开始SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentGoodsSkuIdMax">
	<InputNumber v-model="searchForm.goodsCommentGoodsSkuIdMax" placeholder="请输入结束SKU编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="售卖标题" prop="goodsCommentSkuTitle">
	<Input v-model="searchForm.goodsCommentSkuTitle" placeholder="请输入售卖标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="SKU规格信息" prop="goodsCommentSkuInfo">
	<Input v-model="searchForm.goodsCommentSkuInfo" placeholder="请输入SKU规格信息"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="购买数量"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentQuantityMin">
	<InputNumber v-model="searchForm.goodsCommentQuantityMin" placeholder="请输入开始购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentQuantityMax">
	<InputNumber v-model="searchForm.goodsCommentQuantityMax" placeholder="请输入结束购买数量" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评论等级"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentCommentLevelMin">
	<InputNumber v-model="searchForm.goodsCommentCommentLevelMin" placeholder="请输入开始评论等级" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentCommentLevelMax">
	<InputNumber v-model="searchForm.goodsCommentCommentLevelMax" placeholder="请输入结束评论等级" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="评分星级"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentCommentRateMin">
	<InputNumber v-model="searchForm.goodsCommentCommentRateMin" placeholder="请输入开始评分星级" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentCommentRateMax">
	<InputNumber v-model="searchForm.goodsCommentCommentRateMax" placeholder="请输入结束评分星级" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="评论详情" prop="goodsCommentComments">
	<Input v-model="searchForm.goodsCommentComments" placeholder="请输入评论详情"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="追加评论" prop="goodsCommentAppendComment">
	<Input v-model="searchForm.goodsCommentAppendComment" placeholder="请输入追加评论"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="回复详情" prop="goodsCommentReply">
	<Input v-model="searchForm.goodsCommentReply" placeholder="请输入回复详情"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="置顶状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentStickStatusMin">
	<InputNumber v-model="searchForm.goodsCommentStickStatusMin" placeholder="请输入开始置顶状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentStickStatusMax">
	<InputNumber v-model="searchForm.goodsCommentStickStatusMax" placeholder="请输入结束置顶状态" style="width: 100%;"/>
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
	<FormItem prop="goodsCommentVersionMin">
	<InputNumber v-model="searchForm.goodsCommentVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentVersionMax">
	<InputNumber v-model="searchForm.goodsCommentVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsCommentCreateTimeMin=$event" :value="searchForm.goodsCommentCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsCommentCreateTimeMax=$event" :value="searchForm.goodsCommentCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="goodsCommentUpdateTimeMin">
	<DatePicker @on-change="searchForm.goodsCommentUpdateTimeMin=$event" :value="searchForm.goodsCommentUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentUpdateTimeMax">
	<DatePicker @on-change="searchForm.goodsCommentUpdateTimeMax=$event" :value="searchForm.goodsCommentUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="goodsCommentIsActiveMin">
	<InputNumber v-model="searchForm.goodsCommentIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCommentIsActiveMax">
	<InputNumber v-model="searchForm.goodsCommentIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'UserGoodsCommentSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-goods-comment/admin/pager-cond'
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
goodsShopId: null,
goodsShopIdMin: null, 
goodsShopIdMax: null, 
goodsShopLogo: null,
goodsShopTitle: null,
goodsCommentId: null,
goodsCommentIdMin: null, 
goodsCommentIdMax: null, 
goodsCommentGoodsId: null,
goodsCommentGoodsIdMin: null, 
goodsCommentGoodsIdMax: null, 
goodsCommentGoodsSkuId: null,
goodsCommentGoodsSkuIdMin: null, 
goodsCommentGoodsSkuIdMax: null, 
goodsCommentSkuTitle: null,
goodsCommentSkuInfo: null,
goodsCommentQuantity: null,
goodsCommentQuantityMin: null, 
goodsCommentQuantityMax: null, 
goodsCommentCommentLevel: null,
goodsCommentCommentLevelMin: null, 
goodsCommentCommentLevelMax: null, 
goodsCommentCommentRate: null,
goodsCommentCommentRateMin: null, 
goodsCommentCommentRateMax: null, 
goodsCommentComments: null,
goodsCommentAppendComment: null,
goodsCommentReply: null,
goodsCommentStickStatus: null,
goodsCommentStickStatusMin: null, 
goodsCommentStickStatusMax: null, 
goodsCommentVersion: null,
goodsCommentVersionMin: null, 
goodsCommentVersionMax: null, 
goodsCommentCreateTime: null,
goodsCommentCreateTimeMin: null, 
goodsCommentCreateTimeMax: null, 
goodsCommentUpdateTime: null,
goodsCommentUpdateTimeMin: null, 
goodsCommentUpdateTimeMax: null, 
goodsCommentIsActive: null,
goodsCommentIsActiveMin: null, 
goodsCommentIsActiveMax: null, 

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
