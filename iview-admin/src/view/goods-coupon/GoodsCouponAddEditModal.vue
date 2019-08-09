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
	<FormItem label="商品类目编号" prop="categoryId">
	<!-- <InputNumber v-model="form.categoryId" placeholder="请输入商品类目编号" style="width: 100%;"/> -->
    <span v-text="form.categoryId"></span>
    -
    <span v-text="form.categoryName"></span>
    &nbsp;
    <Button @click="showModal('choiceCategory', 1)" type="text" style="color: #108EE9;">选择商品类目</Button>&nbsp;
</FormItem>
<FormItem prop="categoryName"></FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<!-- <InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/> -->
    <span v-text="form.goodsId"></span>
    -
    <span v-text="form.goodsName"></span>
    &nbsp;
    <Button @click="showModal('choiceGoods', 2)" type="text" style="color: #108EE9;">选择商品</Button>&nbsp;
</FormItem>
<FormItem prop="goodsName"></FormItem>
	</i-col><i-col span="12">
	<FormItem label="商品SKU编号" prop="goodsSkuId">
	<!-- <InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/> -->
    <span v-text="form.goodsSkuId"></span>
    &nbsp;
    <Button @click="showModal('choiceGoodsSku', 3)" type="text" style="color: #108EE9;">选择商品SKU</Button>&nbsp;
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券使用范围" prop="couponUsableRange">
	<!-- <InputNumber v-model="form.couponUsableRange" placeholder="请输入优惠券使用范围" style="width: 100%;"/> -->
  <Select v-model="form.couponUsableRange" placeholder="请选择优惠券使用范围" filterable>
    <Option v-for="(option, index) in couponUsableRangeSelect" :value="option.value" :key="index">{{option.label}}</Option>
  </Select>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠券类型" prop="couponType">
	<!-- <InputNumber v-model="form.couponType" placeholder="请输入优惠券类型" style="width: 100%;"/> -->
  <Select v-model="form.couponType" placeholder="请选择优惠券类型" filterable @on-change="couponTypeChange">
    <Option v-for="(option, index) in couponTypeSelect" :value="option.value" :key="index">{{option.label}}</Option>
  </Select>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券标题" prop="title">
	<Input v-model="form.title" placeholder="请输入优惠券标题"/>
</FormItem>
	</i-col><i-col span="12">
    <FormItem label="优惠券总量" prop="totalCount">
	<InputNumber v-model="form.totalCount" placeholder="请输入优惠券总量" style="width: 100%;"/>
</FormItem>
	
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="开始时间" prop="startTime">
	<DatePicker @on-change="form.startTime=$event" :value="form.startTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
    <FormItem label="有效天数" prop="validDays">
	<InputNumber v-model="form.validDays" placeholder="请输入有效天数" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
    <FormItem label="最小消费金额（元）" prop="useMinAmount">
	<InputNumber v-model="form.useMinAmount" placeholder="请输入最小消费金额（元）" style="width: 100%;"/>
</FormItem>
	
	</i-col><i-col span="12">
    <FormItem label="满减优惠金额（元）" v-if="form.couponType === 0" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入满减优惠金额（元）" style="width: 100%;"/>
</FormItem>
<FormItem label="赠送积分" prop="integralAmount" v-if="form.couponType === 2">
	<InputNumber v-model="form.integralAmount" placeholder="请输入赠送积分" style="width: 100%;"/>
</FormItem>
	<FormItem label="满减折扣" v-if="form.couponType === 1" prop="discountPercent">
	<InputNumber v-model="form.discountPercent" placeholder="请输入满减折扣" style="width: 100%;"/>
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
    <Button @click="showModal('choiceShop', 0)" type="text" style="color: #108EE9;">选择店铺</Button>&nbsp;
</FormItem>
<FormItem prop="shopName"></FormItem>
	
	</i-col><i-col span="12">
	<FormItem label="商品类目编号" prop="categoryId">
	<!-- <InputNumber v-model="form.categoryId" placeholder="请输入商品类目编号" style="width: 100%;"/> -->
    <span v-text="form.categoryId"></span>
    -
    <span v-text="form.categoryName"></span>
    &nbsp;
    <Button @click="showModal('choiceCategory', 1)" type="text" style="color: #108EE9;">选择商品类目</Button>&nbsp;
