<template>
  <toggle>
    <div class="application">
        <router-view></router-view>
      <iframe></iframe>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'

  export default {
    components: {
      Toggle
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .application
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #FFFFFF
    iframe
      z-index -1
      width 0
      height 0
      border 0
      display none
</style>
