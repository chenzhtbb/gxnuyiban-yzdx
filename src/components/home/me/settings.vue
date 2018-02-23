<template>
  <transition name="slide">
    <div class="settings">
      <div class="list">
        <h1 class="list-title">设置</h1>
        <ul>
          <div v-for="item in items">
            <li class="item">
              <div class="text">
                <p class="name">{{item}}</p>
              </div>
              <div class="ii">
                <i class="iconfont icon-jiantouyou"></i>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        items: ['切换语言', '字号大小', '意见反馈', '客服中心', '关于我们']
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .settings
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .list
      ul
        position absolute
        top 40px
        left 0
        right 0
        height 40px
        padding 0
      li
        height 40px
        position relative
        background #FFFFFF
        .ii
          padding-right 10px
          color #CCCCCC
      .list-title
        height 14px
        line-height 14px
        text-align center
        font-size 14px
        color $color-theme
      .item
        display flex
        align-items center
        box-sizing border-box
        padding-left 20px
        border-bottom 1px solid #EEEEEE
        .icon
          padding-right 20px
        .text
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 14px;
          overflow: hidden;
          font-size: 14px;

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
