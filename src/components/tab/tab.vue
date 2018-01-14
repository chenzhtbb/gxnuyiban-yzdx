<template>
  <div class="bottom">
    <div class="operators">
      <router-link to="/home" tag="div" class="icon i-left" replace>
        <p class="iconfont icon-fuwuzhongxin"></p>
        <!--<img class="img-icon" src="~common/image/logo.jpg">-->
        <p class="">服务中心</p>
      </router-link>
      <router-link to="/book" tag="div" class="icon i-center" replace>
        <p class="iconfont icon-dianhua"></p>
        <p class="">电话簿</p>
      </router-link>
      <router-link to="/me" tag="div" class="icon i-right" replace>
        <p class="iconfont icon-wode"></p>
        <p class="">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations } from 'vuex'
  import { getUser } from 'api/user'

  export default {
    mounted () {
      setTimeout(() => {
        this._getUserInfo()
      }, 20)
    },
    methods: {
      showAlert () {
        this.$createDialog(
          {
            type: 'confirm',
            title: '系统提示',
            content: '您当前绑定的教务处账户密码错误，是否需要重新绑定？',
            icon: 'cubeic-alert',
            confirmBtn: {
              text: '重新绑定',
              active: true,
              disabled: false,
              href: 'javascript:;'
            },
            cancelBtn: {
              text: '稍后再说',
              active: false,
              disabled: false,
              href: 'javascript:;'
            },
            onConfirm: () => {
              this.$router.push('/app/binddean')
            },
            onCancel: () => {
            }
          }
        ).show()
      },
      _getUserInfo () {
        getUser().then((res) => {
          this.userInfo = res
          if (res.dean.username !== '') {
            this.userInfo.yb.yb_studentid = this.userInfo.dean.username
          }
          if (this.userInfo.dean.dean > 1) {
            this.showAlert()
          }
          this.setUinfo(this.userInfo.yb)
          this.setBinddean(this.userInfo.dean)
          this.setBinddorm(this.userInfo.dorm)
        })
      },
      ...mapMutations({
        setUinfo: 'SET_UINFO',
        setBinddean: 'SET_BINDDEAN',
        setBinddorm: 'SET_BINDDORM'
      })
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .bottom
    position fixed
    left 0
    right 0
    bottom 0
    width 100%
    height 48px
    background #EEEEEE
    .operators
      display flex
      align-items center
      height 48px
      .icon
        flex 1
        &.router-link-active
          color #0099FF
          border-bottom 1px solid #0099FF
        &.disable
          color chocolate
        p
          text-align center
          font-size 14px
          margin 6px 0
        .iconfont
          font-size 16px
        .img-icon
          height 16px
          width 16px
          text-align center
      .i-left
        text-align right

      .i-center
        padding auto auto
        text-align center
      .i-right
        text-align left

</style>
