<template>
  <div class="grid-center">
    <div @click="goto('/app/electricity')">
      <span class="iconfont icon-yongdianchaxun icon bg-CC66FF"></span>
      <span class="grid-center">宿舍用电</span>
    </div>
    <div @click="goto('/app/schoolbus')">
      <span class="iconfont icon-xiaochexinxi icon bg-66CCFF"></span>
      <span class="grid-center">校车时刻</span>
    </div>
    <div @click="goto('/app/lostandfound')">
      <span class="iconfont icon-xingzhuang9kaobei icon bg-FF9900"></span>
      <span class="grid-center">失物招领</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-baoxiu icon bg-CC66CC"></span>
      <span class="grid-center">网上报修</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-zifeibiaozhun icon bg-FF6666"></span>
      <span class="grid-center">资费查询</span>
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
    font-size 0.8rem
    padding 5px 0
    div
      float left
      text-decoration none
      width 20%
    .icon
      display inline-block
      font-size 2rem
      line-height 1
      background-color #35b3ed
      padding 0.23rem
      border-radius 50%
      color #fff
      text-align center
</style>
