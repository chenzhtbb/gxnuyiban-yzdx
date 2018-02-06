<template>
  <div class="me">
    <div class="top">
      <div class="box box-widget widget-user">
        <div class="widget-user-header bg-black bg-img">
          <h3 class="username">{{user.yb_usernick}}</h3>
          <!--<h5 class="desc">{{user.yb_schoolname}}</h5>-->
        </div>
        <div class="widget-user-image">
          <img class="img-circle" v-lazy="imgurl" alt="User Photo" style="height: 90px;">
        </div>
        <div class="box-footer no-padding">
          <ul class="nav nav-stacked">
            <li>
              <router-link tag="a" to="/app/binddean">
                绑定教务处
                <!--<span class="pull-right badge bg-blue"></span>-->
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/app/binddorm">
                绑定宿舍号
                <!--<span class="pull-right badge bg-blue"></span>-->
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/app/feedback">
                意见反馈
                <!--<span class="pull-right badge bg-blue"></span>-->
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/app/score">
                查询成绩
                <!--<span class="pull-right badge bg-blue"></span>-->
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import '~common/stylus/mixin'

  .me
    position fixed
    top 0
    bottom 0
    left 0
    right 0

  .bg-img
    position relative
    width 100%
    padding-top 200px
    transform-origin top
    background-size cover
    bg-img('bg')

  .username
    position absolute
    top 150px
    left 50%
    transform translate(-50%, -50%)

  .desc
    position absolute
    top 180px
    left 50%
    transform translate(-50%, -50%)

</style>
