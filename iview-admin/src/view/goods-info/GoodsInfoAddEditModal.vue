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
            <FormItem label="店铺编号" prop="shopId">
              <span v-text="form.shopId"></span>
              -
              <span v-text="form.shopName"></span>
              &nbsp;
              <Button @click="showModal('choiceShop')" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="类目编号" prop="categoryId">
              <span v-text="form.categoryId"></span>
              -
              <span v-text="form.categoryName"></span>
              &nbsp;
              <Button @click="showModal('choiceCategory')" type="text" style="color: #108EE9;">选择类目</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="商品标题" prop="title">
              <Input v-model="form.title" placeholder="请输入商品标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="上架状态" prop="shelfStatus">
              <Select v-model="form.shelfStatus" placeholder="请选择上架状态" filterable>
                <Option
                  v-for="(option, index) in shelfStatusSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="24">
            <FormItem label="图文详情" prop="intro">
              <editor ref="editorAdd" :value="form.intro" @on-change="handleChange"/>
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
            <FormItem label="店铺编号" prop="shopId">
              <span v-text="form.shopId"></span>
              -
              <span v-text="form.shopName"></span>
              &nbsp;
              <Button @click="showModal('choiceShop')" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="类目编号" prop="categoryId">
              <span v-text="form.categoryId"></span>
              -
              <span v-text="form.categoryName"></span>
              &nbsp;
              <Button @click="showModal('choiceCategory')" type="text" style="color: #108EE9;">选择类目</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="商品标题" prop="title">
              <Input v-model="form.title" placeholder="请输入商品标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="上架状态" prop="shelfStatus">
              <Select v-model="form.shelfStatus" placeholder="请选择上架状态" filterable>
                <Option
                  v-for="(option, index) in shelfStatusSelect"
                  :value="option.value"
                  :key="index"
                >{{option.label}}</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="24">
            <FormItem label="图文详情" prop="intro">
              <editor ref="editorEdit" :value="form.intro" @on-change="handleChange"/>
            </FormItem>
          </i-col>
        </Row>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
        <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choiceShop" title="选择店铺" :mask-closable="false" width="960">
      <goodsShopMainSingle ref="choiceShopModal" v-on:confirmChoice="confirmChoiceShop" />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choiceShop')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoiceShop">确认选择</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choiceCategory" title="选择类目" :mask-closable="false" width="960">
      <goodsCategoryMainSingle
        ref="choiceCategoryModal"
        v-on:confirmChoice="confirmChoiceCategory"
      />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choiceCategory')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoiceCategory">确认选择</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import goodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
import goodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
import Editor from '_c/editor'
import { shelfStatusSelect } from '@/api/select'
export default {
  name: 'GoodsInfoAddEdit',
  components: {
    goodsShopMainSingle,
    goodsCategoryMainSingle,
    Editor
  },
  data() {
    return {
      modal: {
        add: false,
        edit: false,
        choiceShop: false,
        choiceCategory: false
      },
      loading: {
        add: false,
        edit: false
      },
      urls: {
        addUrl: '/goods-info/admin/save',
        batchAddUrl: '/goods-info/admin/batch-save',
        editUrl: '/goods-info/admin/update',
        batchEditUrl: '/goods-info/admin/batch-update',
        uploadUrl: '/goods-info/admin/upload-img',
      },
      form: {
        id: null,
        shopId: null,
        shopName: null,
        categoryId: null,
        categoryName: null,
        title: null,
        intro: null,
        shelfStatus: 0,
        saleCount: null,
        clickCount: null,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
        shopId: [
          {
            type: 'integer',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ],
        categoryId: [
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
            max: 100,
            message: '必须1-100个字符',
            trigger: 'blur'
          }
        ],
        intro: [
          {
            type: 'string',
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 1,
            max: 65535,
            message: '必须1-65535个字符',
            trigger: 'blur'
          }
        ]
      },
      shelfStatusSelect: shelfStatusSelect
    }
  },
  computed: {},
  mounted() {
    this.$refs.editorAdd.initEditor(this.urls.uploadUrl)
    this.$refs.editorEdit.initEditor(this.urls.uploadUrl)
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
      this.$emit('edit')
    },
    handleChange(html, text) {
      this.form.intro = html
    },
    showModal(modal) {
      if (modal === 'choiceCategory') {
        // 选择类目
        this.$refs.choiceCategoryModal.searchTable()
      } else if (modal === 'choiceShop') {
        // 选择商品
        this.$refs.choiceShopModal.searchTable()
      }
      this.modal[modal] = true
    },
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 底部的确认选择店铺
     */
    bottomConfirmChoiceShop() {
      this.$refs.choiceShopModal.confirmSelection()
    },
    /**
     * 确认选择店铺
     */
    confirmChoiceShop(row) {
      this.cancelModal('choiceShop')
      this.form.shopId = row.id
      this.form.shopName = row.title
    },
    /**
     * 底部的确认选择类目
     */
    bottomConfirmChoiceCategory() {
      this.$refs.choiceCategoryModal.confirmSelection()
    },
    /**
     * 确认选择类目
     */
    confirmChoiceCategory(row) {
      this.cancelModal('choiceCategory')
      this.form.categoryId = row.id
      this.form.categoryName = row.title
    }
  }
}
</script>

<style>
</style>
