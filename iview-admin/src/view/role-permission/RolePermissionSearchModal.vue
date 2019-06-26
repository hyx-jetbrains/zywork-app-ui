<template>
    <div>
        <Modal v-model="modal.search" title="高级搜索" width="860">
            <Form ref="searchForm" :model="searchForm" :label-width="80">
                <Row>
	<i-col span="12">
	<FormItem label="角色编号"><Row>
	<i-col span="11">
	<FormItem prop="roleIdMin">
	<InputNumber v-model="searchForm.roleIdMin" placeholder="请输入开始角色编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="roleIdMax">
	<InputNumber v-model="searchForm.roleIdMax" placeholder="请输入结束角色编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="角色标题" prop="roleTitle">
	<Input v-model="searchForm.roleTitle" placeholder="请输入角色标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
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
</i-col><i-col span="12">
	<FormItem label="权限标题" prop="permissionTitle">
	<Input v-model="searchForm.permissionTitle" placeholder="请输入权限标题"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="权限字符串" prop="permissionPermission">
	<Input v-model="searchForm.permissionPermission" placeholder="请输入权限字符串"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="权限描述" prop="permissionDescription">
	<Input v-model="searchForm.permissionDescription" placeholder="请输入权限描述"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="rolePermissionVersionMin">
	<InputNumber v-model="searchForm.rolePermissionVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="rolePermissionVersionMax">
	<InputNumber v-model="searchForm.rolePermissionVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="rolePermissionCreateTimeMin">
	<DatePicker @on-change="searchForm.rolePermissionCreateTimeMin=$event" :value="searchForm.rolePermissionCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="rolePermissionCreateTimeMax">
	<DatePicker @on-change="searchForm.rolePermissionCreateTimeMax=$event" :value="searchForm.rolePermissionCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="rolePermissionUpdateTimeMin">
	<DatePicker @on-change="searchForm.rolePermissionUpdateTimeMin=$event" :value="searchForm.rolePermissionUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="rolePermissionUpdateTimeMax">
	<DatePicker @on-change="searchForm.rolePermissionUpdateTimeMax=$event" :value="searchForm.rolePermissionUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'RolePermissionSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/role-permission/admin/pager-cond'
                },
                searchForm: {
                    pageNo: 1,
                    pageSize: 10,
                    sortColumn: null,
                    sortOrder: null,
                    roleId: null,
roleIdMin: null, 
roleIdMax: null, 
roleTitle: null,
permissionId: null,
permissionIdMin: null, 
permissionIdMax: null, 
permissionTitle: null,
permissionPermission: null,
permissionDescription: null,
rolePermissionVersion: null,
rolePermissionVersionMin: null, 
rolePermissionVersionMax: null, 
rolePermissionCreateTime: null,
rolePermissionCreateTimeMin: null, 
rolePermissionCreateTimeMax: null, 
rolePermissionUpdateTime: null,
rolePermissionUpdateTimeMin: null, 
rolePermissionUpdateTimeMax: null, 

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
