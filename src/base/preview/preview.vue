<template>
  <div class="preview" v-show="showFlag" @click="hide()">
    <div class="slider-img">
      <slider ref="slider" :autoPlay="autoPlay">
        <div v-for="img in images" style="width: 100%;">
          <img :src="img.imgurl">
        </div>
      </slider>
    </div>
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
        autoPlay: false,
        showFlag: false,
        items: [1, 2, 3, 4, 5],
        images: []
      }
    },
    methods: {
      show (images) {
        this.images = images
        this.showFlag = true
        setTimeout(() => {
          this.$refs.slider.refresh()
        }, 200)
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  img
    width 100%

  .preview
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 150
    background-color #444444
</style>
