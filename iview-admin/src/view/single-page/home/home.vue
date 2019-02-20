<template>
  <div>
    <Row :gutter="20">
      <i-col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(infor, i) in inforCardData"
        :key="`infor-${i}`"
        style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <DauEcharts/>
  </div>
</template>

<script>
import { regCount, regAllCountByDate, allDau} from '@/api/home'
import {getDate} from '@/api/utils'
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import DauEcharts from '_c/dau-echarts'

export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    DauEcharts
  },
  data() {
    return {
      inforCardData: [
        { title: '总用户数', icon: 'ios-people', count: 0, color: '#2d8cf0' },
        {
          title: '昨日新增',
          icon: 'ios-person-add-outline',
          count: 0,
          color: '#ff9900'
        },
        {
          title: '今日新增',
          icon: 'ios-person-add',
          count: 0,
          color: '#ed3f14'
        },
        {
          title: '一周新增',
          icon: 'md-person-add',
          count: 0,
          color: '#E46CBB'
        },
        { title: '一周活跃', icon: 'md-map', count: 0, color: '#9A66E4' }
      ]
    }
  },
  mounted() {
    this.initInforCardData()
  },
  methods: {
    // 初始化跳动的数字数据，从后台取
    initInforCardData() {
      // 取注册数据
      regCount()
        .then(res => {
          const data = res.data
          if (data.code === 1001) {
            this.inforCardData[0].count = data.data[0]
            this.inforCardData[1].count = data.data[1][0].totalCount
            this.inforCardData[2].count = data.data[1][1].totalCount
          } else {
            this.$Message.error(data.message)
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
      // 本周开始时间
      const beginDate = getDate(-6)
      // 本周结束时间
      const endDate = getDate(0)
      const weekParams = {
        beginDateStr: beginDate,
        endDateStr: endDate
      }
      // 取本周总新增用户数
      regAllCountByDate(weekParams)
        .then(res => {
          const data = res.data
          if (data.code === 1001) {
            this.inforCardData[3].count = data.data === null ? 0 : data.data
          } else {
            this.$Message.error(data.message)
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
      // 取本周总活跃用户数
      allDau(weekParams)
        .then(res => {
          const data = res.data
          if (data.code === 1001) {
            this.inforCardData[4].count = data.data === null ? 0 : data.data
          } else {
            this.$Message.error(data.message)
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
    }
  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
