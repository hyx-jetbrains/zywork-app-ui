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
            <FormItem label="属性名称" prop="attrName">
              <Input v-model="form.attrName" placeholder="请输入属性名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="属性代码" prop="attrCode">
              <Input v-model="form.attrCode" placeholder="请输入属性代码" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="数据类型" prop="attrType">
              <Input v-model="form.attrType" placeholder="请输入数据类型" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="数据长度" prop="attrLength">
              <InputNumber v-model="form.attrLength" placeholder="请输入数据长度" style="width: 100%;" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="是否必填" prop="attrRequired">
              <Select v-model="form.attrRequired" placeholder="请选择是否必填" filterable>
                <Option
                  v-for="(option, index) in isDefaultSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="是否前端显示" prop="attrDisplay">
              <Select v-model="form.attrDisplay" placeholder="请选择是否前端显示" filterable>
                <Option
                  v-for="(option, index) in isDefaultSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
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
            <FormItem label="属性名称" prop="attrName">
              <Input v-model="form.attrName" placeholder="请输入属性名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="属性代码" prop="attrCode">
              <Input v-model="form.attrCode" placeholder="请输入属性代码" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="数据类型" prop="attrType">
              <Input v-model="form.attrType" placeholder="请输入数据类型" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="数据长度" prop="attrLength">
              <InputNumber v-model="form.attrLength" placeholder="请输入数据长度" style="width: 100%;" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="是否必填" prop="attrRequired">
              <Select v-model="form.attrRequired" placeholder="请选择是否必填" filterable>
                <Option
                  v-for="(option, index) in isDefaultSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="是否前端显示" prop="attrDisplay">
              <Select v-model="form.attrDisplay" placeholder="请选择是否前端显示" filterable>
                <Option
                  v-for="(option, index) in isDefaultSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
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
import { isDefaultSelect } from '@/api/select'
export default {
  name: 'GoodsAttributeAddEdit',
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
        addUrl: '/goods-attribute/admin/save',
        batchAddUrl: '/goods-attribute/admin/batch-save',
        editUrl: '/goods-attribute/admin/update',
        batchEditUrl: '/goods-attribute/admin/batch-update'
      },
      form: {
        id: null,
        attrName: null,
        attrCode: null,
        attrType: null,
        attrLength: null,
        attrRequired: 0,
        attrDisplay: 0,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
        attrName: [
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
        attrCode: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 1,
            max: 50,
            message: '必须1-50个字符',
            trigger: 'blur'
          }
        ],
        attrType: [
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
        attrLength: [
          {
            type: 'integer',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ],
        attrRequired: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ],
        attrDisplay: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ]
      },
      isDefaultSelect: isDefaultSelect
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
