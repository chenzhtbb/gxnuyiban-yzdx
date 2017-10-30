<template>
  <transition name="slide">
    <div class="score">
      <scroll :data="scoreList" class="table-responsive">
        <div>
          <div v-for="scores in scoreList">
            <div class="title">{{scores.ndxq}}学期成绩单</div>
            <table class="table" rules="all">
              <thead>
              <tr>
                <th>科目</th>
                <th>成绩</th>
                <th>绩点</th>
                <th>学分</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in scores.data" style="height: 25px;">
                <td style="width: 60%;">{{item.kcmc}}</td>
                <td>{{item.kcfs}}</td>
                <td>{{item.kcxf}}</td>
                <td>{{item.kcxf}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div style="position: relative; height: 40px;"></div>
        </div>
        <div class="loading-container" v-show="!scoreList.length">
          <loading></loading>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import { getScore } from 'api/dean'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll,
      Loading
    },
    data () {
      return {
        scoreList: []
      }
    },
    created () {
      getScore().then((res) => {
        this.scoreList = res.score
      })
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .score
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
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
          td
            text-align center
        .warning
          background-color #fcf8e3
        .info
          background-color #d9edf7

  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
