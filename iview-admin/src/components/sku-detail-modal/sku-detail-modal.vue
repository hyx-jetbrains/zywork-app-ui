<template>
  <Modal v-model="modal.skuDetailModal" title="商品SKU详情" :mask-closable="true" width="80%"> 
    <Spin size="large" fix v-if="spinShow"></Spin>
    <Row>
      <i-col :lg="24">
        <div style="margin-bottom: 10px; color: red;">
          当前SKU编号：{{skuId}}
          <span class="zy-all" @click="showAllActivity(-1)">
            显示所有活动
          </span>
          <span style="color: red; margin-left: 20px;">
            注:一个sku只能设置为一种活动商品
          </span>
        </div>
        <div style="margin-bottom: 10px;">
          请选择SKU编号加载SKU详情：
          <RadioGroup v-model="chooseSkuId" type="button" @on-change="changeSkuId">
            <Radio v-for="item in allSkuIds" :key="item" :label="item"></Radio>
          </RadioGroup>
          <span style="margin-left: 20px;">
            <Tag type="border" closable color="default" v-for="item in allSkuIdsTemp" :key="item" :name="item" @on-close="cancelActivity">{{item}}</Tag>
          </span>
          <span class="zy-btn">
            <Tooltip content="把当前的sku设置为代理商品">
              <Button type="info" @click="showGoodsModal(0)">代理</Button>
            </Tooltip>
            <Tooltip content="把当前的sku设置为促销商品">
              <Button type="primary" @click="showGoodsModal(1)">促销</Button>
            </Tooltip>
            <Tooltip content="把当前的sku设置为拼团商品">
              <Button type="success" @click="showGoodsModal(2)">拼团</Button>
            </Tooltip>
            <Tooltip content="把当前的sku设置为秒杀商品">
              <Button type="error" @click="showGoodsModal(3)">秒杀</Button>
            </Tooltip>
          </span>
        </div>
      </i-col>
    </Row>
        <Form ref="skuForm" :model="form" :label-width="80" :rules="validateRules">
          <Row>
            <i-col :lg="12" :md="12" v-for="item in formElements" :key="item.goodsAttributeAttrCode">
              <FormItem v-if="item.goodsAttributeAttrType === 'String' && item.goodsAttributeAttrRequired === 0" :label="item.goodsAttributeAttrName" :prop="item.goodsAttributeId + '_' + item.goodsAttributeAttrCode"
              :rules="[
                  {type: 'string', required: true, message: '此项为必须项', trigger: 'blur'},
                  {type: 'string', min: 1, max: item.goodsAttributeAttrLength, message: '必须1-' + item.goodsAttributeAttrLength + '个字符', trigger: 'blur'}
                ]">
                <Input v-model="form[item.goodsAttributeId + '_' + item.goodsAttributeAttrCode]" :placeholder="'请输入' + item.goodsAttributeAttrName" style="width: 100%;"/>
              </FormItem>
              <FormItem v-else-if="item.goodsAttributeAttrType === 'String'" :label="item.goodsAttributeAttrName" :prop="item.goodsAttributeId + '_' + item.goodsAttributeAttrCode"
              :rules="[
                  {type: 'string', min: 1, max: item.goodsAttributeAttrLength, message: '必须1-' + item.goodsAttributeAttrLength + '个字符', trigger: 'blur'}
                ]">
                <Input v-model="form[item.goodsAttributeId + '_' + item.goodsAttributeAttrCode]" :placeholder="'请输入' + item.goodsAttributeAttrName" style="width: 100%;"/>
              </FormItem>
              <FormItem v-else-if="item.goodsAttributeAttrType === 'Double' || item.goodsAttributeAttrType === 'BigDecimal'" :label="item.goodsAttributeAttrName" :prop="item.goodsAttributeId + '_' + item.goodsAttributeAttrCode"
              :rules="[
                  {type: 'number', required: true, message: '此项为必须项', trigger: 'blur, change'}
                ]">
                <InputNumber v-model="form[item.goodsAttributeId + '_' + item.goodsAttributeAttrCode]" :placeholder="'请输入' + item.goodsAttributeAttrName" style="width: 100%;"/>
              </FormItem>
              <FormItem v-else-if="item.goodsAttributeAttrType === 'Long' || item.goodsAttributeAttrType === 'Integer'" :label="item.goodsAttributeAttrName" :prop="item.goodsAttributeId + '_' + item.goodsAttributeAttrCode"
              :rules="[
                  {type: 'integer', required: true, message: '此项为必须项', trigger: 'blur, change'}
                ]">
                <InputNumber v-model="form[item.goodsAttributeId + '_' + item.goodsAttributeAttrCode]" :placeholder="'请输入' + item.goodsAttributeAttrName" style="width: 100%;"/>
              </FormItem>
            </i-col>
          </Row>
        </Form>
    <div slot="footer">
      <Button type="default" size="large" @click="resetFormCancelModal('skuForm', 'skuDetailModal')">关闭</Button>
      <Button type="primary" size="large" @click="saveSkuDetail">保存</Button>
    </div>
  </Modal>
