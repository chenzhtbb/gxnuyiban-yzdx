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
    <!--<confirm-box-->
    <!--ref="confirm"-->
    <!--:text="title"-->
    <!--:confirmBtnText="confirmBtnText"-->
    <!--:cancelBtnText="cancelBtnText"-->
    <!--@confirm="gotoBind"-->
    <!--&gt;</confirm-box>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations } from 'vuex'
  import { getUser } from 'api/user'
  //  import ConfirmBox from 'base/confirm-box/confirm-box'

  export default {
//    components: {
//      ConfirmBox
//    },
    data () {
      return {
        title: '',
        confirmBtnText: '立即前往',
        cancelBtnText: '稍后再说'
      }
    },
    mounted () {
      setTimeout(() => {
        this._getUserInfo()
      }, 20)
    },
    methods: {
      _getUserInfo () {
        getUser().then((res) => {
          this.userInfo = res
          if (res.dean.username !== '') {
            this.userInfo.yb.yb_studentid = this.userInfo.dean.username
          }
          this.setUinfo(this.userInfo.yb)
          this.setBinddean(this.userInfo.dean)
//          if (this.userInfo.dean.dean === 0) {
//            this.title = '您还没有绑定教务处账户，是否马上绑定？'
//            this.$refs.confirm.show()
//          }
//          this.setBinddorm(this.userInfo.dorm)
//          if (this.userInfo.dean.dean === 1 && this.userInfo.dorm.dorm === 0) {
//            this.title = '您还没有绑定宿舍号，是否马上绑定？'
//            this.$refs.confirm.show()
//          }
          console.log(this.userInfo)
        })
      },
      gotoBind () {
        if (this.userInfo.dean.dean === 0) {
          this.$router.push('/app/binddean')
        } else {
          this.$router.push('/app/binddorm')
        }
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
