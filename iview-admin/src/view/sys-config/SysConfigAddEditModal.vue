<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="860">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="配置名称" prop="name">
	<Input v-model="form.name" placeholder="请输入配置名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="配置内容(JSON)" prop="value">
        <vue-json-editor v-model="form.value" :showBtns="false"></vue-json-editor>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="中文说明" prop="description">
	<Input v-model="form.description" placeholder="请输入中文说明"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="配置注释" prop="comment">
        <vue-json-editor v-model="form.comment" :showBtns="false"></vue-json-editor>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'add')">取消</Button>
                <Button type="primary" size="large" @click="add" :loading="loading.add">添加</Button>
            </div>
        </Modal>
        <Modal v-model="modal.edit" title="修改" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('editForm', $event)" width="860">
            <Form ref="editForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="配置名称" prop="name">
	<Input v-model="form.name" placeholder="请输入配置名称"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="配置内容(JSON)" prop="value">
        <vue-json-editor v-model="form.value" :showBtns="false"></vue-json-editor>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="中文说明" prop="description">
	<Input v-model="form.description" placeholder="请输入中文说明"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="配置注释" prop="comment">
        <vue-json-editor v-model="form.comment" :showBtns="false"></vue-json-editor>
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
    import vueJsonEditor from 'vue-json-editor'
    export default {
        name: 'SysConfigAddEdit',
        components: {
            vueJsonEditor
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
                    addUrl: '/sys-config/admin/save',
                    batchAddUrl: '/sys-config/admin/batch-save',
                    editUrl: '/sys-config/admin/update',
                    batchEditUrl: '/sys-config/admin/batch-update'
                },
                form: {
                    id: null,
name: null,
value: null,
description: null,
comment: null,


                },
                validateRules: {
                    name: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
value: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 5000, message: '必须1-5000个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
comment: [
{type: 'string', min: 1, max: 5000, message: '必须1-5000个字符', trigger: 'blur'}
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
                this.form.value = JSON.stringify(this.form.value)
                this.form.comment = JSON.stringify(this.form.comment)
                this.$emit('add')
            },
            edit() {
                this.form.value = JSON.stringify(this.form.value)
                this.form.comment = JSON.stringify(this.form.comment)
                this.$emit('edit')
            }
        }
    }
</script>

<style>
</style>
