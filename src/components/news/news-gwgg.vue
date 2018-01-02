<template>
  <div class="news">
    <div class="operators" v-if="uinfo.yb_identity === '学生1111111'">
      <router-link to="/app/newstab/gg/1" tag="div" class="icon i-left" replace>
        <p class="">公告</p>
      </router-link>
      <router-link to="/app/newstab/gg/6" tag="div" class="icon i-right" replace>
        <p class="">公文</p>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 48px
    left 0
    right 0

  .operators
    display flex
    align-items center
    height 48px
    .icon
      flex 1
      &.router-link-active
        color #0099FF
        border-bottom 1px solid #0099FF
      &.disable
        color chocolate
      p
        text-align center
        font-size 14px
        margin 6px 0
      .iconfont
        font-size 16px
      .img-icon
        height 16px
        width 16px
        text-align center
    .i-left
      text-align right

    .i-center
      padding auto auto
      text-align center
    .i-right
      text-align left
</style>
