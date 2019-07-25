<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="DAU" prop="dau">
	<InputNumber v-model="form.dau" placeholder="请输入DAU" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="统计时间" prop="statisticsTime">
	<DatePicker @on-change="form.statisticsTime=$event" :value="form.statisticsTime" placeholder="请输入统计时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
	<FormItem label="DAU" prop="dau">
	<InputNumber v-model="form.dau" placeholder="请输入DAU" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="统计时间" prop="statisticsTime">
	<DatePicker @on-change="form.statisticsTime=$event" :value="form.statisticsTime" placeholder="请输入统计时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
        name: 'StatisticsDauAddEdit',
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
                    addUrl: '/statistics-dau/admin/save',
                    batchAddUrl: '/statistics-dau/admin/batch-save',
                    editUrl: '/statistics-dau/admin/update',
                    batchEditUrl: '/statistics-dau/admin/batch-update'
                },
                form: {
                    id: null,
dau: null,
statisticsTime: null,


                },
                validateRules: {
                    dau: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
statisticsTime: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'}
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
