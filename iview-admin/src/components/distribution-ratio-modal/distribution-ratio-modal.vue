<template>
  <Modal v-model="setModal" :title="title" :mask-closable="false" width="860">
    <div style="color: #ff0000; margin-bottom: 10px;">注意：直接输入整数，如5%，输入5即可。一级分销商返佣比例<span style="font-weight: bold;"> 小于 </span>二级分销商返佣比例</div>
    <div class="zy-box">
      <Spin size="large" fix v-if="spinShow"></Spin>
      <div class="zy-box-row">
        <div class="zy-text-bold" style="width: 400px;">角色/等级</div>
        <div class="zy-text-bold" v-for="(item, index) in levelArr" :key="index">{{item}}级</div>
        <p style="clear:both"></p>
      </div>
      <div class="zy-box-row" v-for="(item, index) in ratioData" :key="index">
        <div class="zy-text-bold" style="width: 400px;">
          <p>
            {{rolesArr[index].title}} - {{rolesArr[index].description}}
          </p>
        </div>
        <div v-for="(tempItem, index_1) in levelArr" :key="index_1">
          <Input class="zy-input" placeholder="输入分销比例" v-model="ratioData[index][index_1]" />
        </div>
        <p style="clear:both"></p>
      </div>
    </div>
    <div slot="footer">
      <Button type="default" size="large" @click="setModal = false">关闭</Button>
      <Button type="primary" size="large" @click="setDistributionRatio" :loading="setLoading">分配</Button>
    </div>
  </Modal>
</template>

<script>
import * as utils from '@/api/utils-v2'
import * as ResponseStatus from '@/api/response-status'
export default {
  name: 'DistributionRatioModal',
  props: {},
  components: {},
  data() {
    return {
      urls: {
        batchSaveUrl: '/goods-commission/admin/remove-and-batch-save/',
        listCommissionUrl: '/goods-commission/admin/all-cond',
        listRoleUrl: '/role/admin/list-distribution-roles',
        distributionLevelUrl: '/distribution/admin/distribution-level'
      },
      spinShow: false,
      setModal: false,
      setLoading: false,
      rolesArr: [],
      levelArr: [],
      ratioData: [],
      title: '',
      goodsId: null,
      goodsSkuId: null,
      type: null,
      id: null,
      validFlag: true
    }
  },
  methods: {
    /**
     * 设置分销比例
     */
    setDistributionRatio() {
      const listData = this.setData()
      if (this.validFlag) {
        this.setLoading = true
        utils
          .doPostJson(
            this.urls.batchSaveUrl + this.type + '/' + this.id,
            listData,
            {}
          )
          .then(res => {
            this.setLoading = false
            if (ResponseStatus.OK === res.data.code) {
              this.setModal = false
              this.$Message.success('分配成功')
            } else {
              this.$Message.error(res.data.message)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    /**
     * 组装数据
     */
    setData() {
      var listData = []
      const ratioDataLen = this.ratioData.length
      const levelLen = this.levelArr.length
      for (var i = 0; i < ratioDataLen; i++) {
        const roleId = this.rolesArr[i].id
        for (var j = 0; j < levelLen; j++) {
          const val = parseInt(this.ratioData[i][j])
          if (!val) {
            this.validFlag = false
            this.$Message.error('请确保所有数据的完整性')
            return
          }
          if (val < 0) {
            this.validFlag = false
            this.$Message.error('比例不能小于0')
            return
          }
          if (val > 100) {
            this.validFlag = false
            this.$Message.error('比例不能大于100')
            return
          }
          listData.push({
            goodsId: this.goodsId,
            goodsSkuId: this.goodsSkuId,
            roleId: roleId,
            distributionLevel: this.levelArr[j],
            commissionPercent: val
          })
        }
      }
      this.validFlag = true
      return listData
    },
    /**
     * 请求后台接口，获取数据
     */
    loadData(param, type, id) {
      this.spinShow = true
      if (param.goodsId) {
        this.goodsId = param.goodsId
      }
      if (param.goodsSkuId) {
        this.goodsSkuId = param.goodsSkuId
      }
      this.type = type
      this.id = id
      this.setModal = true
      // 先请求分销比例表
      utils
        .doPostJson(this.urls.listCommissionUrl, param, {})
        .then(res => {
          if (ResponseStatus.OK === res.data.code) {
            // 成功获取分销比例列表，继续获取角色
            let commissionList = res.data.data.rows
            utils
              .doGet(this.urls.listRoleUrl, {})
              .then(res1 => {
                if (ResponseStatus.OK === res1.data.code) {
                  // 成功获取角色列表，继续获取分销等级
                  let roleList = res1.data.data.rows
                  utils
                    .doGet(this.urls.distributionLevelUrl, {})
                    .then(res2 => {
                      if (ResponseStatus.OK === res2.data.code) {
                        // 成功获取分销等级，开始处理数据
                        let level = res2.data.data - 1
                        let levelArr = []
                        for (var i = 0; i < level; i++) {
                          levelArr.push(1 + i)
                        }
                        let rolesArr = []
                        let data = []
                        const commissionLen = commissionList.length
                        const roleLen = roleList.length
                        for (var i = 0; i < roleLen; i++) {
                          let roleItem = roleList[i]
                          let itemData = []
                          for (var j = 0; j < commissionLen; j++) {
                            let commissionItem = commissionList[j]
                            if (roleItem.id === commissionItem.roleId) {
                              itemData.push(commissionItem.commissionPercent)
                            }
                          }
                          rolesArr.push(roleItem)
                          data.push(itemData)
                        }
                        this.rolesArr = rolesArr
                        this.levelArr = levelArr
                        this.ratioData = data
                        this.spinShow = false
                      } else {
                        this.$Message.error(res2.data.message)
                      }
                    })
                    .catch(err2 => {
                      console.log(err2)
                    })
                } else {
                  this.$Message.error(res1.data.message)
                }
              })
              .catch(err1 => {
                console.log(err1)
              })
          } else {
            this.$Message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted() {}
}
</script>

<style lang="less">
.zy-text-bold {
  font-weight: bold;
}
.zy-box {
  border: 1px solid #ccc;
  text-align: center;
  width: 100%;
  position: relative;
}

.zy-box-row {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.zy-box-row:last-child {
  border-bottom: none;
}
.zy-box-row div {
  border-right: 1px solid #ccc;
  float: left;
  width: 170px;
  padding: 0px 20px 0px 5px;
}
.zy-box-row div:last-child {
  border-right: 0;
}

.zy-input input {
  text-align: center;
  height: 20px;
  outline: 0;
  border: 0;
}
.zy-input input:focus {
  outline: 0;
  border: 0;
}
</style>
