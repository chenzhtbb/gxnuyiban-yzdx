<template>
  <div class="ssyd" style="text-align: center;">
    <scroll style="height: 100%;" :data="[]">
      <div class="box box-primary">
        <li class="list-group-item">
          <b>校区：&nbsp;&nbsp;&nbsp;&nbsp;{{bind.campus}}</b>
        </li>
        <li class="list-group-item">
          <b>宿舍：&nbsp;&nbsp;&nbsp;&nbsp;{{bind.room}}</b>
        </li>
        <li class="list-group-item">
          <b>剩余电量：&nbsp;&nbsp;&nbsp;&nbsp;{{count}} kW·h</b>
        </li>
        <router-link tag="button" to="/app/me/dorm" class="btn btn-info btn-block">快速绑定宿舍</router-link>
        <p>宿舍应形如 栋-层-房间号 的格式（例如:16-5-10）</p>
        <p>若长时间不显示，请重新进入 宿舍用电 服务</p>
        <div>
          <div>
            <ve-gauge :data="gaugeData"></ve-gauge>
            <div class="title" style="bottom: 70px;">预测剩余电量还可使用{{gaugeData.rows[0].a}}天</div>
          </div>
          <div>
            <ve-histogram :data="chartData" :extend="extend" :settings="chartSettings"
                          :judge-width="true"></ve-histogram>
            <div class="title" style="bottom: 50px;">近七日电量使用情况，每日0点更新</div>
          </div>
          <div class="title" style="bottom: 30px;">
            <b>近期购电信息</b>
            <table class="table">
              <thead>
              <tr style="height: 25px;">
                <td>购电时间</td>
                <td>购电金额</td>
                <td>购电度数</td>
                <td>购电类型</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="body in buys" style="height: 25px;">
                <td>{{body.time}}</td>
                <td>{{body.cash}}</td>
                <td>{{body.count}}</td>
                <td>{{body.type}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Scroll
    },
    data() {
      return {
        buys: [],
        bind: {},
        count: -1,
        gaugeData: {
          columns: ['type', 'a', 'b', 'value'],
          rows: [
            {type: '剩余电量预测天数', value: 80, a: 0, b: 2}
          ]
        },
        chartData: {
          columns: ['日期', '用电量'],
          rows: []
        },
        chartSettings: {
          area: false
        },
        extend: {
          series: {
            label: {
              normal: {
                show: true
              }
            }
          }
        }
      }
    },
    activated() {
      setTimeout(() => {
        this.getDorm()
        if (this.bind.dorm === 1) {
          this.$http.get('getEle', {
            campus: this.bind.campus,
            room: this.bind.room
          }).then((res) => {
            this.chartData.rows = []
            let data = res.data
            for (let i = data.length - 1; i >= 0; i--) {
              this.chartData.rows.push({'日期': data[i].date, '用电量': data[i].use})
            }
            this.gaugeData.rows[0].a = res.day
            this.buys = res.buy
            this.count = res.count
          }).catch(() => {
            this.$createDialog({
              type: 'alert',
              title: '提示',
              content: '电费查询服务暂时关闭',
              icon: 'cubeic-alert'
            }).show()
          })
        }
      }, 20)
    },
    methods: {
      getDorm() {
        this.bind = this.binddorm
      }
    },
    computed: {
      ...mapGetters([
        'binddorm'
      ])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  th
    text-align center

  td
    text-align center
    vertical-align middle

  .table
    background #FFFFFF
    position relative
    width 100%
    border 1px solid #EEEEEE
    tr
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

  .ssyd
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE

  .list-group-item
    border 0
    height 40px
    b
      position absolute
      left 20px

  .title
    position relative
</style>
