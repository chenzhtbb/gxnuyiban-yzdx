<template>
  <toggle>
    <div class="gw">
      <iframe></iframe>
      <!--<scroll style="height: 100%; width: 100%;" :data="downloadList" :isToTop="isToTop" :freeScroll="free">-->
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
        <scroll :style="scrollStyle" :data="downloadList" :isToTop="isToTop" :freeScroll="free">
          <div class="content">
            <div class="text" v-html="item.content"></div>
            <!--<div v-for="image in images">-->
            <!--<img v-img="{group: 'imggroup'}"-->
            <!--:src="image"-->
            <!--width="100%"-->
            <!--height="61.8%">-->
            <!--</div>-->
          </div>
          <div style="position: relative; height: 50px;"></div>
        </scroll>
      </div>
      <!--</scroll>-->
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getNews } from 'api/news'

  export default {
    components: {
      Toggle,
      Scroll,
      Loading
    },
    data () {
      return {
        item: [],
        free: true,
        scrollStyle: '',
        images: [
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/1.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/2.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/3.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/4.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/5.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/6.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/7.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/8.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/9.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/10.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/11.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/12.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/13.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/14.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151152107240030684.files/15.gif'
        ],
        isToTop: true,
        downloadList: []
      }
    },
    activated () {
      this.scrollStyle = `width: ${window.innerWidth}px; height: ${window.innerHeight}px; z-index: -1;`
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
      },
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

  .content
    position relative
    padding 8px 0
    width 1123px;

  .gw
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
    .attachment
      ul
        padding 0
        li
          font-size 16px
          padding 6px 0
          color royalblue
          no-wrap()
</style>
