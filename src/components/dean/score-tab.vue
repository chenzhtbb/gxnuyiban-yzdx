<template>
  <toggle>
    <div class="score-tab">
      <div class="tab">
        <router-link tag="div" class="tab-item" to="/app/lostandfound/lost" replace>
          <span class="tab-link">成绩</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/app/lostandfound/found" replace>
          <span class="tab-link">待确认成绩</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/app/lostandfound/found" replace>
          <span class="tab-link">国家考试成绩</span>
        </router-link>
      </div>
      <router-view></router-view>
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

  .center
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

  .score-tab
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
