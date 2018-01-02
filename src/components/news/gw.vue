<template>
  <transition name="slide">
    <div class="news">
      <iframe></iframe>
      <cube-scroll :data="item">
        <img class="" v-for="image in images" :src="image">
      </cube-scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { getNews } from 'api/news'

  export default {
    data () {
      return {
        item: [],
        images: [
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151469852241388786.files/1.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151469852241388786.files/2.gif',
          'http://202.193.160.77/zfoa/uploadFile/schooldoc/151469852241388786.files/3.gif'
        ]
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
      this.item = {}
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

  .free
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0

  iframe
    z-index -1
    width 0
    height 0
    border 0
    display none

  img
    position relative
    width 130%
    left -60px
    padding 0

  .content
    position relative
    padding 8px 0
    width 1123px;

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
