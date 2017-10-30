<template>
  <div class="me">
    <div class="top">
      <div class="background-img">
        <div></div>
      </div>
      <div class="photo">
        <img :src="imgurl"/>
      </div>
      <div class="text">
        <p class="name">{{user.yb_username}}</p>
        <p class="xy">{{user.yb_schoolname}}</p>
      </div>
    </div>
    <div class="recommend-list">
      <!--<h1 class="list-title">我的</h1>-->
      <ul>
        <li class="item" @click="toBindDean">
          <div class="icon">
            <i class="iconfont icon-educational-administration"></i>
          </div>
          <div class="text">
            <p class="name">绑定教务处</p>
          </div>
          <div class="ii">
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </li>
        <li class="item" @click="toBindDorm">
          <div class="icon">
            <i class="iconfont icon-wodesushebangding"></i>
          </div>
          <div class="text">
            <p class="name">绑定宿舍号</p>
          </div>
          <div class="ii">
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </li>
        <div style="position: relative; height:10px; background: #EEEEEE;"></div>
        <li class="item" @click="toSettings">
          <div class="icon">
            <i class="iconfont icon-tripshezhishi"></i>
          </div>
          <div class="text">
            <p class="name">设置</p>
          </div>
          <div class="ii">
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        user: [],
        imgurl: 'http://img02.fs.yiban.cn/5720091/avatar/user/200'
      }
    },
    activated () {
      this._GetUser()
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    methods: {
      _GetUser () {
        this.user = this.uinfo
        this.imgurl = `http://img02.fs.yiban.cn/${this.uinfo.yb_userid}/avatar/user/200`
        if (!this.user.yb_userid) {
          this.$router.push('/')
        }
      },
      toBindDean () {
        setTimeout(() => {
          this.$router.push({
            path: '/app/binddean'
          })
        }, 20)
      },
      toBindDorm () {
        setTimeout(() => {
          this.$router.push({
            path: '/app/binddorm'
          })
        }, 20)
      },
      toSettings () {
        setTimeout(() => {
          this.$router.push({
            path: '/app/settings'
          })
        }, 20)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import '~common/stylus/mixin'
  .me
    .top
      .background-img
        position relative
        left 0
        top 0
        width 100%
        z-index -1
        opacity 0.2
        div
          position relative
          width 100%
          padding-top 70%
          transform-origin top
          background-size cover
          bg-img('bg')
      .photo
        z-index 1
        position absolute
        top 100px
        left 50%
        transform translate(-50%, -50%)
        img
          border-radius 50%
          width 120px
      .text
        z-index 1
        position absolute
        top 180px
        left 50%
        transform translate(-50%, -50%)
        text-align center
        .name
          top 20px
          position relative
          font-size 16px
        .xy
          position relative
          top 10px
          font-size 16px
    .recommend-list
      ul
        position absolute
        left 0
        right 0
        height 40px
        padding-left 0
        margin 0
        li
          height 40px
          position relative
          background #FFFFFF
          .ii
            .iconfont
              padding-right 5px
              font-size 10px
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
          .i
            border-radius 50%
        .text
          display flex
          flex-direction column
          justify-content center
          flex 1
          line-height 12px
          overflow hidden
          font-size 12px
</style>
