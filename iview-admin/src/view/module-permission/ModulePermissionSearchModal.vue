<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="模块编号"><Row>
	<i-col span="11">
	<FormItem prop="moduleIdMin">
	<InputNumber v-model="searchForm.moduleIdMin" placeholder="请输入开始模块编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="moduleIdMax">
	<InputNumber v-model="searchForm.moduleIdMax" placeholder="请输入结束模块编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="模块标题" prop="moduleTitle">
	<Input v-model="searchForm.moduleTitle" placeholder="请输入模块标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="模块描述" prop="moduleDescription">
	<Input v-model="searchForm.moduleDescription" placeholder="请输入模块描述"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="权限编号"><Row>
	<i-col span="11">
	<FormItem prop="permissionIdMin">
	<InputNumber v-model="searchForm.permissionIdMin" placeholder="请输入开始权限编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="permissionIdMax">
	<InputNumber v-model="searchForm.permissionIdMax" placeholder="请输入结束权限编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="权限标题" prop="permissionTitle">
	<Input v-model="searchForm.permissionTitle" placeholder="请输入权限标题"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="权限字符串" prop="permissionPermission">
	<Input v-model="searchForm.permissionPermission" placeholder="请输入权限字符串"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="权限描述" prop="permissionDescription">
	<Input v-model="searchForm.permissionDescription" placeholder="请输入权限描述"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="permissionVersionMin">
	<InputNumber v-model="searchForm.permissionVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="permissionVersionMax">
	<InputNumber v-model="searchForm.permissionVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
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
	<FormItem prop="permissionCreateTimeMin">
	<DatePicker @on-change="searchForm.permissionCreateTimeMin=$event" :value="searchForm.permissionCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="permissionCreateTimeMax">
	<DatePicker @on-change="searchForm.permissionCreateTimeMax=$event" :value="searchForm.permissionCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="permissionUpdateTimeMin">
	<DatePicker @on-change="searchForm.permissionUpdateTimeMin=$event" :value="searchForm.permissionUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="permissionUpdateTimeMax">
	<DatePicker @on-change="searchForm.permissionUpdateTimeMax=$event" :value="searchForm.permissionUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="permissionIsActiveMin">
	<InputNumber v-model="searchForm.permissionIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="permissionIsActiveMax">
	<InputNumber v-model="searchForm.permissionIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'ModulePermissionSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/module-permission/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    moduleId: null,
moduleIdMin: null, 
moduleIdMax: null, 
moduleTitle: null,
moduleDescription: null,
permissionId: null,
permissionIdMin: null, 
permissionIdMax: null, 
permissionTitle: null,
permissionPermission: null,
permissionDescription: null,
permissionVersion: null,
permissionVersionMin: null, 
permissionVersionMax: null, 
permissionCreateTime: null,
permissionCreateTimeMin: null, 
permissionCreateTimeMax: null, 
permissionUpdateTime: null,
permissionUpdateTimeMin: null, 
permissionUpdateTimeMax: null, 
permissionIsActive: null,
permissionIsActiveMin: null, 
permissionIsActiveMax: null, 

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
