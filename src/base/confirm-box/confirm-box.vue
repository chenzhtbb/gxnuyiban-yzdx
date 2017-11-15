<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag">
      <div class="bg-filter"></div>
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">{{text}}</p>
          <div class="operate">
            <div class="operate-btn left" @click="hide()">{{cancelBtnText}}</div>
            <div class="operate-btn" @click="confirm()">{{confirmBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      hide () {
        this.showFlag = false
      },
      confirm () {
        this.hide()
        this.$emit('confirm')
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .confirm
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 998
    background rgba(0, 0, 0, 0.46)
    &.confirm-fade-enter-active
      animation confirm-fadein 0.3s
      .confirm-content
        animation confirm-zoom 0.3s
    .bg-filter
      position absolute
      width 100%
      height 100%
    .confirm-wrapper
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 9999
      .confirm-content
        width 270px
        border-radius 13px
        background #FFFFFF
        .text
          padding 12px 15px
          line-height 26px
          text-align center
          margin 0
          font-size 16px
          color #000000
        .operate
          display flex
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

  @keyframes confirm-fadein
    0%
      opacity 0
    100%
      opacity 1

  @keyframes confirm-zoom
    0%
      transform scale(0)
    50%
      transform scale(1.1)
    100%
      transform scale(1)

</style>
