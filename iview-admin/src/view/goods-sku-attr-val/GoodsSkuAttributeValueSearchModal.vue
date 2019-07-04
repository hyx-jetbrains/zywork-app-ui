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
	<FormItem label="商品属性编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsAttributeIdMin">
	<InputNumber v-model="searchForm.goodsAttributeIdMin" placeholder="请输入开始商品属性编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsAttributeIdMax">
	<InputNumber v-model="searchForm.goodsAttributeIdMax" placeholder="请输入结束商品属性编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="属性名称" prop="goodsAttributeAttrName">
	<Input v-model="searchForm.goodsAttributeAttrName" placeholder="请输入属性名称"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="属性代码" prop="goodsAttributeAttrCode">
	<Input v-model="searchForm.goodsAttributeAttrCode" placeholder="请输入属性代码"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="数据类型" prop="goodsAttributeAttrType">
	<Input v-model="searchForm.goodsAttributeAttrType" placeholder="请输入数据类型"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="数据长度"><Row>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrLengthMin">
	<InputNumber v-model="searchForm.goodsAttributeAttrLengthMin" placeholder="请输入开始数据长度" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrLengthMax">
	<InputNumber v-model="searchForm.goodsAttributeAttrLengthMax" placeholder="请输入结束数据长度" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="属性值" prop="goodsAttributeValueAttrValue">
	<Input v-model="searchForm.goodsAttributeValueAttrValue" placeholder="请输入属性值"/>
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
        name: 'GoodsSkuAttributeValueSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-sku-attr-val/admin/pager-cond'
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
goodsSkuId: null,
goodsSkuIdMin: null, 
goodsSkuIdMax: null, 
goodsAttributeId: null,
goodsAttributeIdMin: null, 
goodsAttributeIdMax: null, 
goodsAttributeAttrName: null,
goodsAttributeAttrCode: null,
goodsAttributeAttrType: null,
goodsAttributeAttrLength: null,
goodsAttributeAttrLengthMin: null, 
goodsAttributeAttrLengthMax: null, 
goodsAttributeValueAttrValue: null,

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
