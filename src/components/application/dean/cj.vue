<template>
  <div class="score">
    <scroll :data="items" class="table-responsive">
      <div>
        <template v-if="items.length>0">
          <div v-for="item in items">
            <div class="title" v-if="item.title">{{item.title}}</div>
            <table class="table" rules="all" v-if="item.body.length">
              <thead>
              <tr>
                <template v-for="head in item.head">
                  <th>{{head}}</th>
                </template>
              </tr>
              </thead>
              <tbody>
              <tr v-for="body in item.body" style="height: 25px;">
                <template v-for="(td, index) in body">
                  <td :class="col(index)">{{td}}</td>
                </template>
              </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template v-else>
          <div class="loading-container" v-if="this.tip === 0">
            <loading></loading>
          </div>
          <div class="title" v-else>暂无成绩</div>
        </template>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll,
      Loading
    },
    data () {
      return {
        items: [],
        tip: 0
      }
    },
    methods: {
      col (index) {
        if (!index) {
          return 'col-xs-6'
        } else {
          return ''
        }
      }
    },
    mounted () {
      this.$http.get('/getScore').then((res) => {
        this.items = res
        if (res.length === 0) {
          this.tip = 1
        }
      })
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  th
    text-align center

  td
    text-align center
    vertical-align middle

  .score
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    /*background-image url('~common/image/1c264fdfff5081e1f279a3fb643b00f3.png')*/
    background-repeat repeat-y
    background-size 100%
    .table-responsive
      height 100%
      .title
        color #3399CC
        padding 8px 0
        text-align center
      .table
        background #FFFFFF
        position relative
        width 100%
        border 1px solid #EEEEEE
        tr
          display: table-row;
          vertical-align: inherit;
          border-color: inherit;
        .warning
          background-color #fcf8e3
        .info
          background-color #d9edf7

  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
