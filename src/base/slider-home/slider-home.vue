<template>
  <div>
    <div style="height: 6px;"></div>
    <div style="padding-bottom: 2px;">
      <p :style="titleColor" text-left>&nbsp;&nbsp;{{name}}</p>
    </div>
    <slider :auto-play="false" ref="slider">
      <ul class="grid-center">
        <li v-for="item in items">
          <router-link :to="{path: item.link, query: item.query}" tag="a">
            <i class="icon" :class="item.icon"></i>
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
    data () {
      return {
        titleColor: ''
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: []
      }
    },
    activated () {
      setTimeout(() => {
        this.titleColor = 'border-left: 5px solid ' + this.color + ';'
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
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
