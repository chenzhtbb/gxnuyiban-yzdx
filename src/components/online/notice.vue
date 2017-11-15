<template>
  <toggle>
    <div class="notice">
      <iframe class="hide"></iframe>
      <div class="link" v-if="item.link">
        <iframe :src="item.link"></iframe>
      </div>
      <scroll style="height: 100%;" :data="item">
        <div style="margin: 8px;">
          <div class="top">
            <div class="title">
              <h3>{{item.title}}</h3>
            </div>
            <div class="publish">
              <span>{{item.author}}</span>
            </div>
            <div class="time">
              <span>{{item.time | formatTime}}</span>
            </div>
          </div>
          <div class="content" v-if="!item.link">
            <div class="text" v-html="item.content"></div>
          </div>
          <div v-else>
            <loading :title="title"></loading>
          </div>
        </div>
      </scroll>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getXgbNotice } from 'api/xgb'

  export default {
    filters: {
      formatTime (val) {
        val = val.replace(/T[^]*Z/g, '')
        return val
      }
    },
    components: {
      Toggle,
      Scroll,
      Loading
    },
    data () {
      return {
        item: [],
        title: ''
      }
    },
    activated () {
      this.item = []
      setTimeout(() => {
        this.key = this.$route.query.page
        this.getXgbNotice()
      }, 20)
    },
    deactivated () {
      this.item = []
    },
    methods: {
      getXgbNotice () {
        getXgbNotice(this.key).then((res) => {
          this.item = res
          this.title = `小易正在带路前往${res.title}页面`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .hide
    z-index -1
    width 0
    height 0
    border 0
    display none

  img
    width 100% !important

  iframe
    border 0
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%

  .link
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    z-index 998

  .notice
    background #FFFFFF
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 900
    .top
      position relative
      top 0
      left 0
      right 0
      padding-bottom 8px
      border-bottom 1px solid #EEEEEE
      .title
        h3
          text-align center
      .publish
        float left
      .time
        text-align right
    .content
      padding 8px 0
    .attachment
      ul
        padding 0
        li
          font-size 16px
          padding 6px 0
          color royalblue
          no-wrap()
</style>
