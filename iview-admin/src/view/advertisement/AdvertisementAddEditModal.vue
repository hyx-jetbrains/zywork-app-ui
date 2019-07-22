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
            <FormItem label="广告类型编号" prop="adTypeId">
              <span v-text="form.adTypeId"></span>
              -
              <span v-text="form.adTypeName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择广告类型</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="背景颜色" prop="backgroundColor">
              <color-picker v-model="form.backgroundColor" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="广告标题" prop="title">
              <Input v-model="form.title" placeholder="请输入广告标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="广告顺序" prop="adOrder">
              <InputNumber v-model="form.adOrder" placeholder="请输入广告顺序" style="width: 100%;" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="关联记录ID" prop="linkId">
              <InputNumber v-model="form.linkId" placeholder="请输入关联记录ID" style="width: 100%;" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="关联页面链接" prop="linkPageUrl">
              <Input v-model="form.linkPageUrl" placeholder="请输入关联页面链接" />
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
            <FormItem label="广告类型编号" prop="adTypeId">
              <span v-text="form.adTypeId"></span>
              -
              <span v-text="form.adTypeName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择广告类型</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="背景颜色" prop="backgroundColor">
              <color-picker v-model="form.backgroundColor" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="广告标题" prop="title">
              <Input v-model="form.title" placeholder="请输入广告标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="广告顺序" prop="adOrder">
              <InputNumber v-model="form.adOrder" placeholder="请输入广告顺序" style="width: 100%;" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="关联记录ID" prop="linkId">
              <InputNumber v-model="form.linkId" placeholder="请输入关联记录ID" style="width: 100%;" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="关联页面链接" prop="linkPageUrl">
              <Input v-model="form.linkPageUrl" placeholder="请输入关联页面链接" />
            </FormItem>
          </i-col>
        </Row>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
        <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choice" title="选择广告类型" :mask-closable="false" width="960">
      <AdvertisementTypeMainSingle ref="choiceModal" v-on:confirmChoice="confirmChoice" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import AdvertisementTypeMainSingle from '../advertisement-type/AdvertisementTypeMainSingle.vue'
export default {
  name: 'AdvertisementAddEdit',
  components: {
    AdvertisementTypeMainSingle
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
        addUrl: '/advertisement/admin/save',
        batchAddUrl: '/advertisement/admin/batch-save',
        editUrl: '/advertisement/admin/update',
        batchEditUrl: '/advertisement/admin/batch-update'
      },
      form: {
        id: null,
        adTypeId: null,
        title: null,
        picUrl: null,
        adOrder: null,
        backgroundColor: '#fa436a',
        linkPageUrl: null,
        linkId: null,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
        adTypeId: [
          {
            type: 'integer',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ],
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
            max: 50,
            message: '必须1-50个字符',
            trigger: 'blur'
          }
        ],
        picUrl: [
          {
            type: 'string',
            min: 1,
            max: 500,
            message: '必须1-500个字符',
            trigger: 'blur'
          }
        ],
        backgroundColor: [
          {
            type: 'string',
            min: 1,
            max: 30,
            message: '必须1-30个字符',
            trigger: 'blur'
          }
        ],
        linkPageUrl: [
          {
            type: 'string',
            min: 1,
            max: 500,
            message: '必须1-500个字符',
            trigger: 'blur'
          }
        ]
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
    showModal(modal) {
      this.modal[modal] = true
    },
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 底部的确认选择父级类目
     */
    bottomConfirmChoice() {
      this.$refs.choiceModal.confirmSelection()
    },
    /**
     * 确认选择父级类目
     */
    confirmChoice(row) {
      this.cancelModal('choice')
      this.form.adTypeId = row.id
      this.form.adTypeName = row.title
    },
  }
}
</script>

<style>
</style>
