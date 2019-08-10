<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="24">
	<FormItem label="组织父编号" prop="parentId">
	<!-- <InputNumber v-model="form.parentId" placeholder="请输入组织父编号" style="width: 100%;"/> -->
              <span v-text="form.parentId"></span>
              -
              <span v-text="form.parentName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择父组织</Button>&nbsp;
              <Button @click="setTopCategory" type="text" style="color: #fa436a;">设置顶级组织</Button>&nbsp;
</FormItem>
<FormItem prop="parentName"></FormItem>
	</i-col>
</Row>
<Row>
  <i-col span="24">
	<FormItem label="组织名称" prop="title">
	<Input v-model="form.title" placeholder="请输入组织名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="组织描述" prop="description">
	<!-- <Input v-model="form.description" placeholder="请输入组织描述"/> -->
  <Input  type="textarea" :autosize="descriptionAutoSize" v-model="form.description" laceholder="请输入组织描述"/>
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
	<FormItem label="组织父编号" prop="parentId">
	<!-- <InputNumber v-model="form.parentId" placeholder="请输入组织父编号" style="width: 100%;"/> -->
              <span v-text="form.parentId"></span>
              -
              <span v-text="form.parentName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择父组织</Button>&nbsp;
              <Button @click="setTopCategory" type="text" style="color: #fa436a;">设置顶级组织</Button>&nbsp;
</FormItem>
	</i-col>
</Row>
<Row>
  <i-col span="24">
	<FormItem label="组织名称" prop="title">
	<Input v-model="form.title" placeholder="请输入组织名称"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="24">
	<FormItem label="组织描述" prop="description">
	<!-- <Input v-model="form.description" placeholder="请输入组织描述"/> -->
  <Input  type="textarea" :autosize="descriptionAutoSize" v-model="form.description" laceholder="请输入组织描述"/>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
                <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
            </div>
        </Modal>

        <Modal v-model="modal.choice" title="选择父组织" :mask-closable="false" width="960">
          <OrganizationMainSingle ref="choiceModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
          </div>
        </Modal>
    </div>
</template>

<script>
    import OrganizationMainSingle from './OrganizationMainSingle.vue'
    export default {
        name: 'OrganizationAddEdit',
        components: {
          OrganizationMainSingle
        },
        data() {
            return {
                modal: {
                    add: false,
                    edit: false,
                    choice: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/organization/admin/save',
                    batchAddUrl: '/organization/admin/batch-save',
                    editUrl: '/organization/admin/update',
                    batchEditUrl: '/organization/admin/batch-update'
                },
                descriptionAutoSize: {
                  minRows: 3,
                  maxRows: 5
                },
                form: {
                    id: null,
parentId: null,
parentName: null,
title: null,
description: null,


                },
                validateRules: {
                    parentId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 20, message: '必须1-20个字符', trigger: 'blur'}
],
description: [
{type: 'string', min: 1, max: 255, message: '必须1-255个字符', trigger: 'blur'}
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
            },
            /**
             * 显示模态窗
             */
            showModal(modal) {
              if (modal === 'choice') {
                this.$refs.choiceModal.searchTable()
              }
              this.modal[modal] = true
            },
            /**
             * 关闭模态窗
             */
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
             * 底部的确认选择父级组织
             */
            bottomConfirmChoice() {
              this.$refs.choiceModal.confirmSelection()
            },
            /**
             * 确认选择父级组织
             */
            confirmChoice(row) {
              this.cancelModal('choice')
              this.form.parentId = row.id
              this.form.parentName = row.title
            },
            /**
             * 设置为顶级组织
             */
            setTopCategory() {
              this.form.parentId = 0
              this.form.parentName = '顶级组织'
            }
        }
    }
</script>

<style>
</style>
