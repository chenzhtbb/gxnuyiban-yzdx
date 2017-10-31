<template>
  <transition name="slide">
    <div class="class-table">
      <scroll style="height: 100%; width: 100%;" :data="classtable" :freeScroll="isfreeScroll">
        <div>
          <div v-html="classtable"></div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { getTimetable } from 'api/dean'
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    },
    mounted () {
      this._getTimetable()
    },
    data () {
      return {
        classtable: `<div>课程表加载中</div>`,
        isfreeScroll: true
      }
    },
    methods: {
      _getTimetable () {
        getTimetable().then((res) => {
          this.classtable = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .class-table
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
