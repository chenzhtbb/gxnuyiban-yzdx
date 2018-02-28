<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import { BetterScroll } from 'cube-ui'
  import Loading from 'base/loading/loading'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: []
      },
      isScroll: {
        type: Boolean,
        default: false
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      freeScroll: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isPullUpLoad: false
      }
    },
    components: {
      Loading
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        let sHeight = this.$refs.wrapper.children[0].clientHeight
        let wHeight = window.screen.height
        if (this.isScroll && sHeight + 48 > wHeight) {
          let height = sHeight + 48
          this.$refs.wrapper.children[0].style.height = height + 'px'
        }
        this.scroll = new BetterScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          pullUpLoad: this.pullUpLoad,
          freeScroll: this.freeScroll
        })
        this.refresh()
        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      _initPullUpLoad () {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
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
      scrollToTop () {
        this.scroll && this.scroll.scrollTo(0, 0, 400)
      },
      finishPullUp () {
        this.isPullUpLoad = false
        this.scroll && this.scroll.finishPullUp()
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          if (this.isPullUpLoad) {
            this.finishPullUp()
          }
          if (this.isToTop) {
            this.scrollToTop()
          }
          setTimeout(() => {
            this.refresh()
          }, 20)
        }, 20)
      }
    }
  }
</script>
