<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="流程Name" prop="processName">
	<Input v-model="form.processName" placeholder="请输入流程Name"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="流程Key" prop="processKey">
	<Input v-model="form.processKey" placeholder="请输入流程Key"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="流程文件路径" prop="filePath">
	<Input v-model="form.filePath" placeholder="请输入流程文件路径"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="流程描述" prop="description">
	<Input v-model="form.description" placeholder="请输入流程描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否部署" prop="isDeploy">
	<InputNumber v-model="form.isDeploy" placeholder="请输入是否部署" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="部署时间" prop="deployTime">
	<DatePicker @on-change="form.deployTime=$event" :value="form.deployTime" placeholder="请输入部署时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'add')">取消</Button>
                <Button type="primary" size="large" @click="add" :loading="loading.add">添加</Button>
            </div>
        </Modal>
        <Modal v-model="modal.edit" title="修改" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('editForm', $event)" width="760">
            <Form ref="editForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="流程Name" prop="processName">
	<Input v-model="form.processName" placeholder="请输入流程Name"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="流程Key" prop="processKey">
	<Input v-model="form.processKey" placeholder="请输入流程Key"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="流程文件路径" prop="filePath">
	<Input v-model="form.filePath" placeholder="请输入流程文件路径"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="流程描述" prop="description">
	<Input v-model="form.description" placeholder="请输入流程描述"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="是否部署" prop="isDeploy">
	<InputNumber v-model="form.isDeploy" placeholder="请输入是否部署" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="部署时间" prop="deployTime">
	<DatePicker @on-change="form.deployTime=$event" :value="form.deployTime" placeholder="请输入部署时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
                <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'ProcessAddEdit',
        data() {
            return {
                modal: {
                    add: false,
                    edit: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/process/admin/save',
                    batchAddUrl: '/process/admin/batch-save',
                    editUrl: '/process/admin/update',
                    batchEditUrl: '/process/admin/batch-update'
                },
                form: {
                    id: null,
processName: null,
processKey: null,
filePath: null,
description: null,
isDeploy: null,
deployTime: null,


                },
                validateRules: {
                    processName: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
],
processKey: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
],
filePath: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],

                }
            }
        },
        computed: {},
        mounted() {},
        methods: {
            changeModalVisibleResetForm(formRef, visible) {
                if (!visible) {
                    this.$refs[formRef].resetFields()
                }
            },
            resetFormCancelModal(formRef, modal) {
                this.modal[modal] = false
                this.$refs[formRef].resetFields()
            },
            add() {
                this.$emit('add')
            },
            edit() {
                this.$emit('edit')
            }
        }
    }
</script>

<style>
</style>
