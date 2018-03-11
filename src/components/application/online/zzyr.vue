<template>
  <div class="helo-people">
    <div class="center">
      <cube-loading :size="24"></cube-loading>
    </div>
    <p class="center-p">小易正在带路前往资助管理系统...</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapActions } from 'vuex'
  import { getHrefFlag } from 'common/js/cache'

  export default {
    activated () {
      this.hrefflag = getHrefFlag()
      console.log(this.hrefflag)
      if (this.hrefflag) {
        this.saveHrefFlag(false)
        this.$router.replace('/home')
      } else {
        setTimeout(() => {
          this.saveHrefFlag(true)
          window.location.href = 'https://oauth.yiban.cn/code/html?client_id=321a8e203164b766&redirect_uri=http://116.1.2.242:3489/AdminLTE_Mod/Yb/Yb.aspx&state=yb_oauth'
        }, 200)
      }
    },
    methods: {
      ...mapActions([
        'saveHrefFlag'
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
    .center-p
      position absolute
      top 60%
      left 50%
      width 100%
      text-align center
      transform translate(-50%, -50%)
</style>
