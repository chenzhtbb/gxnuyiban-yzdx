<template>
  <div class="bottom">
    <div class="operators">
      <router-link to="/home" tag="div" class="icon i-left" replace>
        <p class="iconfont icon-fuwuzhongxin"></p>
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
      _getUserInfo () {
        getUser().then((res) => {
          this.setUinfo(res.yb)
          this.setBinddean(res.dean)
          this.setBinddorm(res.dorm)
          console.log(res)
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
    background #EEEEEE
    .operators
      display flex
      align-items center
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
      .i-left
        text-align right

      .i-center
        padding auto auto
        text-align center
      .i-right
        text-align left

</style>
