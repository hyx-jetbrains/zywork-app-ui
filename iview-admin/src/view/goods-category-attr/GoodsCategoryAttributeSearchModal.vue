<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="商品类目编号"><Row>
	<i-col span="11">
	<FormItem prop="goodsCategoryIdMin">
	<InputNumber v-model="searchForm.goodsCategoryIdMin" placeholder="请输入开始商品类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryIdMax">
	<InputNumber v-model="searchForm.goodsCategoryIdMax" placeholder="请输入结束商品类目编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="类目名称" prop="goodsCategoryTitle">
	<Input v-model="searchForm.goodsCategoryTitle" placeholder="请输入类目名称"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
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
</i-col><i-col span="12">
	<FormItem label="属性名称" prop="goodsAttributeAttrName">
	<Input v-model="searchForm.goodsAttributeAttrName" placeholder="请输入属性名称"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="属性代码" prop="goodsAttributeAttrCode">
	<Input v-model="searchForm.goodsAttributeAttrCode" placeholder="请输入属性代码"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="数据类型" prop="goodsAttributeAttrType">
	<Input v-model="searchForm.goodsAttributeAttrType" placeholder="请输入数据类型"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
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
</i-col><i-col span="12">
	<FormItem label="是否必填"><Row>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrRequiredMin">
	<InputNumber v-model="searchForm.goodsAttributeAttrRequiredMin" placeholder="请输入开始是否必填" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrRequiredMax">
	<InputNumber v-model="searchForm.goodsAttributeAttrRequiredMax" placeholder="请输入结束是否必填" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否前端显示"><Row>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrDisplayMin">
	<InputNumber v-model="searchForm.goodsAttributeAttrDisplayMin" placeholder="请输入开始是否前端显示" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsAttributeAttrDisplayMax">
	<InputNumber v-model="searchForm.goodsAttributeAttrDisplayMax" placeholder="请输入结束是否前端显示" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="属性排序"><Row>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeAttrOrderMin">
	<InputNumber v-model="searchForm.goodsCategoryAttributeAttrOrderMin" placeholder="请输入开始属性排序" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeAttrOrderMax">
	<InputNumber v-model="searchForm.goodsCategoryAttributeAttrOrderMax" placeholder="请输入结束属性排序" style="width: 100%;"/>
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
	<FormItem prop="goodsCategoryAttributeVersionMin">
	<InputNumber v-model="searchForm.goodsCategoryAttributeVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeVersionMax">
	<InputNumber v-model="searchForm.goodsCategoryAttributeVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeCreateTimeMin">
	<DatePicker @on-change="searchForm.goodsCategoryAttributeCreateTimeMin=$event" :value="searchForm.goodsCategoryAttributeCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeCreateTimeMax">
	<DatePicker @on-change="searchForm.goodsCategoryAttributeCreateTimeMax=$event" :value="searchForm.goodsCategoryAttributeCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="goodsCategoryAttributeUpdateTimeMin">
	<DatePicker @on-change="searchForm.goodsCategoryAttributeUpdateTimeMin=$event" :value="searchForm.goodsCategoryAttributeUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeUpdateTimeMax">
	<DatePicker @on-change="searchForm.goodsCategoryAttributeUpdateTimeMax=$event" :value="searchForm.goodsCategoryAttributeUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeIsActiveMin">
	<InputNumber v-model="searchForm.goodsCategoryAttributeIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="goodsCategoryAttributeIsActiveMax">
	<InputNumber v-model="searchForm.goodsCategoryAttributeIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'GoodsCategoryAttributeSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/goods-category-attr/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    goodsCategoryId: null,
goodsCategoryIdMin: null, 
goodsCategoryIdMax: null, 
goodsCategoryTitle: null,
goodsAttributeId: null,
goodsAttributeIdMin: null, 
goodsAttributeIdMax: null, 
goodsAttributeAttrName: null,
goodsAttributeAttrCode: null,
goodsAttributeAttrType: null,
goodsAttributeAttrLength: null,
goodsAttributeAttrLengthMin: null, 
goodsAttributeAttrLengthMax: null, 
goodsAttributeAttrRequired: null,
goodsAttributeAttrRequiredMin: null, 
goodsAttributeAttrRequiredMax: null, 
goodsAttributeAttrDisplay: null,
goodsAttributeAttrDisplayMin: null, 
goodsAttributeAttrDisplayMax: null, 
goodsCategoryAttributeAttrOrder: null,
goodsCategoryAttributeAttrOrderMin: null, 
goodsCategoryAttributeAttrOrderMax: null, 
goodsCategoryAttributeVersion: null,
goodsCategoryAttributeVersionMin: null, 
goodsCategoryAttributeVersionMax: null, 
goodsCategoryAttributeCreateTime: null,
goodsCategoryAttributeCreateTimeMin: null, 
goodsCategoryAttributeCreateTimeMax: null, 
goodsCategoryAttributeUpdateTime: null,
goodsCategoryAttributeUpdateTimeMin: null, 
goodsCategoryAttributeUpdateTimeMax: null, 
goodsCategoryAttributeIsActive: null,
goodsCategoryAttributeIsActiveMin: null, 
goodsCategoryAttributeIsActiveMax: null, 

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
