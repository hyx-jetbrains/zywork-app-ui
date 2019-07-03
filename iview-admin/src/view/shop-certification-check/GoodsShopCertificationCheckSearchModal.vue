<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
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
</i-col><i-col span="12">
	<FormItem label="用户编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopUserIdMin">
	<InputNumber v-model="searchForm.goodsShopUserIdMin" placeholder="请输入开始用户编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopUserIdMax">
	<InputNumber v-model="searchForm.goodsShopUserIdMax" placeholder="请输入结束用户编号" style="width: 100%;"/>
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
	<FormItem prop="goodsShopCategoryIdMin">
	<InputNumber v-model="searchForm.goodsShopCategoryIdMin" placeholder="请输入开始类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCategoryIdMax">
	<InputNumber v-model="searchForm.goodsShopCategoryIdMax" placeholder="请输入结束类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="主体类型"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopSubjectTypeMin">
	<InputNumber v-model="searchForm.goodsShopSubjectTypeMin" placeholder="请输入开始主体类型" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopSubjectTypeMax">
	<InputNumber v-model="searchForm.goodsShopSubjectTypeMax" placeholder="请输入结束主体类型" style="width: 100%;"/>
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
	<FormItem label="店铺简介" prop="goodsShopIntro">
	<Input v-model="searchForm.goodsShopIntro" placeholder="请输入店铺简介"/>
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
	<FormItem label="店铺认证编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCertificationIdMin">
	<InputNumber v-model="searchForm.goodsShopCertificationIdMin" placeholder="请输入开始店铺认证编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCertificationIdMax">
	<InputNumber v-model="searchForm.goodsShopCertificationIdMax" placeholder="请输入结束店铺认证编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="认证详情JSON" prop="goodsShopCertificationDetail">
	<Input v-model="searchForm.goodsShopCertificationDetail" placeholder="请输入认证详情JSON"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="店铺审核编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCheckIdMin">
	<InputNumber v-model="searchForm.goodsShopCheckIdMin" placeholder="请输入开始店铺审核编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckIdMax">
	<InputNumber v-model="searchForm.goodsShopCheckIdMax" placeholder="请输入结束店铺审核编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="审核状态"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCheckStatusMin">
	<InputNumber v-model="searchForm.goodsShopCheckCheckStatusMin" placeholder="请输入开始审核状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCheckStatusMax">
	<InputNumber v-model="searchForm.goodsShopCheckCheckStatusMax" placeholder="请输入结束审核状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核描述" prop="goodsShopCheckCheckDescription">
	<Input v-model="searchForm.goodsShopCheckCheckDescription" placeholder="请输入审核描述"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="审核人编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCheckedUserIdMin">
	<InputNumber v-model="searchForm.goodsShopCheckCheckedUserIdMin" placeholder="请输入开始审核人编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCheckedUserIdMax">
	<InputNumber v-model="searchForm.goodsShopCheckCheckedUserIdMax" placeholder="请输入结束审核人编号" style="width: 100%;"/>
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
	<FormItem prop="goodsShopCheckVersionMin">
	<InputNumber v-model="searchForm.goodsShopCheckVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckVersionMax">
	<InputNumber v-model="searchForm.goodsShopCheckVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsShopCheckCreateTimeMin=$event" :value="searchForm.goodsShopCheckCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsShopCheckCreateTimeMax=$event" :value="searchForm.goodsShopCheckCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="goodsShopCheckUpdateTimeMin">
	<DatePicker @on-change="searchForm.goodsShopCheckUpdateTimeMin=$event" :value="searchForm.goodsShopCheckUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckUpdateTimeMax">
	<DatePicker @on-change="searchForm.goodsShopCheckUpdateTimeMax=$event" :value="searchForm.goodsShopCheckUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="goodsShopCheckIsActiveMin">
	<InputNumber v-model="searchForm.goodsShopCheckIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsShopCheckIsActiveMax">
	<InputNumber v-model="searchForm.goodsShopCheckIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'GoodsShopCertificationCheckSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/shop-certification-check/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    goodsShopId: null,
goodsShopIdMin: null, 
goodsShopIdMax: null, 
goodsShopUserId: null,
goodsShopUserIdMin: null, 
goodsShopUserIdMax: null, 
goodsShopCategoryId: null,
goodsShopCategoryIdMin: null, 
goodsShopCategoryIdMax: null, 
goodsShopSubjectType: null,
goodsShopSubjectTypeMin: null, 
goodsShopSubjectTypeMax: null, 
goodsShopLogo: null,
goodsShopTitle: null,
goodsShopIntro: null,
goodsShopLevel: null,
goodsShopLevelMin: null, 
goodsShopLevelMax: null, 
goodsShopCertificationId: null,
goodsShopCertificationIdMin: null, 
goodsShopCertificationIdMax: null, 
goodsShopCertificationDetail: null,
goodsShopCheckId: null,
goodsShopCheckIdMin: null, 
goodsShopCheckIdMax: null, 
goodsShopCheckCheckStatus: null,
goodsShopCheckCheckStatusMin: null, 
goodsShopCheckCheckStatusMax: null, 
goodsShopCheckCheckDescription: null,
goodsShopCheckCheckedUserId: null,
goodsShopCheckCheckedUserIdMin: null, 
goodsShopCheckCheckedUserIdMax: null, 
goodsShopCheckVersion: null,
goodsShopCheckVersionMin: null, 
goodsShopCheckVersionMax: null, 
goodsShopCheckCreateTime: null,
goodsShopCheckCreateTimeMin: null, 
goodsShopCheckCreateTimeMax: null, 
goodsShopCheckUpdateTime: null,
goodsShopCheckUpdateTimeMin: null, 
goodsShopCheckUpdateTimeMax: null, 
goodsShopCheckIsActive: null,
goodsShopCheckIsActiveMin: null, 
goodsShopCheckIsActiveMax: null, 

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
