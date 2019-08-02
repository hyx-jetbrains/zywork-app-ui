<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="店铺编号" prop="shopId">
	<!-- <InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/> -->
            <span v-text="form.shopId"></span>
            -
            <span v-text="form.shopName"></span>
            &nbsp;
            <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
</FormItem>
<FormItem prop="shopName"></FormItem>
	</i-col><i-col span="12">
	<FormItem label="认证详情JSON" prop="detail">
	<!-- <Input v-model="form.detail" placeholder="请输入认证详情JSON"/> -->
   <vue-json-editor v-model="form.detail" :showBtns="false"></vue-json-editor>
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
	<FormItem label="店铺编号" prop="shopId">
	<!-- <InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/> -->
            <span v-text="form.shopId"></span>
            -
            <span v-text="form.shopName"></span>
            &nbsp;
            <Button @click="showModal('choice')" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="认证详情JSON" prop="detail">
	<!-- <Input v-model="form.detail" placeholder="请输入认证详情JSON"/> -->
  <vue-json-editor v-model="form.detail" :showBtns="false"></vue-json-editor>
</FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
                <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
            </div>
        </Modal>
        <Modal v-model="modal.choice" title="选择店铺" :mask-closable="false" width="960">
          <GoodsShopMainSingle ref="choiceModal" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
            <Button type="text" size="large" @click="cancelModal('choice')">取消</Button>
            <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
          </div>
        </Modal>
    </div>
</template>

<script>
    import vueJsonEditor from 'vue-json-editor'
    import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
    export default {
        name: 'GoodsShopCertificationAddEdit',
        components: {
            vueJsonEditor,
            GoodsShopMainSingle
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
                    addUrl: '/goods-shop-certification/admin/save',
                    batchAddUrl: '/goods-shop-certification/admin/batch-save',
                    editUrl: '/goods-shop-certification/admin/update',
                    batchEditUrl: '/goods-shop-certification/admin/batch-update'
                },
                form: {
                    id: null,
shopId: null,
shopName: null,
detail: null,


                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
detail: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 1000, message: '必须1-1000个字符', trigger: 'blur'}
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
            showModal(modal) {
              if (modal === 'choice') {
                this.$refs.choiceModal.searchTable()
              }
              this.modal[modal] = true
            },
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
            * 底部的确认选择店铺
            */
            bottomConfirmChoice() {
              this.$refs.choiceModal.confirmSelection()
            },
            /**
            * 确认选择店铺
            */
            confirmChoice(row) {
              this.cancelModal('choice')
              this.form.shopId = row.id
              this.form.shopName = row.title
            },
        }
    }
</script>

<style>
</style>
