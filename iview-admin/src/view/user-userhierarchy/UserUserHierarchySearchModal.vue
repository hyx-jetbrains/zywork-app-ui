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
	<FormItem label="关系编号"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyIdMin">
	<InputNumber v-model="searchForm.userHierarchyIdMin" placeholder="请输入开始关系编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyIdMax">
	<InputNumber v-model="searchForm.userHierarchyIdMax" placeholder="请输入结束关系编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="祖先编号"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyAncestorIdMin">
	<InputNumber v-model="searchForm.userHierarchyAncestorIdMin" placeholder="请输入开始祖先编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyAncestorIdMax">
	<InputNumber v-model="searchForm.userHierarchyAncestorIdMax" placeholder="请输入结束祖先编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="用户编号"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyUserIdMin">
	<InputNumber v-model="searchForm.userHierarchyUserIdMin" placeholder="请输入开始用户编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyUserIdMax">
	<InputNumber v-model="searchForm.userHierarchyUserIdMax" placeholder="请输入结束用户编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="用户级别"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyUserLevelMin">
	<InputNumber v-model="searchForm.userHierarchyUserLevelMin" placeholder="请输入开始用户级别" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyUserLevelMax">
	<InputNumber v-model="searchForm.userHierarchyUserLevelMax" placeholder="请输入结束用户级别" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyVersionMin">
	<InputNumber v-model="searchForm.userHierarchyVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyVersionMax">
	<InputNumber v-model="searchForm.userHierarchyVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
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
	<FormItem prop="userHierarchyCreateTimeMin">
	<DatePicker @on-change="searchForm.userHierarchyCreateTimeMin=$event" :value="searchForm.userHierarchyCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyCreateTimeMax">
	<DatePicker @on-change="searchForm.userHierarchyCreateTimeMax=$event" :value="searchForm.userHierarchyCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="userHierarchyUpdateTimeMin">
	<DatePicker @on-change="searchForm.userHierarchyUpdateTimeMin=$event" :value="searchForm.userHierarchyUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyUpdateTimeMax">
	<DatePicker @on-change="searchForm.userHierarchyUpdateTimeMax=$event" :value="searchForm.userHierarchyUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="userHierarchyIsActiveMin">
	<InputNumber v-model="searchForm.userHierarchyIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userHierarchyIsActiveMax">
	<InputNumber v-model="searchForm.userHierarchyIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
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
        name: 'UserUserHierarchySearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-userhierarchy/admin/pager-cond'
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
userHierarchyId: null,
userHierarchyIdMin: null, 
userHierarchyIdMax: null, 
userHierarchyAncestorId: null,
userHierarchyAncestorIdMin: null, 
userHierarchyAncestorIdMax: null, 
userHierarchyUserId: null,
userHierarchyUserIdMin: null, 
userHierarchyUserIdMax: null, 
userHierarchyUserLevel: null,
userHierarchyUserLevelMin: null, 
userHierarchyUserLevelMax: null, 
userHierarchyVersion: null,
userHierarchyVersionMin: null, 
userHierarchyVersionMax: null, 
userHierarchyCreateTime: null,
userHierarchyCreateTimeMin: null, 
userHierarchyCreateTimeMax: null, 
userHierarchyUpdateTime: null,
userHierarchyUpdateTimeMin: null, 
userHierarchyUpdateTimeMax: null, 
userHierarchyIsActive: null,
userHierarchyIsActiveMin: null, 
userHierarchyIsActiveMax: null, 
userDetailNickname: null,
userDetailHeadicon: null,

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
