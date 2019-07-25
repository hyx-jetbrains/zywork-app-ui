<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="作业名称" prop="name">
	<Input v-model="form.name" placeholder="请输入作业名称"/>
	</FormItem>
	</i-col>
	<i-col span="12">
<FormItem label="完整类名" prop="className">
          <Select v-model="form.className" placeholder="请选择类名称" clearable filterable>
            <Option v-for="item in jobClassessList" :value="item" :key="item">{{item}}</option>
          </Select>
        </FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="cron表达式" prop="cronExpression">
          <Input v-model="form.cronExpression" placeholder="请输入cron表达式"/>
          <span style="color: red"><Icon type="information-circled"></Icon>如不清楚，请参考示例：</span>
          <i-button type="text" size="small" v-if="!showDemo" @click="showDemo = true">查看示例</i-button>
					<i-button type="text" size="small" v-if="showDemo" @click="showDemo = false">隐藏示例</i-button>
          <CronDemo :showDemo="showDemo" />
        </FormItem>
	</i-col><i-col span="12">
	<FormItem label="作业组名称" prop="groupName">
	<Input v-model="form.groupName" placeholder="请输入作业组名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="触发器名称" prop="triggerName">
	<Input v-model="form.triggerName" placeholder="请输入触发器名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="触发器组" prop="triggerGroup">
	<Input v-model="form.triggerGroup" placeholder="请输入触发器组"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="作业描述" prop="description">
	<Input v-model="form.description" placeholder="请输入作业描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="作业状态" prop="jobStatus">
	<InputNumber v-model="form.jobStatus" placeholder="请输入作业状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="状态更新时间" prop="jobStatusTime">
	<DatePicker @on-change="form.jobStatusTime=$event" :value="form.jobStatusTime" placeholder="请输入状态更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="自动启动" prop="autoStart">
	<InputNumber v-model="form.autoStart" placeholder="请输入自动启动" style="width: 100%;"/>
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
	<FormItem label="作业名称" prop="name">
	<Input v-model="form.name" placeholder="请输入作业名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="完整类名" prop="className">
          <Select v-model="form.className" placeholder="请选择类名称" clearable filterable>
            <Option v-for="item in jobClassessList" :value="item" :key="item">{{item}}</option>
          </Select>
        </FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="cron表达式" prop="cronExpression">
          <Input v-model="form.cronExpression" placeholder="请输入cron表达式"/>
          <span style="color: red"><Icon type="information-circled"></Icon>如不清楚，请参考示例：</span>
          <i-button type="text" size="small" v-if="!showDemo" @click="showDemo = true">查看示例</i-button>
					<i-button type="text" size="small" v-if="showDemo" @click="showDemo = false">隐藏示例</i-button>
          <CronDemo :showDemo="showDemo" />
        </FormItem>
	</i-col><i-col span="12">
	<FormItem label="作业组名称" prop="groupName">
	<Input v-model="form.groupName" placeholder="请输入作业组名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="触发器名称" prop="triggerName">
	<Input v-model="form.triggerName" placeholder="请输入触发器名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="触发器组" prop="triggerGroup">
	<Input v-model="form.triggerGroup" placeholder="请输入触发器组"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="作业描述" prop="description">
	<Input v-model="form.description" placeholder="请输入作业描述"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="作业状态" prop="jobStatus">
	<InputNumber v-model="form.jobStatus" placeholder="请输入作业状态" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="状态更新时间" prop="jobStatusTime">
	<DatePicker @on-change="form.jobStatusTime=$event" :value="form.jobStatusTime" placeholder="请输入状态更新时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="自动启动" prop="autoStart">
	<InputNumber v-model="form.autoStart" placeholder="请输入自动启动" style="width: 100%;"/>
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
	import CronDemo from './CronDemo.vue'
	import {
		jobClassess
	} from '@/api/scheduler'
	import * as ResponseStatus from '@/api/response-status'
    export default {
		name: 'SchedulerAddEdit',
		components: {
			CronDemo
		},
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
                    addUrl: '/scheduler/admin/save',
                    batchAddUrl: '/scheduler/admin/batch-save',
                    editUrl: '/scheduler/admin/update',
                    batchEditUrl: '/scheduler/admin/batch-update'
                },
                form: {
                    id: null,
name: null,
className: null,
cronExpression: null,
groupName: null,
triggerName: null,
triggerGroup: null,
description: null,
jobStatus: null,
jobStatusTime: null,
autoStart: null,


                },
                validateRules: {
                    name: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
className: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 200, message: '必须1-200个字符', trigger: 'blur'}
],
cronExpression: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
groupName: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
triggerName: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
triggerGroup: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 500, message: '必须1-500个字符', trigger: 'blur'}
],

				},
      			jobClassessList: [],
				showDemo: false,
				oldCronExp: null,
				newCronExp: null,
				currentJobStatus: null
            }
        },
        computed: {},
        mounted() {
			this.getJobClassess()
		},
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
				// 记录新修改的cron表达式
				this.newCronExp = this.form.cronExpression
                this.$emit('edit')
			},
			getJobClassess() {
				jobClassess().then(res => {
					const data = res.data
					if (data.code === ResponseStatus.OK) {
						if (data.data.total <= 0) {
						this.$Message.error("未获取到类名称")
						return
						}
						this.jobClassessList = data.data.rows
					} else {
						this.$Message.error(data.message)
					}
				}).catch(err => {
					console.log(err)
					this.$Message.error(err)
				})
			},
        }
    }
</script>

<style>
</style>