</FormItem>
<FormItem prop="categoryName"></FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="商品编号" prop="goodsId">
	<!-- <InputNumber v-model="form.goodsId" placeholder="请输入商品编号" style="width: 100%;"/> -->
    <span v-text="form.goodsId"></span>
    -
    <span v-text="form.goodsName"></span>
    &nbsp;
    <Button @click="showModal('choiceGoods', 2)" type="text" style="color: #108EE9;">选择商品</Button>&nbsp;
</FormItem>
<FormItem prop="goodsName"></FormItem>
	</i-col><i-col span="12">
	<FormItem label="商品SKU编号" prop="goodsSkuId">
	<!-- <InputNumber v-model="form.goodsSkuId" placeholder="请输入商品SKU编号" style="width: 100%;"/> -->
    <span v-text="form.goodsSkuId"></span>
    &nbsp;
    <Button @click="showModal('choiceGoodsSku', 3)" type="text" style="color: #108EE9;">选择商品SKU</Button>&nbsp;
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券使用范围" prop="couponUsableRange">
	<!-- <InputNumber v-model="form.couponUsableRange" placeholder="请输入优惠券使用范围" style="width: 100%;"/> -->
  <Select v-model="form.couponUsableRange" placeholder="请选择优惠券使用范围" filterable>
    <Option v-for="(option, index) in couponUsableRangeSelect" :value="option.value" :key="index">{{option.label}}</Option>
  </Select>
</FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠券类型" prop="couponType">
	<!-- <InputNumber v-model="form.couponType" placeholder="请输入优惠券类型" style="width: 100%;"/> -->
  <Select v-model="form.couponType" placeholder="请选择优惠券类型" filterable @on-change="couponTypeChange">
    <Option v-for="(option, index) in couponTypeSelect" :value="option.value" :key="index">{{option.label}}</Option>
  </Select>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="优惠券标题" prop="title">
	<Input v-model="form.title" placeholder="请输入优惠券标题"/>
</FormItem>
	</i-col><i-col span="12">
    <FormItem label="优惠券总量" prop="totalCount">
	<InputNumber v-model="form.totalCount" placeholder="请输入优惠券总量" style="width: 100%;"/>
</FormItem>
	
	</i-col>
</Row>
<Row>
	<i-col span="12">
	<FormItem label="开始时间" prop="startTime">
	<DatePicker @on-change="form.startTime=$event" :value="form.startTime" placeholder="请输入开始时间" type="datetime" format="yyyy-MM-dd HH:mm:ss" style="width: 100%;"></DatePicker>
</FormItem>
	</i-col><i-col span="12">
    <FormItem label="有效天数" prop="validDays">
	<InputNumber v-model="form.validDays" placeholder="请输入有效天数" style="width: 100%;"/>
</FormItem>
	</i-col>
</Row>
<Row>
	<i-col span="12">
    <FormItem label="最小消费金额（元）" prop="useMinAmount">
	<InputNumber v-model="form.useMinAmount" placeholder="请输入最小消费金额（元）" style="width: 100%;"/>
</FormItem>
	
	</i-col><i-col span="12">
    <FormItem label="满减优惠金额（元）" v-if="form.couponType === 0" prop="discountAmount">
	<InputNumber v-model="form.discountAmount" placeholder="请输入满减优惠金额（元）" style="width: 100%;"/>
</FormItem>
<FormItem label="赠送积分" prop="integralAmount" v-if="form.couponType === 2">
	<InputNumber v-model="form.integralAmount" placeholder="请输入赠送积分" style="width: 100%;"/>
