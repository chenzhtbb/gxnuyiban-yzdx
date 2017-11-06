<template>
  <div class="grid-center">
    <div @click="goto('/')">
      <span class="iconfont icon-xiaoqihezuojidi icon bg-D81B60"></span>
      <span class="grid-center">研修基地</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-yibanlogo icon bg-00c0ef"></span>
      <span class="grid-center">易班在线</span>
    </div>
    <div @click="gotozz">
      <span class="iconfont icon-icon_shengyuandizhuxuedaikuan icon bg-00a65a"></span>
      <span class="grid-center">资助育人</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-zonghe icon bg-ff851b"></span>
      <span class="grid-center">综合服务</span>
    </div>
    <div @click="goto('/')">
      <span class="iconfont icon-jingqingqidai icon bg-D81B60"></span>
      <span class="grid-center">敬请期待</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      },
      gotozz () {
        window.location.href = 'https://oauth.yiban.cn/code/html?client_id=321a8e203164b766&redirect_uri=http://116.1.2.242:3489/AdminLTE_Mod/Yb/Yb.aspx&state=yb_oauth#'
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
