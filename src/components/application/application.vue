<template>
  <transition name="slide">
    <div class="application">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <iframe></iframe>
    </div>
  </transition>
</template>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .application
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 150
    iframe
      z-index -1
      width 0
      height 0
      border 0
      display none

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
