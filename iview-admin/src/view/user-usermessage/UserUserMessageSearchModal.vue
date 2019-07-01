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
	<FormItem label="消息编号"><Row>
	<i-col span="11">
	<FormItem prop="messageIdMin">
	<InputNumber v-model="searchForm.messageIdMin" placeholder="请输入开始消息编号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="messageIdMax">
	<InputNumber v-model="searchForm.messageIdMax" placeholder="请输入结束消息编号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="消息标题" prop="messageTitle">
	<Input v-model="searchForm.messageTitle" placeholder="请输入消息标题"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="消息摘要" prop="messageSummary">
	<Input v-model="searchForm.messageSummary" placeholder="请输入消息摘要"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="消息内容" prop="messageContent">
	<Input v-model="searchForm.messageContent" placeholder="请输入消息内容"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="消息类型" prop="messageMessageType">
	<Input v-model="searchForm.messageMessageType" placeholder="请输入消息类型"/>
</FormItem>
</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="关联页面链接" prop="messageLinkPageUrl">
	<Input v-model="searchForm.messageLinkPageUrl" placeholder="请输入关联页面链接"/>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="关联记录ID"><Row>
	<i-col span="11">
	<FormItem prop="messageLinkIdMin">
	<InputNumber v-model="searchForm.messageLinkIdMin" placeholder="请输入开始关联记录ID" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="messageLinkIdMax">
	<InputNumber v-model="searchForm.messageLinkIdMax" placeholder="请输入结束关联记录ID" style="width: 100%;"/>
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
	<FormItem prop="messageVersionMin">
	<InputNumber v-model="searchForm.messageVersionMin" placeholder="请输入开始版本号" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="messageVersionMax">
	<InputNumber v-model="searchForm.messageVersionMax" placeholder="请输入结束版本号" style="width: 100%;"/>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="是否已读"><Row>
	<i-col span="11">
	<FormItem prop="userMessageIsReadMin">
	<InputNumber v-model="searchForm.userMessageIsReadMin" placeholder="请输入开始是否已读" style="width: 100%;"/>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userMessageIsReadMax">
	<InputNumber v-model="searchForm.userMessageIsReadMax" placeholder="请输入结束是否已读" style="width: 100%;"/>
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
	<FormItem prop="userMessageCreateTimeMin">
	<DatePicker @on-change="searchForm.userMessageCreateTimeMin=$event" :value="searchForm.userMessageCreateTimeMin" placeholder="请输入开始创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userMessageCreateTimeMax">
	<DatePicker @on-change="searchForm.userMessageCreateTimeMax=$event" :value="searchForm.userMessageCreateTimeMax" placeholder="请输入结束创建时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
</Row>
</FormItem>
</i-col><i-col span="12">
	<FormItem label="更新时间"><Row>
	<i-col span="11">
	<FormItem prop="userMessageUpdateTimeMin">
	<DatePicker @on-change="searchForm.userMessageUpdateTimeMin=$event" :value="searchForm.userMessageUpdateTimeMin" placeholder="请输入开始更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
</i-col>
	<i-col span="2" style="text-align: center">-</i-col>
	<i-col span="11">
	<FormItem prop="userMessageUpdateTimeMax">
	<DatePicker @on-change="searchForm.userMessageUpdateTimeMax=$event" :value="searchForm.userMessageUpdateTimeMax" placeholder="请输入结束更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'UserUserMessageSearch',
        data() {
            return {
                modal: {
                    search: false
                },
                loading: {
                    search: false
                },
                urls: {
                    searchUrl: '/user-usermessage/admin/pager-cond'
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
messageId: null,
messageIdMin: null, 
messageIdMax: null, 
messageTitle: null,
messageSummary: null,
messageContent: null,
messageMessageType: null,
messageLinkPageUrl: null,
messageLinkId: null,
messageLinkIdMin: null, 
messageLinkIdMax: null, 
messageVersion: null,
messageVersionMin: null, 
messageVersionMax: null, 
userMessageIsRead: null,
userMessageIsReadMin: null, 
userMessageIsReadMax: null, 
userMessageCreateTime: null,
userMessageCreateTimeMin: null, 
userMessageCreateTimeMax: null, 
userMessageUpdateTime: null,
userMessageUpdateTimeMin: null, 
userMessageUpdateTimeMax: null, 

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
