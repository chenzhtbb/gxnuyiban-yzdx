<template>
  <transition name="slide">
    <div class="news-tab">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="news-tab-bar">
        <div class="operators">
          <router-link to="/app/newstab/gwgg" tag="div" class="icon i-left" replace>
            <p class="iconfont icon-gongwen"></p>
            <p class="text">公文公告</p>
          </router-link>
          <router-link to="/app/newstab/hyap" tag="div" class="icon i-left" replace>
            <p class="iconfont icon-iconhuiyianpai01"></p>
            <p class="text">会议安排</p>
          </router-link>
          <router-link to="/app/newstab/jwtz" tag="div" class="icon i-center" replace>
            <p class="iconfont icon-jiaowuguanli"></p>
            <p class="text">教务通知</p>
          </router-link>
          <router-link to="/app/newstab/xyxw" tag="div" class="icon i-right" replace>
            <p class="iconfont icon-xiaoyuanxinwen"></p>
            <p class="text">校园新闻</p>
          </router-link>
          <router-link to="/app/newstab/jzbg" tag="div" class="icon i-right" replace>
            <p class="iconfont icon-jiangzuo"></p>
            <p class="text">讲座报告</p>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    activated () {
      setTimeout(() => {
        this.refreshRouter()
      }, 20)
    },
    methods: {
      refreshRouter () {
        this.$router.replace({
          path: this.$route.path,
          query: {refresh: 'refresh'}
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news-tab
    background #EEEEEE
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    .news-tab-bar
      .operators
        position fixed
        width 100%
        bottom 0
        height 48px
        display flex
        align-items center
        background #EEEEEE
        .icon
          flex 1
          .text
            font-size 14px !important
          &.router-link-active
            color #0099FF
            border-bottom 1px solid #0099FF
          p
            text-align center
            font-size 14px
            margin 6px 0
          .iconfont
            font-size 16px
        .i-left
          text-align right

        .i-center
          padding auto auto
          text-align center
        .i-right
          text-align left

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
