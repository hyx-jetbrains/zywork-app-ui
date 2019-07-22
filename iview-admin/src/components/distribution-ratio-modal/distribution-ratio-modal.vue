<template>
  <Modal v-model="setModal" :title="title" :mask-closable="false" width="560"> 
    <div class="zy-box">
      <div class="zy-box-row">
        <div class="zy-text-bold">角色/等级</div>
        <div class="zy-text-bold" v-for="(item, index) in levelArr" :key="index">{{item}}级</div>
        <p style="clear:both"></p> 
      </div>
      <div class="zy-box-row" v-for="(item, index) in ratioData" :key="index">
        <div class="zy-text-bold">{{rolesArr[index].title}}</div>
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

export default {
  name: 'DistributionRatioModal',
  props: {
  },
  components: {
  },
  data () {
    return {
      setModal: false,
      setLoading: false,
      rolesArr: [],
      levelArr: [],
      ratioData: [],
      title: '',
      goodsId: null,
      goodsSkuId: null,
      
    }
  },
  methods: {
    /**
     * 设置分销比例
     */
    setDistributionRatio() {
      const listData = this.setData()
      this.$emit('setDistributionRatio', listData)
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
          const val = this.ratioData[i][j]
          if (!val) {
            this.$Message.error('请确保所有数据的完整性')
            return;
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
      return listData
    },
  },
  mounted () {
  }
}
</script>

<style lang="less">
.zy-text-bold {
  font-weight: bold;
}
.zy-box {
  border: 1px solid #CCC;
  text-align: center;
  width: 100%;
}

.zy-box-row {
  border-bottom: 1px solid #CCC;
  padding: 10px;
}
.zy-box-row:last-child {
  border-bottom: none;
}
.zy-box-row div {
  border-right: 1px solid #CCC;
  float: left;
  width: 150px;
  padding: 0px 20px 0px 5px;
}
.zy-box-row div:last-child {
  border-right: none;
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
