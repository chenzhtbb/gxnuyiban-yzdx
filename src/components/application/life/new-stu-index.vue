<template>
  <div class="new-stu-index">
    <cube-scroll :data="[]">
      <div>
        <div style="text-align: center; font-size: 20px;margin-top: 30px;">新生专栏</div>
        <div style="padding: 30px 40px;">
          <cube-button primary @click="$router.push('/app/life/new-stu')" style="margin-bottom: 20px;">个人信息查询
          </cube-button>
          <cube-button @click="$router.push('/app/life/yyy')" style="margin-bottom: 20px;">摇一摇抽奖</cube-button>
          <cube-button primary @click="$router.push('/app/life/jp')" style="margin-bottom: 20px;">我的奖品</cube-button>
          <div style="color: red;">
            <p>【安全提醒】</p>
            <p>1、我校在车站、机场均未设有任何商业摊点，报到注册不需要捆绑任何商业行为才可以办理。</p>
            <p>2、请各位小萌新不要轻易相信手机卡、信用卡等办理业务，更不要轻易出示身份证、通知书等证件。</p>
            <p>3、我校仅于9月15日当天在火车桂林站、桂林北站、桂林西站设有接待点，请谨防其他时间其他站点的不明身份人员冒充我校迎新工作人员。</p>
          </div>
        </div>
      </div>
    </cube-scroll>
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
