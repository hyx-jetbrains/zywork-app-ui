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
	<FormItem label="第三方登录编号"><Row>
	<i-col span="11">
	<FormItem prop="userSocialIdMin">
	<InputNumber v-model="searchForm.userSocialIdMin" placeholder="请输入开始第三方登录编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userSocialIdMax">
	<InputNumber v-model="searchForm.userSocialIdMax" placeholder="请输入结束第三方登录编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="openid" prop="userSocialOpenid">
	<Input v-model="searchForm.userSocialOpenid" placeholder="请输入openid"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="unionid" prop="userSocialUnionId">
	<Input v-model="searchForm.userSocialUnionId" placeholder="请输入unionid"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="AccessToken" prop="userSocialAccessToken">
	<Input v-model="searchForm.userSocialAccessToken" placeholder="请输入AccessToken"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="SessionKey" prop="userSocialSessionKey">
	<Input v-model="searchForm.userSocialSessionKey" placeholder="请输入SessionKey"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="RefreshToken" prop="userSocialRefreshToken">
	<Input v-model="searchForm.userSocialRefreshToken" placeholder="请输入RefreshToken"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="第三方登录类型" prop="userSocialSocialType">
	<Input v-model="searchForm.userSocialSocialType" placeholder="请输入第三方登录类型"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="userSocialVersionMin">
	<InputNumber v-model="searchForm.userSocialVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userSocialVersionMax">
	<InputNumber v-model="searchForm.userSocialVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="创建时间"><Row>
	<i-col span="11">
	<FormItem prop="userSocialCreateTimeMin">
	<DatePicker @on-change="searchForm.userSocialCreateTimeMin=$event" :value="searchForm.userSocialCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userSocialCreateTimeMax">
	<DatePicker @on-change="searchForm.userSocialCreateTimeMax=$event" :value="searchForm.userSocialCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="userSocialUpdateTimeMin">
	<DatePicker @on-change="searchForm.userSocialUpdateTimeMin=$event" :value="searchForm.userSocialUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userSocialUpdateTimeMax">
	<DatePicker @on-change="searchForm.userSocialUpdateTimeMax=$event" :value="searchForm.userSocialUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否激活"><Row>
	<i-col span="11">
	<FormItem prop="userSocialIsActiveMin">
	<InputNumber v-model="searchForm.userSocialIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userSocialIsActiveMax">
	<InputNumber v-model="searchForm.userSocialIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'UserUserSocialSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-usersocial/admin/pager-cond'
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
userSocialId: null,
userSocialIdMin: null, 
userSocialIdMax: null, 
userSocialOpenid: null,
userSocialUnionId: null,
userSocialAccessToken: null,
userSocialSessionKey: null,
userSocialRefreshToken: null,
userSocialSocialType: null,
userSocialVersion: null,
userSocialVersionMin: null, 
userSocialVersionMax: null, 
userSocialCreateTime: null,
userSocialCreateTimeMin: null, 
userSocialCreateTimeMax: null, 
userSocialUpdateTime: null,
userSocialUpdateTimeMin: null, 
userSocialUpdateTimeMax: null, 
userSocialIsActive: null,
userSocialIsActiveMin: null, 
userSocialIsActiveMax: null, 

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
