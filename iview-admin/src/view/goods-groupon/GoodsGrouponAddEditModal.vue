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
    <Button @click="showModal('choiceShop', 0)" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
</FormItem>
<FormItem prop="shopName"></FormItem>
	</i-col><i-col span="12">
<FormItem label="商品编号" prop="goodsId">
	<!-- <InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/> -->
    <span v-text="form.goodsId"></span>
    -
    <span v-text="form.goodsName"></span>
    &nbsp;
    <Button @click="showModal('choiceGoods', 1)" type="text" style="color: #108EE9;">选择商品</Button>&nbsp;
</FormItem>
<FormItem prop="goodsName"></FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
<FormItem label="商品SKU编号" prop="goodsSkuId">
	<!-- <InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/> -->
    <span v-text="form.goodsSkuId"></span>
    &nbsp;
    <Button @click="showModal('choiceGoodsSku', 2)" type="text" style="color: #108EE9;">选择商品SKU</Button>&nbsp;
</FormItem>
	</i-col><i-col span="12">
	
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="成团人数" prop="grouponPersonCount">
	<InputNumber v-model="form.grouponPersonCount" placeholder="请输入成团人数" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
    <FormItem label="拼团价格" prop="grouponPrice">
	<InputNumber v-model="form.grouponPrice" placeholder="请输入拼团价格" style="width: 100%;"/>
</FormItem>
	
	</i-col>
</Row>
<Row>
  <i-col span="12">
    <FormItem label="开始时间" prop="beginTime">
	<DatePicker @on-change="form.beginTime=$event" :value="form.beginTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
    </i-col>
	<i-col span="12">
	<FormItem label="结束时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入结束时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
                <!-- <Row>
	<i-col span="12">
	<FormItem label="店铺编号" prop="shopId">
	<InputNumber v-model="form.shopId" placeholder="请输入店铺编号" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row> -->
<Row>
	<i-col span="12">
	<!-- <FormItem label="商品SKU编号" prop="goodsSkuId">
	<InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/>
</FormItem> -->
<FormItem label="成团人数" prop="grouponPersonCount">
	<InputNumber v-model="form.grouponPersonCount" placeholder="请输入成团人数" style="width: 100%;"/>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="拼团价格" prop="grouponPrice">
	<InputNumber v-model="form.grouponPrice" placeholder="请输入拼团价格" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="开始时间" prop="beginTime">
	<DatePicker @on-change="form.beginTime=$event" :value="form.beginTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="结束时间" prop="endTime">
	<DatePicker @on-change="form.endTime=$event" :value="form.endTime" placeholder="请输入结束时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
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
          <GoodsShopMainSingle ref="choiceShop" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceShop')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
        <Modal v-model="modal.choiceGoods" title="选择商品" :mask-closable="false" width="960">
          <GoodsInfoMainSingle ref="choiceGoods" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceGoods')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
        <Modal v-model="modal.choiceGoodsSku" title="选择商品SKU" :mask-closable="false" width="960">
          <GoodsSkuMainSingle ref="choiceGoodsSku" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceGoodsSku')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
    import GoodsInfoMainSingle from '../goods-info/GoodsInfoMainSingle.vue'
    import GoodsSkuMainSingle from '../goods-sku/GoodsSkuMainSingle.vue'
    export default {
        name: 'GoodsGrouponAddEdit',
        components: {
          GoodsShopMainSingle,
          GoodsInfoMainSingle,
          GoodsSkuMainSingle
        },
        data() {
            return {
              choiceType: '',
                modal: {
                    add: false,
                    edit: false,
                    choiceShop: false,
                    choiceGoods: false,
                    choiceGoodsSku: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/goods-groupon/admin/save',
                    batchAddUrl: '/goods-groupon/admin/batch-save',
                    editUrl: '/goods-groupon/admin/update',
                    batchEditUrl: '/goods-groupon/admin/batch-update'
                },
                form: {
                    shopId: null,
                    shopName: null,
goodsId: null,
goodsName: null,
goodsSkuId: null,
grouponPrice: null,
grouponPersonCount: null,
beginTime: null,
endTime: null,

                },
                validateRules: {
                    shopId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
goodsSkuId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
grouponPrice: [
{type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
grouponPersonCount: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
beginTime: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'}
],
endTime: [
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
            },
            /**
             * 显示模态窗
             */
            showModal(modal, type) {
              if (modal.indexOf('choice') != -1) {
                this.choiceType = type
                let choiceModal
                if (type === 0) {
                  // 选择店铺
                  choiceModal = this.$refs.choiceShop
                } else if (type === 1) {
                  // 选择商品
                  choiceModal = this.$refs.choiceGoods
                  if (!this.form.shopId) {
                    this.$Message.warning('请先选择店铺')
                    return
                  }
                  let searchModal = choiceModal.$refs.searchModal
                  searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax = this.form.shopId
                } else if (type === 2) {
                  // 选择商品sku
                  choiceModal = this.$refs.choiceGoodsSku
                  if (!this.form.shopId) {
                    this.$Message.warning('请先选择店铺')
                    return
                  }
                  if (!this.form.goodsId) {
                    this.$Message.warning('请先选择商品')
                    return
                  }
                  let searchModal = choiceModal.$refs.searchModal
                  searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax = this.form.shopId
                  searchModal.searchForm.goodsIddMin = searchModal.searchForm.goodsIdMax = this.form.goodsId
                }
                // 必须要modal框先出来，searchTable()才会生效
                this.modal[modal] = true
                choiceModal.searchTable()
              } else {
                this.modal[modal] = true
              }
            },
            /**
             * 取消模态窗
             */
            cancelModal(modal) {
              this.modal[modal] = false
            },
            /**
             * 底部的确认选择父级类目
             */
            bottomConfirmChoice() {
              let type = this.choiceType
              let refName = ''
              if (type == 0) {
                // 选择店铺
                refName = 'choiceShop'
              } else if (type == 1) {
                // 选择商品
                refName = 'choiceGoods'
              } else if (type == 2) {
                // 选择商品sku
                refName = 'choiceGoodsSku'
              }
              this.$refs[refName].confirmSelection()
            },
            /**
             * 确认选择父级类目
             */
            confirmChoice(row) {
              let type = this.choiceType
              if (type == 0) {
                // 选择店铺
                this.form.shopId = row.id
                this.form.shopName = row.title
                this.cancelModal('choiceShop')
              } else if (type == 1) {
                // 选择商品
                this.form.goodsId = row.id
                this.form.goodsName = row.title

                this.form.goodsSkuId = null
                this.cancelModal('choiceGoods')
              } else if (type == 2) {
                // 选择商品sku
                this.form.goodsSkuId = row.id
                this.cancelModal('choiceGoodsSku')
              }
            },
        }
    }
</script>

<style>
</style>
