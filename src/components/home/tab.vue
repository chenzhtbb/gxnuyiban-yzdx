<template>
  <transition name="slide">
    <div class="home">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="bottom">
        <div class="operators">
          <router-link to="index" tag="div" class="icon" replace>
            <p class="iconfont icon-fuwuzhongxin"></p>
            <!--<img class="img-icon" src="~common/image/logo.jpg">-->
            <p class="">服务中心</p>
          </router-link>
          <router-link to="book" tag="div" class="icon" replace>
            <p class="iconfont icon-dianhua"></p>
            <p class="">电话簿</p>
          </router-link>
          <router-link to="me" tag="div" class="icon" replace>
            <p class="iconfont icon-wode"></p>
            <p class="">我的</p>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .home
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 100%
    background #FFFFFF

  .bottom
    z-index 100
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 48px
    background #EEEEEE
    .operators
      display flex
      align-items center
      height 48px
      .icon
        flex 1
        &.router-link-active
          color #0099FF
        /*border-bottom 1px solid #0099FF*/
        p
          text-align center
          font-size 14px
          margin 6px 0
        .iconfont
          font-size 16px

  .slide-leave-active
    transition all 0.3s

  .slide-leave-to
    transform translateZ(0)
</style>
