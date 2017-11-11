<template>
  <toggle>
    <div class="helo-people">
      <!--<iframe src="https://oauth.yiban.cn/code/html?client_id=321a8e203164b766&redirect_uri=http://116.1.2.242:3489/AdminLTE_Mod/Yb/Yb.aspx&state=yb_oauth#"></iframe>-->
      <div class="center">
        <loading :title="title"></loading>
      </div>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Loading from 'base/loading/loading'
  import { mapActions } from 'vuex'
  import { getHelpFlag } from 'common/js/cache'

  export default {
    components: {
      Toggle,
      Loading
    },
    data () {
      return {
        title: '正在前往资助管理系统...'
      }
    },
    activated () {
      this.helpflag = getHelpFlag()
      console.log(this.helpflag)
      if (this.helpflag) {
        this.saveHelpFlag(false)
        this.$router.replace('/home')
      } else {
        setTimeout(() => {
          this.saveHelpFlag(true)
          window.location.href = 'https://oauth.yiban.cn/code/html?client_id=321a8e203164b766&redirect_uri=http://116.1.2.242:3489/AdminLTE_Mod/Yb/Yb.aspx&state=yb_oauth'
        }, 20)
      }
    },
    methods: {
      ...mapActions([
        'saveHelpFlag'
      ])
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .helo-people
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
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
</style>
