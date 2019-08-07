<template>
    <div>
        <Modal v-model="modal.add" title="添加" :mask-closable="false" @on-visible-change="changeModalVisibleResetForm('addForm', $event)" width="760">
            <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
                <Row>
	<i-col span="12">
	<FormItem label="用户编号" prop="userId">
	<!-- <InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/> -->
  <span v-text="form.userId"></span>
    -
    <span v-text="form.userName"></span>
    &nbsp;
    <Button @click="showModal('choiceUser', 0)" type="text" style="color: #108EE9;">选择用户</Button>&nbsp;
</FormItem>
<FormItem prop="userName"></FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠券编号" prop="couponId">
	<!-- <InputNumber v-model="form.couponId" placeholder="请输入优惠券编号" style="width: 100%;"/> -->
  <span v-text="form.couponId"></span>
    -
    <span v-text="form.couponName"></span>
    &nbsp;
    <Button @click="showModal('choiceCoupon', 1)" type="text" style="color: #108EE9;">选择优惠券</Button>&nbsp;
</FormItem>
<FormItem prop="couponName"></FormItem>
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
	<FormItem label="用户编号" prop="userId">
	<!-- <InputNumber v-model="form.userId" placeholder="请输入用户编号" style="width: 100%;"/> -->
  <span v-text="form.userId"></span>
    -
    <span v-text="form.userName"></span>
    &nbsp;
    <Button @click="showModal('choiceUser', 0)" type="text" style="color: #108EE9;">选择用户</Button>&nbsp;
</FormItem>
<FormItem prop="userName"></FormItem>
	</i-col><i-col span="12">
	<FormItem label="优惠券编号" prop="couponId">
	<!-- <InputNumber v-model="form.couponId" placeholder="请输入优惠券编号" style="width: 100%;"/> -->
  <span v-text="form.couponId"></span>
    -
    <span v-text="form.couponName"></span>
    &nbsp;
    <Button @click="showModal('choiceCoupon', 1)" type="text" style="color: #108EE9;">选择优惠券</Button>&nbsp;
</FormItem>
<FormItem prop="couponName"></FormItem>
	</i-col>
</Row>

            </Form>
            <div slot="footer">
                <Button type="text" size="large" @click="resetFormCancelModal('editForm', 'edit')">取消</Button>
                <Button type="primary" size="large" @click="edit" :loading="loading.edit">修改</Button>
            </div>
        </Modal>

        <Modal v-model="modal.choiceUser" :title="choiceTitle" :mask-closable="false" width="960">
          <UserDetailMainSingle ref="choiceUser" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceUser')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
        <Modal v-model="modal.choiceCoupon" :title="choiceTitle" :mask-closable="false" width="960">
          <GoodsCouponMainSingle ref="choiceCoupon" v-on:confirmChoice="confirmChoice" />
          <div slot="footer">
                <Button type="text" size="large" @click="cancelModal('choiceCoupon')">取消</Button>
                <Button type="primary" size="large" @click="bottomConfirmChoice">确认选择</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import UserDetailMainSingle from '../user-detail/UserDetailMainSingle.vue'
    import GoodsCouponMainSingle from '../goods-coupon/GoodsCouponMainSingle.vue'
    export default {
        name: 'GoodsUserCouponAddEdit',
        components: {
          UserDetailMainSingle,
          GoodsCouponMainSingle
        },
        data() {
            return {
              choiceTitle: null,
              choiceType: null,
                modal: {
                    add: false,
                    edit: false,
                    choiceUser: false,
                    choiceCoupon: false
                },
                loading: {
                    add: false,
                    edit: false
                },
                urls: {
                    addUrl: '/goods-user-coupon/admin/save',
                    batchAddUrl: '/goods-user-coupon/admin/batch-save',
                    editUrl: '/goods-user-coupon/admin/update',
                    batchEditUrl: '/goods-user-coupon/admin/batch-update'
                },
                form: {
                    userId: null,
                    userName: null,
couponId: null,
couponName: null,
couponStatus: 0,

                },
                validateRules: {
                    userId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
couponId: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
],
couponStatus: [
{type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
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
                  // 选择用户
                  this.choiceTitle = '选择用户'
                  choiceModal = this.$refs.choiceUser
                } else if (type === 1) {
                  // 选择优惠券
                  this.choiceTitle = '选择优惠券'
                  choiceModal = this.$refs.choiceCoupon
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
                // 选择用户
                refName = 'choiceUser'
              } else if (type == 1) {
                // 选择优惠券
                refName = 'choiceCoupon'
              } 
              this.$refs[refName].confirmSelection()
            },
            /**
             * 确认选择父级类目
             */
            confirmChoice(row) {
              let type = this.choiceType
              if (type == 0) {
                // 选择用户
                this.form.userId = row.id
                this.form.userName = row.nickname
                this.cancelModal('choiceUser')
              } else if (type == 1) {
                // 选择优惠券
                this.form.couponId = row.id
                this.form.couponName = row.title
                this.cancelModal('choiceCoupon')
              } 
            },
        }
    }
</script>

<style>
</style>