</FormItem>
	<FormItem label="满减折扣" v-if="form.couponType === 1" prop="discountPercent">
	<InputNumber v-model="form.discountPercent" placeholder="请输入满减折扣" style="width: 100%;"/>
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
        <Modal v-model="modal.choiceCategory" title="选择商品类目" :mask-closable="false" width="960">
          <GoodsCategoryMainSingle ref="choiceCategory" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceCategory')">取消</Button>
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
    import { getDate } from '@/api/utils-v2'
    import {couponTypeSelect, couponUsableRangeSelect} from '@/api/select'
    import GoodsShopMainSingle from '../goods-shop/GoodsShopMainSingle.vue'
    import GoodsCategoryMainSingle from '../goods-category/GoodsCategoryMainSingle.vue'
    import GoodsInfoMainSingle from '../goods-info/GoodsInfoMainSingle.vue'
    import GoodsSkuMainSingle from '../goods-sku/GoodsSkuMainSingle.vue'
    export default {
        name: 'GoodsCouponAddEdit',
        components: {
          GoodsShopMainSingle,
          GoodsCategoryMainSingle,
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
                    choiceCategory: false,
                    choiceGoods: false,
                    choiceGoodsSku: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/goods-coupon/admin/save',
                    batchAddUrl: '/goods-coupon/admin/batch-save',
                    editUrl: '/goods-coupon/admin/update',
                    batchEditUrl: '/goods-coupon/admin/batch-update'
                },
                form: {
                    categoryId: null,
                    categoryName: null,
shopId: null,
shopName: null,
goodsId: null,
goodsName: null,
goodsSkuId: null,
title: null,
useMinAmount: null,
discountAmount: null,
discountPercent: null,
integralAmount: null,
totalCount: null,
couponUsableRange: null,
couponType: null,
startTime: null,
dueTime: null,
validDays: null,

                },
                validateRules: {
                    title: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
{type: 'string', min: 1, max: 50, message: '必须1-50个字符', trigger: 'blur'}
],
totalCount: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
couponUsableRange: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
validDays: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
couponType: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
startTime: [
{type: 'string', required: true, message: '此项为必须项', trigger: 'blur'}
],

                },
                couponTypeSelect: couponTypeSelect,
                couponUsableRangeSelect: couponUsableRangeSelect
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
            setDueTime() {
              if (!this.form.startTime) {
                this.$Message.warning('请先选择开始时间')
                return;
              }
              var time = this.form.startTime.split(' ')[1]
              var date = new Date(this.form.startTime)
              this.form.dueTime = getDate(date, this.form.validDays) + ' ' + time
            },
            /**
             * 验证数据
             */
            checkData() {
              const form = this.form
              const usableRange = form.couponUsableRange
              if (usableRange) {
                if (usableRange === 1) {
                  // 类目优惠券 -> 必须验证选择店铺和选择类目
                  if (!form.categoryId) {
                    this.$Message.warning('请先选择类目')
                    return false
                  }
                } else if (usableRange === 2) {
                  // 店铺优惠券
                  if (!form.shopId) {
                    this.$Message.warning('请先选择店铺')
                    return false
                  }
                } else if (usableRange === 3) {
                  // 商品优惠券
                  if (!form.goodsId) {
                    this.$Message.warning('请先选择商品')
                    return false
                  }
                } else if (usableRange === 4) {
                  // 商品优惠券
                  if (!form.goodsSkuId) {
                    this.$Message.warning('请先选择商品Sku')
                    return false
                  }
                }
              }
              return true
            },
            add() {
              if (!this.checkData()) {
                return
              }
              this.setDueTime()
              this.$emit('add')
            },
            edit() {
              if (!this.checkData()) {
                return
              }
              this.setDueTime()
              this.$emit('edit')
            },
            /**
             * 优惠券类型监听
             */
            couponTypeChange(e) {
              this.form.integralAmount = null
              this.form.discountAmount = null
              this.form.discountPercent = null
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
                  // 选择类目
                  choiceModal = this.$refs.choiceCategory
                  if (!this.form.shopId) {
                    this.$Message.warning('请先选择店铺')
                    return
                  }
                  let searchModal = choiceModal.$refs.searchModal
                  searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax = this.form.shopId
                  searchModal.searchForm.categoryLevel = 3
                } else if (type === 2) {
                  // 选择商品
                  choiceModal = this.$refs.choiceGoods
                  if (!this.form.shopId) {
                    this.$Message.warning('请先选择店铺')
                    return
                  }
                  if (!this.form.categoryId) {
                    this.$Message.warning('请先选择类目')
                    return
                  }
                  let searchModal = choiceModal.$refs.searchModal
                  searchModal.searchForm.shopIdMin = searchModal.searchForm.shopIdMax = this.form.shopId
                  searchModal.searchForm.categoryIdMin = searchModal.searchForm.categoryIdMax = this.form.categoryId
                } else if (type === 3) {
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
                // 选择类目
                refName = 'choiceCategory'
              } else if (type == 2) {
                // 选择商品
                refName = 'choiceGoods'
              } else if (type == 3) {
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
                // 选择类目
                this.form.categoryId = row.id
                this.form.categoryName = row.title

                this.form.goodsId = this.form.goodsName = null
                this.form.goodsSkuId = null
                this.cancelModal('choiceCategory')
              } else if (type == 2) {
                // 选择商品
                this.form.goodsId = row.id
                this.form.goodsName = row.title

                this.form.goodsSkuId = null
                this.cancelModal('choiceGoods')
              } else if (type == 3) {
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
