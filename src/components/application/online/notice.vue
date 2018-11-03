<template>
  <transition name="slide">
    <div class="notice">
      <iframe class="hide"></iframe>
      <div class="link" v-if="item.link">
        <goto :link="item.link" :tip="title"></goto>
      </div>
      <scroll style="height: 100%;" :data="[]">
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
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Goto from 'base/goto/goto'

  export default {
    filters: {
      formatTime (val) {
        val = val.replace(/T[^]*Z/g, '')
        return val
      }
    },
    components: {
      Scroll,
      Goto
    },
    data () {
      return {
        item: [],
        title: ''
      }
    },
    activated () {
      setTimeout(() => {
        const key = this.$route.params.key
        this.getXgbNotice(key)
      }, 20)
    },
    deactivated () {
      this.item = []
    },
    methods: {
      getXgbNotice (key) {
        this.$http.get('/getXgbNotice', {
          key: key
        }).then((res) => {
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

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
