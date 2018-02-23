<template>
  <toggle>
    <div class="work-service">
      <iframe src="http://www.gxnuyiban.com/jiuye/"></iframe>
      <div class="center">
        <loading :title="title"></loading>
      </div>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Loading from 'base/loading/loading'

  export default {
    components: {
      Toggle,
      Loading
    },
    data () {
      return {
        title: '小易正在带路前往就业服务信息系统...'
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .work-service
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .center
      z-index -1
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)

  iframe
    border 0
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
</style>
