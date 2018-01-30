<template>
  <div>
    <div style="height: 6px;"></div>
    <div style="padding-bottom: 2px;">
      <p style="border-left: 5px solid" :style="base.color" text-left="">&nbsp;&nbsp;{{base.name}}</p>
    </div>
    <slider :auto-play="false" ref="slider">
      <ul class="grid-center">
        <li v-for="item in items">
          <router-link :to="item.link" tag="a">
            <i class="icon" :class="item.class"></i>
            <span class="grid-center">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
      <div slot="dots"></div>
    </slider>
  </div>

</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'

  export default {
    components: {
      Slider
    },
    props: {
      base: {
        type: Object,
        default: {}
      },
      items: {
        type: Array,
        default: []
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
    li
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
