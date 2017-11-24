<template>
  <transition name="slide">
    <div class="news">
      <iframe></iframe>
      <scroll style="height: 100%;" :data="item" :isToTop="isToTop">
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
  import { downloadFun, browser } from 'common/js/ybh5.js'

  export default {
    components: {
      Scroll,
      Loading
    },
    data () {
      return {
        item: [],
        isToTop: true,
        downloadList: []
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
      this.item.content = ''
    },
    methods: {
      aDownload (target) {
        // http://www.gxnu.edu.cn/notice/download/
        if (this.downloadList[target].search(/\dhttp:/i) < 0) {
          if (browser.versions.ios) {
            window.location.href = this.downloadList[target]
          } else if (browser.versions.android) {
            downloadFun(this.downloadList[target])
          }
        } else {
          let link = this.downloadList[target].match(/\dhttp:.*$/i)[0]
          link = link.match(/http:.*$/i)[0]
          window.location.href = link
        }
      },
      getNewsPage () {
        let page = this.$route.query.page
        getNews(page).then((res) => {
          this.item = res
          setTimeout(() => {
            let alist = document.getElementsByTagName('a')
            for (let i = 0; i < alist.length; i++) {
              this.downloadList.push(alist[i].href)
              alist[i].href = 'javascript:;'
              alist[i].target = i
              console.log(alist[i])
              alist[i].onclick = (e) => {
                this.aDownload(e.target.target) // 下载附件
              }
            }
          }, 400)
          this.item.content += `<style scoped lang="stylus" ref="stylesheet/stylus">
                                  p{
                                    font-size: 20px ;
                                    line-height: 30px ;
                                  }
                                  span{
                                    font-size: 20px ;
                                    line-height: 30px ;
                                  }
                                  img{
                                    width: ${window.innerWidth}px !important;
                                    height: ${window.innerWidth * 0.618}px !important;
                                  }
                                </style>`
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
