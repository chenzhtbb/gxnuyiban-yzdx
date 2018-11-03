<template>
  <toggle>
    <div class="lost-and-found">
      <div class="center">
        <loading :title="title"></loading>
      </div>
      <!--<div class="tab">-->
      <!--<router-link tag="div" class="tab-item" to="/app/lostandfound/lost" replace>-->
      <!--<span class="tab-link">寻物启事</span>-->
      <!--</router-link>-->
      <!--<router-link tag="div" class="tab-item" to="/app/lostandfound/found" replace>-->
      <!--<span class="tab-link">失物招领</span>-->
      <!--</router-link>-->
      <!--</div>-->
      <!--<router-view></router-view>-->
      <!--<iframe src="http://www.gxnuyiban.com/lostandfound/"></iframe>-->
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Loading from 'base/loading/loading'

  export default {
    components: {
      Toggle,
      Loading
    },
    data () {
      return {
        title: '小易正在带路前往失物招领系统...'
      }
    },
    activated () {
//      this.lostflag = getLostFlag()
//      if (this.lostflag) {
//        this.saveLostFlag(false)
//        this.$router.replace('/home')
//      } else {
//        setTimeout(() => {
//          this.saveLostFlag(true)
//          window.location.href = 'http://www.gxnuyiban.com/lostandfound/'
//        }, 20)
//      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .center
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

  iframe
    border 0
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%

  .lost-and-found
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .tab
      display flex
      height 44px
      line-height 44px
      background #FFFFFF
      .tab-item
        flex 1
        text-align center
        .tab-link
          padding-bottom 5px
        &.router-link-active
          .tab-link
            color #0099FF
            border-bottom 2px solid #66CCFF
</style>
