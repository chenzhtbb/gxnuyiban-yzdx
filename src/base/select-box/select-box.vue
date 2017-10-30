<template>
  <transition name="select-box-fade">
    <div class="select-box" v-show="showFlag">
      <div class="select-box-wrapper">
        <div class="select-box-content">
          <p class="text">请选择校区</p>
          <div class="operate">
            <div class="operate-btn" @click="yanshan()">雁山校区</div>
            <div class="operate-btn" @click="yucai()">育才校区</div>
            <div class="operate-btn" @click="wangcheng()">王城校区</div>
            <!--<div class="operate-btn"></div>-->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        showFlag: false
      }
    },
    computed: {
      ...mapMutations({
        setBinddorm: 'SET_BINDDORM'
      })
    },
    methods: {
      show () {
        this.showFlag = true
      },
      hide () {
        this.showFlag = false
      },
      yanshan () {
        this.hide()
        this.emitSelect('雁山校区')
      },
      yucai () {
        this.hide()
        this.emitSelect('育才校区')
      },
      wangcheng () {
        this.hide()
        this.emitSelect('王城校区')
      },
      emitSelect (campus) {
        this.$emit('select', campus)
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .select-box
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 998
    background-color #888888
    &.select-box-fade-enter-active
      animation select-box-fadein 0.3s
      .select-box-content
        animation select-box-zoom 0.3s
    .select-box-wrapper
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 999
      .select-box-content
        width 270px
        border-radius 13px
        background #FFFFFF
        .text
          padding 12px 15px
          line-height 26px
          margin 0
          text-align center
          font-size 16px
          color #000000
        .operate
          display inline
          align-items center
          text-align center
          font-size 14px
          .operate-btn
            flex 1
            line-height 22px
            padding 10px 0
            border-top 1px solid #6699FF
            color #000000
          &.left
            border-right 1px solid #6699FF
          &.right
            border-right 1px solid #6699FF

  @keyframes select-box-fadein
    0%
      opacity 0
    100%
      opacity 1

  @keyframes select-box-zoom
    0%
      transform scale(0)
    50%
      transform scale(1.1)
    100%
      transform scale(1)

</style>
