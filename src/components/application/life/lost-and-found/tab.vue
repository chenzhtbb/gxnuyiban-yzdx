<template>
  <div class="lost-and-found">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="lost" replace>
        <span class="tab-link">寻物启事</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="found" replace>
        <span class="tab-link">失物招领</span>
      </router-link>
    </div>
    <router-link tag="div" class="icon-border" to="publish">
      <div class="put-icon">
        <i class="iconfont icon-jia"></i>
      </div>
    </router-link>
    <transition name="slide">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .slide-leave-active
    transition all 0.3s

  .slide-leave-to
    transform translateZ(0)

  .icon-border {
    extend-click()
    z-index 50
    position: fixed
    right: 20px
    bottom: 20px
    width: 48px;
    height: 48px;
    border-radius: 24px
    border solid 10px #66CCFF;
    background #66CCFF;
  }

  .put-icon {
    position: absolute;
    top 50%
    left 50%
    transform translate(-50%, -50%)
  }

  .iconfont
    font-size: 24px
    color: #fff

  .lost-and-found
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .tab
      display flex
      height 44px
      line-height 44px
      background #FFFFFF
      .tab-item
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
        &.router-link-active
          .tab-link
            color #0099FF
            border-bottom 2px solid #66CCFF
</style>
