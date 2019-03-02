<template>
  <Modal v-model="skuDetailModal" title="商品SKU详情" :mask-closable="true" width="80%"> 
        <Form ref="addForm" :model="form" :label-width="80" :rules="validateRules">
          <Row>
            <i-col :lg="12" :md="12" v-for="item in formElements" :key="item.goodsAttributeAttrCode">
              <FormItem :label="item.goodsAttributeAttrName" :prop="item.goodsAttributeAttrCode">
                <Input v-model="form[item.goodsAttributeAttrCode]" :placeholder="'请输入' + item.goodsAttributeAttrName" style="width: 100%;"/>
              </FormItem>
            </i-col>
          </Row>
        </Form>
    <div slot="footer">
      <Button type="default" size="large" @click="skuDetailModal = false">关闭</Button>
      <Button type="primary" size="large" @click="uploadModal = false">保存</Button>
    </div>
  </Modal>
</template>

<script>
import {getAttrsByCategory, skuAttrVals} from '@/api/goods_attribute'
export default {
  name: 'SkuDetailModal',
  components: {
  },
  data () {
    return {
      skuDetailModal: false,
      categoryId: 0,
      skuId: 0,
      formElements: [],
      form: {},
      validateRules: {}
    }
  },
  methods: {
    // 加载sku的所有属性和值
    loadAllAttrVals() {
      this.loadCategoryAttrs().then(response => {
        if (response.data.code === 1001) {
          this.formElements = response.data.data.rows
          let skuParams = {
            goodsSkuId: this.skuId,
            sortColumn: 'goodsCategoryAttributeAttrOrder',
            sortOrder: 'asc'
          }
          skuAttrVals(skuParams).then(response => {
            if (response.data.code === 1001) {
              this.formElements.forEach((formItem, index) => {
                this.$set(this.form, formItem.goodsAttributeAttrCode, null)
                response.data.data.rows.forEach((attrValue, index) => {
                  if (formItem.goodsAttributeId === attrValue.goodsCategoryAttributeAttrId) {
                    this.$set(this.form, formItem.goodsAttributeAttrCode, attrValue.goodsAttributeValueAttrValue)
                  }
                })
              })
              console.log(this.form)
            } else {
              this.$Message.error(response.data.message)
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          this.$Message.error(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    loadCategoryAttrs() {
      return new Promise((resolve, reject) => {
        let params = {
          goodsCategoryId: this.categoryId,
          sortColumn: 'goodsCategoryAttributeAttrOrder',
          sortOrder: 'asc'
        }
        getAttrsByCategory(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mounted () {
    this.formElements = [{
      title: '名称',
      code: 'title'
    }]
  }
}
</script>

<style lang="less">
</style>
