<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="店铺认证编号"><Row>
	<i-col span="11">
	<FormItem prop="idMin">
	<InputNumber v-model="searchForm.idMin" placeholder="请输入开始店铺认证编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="idMax">
	<InputNumber v-model="searchForm.idMax" placeholder="请输入结束店铺认证编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
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
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="认证详情JSON" prop="detail">
	<Input v-model="searchForm.detail" placeholder="请输入认证详情JSON"/>
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
        name: 'GoodsShopCertificationSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-shop-certification/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    id: null,
idMin: null, 
idMax: null, 
shopId: null,
shopIdMin: null, 
shopIdMax: null, 
detail: null,
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
