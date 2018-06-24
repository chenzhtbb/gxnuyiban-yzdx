<template>
  <div class="trade">
    <div style="margin:10px;font-weight: 400;color: #337ab7;">换课须知</div>
    <ul>
      <li>1.尽量在第二轮、第三轮选课的时候换课</li>
      <li>2.换课存在失败率，导致双方课程被退（失败率极小）</li>
      <li>3.不要在选课高峰时期换课（选课开放的3小时内）</li>
      <li>4.换课失败的后果由学生本人承担</li>
      <li>5.请不要把换课服务当做卖课平台，如有卖课将严惩</li>
    </ul>
    <cube-button :primary="true" @click="tradeCourse">登记待换课程</cube-button>
    <div style="height: 20px;width: 100%;"></div>
    <scroll style="height: 100%;" :data="[]">
      <div>
        123
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    methods: {
      tradeCourse () {

      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .trade
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE

    ul
      margin: 10px
      li
        margin 5px
</style>
