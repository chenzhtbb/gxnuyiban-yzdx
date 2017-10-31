<template>
  <div class="grid-center">
    <div @click="goto('/app/newstab/gwgg')">
      <span class="iconfont icon-gongwen icon bg-FF9900"></span>
      <span class="grid-center">公文公告</span>
    </div>
    <div @click="goto('/app/newstab/hyap')">
      <span class="iconfont icon-iconhuiyianpai01 icon"></span>
      <span class="grid-center">会议安排</span>
    </div>
    <div @click="goto('/app/newstab/jwtz')">
      <span class="iconfont icon-jiaowuguanli icon bg-FF6666"></span>
      <span class="grid-center">教务通知</span>
    </div>
    <div @click="goto('/app/newstab/xyxw')">
      <span class="iconfont icon-xiaoyuanxinwen icon bg-CC66FF"></span>
      <span class="grid-center">校园新闻</span>
    </div>
    <div @click="goto('/app/newstab/jzbg')">
      <span class="iconfont icon-jiangzuo icon bg-66CCFF"></span>
      <span class="grid-center">讲座报告</span>
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
