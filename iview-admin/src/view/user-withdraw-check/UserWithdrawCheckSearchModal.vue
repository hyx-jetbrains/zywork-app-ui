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
	<FormItem label="提现编号"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawIdMin">
	<InputNumber v-model="searchForm.fundsWithdrawIdMin" placeholder="请输入开始提现编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawIdMax">
	<InputNumber v-model="searchForm.fundsWithdrawIdMax" placeholder="请输入结束提现编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="交易编号" prop="fundsWithdrawTransactionNo">
	<Input v-model="searchForm.fundsWithdrawTransactionNo" placeholder="请输入交易编号"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="提现金额（元）"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawAmountMin">
	<InputNumber v-model="searchForm.fundsWithdrawAmountMin" placeholder="请输入开始提现金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawAmountMax">
	<InputNumber v-model="searchForm.fundsWithdrawAmountMax" placeholder="请输入结束提现金额（元）" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="提现状态"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawWithdrawStatusMin">
	<InputNumber v-model="searchForm.fundsWithdrawWithdrawStatusMin" placeholder="请输入开始提现状态" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawWithdrawStatusMax">
	<InputNumber v-model="searchForm.fundsWithdrawWithdrawStatusMax" placeholder="请输入结束提现状态" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="提现描述" prop="fundsWithdrawWithdrawDescription">
	<Input v-model="searchForm.fundsWithdrawWithdrawDescription" placeholder="请输入提现描述"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="审核人编号"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCheckedUserIdMin">
	<InputNumber v-model="searchForm.fundsWithdrawCheckedUserIdMin" placeholder="请输入开始审核人编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCheckedUserIdMax">
	<InputNumber v-model="searchForm.fundsWithdrawCheckedUserIdMax" placeholder="请输入结束审核人编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="审核时间"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCheckedTimeMin">
	<DatePicker @on-change="searchForm.fundsWithdrawCheckedTimeMin=$event" :value="searchForm.fundsWithdrawCheckedTimeMin" placeholder="请输入开始审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCheckedTimeMax">
	<DatePicker @on-change="searchForm.fundsWithdrawCheckedTimeMax=$event" :value="searchForm.fundsWithdrawCheckedTimeMax" placeholder="请输入结束审核时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="完成时间"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCompleteTimeMin">
	<DatePicker @on-change="searchForm.fundsWithdrawCompleteTimeMin=$event" :value="searchForm.fundsWithdrawCompleteTimeMin" placeholder="请输入开始完成时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCompleteTimeMax">
	<DatePicker @on-change="searchForm.fundsWithdrawCompleteTimeMax=$event" :value="searchForm.fundsWithdrawCompleteTimeMax" placeholder="请输入结束完成时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="版本号"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawVersionMin">
	<InputNumber v-model="searchForm.fundsWithdrawVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawVersionMax">
	<InputNumber v-model="searchForm.fundsWithdrawVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
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
	<FormItem prop="fundsWithdrawCreateTimeMin">
	<DatePicker @on-change="searchForm.fundsWithdrawCreateTimeMin=$event" :value="searchForm.fundsWithdrawCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawCreateTimeMax">
	<DatePicker @on-change="searchForm.fundsWithdrawCreateTimeMax=$event" :value="searchForm.fundsWithdrawCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="fundsWithdrawUpdateTimeMin">
	<DatePicker @on-change="searchForm.fundsWithdrawUpdateTimeMin=$event" :value="searchForm.fundsWithdrawUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawUpdateTimeMax">
	<DatePicker @on-change="searchForm.fundsWithdrawUpdateTimeMax=$event" :value="searchForm.fundsWithdrawUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem prop="fundsWithdrawIsActiveMin">
	<InputNumber v-model="searchForm.fundsWithdrawIsActiveMin" placeholder="请输入开始是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="fundsWithdrawIsActiveMax">
	<InputNumber v-model="searchForm.fundsWithdrawIsActiveMax" placeholder="请输入结束是否激活" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="银行卡编号"><Row>
	<i-col span="11">
	<FormItem prop="userBankcardIdMin">
	<InputNumber v-model="searchForm.userBankcardIdMin" placeholder="请输入开始银行卡编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userBankcardIdMax">
	<InputNumber v-model="searchForm.userBankcardIdMax" placeholder="请输入结束银行卡编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="持卡人姓名" prop="userBankcardAccountName">
	<Input v-model="searchForm.userBankcardAccountName" placeholder="请输入持卡人姓名"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="银行代码" prop="userBankcardBankCode">
	<Input v-model="searchForm.userBankcardBankCode" placeholder="请输入银行代码"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="银行名称" prop="userBankcardBankName">
	<Input v-model="searchForm.userBankcardBankName" placeholder="请输入银行名称"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="银行卡号" prop="userBankcardBankcardNo">
	<Input v-model="searchForm.userBankcardBankcardNo" placeholder="请输入银行卡号"/>
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
        name: 'UserWithdrawCheckSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-withdraw-check/admin/pager-cond'
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
fundsWithdrawId: null,
fundsWithdrawIdMin: null, 
fundsWithdrawIdMax: null, 
fundsWithdrawTransactionNo: null,
fundsWithdrawAmount: null,
fundsWithdrawAmountMin: null, 
fundsWithdrawAmountMax: null, 
fundsWithdrawWithdrawStatus: null,
fundsWithdrawWithdrawStatusMin: null, 
fundsWithdrawWithdrawStatusMax: null, 
fundsWithdrawWithdrawDescription: null,
fundsWithdrawCheckedUserId: null,
fundsWithdrawCheckedUserIdMin: null, 
fundsWithdrawCheckedUserIdMax: null, 
fundsWithdrawCheckedTime: null,
fundsWithdrawCheckedTimeMin: null, 
fundsWithdrawCheckedTimeMax: null, 
fundsWithdrawCompleteTime: null,
fundsWithdrawCompleteTimeMin: null, 
fundsWithdrawCompleteTimeMax: null, 
fundsWithdrawVersion: null,
fundsWithdrawVersionMin: null, 
fundsWithdrawVersionMax: null, 
fundsWithdrawCreateTime: null,
fundsWithdrawCreateTimeMin: null, 
fundsWithdrawCreateTimeMax: null, 
fundsWithdrawUpdateTime: null,
fundsWithdrawUpdateTimeMin: null, 
fundsWithdrawUpdateTimeMax: null, 
fundsWithdrawIsActive: null,
fundsWithdrawIsActiveMin: null, 
fundsWithdrawIsActiveMax: null, 
userBankcardId: null,
userBankcardIdMin: null, 
userBankcardIdMax: null, 
userBankcardAccountName: null,
userBankcardBankCode: null,
userBankcardBankName: null,
userBankcardBankcardNo: null,

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
