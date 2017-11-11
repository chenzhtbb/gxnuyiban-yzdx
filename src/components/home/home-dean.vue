<template>
  <div class="grid-center">
    <router-link tag="div" to="/app/score">
      <span class="iconfont icon-chengjichaxun icon bg-00c0ef"></span>
      <span class="grid-center">成绩</span>
    </router-link>
    <router-link tag="div" to="/app/classtable">
      <span class="iconfont icon-kebiaochaxun icon bg-00a65a"></span>
      <span class="grid-center">课表</span>
    </router-link>
    <router-link tag="div" to="/app/library">
      <span class="iconfont icon-tushuguan icon bg-ff851b"></span>
      <span class="grid-center">图书馆</span>
    </router-link>
    <router-link tag="div" to="/">
      <span class="iconfont icon-jingqingqidai icon bg-00a65a"></span>
      <span class="grid-center">选课</span>
    </router-link>
    <router-link tag="div" to="/">
      <span class="iconfont icon-jingqingqidai icon bg-D81B60"></span>
      <span class="grid-center">评教</span>
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
