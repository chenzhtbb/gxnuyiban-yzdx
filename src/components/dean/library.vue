<template>
  <transition name="slide">
    <div class="library">
      <iframe src="http://m.5read.com/gxnu"></iframe>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .library
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    iframe
      border 0
      position fixed
      top 0
      bottom 0
      left 0
      right 0
      width 100%
      height 100%

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
