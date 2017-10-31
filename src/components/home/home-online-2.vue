<template>
  <div class="grid-center">
    <div @click="goto('/')">
      <span class="iconfont icon-xiaoqihezuojidi icon bg-CC66FF"></span>
      <span class="grid-center">研修基地</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-yibanlogo icon"></span>
      <span class="grid-center">易班在线</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-icon_shengyuandizhuxuedaikuan icon bg-FF6666"></span>
      <span class="grid-center">资助育人</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-zonghe icon bg-66CCFF"></span>
      <span class="grid-center">综合服务</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-jingqingqidai icon bg-FF9900"></span>
      <span class="grid-center">敬请期待</span>
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
      font-size 28px
      line-height 1
      background-color #35b3ed
      padding 5px
      border-radius 50%
      color #fff
      text-align center
</style>