</template>

<script>
import * as utils from '@/api/utils'
import {getAttrsByCategory, skuAttrVals} from '@/api/goods_attribute'
import {allSkusByGoods, batchSaveGoodsAttrVals, listAllActivityBySku, cancelActivity} from '@/api/goods_sku'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'SkuDetailModal',
  components: {
  },
  data () {
    return {
      modal: {
        skuDetailModal: false
      },
      categoryId: 0,
      skuId: 0,
      goodsId: 0,
      shopId: 0,
      allSkuIds: [],
      allSkuIdsTemp: [],
      chooseSkuId: 0,
      formElements: [],
      form: {},
      validateRules: {},
      spinShow: false

    }
  },
  methods: {
    resetFormCancelModal(formRef, modal) {
      utils.cancelModal(this, modal)
      utils.resetForm(this, formRef)
    },
    loadSkusByGoodsId() {
      // 加载之前先把活动信息清掉
      this.allSkuIdsTemp = []
      let params = {
        goodsId: this.goodsId,
        sortColumn: 'id',
        sortOrder: 'asc'
      }
      allSkusByGoods(params).then(response => {
        if (response.data.code === ResponseStatus.OK) {
          this.allSkuIds.splice(0, this.allSkuIds.length)
          response.data.data.rows.forEach((row, index) => {
            this.allSkuIds.push(row.id)
          })
        } else {
          console.log(error)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 加载sku的所有属性和值
    loadAllAttrVals() {
      this.spinShow = true
      // 获取类目所有属性
      this.loadCategoryAttrs().then(response => {
        if (response.data.code === ResponseStatus.OK) {
          this.formElements = response.data.data.rows
          let skuParams = {
            goodsSkuId: this.chooseSkuId
          }
          // 获取已经设置值的属性
          skuAttrVals(skuParams).then(response => {
            if (response.data.code === ResponseStatus.OK) {
              this.formElements.forEach((formItem, index) => {
                this.$set(this.form, formItem.goodsAttributeId + '_' + formItem.goodsAttributeAttrCode, null)
                response.data.data.rows.forEach((attrValue, index) => {
                  if (formItem.goodsAttributeId === attrValue.goodsCategoryAttributeAttrId) {
                    let theAttributeVal = attrValue.goodsAttributeValueAttrValue
                    if (formItem.goodsAttributeAttrType === 'Integer' || formItem.goodsAttributeAttrType === 'Long') { 
                      theAttributeVal = parseInt(theAttributeVal)
                    } else if (formItem.goodsAttributeAttrType === 'Double' || formItem.goodsAttributeAttrType === 'BigDecimal') {
                      theAttributeVal = parseFloat(theAttributeVal)
                    }
                    this.$set(this.form, formItem.goodsAttributeId + '_' + formItem.goodsAttributeAttrCode, theAttributeVal)
                  }
                })
                this.spinShow = false
              })
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
    },
    changeSkuId(newVal) {
      this.chooseSkuId = newVal
      this.loadAllAttrVals()
    },
    saveSkuDetail() {
      if (this.form.length <= 0) {
        this.$Message.warning('没有需要保存的属性值')
        return
      }
      this.$refs['skuForm'].validate(valid => {
        if (valid) {
          let params = []
          for (let key in this.form) {
            let attrValue = this.form[key]
            if (attrValue !== null) {
              let attrId = key.split('_')[0]
              params.push({
                goodsSkuId: this.skuId,
                attrId: attrId,
                attrValue: this.form[key]
              })
            }
          }
          if (params.length > 0) {
            batchSaveGoodsAttrVals(params).then(response => {
              if (response.data.code === ResponseStatus.OK) {
                this.$Message.success(response.data.message)
                this.resetFormCancelModal('skuForm', 'skuDetailModal')
              } else {
                this.$Message.error(response.data.message)
              }
            }).catch(error => {
              console.log(error)
            })
          } else {
            this.$Message.warning('没有需要保存的属性值')
          }
        }
      })
    },
    /**
     * 设置代理商商品
     */
    showGoodsModal(type) {
      this.showAllActivity(type)
    },
    /**
     * 显示所有活动
     */
    showAllActivity(type) {
      // 标识是否可以设置为活动商品
      let setFlag = true
      // 标识是否有活动商品的提示
      let tipFlag = true
      let skuStr = this.allSkuIds.join()
      let params = {
        shopId: this.shopId,
        goodsId: this.goodsId,
        goodsSkuIds: skuStr
      }
      // 请求后端，获取当前所有sku的活动商品信息
      listAllActivityBySku(params).then(response => {
        if (response.data.code === ResponseStatus.OK) {
          let data = response.data.data
          let allSku = this.allSkuIds
          const lenI = allSku.length
          const lenJ = data.length
          let tempSkuIds = []
          for (var i = 0; i < lenI; i++) {
            for (var j = 0; j < lenJ; j++) {
              if (allSku[i] === data[j].goodsSkuId) {
                if (data[j].agentCount > 0) {
                  // 有代理信息
                  tempSkuIds.push(allSku[i] + '-代理')
                  tipFlag = false
                  continue
                }
                if (data[j].grouponCount > 0) {
                  // 有拼团信息
                  tempSkuIds.push(allSku[i] + '-拼团')
                  tipFlag = false
                  continue
                }
                if (data[j].seckillCount > 0) {
                  // 有秒杀信息
                  tempSkuIds.push(allSku[i] + '-秒杀')
                  tipFlag = false
                  continue
                }
                if (data[j].promotionCount > 0) {
                  // 有促销信息
                  tempSkuIds.push(allSku[i] + '-促销')
                  tipFlag = false
                  continue
                }
               }
            }
          }
          if (type === -1 && tipFlag) {
            this.$Message.warning('没有设置了活动的sku')
          } else {
            this.allSkuIdsTemp = tempSkuIds
          }
          if (type != -1) {
            // -1表示是点了“显示所有活动信息”过来的，其他的则表示点的是按钮设置活动商品过来的
            for (var j = 0; j < lenJ; j++) {
              if (data[j].goodsSkuId === this.chooseSkuId) {
                if (data[j].agentCount > 0) {
                    // 有代理信息
                    setFlag = false
                    this.$Message.warning('该sku已是代理商品')
                    continue
                  }
                  if (data[j].grouponCount > 0) {
                    // 有拼团信息
                    setFlag = false
                    this.$Message.warning('该sku已是拼团商品')
                    continue
                  }
                  if (data[j].seckillCount > 0) {
                    // 有秒杀信息
                    setFlag = false
                    this.$Message.warning('该sku已是秒杀商品')
                    continue
                  }
                  if (data[j].promotionCount > 0) {
                    // 有促销信息
                    setFlag = false
                    this.$Message.warning('该sku已是促销商品')
                    continue
                  }
              }
            }
            if (setFlag) {
              let param = {
                shopId: this.shopId,
                goodsId: this.goodsId,
                goodsSkuId: this.chooseSkuId
              }
              this.$emit('showGoodsModal', type, param)
            }
          }
          
        } else {
          console.log(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    /**
     * 取消活动商品
     */
    cancelActivity(e, name) {
      const nameArr = name.split('-')
      let skuId = nameArr[0]
      let activityType = nameArr[1]
      let url = ''
      if (activityType === '代理') {
        url = '/goods-agent'
      } else if (activityType === '拼团') {
        url = '/goods-groupon'
      } else if (activityType === '秒杀') {
        url = '/goods-seckill'
      } else if (activityType === '促销') {
        url = '/goods-promotion'
      }
      this.$Modal.confirm({
        title: '确认取消'+activityType+'吗？',
        content: '确认取消'+activityType+'商品吗？',
        onOk: () => {
          cancelActivity(url + '/admin/update-active', {
                shopId: this.shopId,
                goodsId: this.goodsId,
                goodsSkuId: skuId,
                isActive: 1
              }).then(response => {
                if (response.data.code === ResponseStatus.OK) {
                  this.$Message.success('已取消'+activityType+'商品')
                  const index = this.allSkuIdsTemp.indexOf(name);
                  this.allSkuIdsTemp.splice(index, 1);
                } else {
                  this.$Message.error(response.data.message)
                }
              }).catch(error => {
                console.log(error)
              })
        },
        onCancel: () => {

        }
      })
    }
  },
  mounted () {}
}
</script>

<style lang="less">
.zy-btn {
  margin-left: 20px;
}
.zy-btn button {
  margin-right: 10px;
}
.zy-all {
  margin-left: 20px;
  color: #2d8cf0;
  cursor: pointer;
}
</style>
