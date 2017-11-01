<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div v-if="showDot" class="dots" :style="dotStyle">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { addClass } from 'common/js/dom'

  export default {
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      showDot: {
        type: Boolean,
        default: true
      },
      dotPos: {
        type: String,
        default: '12'
      }
    },
    data () {
      return {
        dots: [],
        currentPageIndex: 0,
        dotStyle: ''
      }
    },
    mounted () {
      this.initS()
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this.refresh()
      })
    },
    activated () {
      if (!this.slider) {
        return
      }
      this.slider.enable()
      let pageIndex = this.slider.getCurrentPage().pageX
//      if (pageIndex > this.dots.length) {
//        pageIndex = pageIndex % this.dots.length
//      }
      this.slider.goToPage(pageIndex, 0, 0)
      if (this.loop) {
        pageIndex -= 1
      }
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    methods: {
      initS () {
        setTimeout(() => {
          this._setSliderWidth()
          if (this.showDot) {
            this._initDots()
            this._dotPos()
          }
          this._initSlider()
          if (this.autoPlay) {
            this._play()
          }
        }, 20)
      },
      _setSliderWidth (isResize) {
        this.children = this.$refs.sliderGroup.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots () {
        this.dots = new Array(this.children.length)
      },
      _dotPos () {
        if (!this.dotPos) {
          this.dotStyle = 'bottom: 0;'
        }
        this.dotStyle = `bottom: ${this.dotPos}px;`
      },
      _initSlider () {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          click: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          }
        })
        this.slider.on('scrollEnd', this._onScrollEnd)

        this.slider.on('touchend', () => {
          if (this.autoPlay) {
            this._play()
          }
        })

        this.slider.on('beforeScrollStart', () => {
          console.log('beforeScrollStart')
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _onScrollEnd () {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          this._play()
        }
      },
      _play () {
        let pageIndex = this.slider.getCurrentPage().pageX + 1
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      },
      refresh () {
        this._setSliderWidth(true)
        this.slider.refresh()
      }
    },
    components: {
      BScroll
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .slider
    min-height 1px
    .slider-group
      position relative
      overflow hidden
      white-space nowrap
      .slider-item
        float left
        box-sizing border-box
        overflow hidden
        text-align center
        a
          display block
          width 100%
    .dots
      position: relative
      right: 0
      left: 0
      width 100%
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: #888888
        &.active
          width: 8px
          border-radius: 5px
          background: #6699FF
</style>
