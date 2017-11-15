<template>
  <transition name="slide">
    <div class="news">
      <iframe></iframe>
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
              <span>{{item.time}}</span>
            </div>
          </div>
          <div class="content">
            <div class="text" v-html="item.content"></div>
          </div>
          <!--<div class="attachment">-->
          <!--<div style="border-bottom: 1px solid #EEEEEE;">-->
          <!--<p style="margin: 10px 0 5px 0;">附件(点击下载)</p>-->
          <!--</div>-->
          <!--<ul>-->
          <!--<li>附件1：啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</li>-->
          <!--<li>附件2：啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</li>-->
          <!--<li>附件3：啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</li>-->
          <!--</ul>-->
          <!--<div style="position: relative; height: 20px;"></div>-->
          <!--</div>-->
          <div style="position: relative; height: 50px;"></div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getNews } from 'api/news'

  export default {
    components: {
      Scroll,
      Loading
    },
    data () {
      return {
        item: []
      }
    },
    activated () {
      setTimeout(() => {
        if (this.item.length) {
          return
        }
        this.getNewsPage()
      }, 20)
    },
    methods: {
      getNewsPage () {
        let page = this.$route.query.page
        getNews(page).then((res) => {
          this.item = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/mixin"

  iframe
    z-index -1
    width 0
    height 0
    border 0
    display none

  img
    width 100% !important

  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 200
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
