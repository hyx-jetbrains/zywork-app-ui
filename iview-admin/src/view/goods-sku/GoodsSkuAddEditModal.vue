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
            <FormItem label="商品图片" prop="picName">
              <img :src="picName" style="width: 100px;cursor: pointer;" @click="showImgModal(picName)" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="商品编号" prop="goodsId">
              <span v-text="form.goodsId"></span>
              -
              <span v-text="goodsName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择商品</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片编号" prop="picId">
              <span v-text="form.picId"></span>
              &nbsp;
              <Button @click="showModal('choicePic')" type="text" style="color: #108EE9;">选择商品图片</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
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
            <FormItem label="商品编号" prop="goodsId">
              <span v-text="form.goodsId"></span>
              -
              <span v-text="goodsName"></span>
              &nbsp;
              <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择商品</Button>&nbsp;
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片编号" prop="picId">
              <span v-text="form.picId"></span>
              &nbsp;
              <Button @click="showModal('choicePic')" type="text" style="color: #108EE9;">选择商品图片</Button>&nbsp;
            </FormItem>
          </i-col>
        </Row>
        <Row>
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
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
        <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choice" title="选择商品" :mask-closable="false" width="960">
      <GoodsInfoMainSingle
        ref="choiceModal"
        v-on:confirmChoice="confirmChoice"
      />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice('choiceModal')">确认选择</Button>
      </div>
    </Modal>
    <Modal v-model="modal.choicePic" title="选择商品图片" :mask-closable="false" width="960">
      <GoodsPicMainSingle
        ref="choicePicModal"
        v-on:confirmChoice="confirmChoicePic"
      />
      <div slot="footer">
        <Button type="text" size="large" @click="cancelModal('choicePic')">取消</Button>
        <Button type="primary" size="large" @click="bottomConfirmChoice('choicePicModal')">确认选择</Button>
      </div>
    </Modal>
    <ImgModal ref="imgModal" />
  </div>
</template>

<script>
import GoodsInfoMainSingle from '../goods-info/GoodsInfoMainSingle.vue'
import GoodsPicMainSingle from '../goods-pic/GoodsPicMainSingle.vue'
import ImgModal from '_c/img-modal'

import { shelfStatusSelect } from '@/api/select'

import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const cdnUrl = config.baseUrl.cdnUrl
export default {
  name: 'GoodsSkuAddEdit',
  components: {
    GoodsInfoMainSingle,
    GoodsPicMainSingle,
    ImgModal
  },
  data() {
    return {
      modal: {
        add: false,
        edit: false,
        choice: false,
        choicePic: false
      },
      loading: {
        add: false,
        edit: false
      },
      urls: {
        addUrl: '/goods-sku/admin/save',
        batchAddUrl: '/goods-sku/admin/batch-save',
        editUrl: '/goods-sku/admin/update',
        batchEditUrl: '/goods-sku/admin/batch-update'
      },
      goodsName: null,
      picName: null,
      form: {
        id: null,
        shopId: null,
        goodsId: null,
        picId: null,
        shelfStatus: 0,
        version: null,
        createTime: null,
        updateTime: null,
        isActive: null
      },
      validateRules: {
                            shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
        goodsId: [
          {
            type: 'integer',
            required: true,
            message: '此项为必须项',
            trigger: 'blur, change'
          }
        ]
      },
      shelfStatusSelect: shelfStatusSelect
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
     * 显示弹窗
     */
    showModal(modal) {
      if (modal === 'choice') {
        this.$refs.choiceModal.searchTable()
      } else if (modal === 'choicePic') {
        if (!this.form.goodsId) {
          this.$Message.warning('请先选择商品')
          return
        }
        let choicePicModal = this.$refs.choicePicModal
        choicePicModal.setSearchModalData({goodsId:this.form.goodsId})
        choicePicModal.searchTable()
      }
      this.modal[modal] = true
    },
    /**
     * 关闭弹窗
     */
    cancelModal(modal) {
      this.modal[modal] = false
    },
    /**
     * 底部的确认选择
     */
    bottomConfirmChoice(refName) {
      this.$refs[refName].confirmSelection()
    },
    /**
     * 确认选择商品
     */
    confirmChoice(row) {
      this.cancelModal('choice')
      this.form.shopId = row.shopId
      this.form.goodsId = row.id
      this.goodsName = row.title
    },
    /**
     * 确认选择商品图片
     */
    confirmChoicePic(row) {
      this.cancelModal('choicePic')
      this.form.picId = row.id
      this.picName = cdnUrl + '/' + row.picUrl
    },
    /**
     * 显示图片预览的弹窗
     */
    showImgModal(src) {
      let imgModal = this.$refs.imgModal
      imgModal.modal.img = true
      imgModal.imgSrc = src
    }
  }
}
</script>

<style>
</style>
