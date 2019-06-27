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
</i-col><i-col span="12">
	<FormItem label="性别"><Row>
	<i-col span="11">
	<FormItem prop="userDetailGenderMin">
	<InputNumber v-model="searchForm.userDetailGenderMin" placeholder="请输入开始性别" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailGenderMax">
	<InputNumber v-model="searchForm.userDetailGenderMax" placeholder="请输入结束性别" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="生日"><Row>
	<i-col span="11">
	<FormItem prop="userDetailBirthdayMin">
	<DatePicker @on-change="searchForm.userDetailBirthdayMin=$event" :value="searchForm.userDetailBirthdayMin" placeholder="请输入开始生日" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailBirthdayMax">
	<DatePicker @on-change="searchForm.userDetailBirthdayMax=$event" :value="searchForm.userDetailBirthdayMax" placeholder="请输入结束生日" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="年龄"><Row>
	<i-col span="11">
	<FormItem prop="userDetailAgeMin">
	<InputNumber v-model="searchForm.userDetailAgeMin" placeholder="请输入开始年龄" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailAgeMax">
	<InputNumber v-model="searchForm.userDetailAgeMax" placeholder="请输入结束年龄" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="QQ号" prop="userDetailQq">
	<Input v-model="searchForm.userDetailQq" placeholder="请输入QQ号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="QQ二维码" prop="userDetailQqQrcode">
	<Input v-model="searchForm.userDetailQqQrcode" placeholder="请输入QQ二维码"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="微信号" prop="userDetailWechat">
	<Input v-model="searchForm.userDetailWechat" placeholder="请输入微信号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="微信二维码" prop="userDetailWechatQrcode">
	<Input v-model="searchForm.userDetailWechatQrcode" placeholder="请输入微信二维码"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="支付宝账号" prop="userDetailAlipay">
	<Input v-model="searchForm.userDetailAlipay" placeholder="请输入支付宝账号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="支付宝二维码" prop="userDetailAlipayQrcode">
	<Input v-model="searchForm.userDetailAlipayQrcode" placeholder="请输入支付宝二维码"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="分享码" prop="userDetailShareCode">
	<Input v-model="searchForm.userDetailShareCode" placeholder="请输入分享码"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="userDetailVersionMin">
	<InputNumber v-model="searchForm.userDetailVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailVersionMax">
	<InputNumber v-model="searchForm.userDetailVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
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
	<FormItem prop="userDetailCreateTimeMin">
	<DatePicker @on-change="searchForm.userDetailCreateTimeMin=$event" :value="searchForm.userDetailCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailCreateTimeMax">
	<DatePicker @on-change="searchForm.userDetailCreateTimeMax=$event" :value="searchForm.userDetailCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="userDetailUpdateTimeMin">
	<DatePicker @on-change="searchForm.userDetailUpdateTimeMin=$event" :value="searchForm.userDetailUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailUpdateTimeMax">
	<DatePicker @on-change="searchForm.userDetailUpdateTimeMax=$event" :value="searchForm.userDetailUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="userDetailIsActiveMin">
	<InputNumber v-model="searchForm.userDetailIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userDetailIsActiveMax">
	<InputNumber v-model="searchForm.userDetailIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
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
        name: 'UserUserDetailSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-userdetail/admin/pager-cond'
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
userDetailNickname: null,
userDetailHeadicon: null,
userDetailGender: null,
userDetailGenderMin: null, 
userDetailGenderMax: null, 
userDetailBirthday: null,
userDetailBirthdayMin: null, 
userDetailBirthdayMax: null, 
userDetailAge: null,
userDetailAgeMin: null, 
userDetailAgeMax: null, 
userDetailQq: null,
userDetailQqQrcode: null,
userDetailWechat: null,
userDetailWechatQrcode: null,
userDetailAlipay: null,
userDetailAlipayQrcode: null,
userDetailShareCode: null,
userDetailVersion: null,
userDetailVersionMin: null, 
userDetailVersionMax: null, 
userDetailCreateTime: null,
userDetailCreateTimeMin: null, 
userDetailCreateTimeMax: null, 
userDetailUpdateTime: null,
userDetailUpdateTimeMin: null, 
userDetailUpdateTimeMax: null, 
userDetailIsActive: null,
userDetailIsActiveMin: null, 
userDetailIsActiveMax: null, 

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
