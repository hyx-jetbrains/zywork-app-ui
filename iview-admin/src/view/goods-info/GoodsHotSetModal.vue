<template>
  <div>
    <Modal
      v-model="modal.hot"
      title="设为热门"
      :mask-closable="false"
      @on-visible-change="changeModalVisibleResetForm('addForm', $event)"
      width="760"
    >
      <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
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
        <Button type="text" size="large" @click="resetFormCancelModal('addForm', 'hot')">取消</Button>
        <Button type="primary" size="large" @click="setHot" :loading="loading.add">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'GoodsHotSetModal',
  components: {
  },
  data() {
    return {
      modal: {
        hot: false
      },
      loading: {
        add: false
      },
      form: {
        id: null,
        shopId: null,
        goodsId: null,
        beginTime: null,
        endTime: null
      },
      validateRules: {
        beginTime: [
          {
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          }
        ],
        endTime: [
          {
            required: true,
            message: '此项为必须项',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  mounted() {
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
    setHot() {
      if (this.form.id) {
        this.updateHot()
      } else {
        this.saveHot()
      }
    },
    saveHot() {
       this.$refs.addForm.validate(valid => {
          if (valid) {
            utils.doPostJson('/goods-hot/admin/save', {
              shopId: this.form.shopId,
              goodsId: this.form.goodsId,
              beginTime: this.form.beginTime,
              endTime: this.form.endTime
            }, {}).then(response => {
              if (response.data.code === ResponseStatus.OK) {
                this.$Message.success('已设为热门商品')
                this.modal.hot = false
                this.$emit('searchTable')
              } else {
                this.$Message.error(response.data.message)
              }
            }).catch(error => {
              console.log(error)
            })
          }
       })
    },
    updateHot() {
      this.$refs.addForm.validate(valid => {
          if (valid) {
            utils.doPostJson('/goods-hot/admin/update', {
              id: this.form.id,
              shopId: this.form.shopId,
              goodsId: this.form.goodsId,
              beginTime: this.form.beginTime,
              endTime: this.form.endTime,
              isActive: 0
            }, {}).then(response => {
              if (response.data.code === ResponseStatus.OK) {
                this.$Message.success('已修改热门商品')
                this.modal.hot = false
                this.$emit('searchTable')
              } else {
                this.$Message.error(response.data.message)
              }
            }).catch(error => {
              console.log(error)
            })
          }
       })
    },
    loadHotData() {
      utils.doPostJson('/goods-hot/admin/all-cond', {
        shpoId: this.form.shopId,
        goodsId: this.form.goodsId
      }, {}).then(response => {
        if (response.data.code === ResponseStatus.OK) {
          if (response.data.data.rows.length > 0) {
            this.form = response.data.data.rows[0]
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
</style>
