<template>
  <div class="office">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="news-tab">
      <div class="operators">
        <router-link to="gg" tag="div" class="icon" replace>
          <p class="iconfont icon-gongwen"></p>
          <p class="text" v-text=" uinfo.yb_identity !== '学生' ? '学校公告': '校园公告'"></p>
        </router-link>
        <router-link to="gw" tag="div" class="icon" replace v-if="uinfo.yb_identity !== '学生'">
          <p class="iconfont icon-gongwenchaxun"></p>
          <p class="text">学校公文</p>
        </router-link>
        <router-link to="hyap" tag="div" class="icon" replace>
          <p class="iconfont icon-iconhuiyianpai01"></p>
          <p class="text">会议安排</p>
        </router-link>
        <router-link to="jwtz" tag="div" class="icon" replace>
          <p class="iconfont icon-jiaowuguanli"></p>
          <p class="text">教务通知</p>
        </router-link>
        <router-link to="xyxw" tag="div" class="icon" replace>
          <p class="iconfont icon-xiaoyuanxinwen"></p>
          <p class="text">校园新闻</p>
        </router-link>
        <router-link to="jzbg" tag="div" class="icon" replace>
          <p class="iconfont icon-jiangzuo"></p>
          <p class="text">讲座报告</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    mounted () {
      setTimeout(() => {
        // 请求新闻样式并挂载
//        this.refreshRouter()
//        yb_identity
      }, 20)
    },
    activated () {
      setTimeout(() => {
        // 类似路由守卫，刷新路由
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
  .office
    background #FFFFFF
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    .news-tab
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
          /*border-bottom 1px solid #0099FF*/
          p
            text-align center
            font-size 14px
            margin 6px 0
          .iconfont
            font-size 16px
</style>
