<template>
  <toggle>
    <div class="electricity" style="text-align: center;">
      电费查询服务器维护中
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
  .electricity
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
</style>
