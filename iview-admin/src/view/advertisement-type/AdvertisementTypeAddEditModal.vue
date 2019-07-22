<template>
  <div>
    <Modal
      v-model="modal.add"
      title="添加"
      :mask-closable="false"
      @on-visible-change="changeModalVisibleResetForm('addForm', $event)"
      width="760"
    >
      <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
        <Row>
          <i-col span="12">
            <FormItem label="类型名称" prop="title">
              <Input v-model="form.title" placeholder="请输入类型名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="类型代码" prop="code">
              <Input v-model="form.code" placeholder="请输入类型代码" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="24">
            <FormItem label="类型描述" prop="description">
              <Input
              type="textarea"
              :autosize="descriptionAutoSize"
              v-model="form.description"
              placeholder="请输入类型描述"
            />
            </FormItem>
          </i-col>
        </Row>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'add')">取消</Button>
        <Button type="primary" size="large" @click="add" :loading="loading.add">添加</Button>
      </div>
    </Modal>
    <Modal
      v-model="modal.edit"
      title="修改"
      :mask-closable="false"
      @on-visible-change="changeModalVisibleResetForm('editForm', $event)"
      width="760"
    >
      <Form ref="editForm" :model="form" :label-width="80" :rules="validateRules">
        <Row>
          <i-col span="12">
            <FormItem label="类型名称" prop="title">
              <Input v-model="form.title" placeholder="请输入类型名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="类型代码" prop="code">
              <Input v-model="form.code" placeholder="请输入类型代码" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="24">
            <FormItem label="类型描述" prop="description">
              <Input
              type="textarea"
              :autosize="descriptionAutoSize"
              v-model="form.description"
              placeholder="请输入类型描述"
            />
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
  name: 'AdvertisementTypeAddEdit',
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
        addUrl: '/advertisement-type/admin/save',
        batchAddUrl: '/advertisement-type/admin/batch-save',
        editUrl: '/advertisement-type/admin/update',
        batchEditUrl: '/advertisement-type/admin/batch-update'
      },
      form: {
        id: null,
        title: null,
        code: null,
        description: null,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
        title: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 1,
            max: 20,
            message: '必须1-20个字符',
            trigger: 'blur'
          }
        ],
        code: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 1,
            max: 20,
            message: '必须1-20个字符',
            trigger: 'blur'
          }
        ],
        description: [
          {
            type: 'string',
            min: 1,
            max: 500,
            message: '必须1-500个字符',
            trigger: 'blur'
          }
        ]
      },
      descriptionAutoSize: {
        minRows: 3,
        maxRows: 5
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
