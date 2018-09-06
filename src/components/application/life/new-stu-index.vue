<template>
  <div class="new-stu-index">
    <div style="text-align: center; font-size: 20px;margin-top: 30px;">新生专栏</div>
    <div style="padding: 30px 40px;">
      <cube-button primary @click="$router.push('/app/life/new-stu')" style="margin-bottom: 20px;">个人信息查询</cube-button>
      <cube-button @click="$router.push('/app/life/yyy')" style="margin-bottom: 20px;">摇一摇抽奖</cube-button>
      <cube-button primary @click="$router.push('/app/life/jp')" style="margin-bottom: 20px;">我的奖品</cube-button>
      <cube-button>可能会出的信息填报</cube-button>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'new-stu-index'
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .new-stu-index
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #faf9f7
</style>
