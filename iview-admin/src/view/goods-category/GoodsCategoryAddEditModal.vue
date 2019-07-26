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
          <i-col span="24">
            <FormItem label="父类目" prop="parentId">
              <span v-text="form.parentId"></span>
              -
              <span v-text="parentName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择父类目</Button>&nbsp;
              <Button @click="setTopCategory" type="text" style="color: #fa436a;">设置顶级类目</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="类目名称" prop="title">
              <Input v-model="form.title" placeholder="请输入类目名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片路径" prop="picUrl">
              <Input v-model="form.picUrl" placeholder="请输入图片路径" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
              <i-col span="12">
    <FormItem label="类目级别" prop="categoryLevel">
    <InputNumber v-model="form.categoryLevel" placeholder="请输入类目级别" style="width: 100%;" disabled="true"/>
</FormItem>
    </i-col>
          <i-col span="12">
            <FormItem label="是否热门" prop="isHot">
              <Select v-model="form.isHot" placeholder="请选择是否热门" filterable>
                <Option
                  v-for="(option, index) in isHostSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="类目描述" prop="description">
            <Input
              type="textarea"
              :autosize="descriptionAutoSize"
              v-model="form.description"
              placeholder="请输入类目描述"
            />
          </FormItem>
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
          <i-col span="24">
            <FormItem label="父类目" prop="parentId">
              <span v-text="form.parentId"></span>
              -
              <span v-text="parentName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择父类目</Button>&nbsp;
              <Button @click="setTopCategory" type="text" style="color: #fa436a;">设置顶级类目</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="类目名称" prop="title">
              <Input v-model="form.title" placeholder="请输入类目名称" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片路径" prop="picUrl">
              <Input v-model="form.picUrl" placeholder="请输入图片路径" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
              <i-col span="12">
    <FormItem label="类目级别" prop="categoryLevel">
    <InputNumber v-model="form.categoryLevel" placeholder="请输入类目级别" style="width: 100%;" disabled="true"/>
</FormItem>
    </i-col>
          <i-col span="12">
            <FormItem label="是否热门" prop="isHot">
              <Select v-model="form.isHot" placeholder="请选择是否热门" filterable>
                <Option
                  v-for="(option, index) in isHostSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="类目描述" prop="description">
            <Input
              type="textarea"
              :autosize="descriptionAutoSize"
              v-model="form.description"
              placeholder="请输入类目描述"
            />
          </FormItem>
        </Row>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
        <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choice" title="选择父类目" :mask-closable="false" width="960">
      <goodsCategoryMainSingle ref="choiceModal" v-on:confirmChoice="confirmChoice" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import goodsCategoryMainSingle from './GoodsCategoryMainSingle.vue'
import { isHostSelect } from '@/api/select'
export default {
  name: 'GoodsCategoryAddEdit',
  components: {
    goodsCategoryMainSingle
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
        addUrl: '/goods-category/admin/save',
        batchAddUrl: '/goods-category/admin/batch-save',
        editUrl: '/goods-category/admin/update',
        batchEditUrl: '/goods-category/admin/batch-update'
      },
      parentName: '顶级类目',
      form: {
        id: null,
        parentId: 0,
        title: null,
        picUrl: null,
        description: null,
        categoryLevel: 1,
        isHot: 0,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
        parentId: [
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
            max: 20,
            message: '必须1-20个字符',
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
        description: [
          {
            type: 'string',
            min: 1,
            max: 255,
            message: '必须1-255个字符',
            trigger: 'blur'
          }
        ]
      },
      isHostSelect: isHostSelect,
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
    showModal(modal) {
      if (modal === 'choice') {
        this.$refs.choiceModal.searchTable()
      }
      this.modal[modal] = true
    },
    resetFormCancelModal(formRef, modal) {
      this.cancelModal(modal)
      this.$refs[formRef].resetFields()
    },
    cancelModal(modal) {
      this.modal[modal] = false
    },
    add() {
      this.$emit('add')
    },
    edit() {
      this.$emit('edit')
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
      if (row.categoryLevel === 3) {
        this.$Message.warning('不能给三级类目添加子类目')
        return
      }
      this.cancelModal('choice')
      this.form.parentId = row.id
      this.parentName = row.title
      this.form.categoryLevel = row.categoryLevel + 1
    },
    /**
     * 设置为顶级类目
     */
    setTopCategory() {
      this.form.parentId = 0
      this.parentName = '顶级类目'
      this.form.categoryLevel = 1
    }
  }
}
</script>

<style>
</style>
