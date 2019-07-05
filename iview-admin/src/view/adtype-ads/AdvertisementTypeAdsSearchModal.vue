<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="广告类型编号"><Row>
	<i-col span="11">
	<FormItem prop="advertisementTypeIdMin">
	<InputNumber v-model="searchForm.advertisementTypeIdMin" placeholder="请输入开始广告类型编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementTypeIdMax">
	<InputNumber v-model="searchForm.advertisementTypeIdMax" placeholder="请输入结束广告类型编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="类型名称" prop="advertisementTypeTitle">
	<Input v-model="searchForm.advertisementTypeTitle" placeholder="请输入类型名称"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="类型代码" prop="advertisementTypeCode">
	<Input v-model="searchForm.advertisementTypeCode" placeholder="请输入类型代码"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="广告编号"><Row>
	<i-col span="11">
	<FormItem prop="advertisementIdMin">
	<InputNumber v-model="searchForm.advertisementIdMin" placeholder="请输入开始广告编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementIdMax">
	<InputNumber v-model="searchForm.advertisementIdMax" placeholder="请输入结束广告编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="广告标题" prop="advertisementTitle">
	<Input v-model="searchForm.advertisementTitle" placeholder="请输入广告标题"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="广告图片" prop="advertisementPicUrl">
	<Input v-model="searchForm.advertisementPicUrl" placeholder="请输入广告图片"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="广告顺序"><Row>
	<i-col span="11">
	<FormItem prop="advertisementAdOrderMin">
	<InputNumber v-model="searchForm.advertisementAdOrderMin" placeholder="请输入开始广告顺序" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementAdOrderMax">
	<InputNumber v-model="searchForm.advertisementAdOrderMax" placeholder="请输入结束广告顺序" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="背景颜色" prop="advertisementBackgroundColor">
	<Input v-model="searchForm.advertisementBackgroundColor" placeholder="请输入背景颜色"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="关联页面链接" prop="advertisementLinkPageUrl">
	<Input v-model="searchForm.advertisementLinkPageUrl" placeholder="请输入关联页面链接"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="关联记录ID"><Row>
	<i-col span="11">
	<FormItem prop="advertisementLinkIdMin">
	<InputNumber v-model="searchForm.advertisementLinkIdMin" placeholder="请输入开始关联记录ID" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementLinkIdMax">
	<InputNumber v-model="searchForm.advertisementLinkIdMax" placeholder="请输入结束关联记录ID" style="width: 100%;"/>
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
	<FormItem prop="advertisementVersionMin">
	<InputNumber v-model="searchForm.advertisementVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementVersionMax">
	<InputNumber v-model="searchForm.advertisementVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="advertisementCreateTimeMin">
	<DatePicker @on-change="searchForm.advertisementCreateTimeMin=$event" :value="searchForm.advertisementCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementCreateTimeMax">
	<DatePicker @on-change="searchForm.advertisementCreateTimeMax=$event" :value="searchForm.advertisementCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="advertisementUpdateTimeMin">
	<DatePicker @on-change="searchForm.advertisementUpdateTimeMin=$event" :value="searchForm.advertisementUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementUpdateTimeMax">
	<DatePicker @on-change="searchForm.advertisementUpdateTimeMax=$event" :value="searchForm.advertisementUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="advertisementIsActiveMin">
	<InputNumber v-model="searchForm.advertisementIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="advertisementIsActiveMax">
	<InputNumber v-model="searchForm.advertisementIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'AdvertisementTypeAdsSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/adtype-ads/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    advertisementTypeId: null,
advertisementTypeIdMin: null, 
advertisementTypeIdMax: null, 
advertisementTypeTitle: null,
advertisementTypeCode: null,
advertisementId: null,
advertisementIdMin: null, 
advertisementIdMax: null, 
advertisementTitle: null,
advertisementPicUrl: null,
advertisementAdOrder: null,
advertisementAdOrderMin: null, 
advertisementAdOrderMax: null, 
advertisementBackgroundColor: null,
advertisementLinkPageUrl: null,
advertisementLinkId: null,
advertisementLinkIdMin: null, 
advertisementLinkIdMax: null, 
advertisementVersion: null,
advertisementVersionMin: null, 
advertisementVersionMax: null, 
advertisementCreateTime: null,
advertisementCreateTimeMin: null, 
advertisementCreateTimeMax: null, 
advertisementUpdateTime: null,
advertisementUpdateTimeMin: null, 
advertisementUpdateTimeMax: null, 
advertisementIsActive: null,
advertisementIsActiveMin: null, 
advertisementIsActiveMax: null, 

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
