<template>
  <div>
    <Row :gutter="20">
      <i-col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(infor, i) in inforCardData"
        :key="`infor-${i}`"
        style="height: 120px;padding-bottom: 10px;"
      >
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :xs="24" :md="24" :lg="24" style="margin-bottom: 20px;">
        <Card shadow>
          <DatePicker @on-change="setDauSearchDate" type="daterange" split-panels placeholder="选择查询周期" style="width: 200px" />
          <Divider />
          <home-echarts ref="dauEcharts" style="height: 300px;" :xAxisData="dauXAxisData" :seriesData="dauSeriesData" :text="dauTitle" :titleName="dauTitleName"/>
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <DatePicker @on-change="setRegCountSearchDate" type="daterange" split-panels placeholder="选择查询周期" style="width: 200px" />
        <Divider />
        <home-echarts style="height: 310px;" ref="regCountCharts" :xAxisData="regCountXAxisData" :seriesData="regCountSeriesData" :text="regCountTitle" :titleName="regCountTitleName" />
      </Card>
    </Row>
  </div>
</template>

<script>
import { regCount, regAllCountByDate, allDau, dauByDate, regCountByDate } from '@/api/home'
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import homeEcharts from './HomeEcharts.vue'

export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    homeEcharts
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
      ],
      dauTitleName: '',
      dauTitle: '用户活跃量统计',
      dauXAxisData: '活跃用户',
      dauSeriesData: '',
      dauBeginDate: '',
      dauEndDate: '',
      regCountTitle: '新增用户',
      regCountTitleName: '新增用户量统计',
      regCountXAxisData: '',
      regCountSeriesData: '',
      regCountBeginDate: '',
      regCountEndDate: ''
      
    }
  },
  mounted() {
    this.initDauData()
    this.initRegCountData()
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
      const weekBeginTime = this.getWeekDate(0)
      // 本周结束时间
      const weekEndTime = this.getWeekDate(-6)
      const weekParams = {
        beginDateStr: weekBeginTime,
        endDateStr: weekEndTime
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
    },
    initDauData() {
      // 初始化活跃用户数据
      if (this.dauBeginDate === '') {
        this.dauBeginDate = this.getDate(-6)
      }
      if (this.dauEndDate === '') {
        this.dauEndDate = this.getDate(0)
      }
      const params = {
        beginDateStr: this.dauBeginDate,
        endDateStr: this.dauEndDate
      }
      dauByDate(params)
        .then(res => {
          const data = res.data
          if (data.code === 1001) {
            this.dauTitle = data.message
            this.dauXAxisData = data.data.xAxisData
            this.dauSeriesData = data.data.seriesData
            this.$refs.dauEcharts.initData()
          } else {
            this.$Message.error(data.message)
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
    },
    initRegCountData() {
      // 初始化注册统计数据
      if (this.regCountBeginDate === '') {
        this.regCountBeginDate = this.getDate(-6)
      }
      if (this.regCountEndDate === '') {
        this.regCountEndDate = this.getDate(0)
      }
      const params = {
        beginDateStr: this.regCountBeginDate,
        endDateStr: this.regCountEndDate
      }
      regCountByDate(params)
        .then(res => {
          const data = res.data
          if (data.code === 1001) {
            this.regCountTitle = data.message
            this.regCountXAxisData = data.data.xAxisData
            this.regCountSeriesData = data.data.seriesData
            this.$refs.regCountCharts.initData()
          } else {
            this.$Message.error(data.message)
          }
        })
        .catch(err => {
          this.$Message.error(err)
        })
    },
    setDauSearchDate(time) {
      const date = time.toString().split(",")
      this.dauBeginDate = date[0]
      this.dauEndDate = date[1]
      this.initDauData()
    },
    setRegCountSearchDate(time) {
      const date = time.toString().split(",")
      this.regCountBeginDate = date[0]
      this.regCountEndDate = date[1]
      this.initRegCountData()
    },
    /**
     * 取上周和本周的开始和结束时间
     * 上周的开始时间：getWeekDate(7)
     * 上周的结束时间：getWeekDate(1)
     * 本周的开始时间：getWeekDate(0)
     * 本周的结束时间：getWeekDate(-6)
     */
    getWeekDate(n) {
      var now = new Date()
      var year = now.getFullYear()
      //因为月份是从0开始的,所以获取这个月的月份数要加1才行
      var month = now.getMonth() + 1
      var date = now.getDate()
      var day = now.getDay()
      //判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
      if (day !== 0) {
        n = n + (day - 1)
      } else {
        n = n + day
      }
      if (day) {
        //这个判断是为了解决跨年的问题
        if (month > 1) {
          month = month
        }
        //这个判断是为了解决跨年的问题,月份是从0开始的
        else {
          year = year - 1
          month = 12
        }
      }
      now.setDate(now.getDate() - n)
      year = now.getFullYear()
      month = now.getMonth() + 1
      date = now.getDate()
      var s =
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date)
      return s
    },
    /**
     * 取指定天数的时间
     * getDate(7)：7天后的时间
     * getDate(-7)：7天前的时间
     */
    getDate(aa) {
      var date1 = new Date()
      var time1 =
        date1.getFullYear() +
        '-' +
        (date1.getMonth() + 1) +
        '-' +
        date1.getDate()
      var date2 = new Date(date1)
      date2.setDate(date1.getDate() + aa)
      var time2 =
        date2.getFullYear() +
        '-' +
        ((date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)) +
        '-' +
        (date2.getDate() < 10 ? '0' + date2.getDate() : date2.getDate())
      return time2
    }
  }
}
</script>

<style lang="less">
.count-style {
  font-size: 50px;
}
</style>
