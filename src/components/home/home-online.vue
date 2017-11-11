<template>
  <div class="grid-center">
    <router-link tag="div" to="/">
      <span class="iconfont icon-tongzhi icon bg-D81B60"></span>
      <span class="grid-center">学工通知</span>
    </router-link>
    <router-link tag="div" to="/app/helppeople">
      <span class="iconfont icon-icon_shengyuandizhuxuedaikuan icon bg-00a65a"></span>
      <span class="grid-center">资助育人</span>
    </router-link>
    <router-link tag="div" to="/">
      <span class="iconfont icon-yibanlogo icon bg-00c0ef"></span>
      <span class="grid-center">易班在线</span>
    </router-link>
    <router-link tag="div" to="/">
      <span class="iconfont icon-zhuyizhishi icon bg-ff851b"></span>
      <span class="grid-center">办事指南</span>
    </router-link>
    <router-link tag="div" to="/app/workservice">
      <span class="iconfont icon-jiuyeshuai icon bg-00c0ef"></span>
      <span class="grid-center">就业服务</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .grid-center
    display block
    text-align center
    color #666
    font-size 14px
    padding 5px 0
    div
      float left
      text-decoration none
      width 20%
    .icon
      display inline-block
      font-size 20px
      line-height 1
      background-color #35b3ed
      padding 9px
      border-radius 50%
      color #fff
      text-align center
</style>
