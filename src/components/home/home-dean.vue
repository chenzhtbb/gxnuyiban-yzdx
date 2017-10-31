<template>
  <div class="grid-center">
    <div @click="goto('/app/score')">
      <span class="iconfont icon-chengjichaxun icon bg-66CCFF"></span>
      <span class="grid-center">成绩</span>
    </div>
    <div @click="goto('/app/classtable')">
      <span class="iconfont icon-kebiaochaxun icon bg-FF9900"></span>
      <span class="grid-center">课表</span>
    </div>
    <div @click="goto('/app/library')">
      <span class="iconfont icon-tushuguan icon"></span>
      <span class="grid-center">图书馆</span>
    </div>
    <div @click="goto('/app/selcourse')">
      <span class="iconfont icon-xuankebaoming icon bg-FF6666"></span>
      <span class="grid-center">选课</span>
    </div>
    <div @click="goto('/app/appraise')">
      <span class="iconfont icon-pingjiaopingxue icon bg-CC66FF"></span>
      <span class="grid-center">评教</span>
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
