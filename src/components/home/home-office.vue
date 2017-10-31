<template>
  <div class="grid-center">
    <router-link to="/app/newstab/gwgg" tag="div">
      <span class="iconfont icon-gongwen icon bg-FF9900"></span>
      <span class="grid-center">公文公告</span>
    </router-link>
    <router-link to="/app/newstab/hyap" tag="div">
      <span class="iconfont icon-iconhuiyianpai01 icon"></span>
      <span class="grid-center">会议安排</span>
    </router-link>
    <router-link to="/app/newstab/jwtz" tag="div">
      <span class="iconfont icon-jiaowuguanli icon bg-FF6666"></span>
      <span class="grid-center">教务通知</span>
    </router-link>
    <router-link to="/app/newstab/xyxw" tag="div">
      <span class="iconfont icon-xiaoyuanxinwen icon bg-CC66FF"></span>
      <span class="grid-center">校园新闻</span>
    </router-link>
    <router-link to="/app/newstab/jzbg" tag="div">
      <span class="iconfont icon-jiangzuo icon bg-66CCFF"></span>
      <span class="grid-center">讲座报告</span>
    </router-link>
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
