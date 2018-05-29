<template>
  <transition name="slide">
    <div class="news">
      <scroll style="height: 100%;" :data="[]">
        <div>
          <div class="news-header">
            <div class="row title">
              <div class="col-xs-12 text-center">
                {{item.title}}
              </div>
            </div>
            <div class="row p-text">
              <div class="col-xs-6 text-left">{{item.author}}</div>
              <div class="col-xs-6 text-right">{{item.time}}</div>
            </div>
          </div>
          <div class="news-body">
            <div v-html="item.content"></div>
          </div>
          <div class="news-footer" v-if="item.download != []">
            <template v-for="file in item.downloads">
              <ul ref="download">
                <li style="list-style-type: square">
                  <a @click="download(file)">{{file.file_name}}</a>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </scroll>
      <iframe></iframe>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import { downloadFun, browser } from 'common/js/ybh5.js'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        item: [],
        content: '',
        downloadList: []
      }
    },
    activated () {
      setTimeout(() => {
        const id = this.$route.params.id
        this.getNews(id)
      }, 20)
    },
    deactivated () {
      this.item = []
    },
    methods: {
      getNews (id) {
        this.$http.get('/getNews', {
          id: id
        }).then((res) => {
          this.item = res
        })
      },
      download (file) {
        if (browser.versions.ios) {
          window.location.href = file.link
        } else if (browser.versions.android) {
          downloadFun(file.link)
        }
        console.log(event)
//        return false
      },
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
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

  iframe
    z-index -1
    width 0
    height 0
    border 0
    display none

  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    .news-header
      padding 8px
      border-bottom 1px solid #EEE
      .title
        word-wrap break-word
        font-size 18px
      .p-text
        font-size 16px
    .news-body
      padding 8px
      font-size 16px
    .news-footer
      padding 8px
      border-top 1px solid #EEE
      ul
        margin-left 18px
        li
          font-size 20px
          a
            font-size 16px
</style>
