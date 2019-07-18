<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
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
	<FormItem label="店铺编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoShopIdMin">
	<InputNumber v-model="searchForm.goodsInfoShopIdMin" placeholder="请输入开始店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoShopIdMax">
	<InputNumber v-model="searchForm.goodsInfoShopIdMax" placeholder="请输入结束店铺编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="类目编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoCategoryIdMin">
	<InputNumber v-model="searchForm.goodsInfoCategoryIdMin" placeholder="请输入开始类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoCategoryIdMax">
	<InputNumber v-model="searchForm.goodsInfoCategoryIdMax" placeholder="请输入结束类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="商品标题" prop="goodsInfoTitle">
	<Input v-model="searchForm.goodsInfoTitle" placeholder="请输入商品标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="图文详情" prop="goodsInfoIntro">
	<Input v-model="searchForm.goodsInfoIntro" placeholder="请输入图文详情"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="上架状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoShelfStatusMin">
	<InputNumber v-model="searchForm.goodsInfoShelfStatusMin" placeholder="请输入开始上架状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoShelfStatusMax">
	<InputNumber v-model="searchForm.goodsInfoShelfStatusMax" placeholder="请输入结束上架状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="销量"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoSaleCountMin">
	<InputNumber v-model="searchForm.goodsInfoSaleCountMin" placeholder="请输入开始销量" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoSaleCountMax">
	<InputNumber v-model="searchForm.goodsInfoSaleCountMax" placeholder="请输入结束销量" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="点击数"><Row>
	<i-col span="11">
	<FormItem prop="goodsInfoClickCountMin">
	<InputNumber v-model="searchForm.goodsInfoClickCountMin" placeholder="请输入开始点击数" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoClickCountMax">
	<InputNumber v-model="searchForm.goodsInfoClickCountMax" placeholder="请输入结束点击数" style="width: 100%;"/>
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
	<FormItem prop="goodsInfoCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsInfoCreateTimeMin=$event" :value="searchForm.goodsInfoCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsInfoCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsInfoCreateTimeMax=$event" :value="searchForm.goodsInfoCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="店铺Logo" prop="goodsShopLogo">
	<Input v-model="searchForm.goodsShopLogo" placeholder="请输入店铺Logo"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺标题" prop="goodsShopTitle">
	<Input v-model="searchForm.goodsShopTitle" placeholder="请输入店铺标题"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="店铺等级"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopLevelMin">
	<InputNumber v-model="searchForm.goodsShopLevelMin" placeholder="请输入开始店铺等级" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopLevelMax">
	<InputNumber v-model="searchForm.goodsShopLevelMax" placeholder="请输入结束店铺等级" style="width: 100%;"/>
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
</i-col><i-col span="12">
	<FormItem label="上架状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsSkuShelfStatusMin">
	<InputNumber v-model="searchForm.goodsSkuShelfStatusMin" placeholder="请输入开始上架状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsSkuShelfStatusMax">
	<InputNumber v-model="searchForm.goodsSkuShelfStatusMax" placeholder="请输入结束上架状态" style="width: 100%;"/>
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
	<FormItem prop="goodsSkuCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsSkuCreateTimeMin=$event" :value="searchForm.goodsSkuCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsSkuCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsSkuCreateTimeMax=$event" :value="searchForm.goodsSkuCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
<Row>
	<i-col span="12">
	<FormItem label="图片顺序"><Row>
	<i-col span="11">
	<FormItem prop="goodsPicPicOrderMin">
	<InputNumber v-model="searchForm.goodsPicPicOrderMin" placeholder="请输入开始图片顺序" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsPicPicOrderMax">
	<InputNumber v-model="searchForm.goodsPicPicOrderMax" placeholder="请输入结束图片顺序" style="width: 100%;"/>
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
        name: 'GoodsInfoSkuPicSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-info-sku-pic/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    goodsInfoId: null,
goodsInfoIdMin: null, 
goodsInfoIdMax: null, 
goodsInfoShopId: null,
goodsInfoShopIdMin: null, 
goodsInfoShopIdMax: null, 
goodsInfoCategoryId: null,
goodsInfoCategoryIdMin: null, 
goodsInfoCategoryIdMax: null, 
goodsInfoTitle: null,
goodsInfoIntro: null,
goodsInfoShelfStatus: null,
goodsInfoShelfStatusMin: null, 
goodsInfoShelfStatusMax: null, 
goodsInfoSaleCount: null,
goodsInfoSaleCountMin: null, 
goodsInfoSaleCountMax: null, 
goodsInfoClickCount: null,
goodsInfoClickCountMin: null, 
goodsInfoClickCountMax: null, 
goodsInfoCreateTime: null,
goodsInfoCreateTimeMin: null, 
goodsInfoCreateTimeMax: null, 
goodsShopLogo: null,
goodsShopTitle: null,
goodsShopLevel: null,
goodsShopLevelMin: null, 
goodsShopLevelMax: null, 
goodsSkuId: null,
goodsSkuIdMin: null, 
goodsSkuIdMax: null, 
goodsSkuShelfStatus: null,
goodsSkuShelfStatusMin: null, 
goodsSkuShelfStatusMax: null, 
goodsSkuCreateTime: null,
goodsSkuCreateTimeMin: null, 
goodsSkuCreateTimeMax: null, 
goodsPicPicUrl: null,
goodsPicPicOrder: null,
goodsPicPicOrderMin: null, 
goodsPicPicOrderMax: null, 

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
