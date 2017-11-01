<template>
  <div class="grid-center">
    <div @click="goto('/')">
      <span class="iconfont icon-fuwuguanli icon bg-00a65a"></span>
      <span class="grid-center">服务管理</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-jiuyeshuai icon bg-00c0ef"></span>
      <span class="grid-center">就业服务</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-zhuyizhishi icon bg-D81B60"></span>
      <span class="grid-center">思政教育</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-xinli icon bg-ff851b"></span>
      <span class="grid-center">心理健康</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-tongzhi icon bg-D81B60"></span>
      <span class="grid-center">学工通知</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      }
    }
  }
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
