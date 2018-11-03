<template>
  <div ref="wrapper" class="wrapper">
    <div ref="group" class="group">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { BetterScroll } from 'cube-ui'
  import { addClass } from 'common/js/dom'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: []
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._setSlideWidth()
        this._initScroll()
      })
    },
    methods: {
      _setSlideWidth () {
        this.clientWidth = this.$refs.wrapper.parentNode.clientWidth
//        this.$refs.wrapper.style.width = this.clientWidth + 'px'
        this.children = this.$refs.group.children
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slide-item')
          width += child.clientWidth
        }
        this.$refs.group.style.width = width + 'px'
      },
      _initScroll () {
        if (this.slide) {
          this.slide.destroy()
        }
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BetterScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: true,
          scrollY: false
        })
        this.refresh()
      },
      enable () {
        this.scroll && this.scroll.enable()
      },
      disable () {
        this.scroll && this.scroll.disable()
      },
      refresh () {
        this.scroll && this.scroll.refresh()
      },
      slidePage () {
        let x = this.children[this.currentIndex].x
        let scrollToD = this.children[this.currentIndex].clientWidth - this.clientWidth
//        console.log(scrollToD, x, scrollToD + x, scrollToD - x)
        if (scrollToD + x > 0) {
          this.scroll.scrollTo(-scrollToD - x)
          if (this.currentIndex + 1 < this.children.length) {
            this.scroll.scrollBy(-this.children[this.currentIndex].clientWidth)
          }
        } else if (scrollToD - x >= -this.clientWidth) {
          this.scroll.scrollTo(scrollToD - x + this.clientWidth)
        }
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      },
      currentIndex () {
        this.slidePage()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    min-height: 1px
    .slide-group
      min-width: 1px
      position: relative
</style>
