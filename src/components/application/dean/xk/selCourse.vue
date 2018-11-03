<template>
  <div class="sel">
    <div style="margin:10px;font-weight: 400;color: #337ab7;">选课须知</div>
    <ul>
      <li>1.目前仅提供专业必修、专业选修选修与通识课选课功能</li>
      <li>2.专业必修与专业选修在一起显示</li>
      <li>3.易班选课仅作为选课的辅助手段</li>
      <li>4.为了提高选课的成功率，无论课程是否选上都会显示，查看选课情况请去已选课程查看</li>
      <li>5.选课人数过多时，不会马上提示选课是否成功，系统会在后台尝试选课，过一段时间才会出提示</li>
      <li>6.可以一次对多门课程选课</li>
    </ul>
    <cube-button :light="true" @click="Course('elect')">专业课</cube-button>
    <cube-button :primary="true" @click="Course('human')">通识课（人文社科）</cube-button>
    <cube-button :light="true" @click="Course('nature')">通识课（自然科学）</cube-button>
    <cube-button :primary="true" @click="Course('art')">通识课（艺术体育）</cube-button>
    <cube-button :light="true" @click="Course('other')">通识课（其他专项）</cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      Course (type) {
        this.$router.push({path: '/app/dean/xk/list', query: {type: type}})
      }
    }

  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .sel
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
