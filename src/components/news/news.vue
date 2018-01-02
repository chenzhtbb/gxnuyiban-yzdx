<template>
  <transition name="slide">
    <div class="news">
      <iframe></iframe>
      <cube-scroll :data="item">
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
        </div>
      </cube-scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { getNews } from 'api/news'

  export default {
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
    deactivated () {
      this.item = []
    },
    methods: {
//      aDownload (target) {
//        // http://www.gxnu.edu.cn/notice/download/
//        if (this.downloadList[target].search(/\dhttp:/i) < 0) {
//          if (browser.versions.ios) {
//            window.location.href = this.downloadList[target]
//          } else if (browser.versions.android) {
//            downloadFun(this.downloadList[target])
//          }
//        } else {
//          let link = this.downloadList[target].match(/\dhttp:.*$/i)[0]
//          link = link.match(/http:.*$/i)[0]
//          window.location.href = link
//        }
//      },
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
    z-index 500
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
