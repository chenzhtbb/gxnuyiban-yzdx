<template>
  <div class="home">
    <template v-for="data in datas">
      <slider-home :items="data.items" :base="data.base"></slider-home>
    </template>

    <cube-scroll :data="items">
      <div>
        <div v-if="items.length">
          <cube-slide ref="slide">
            <cube-slide-item v-for="(item, index) in items" :key="index">
              <a :href="item.link">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="bottom">
                  <div class="type">{{item.author}}</div>
                </div>
                <div class="border"></div>
              </a>
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
          <!--<div style="padding-bottom: 2px;">-->
          <!--<p style="border-left: 5px solid #FF6699" text-left="">&nbsp;&nbsp;学工在线</p>-->
          <!--</div>-->
          <!--<slider :auto-play="false" ref="online">-->
          <!--&lt;!&ndash;<cube-slide-item>&ndash;&gt;-->
          <!--<home-online></home-online>-->
          <!--&lt;!&ndash;<home-online2></home-online2>&ndash;&gt;-->
          <!--&lt;!&ndash;</cube-slide-item>&ndash;&gt;-->
          <!--<div slot="dots"></div>-->
          <!--</slider>-->
          <!--<div style="height: 6px;"></div>-->
          <!--<div style="padding-bottom: 2px;">-->
          <!--<p style="border-left: 5px solid #00CCFF" text-left="">&nbsp;&nbsp;教务服务</p>-->
          <!--</div>-->
          <!--<slider :auto-play="false" ref="dean">-->
          <!--&lt;!&ndash;<cube-slide-item>&ndash;&gt;-->
          <!--<home-dean></home-dean>-->
          <!--&lt;!&ndash;</cube-slide-item>&ndash;&gt;-->
          <!--<div slot="dots"></div>-->
          <!--</slider>-->
          <!--<div style="height: 6px;"></div>-->
          <!--<div style="padding-bottom: 2px;">-->
          <!--<p style="border-left: 5px solid #FF0033" text-left="">&nbsp;&nbsp;生活服务</p>-->
          <!--</div>-->
          <!--<slider :auto-play="false" ref="life">-->
          <!--&lt;!&ndash;<cube-slide-item>&ndash;&gt;-->
          <!--<home-life></home-life>-->
          <!--&lt;!&ndash;</cube-slide-item>&ndash;&gt;-->
          <!--<div slot="dots"></div>-->
          <!--</slider>-->
          <!--<div style="height: 6px;"></div>-->
          <!--<div style="padding-bottom: 2px;">-->
          <!--<p style="border-left: 5px solid #CC00FF" text-left="">&nbsp;&nbsp;办公服务</p>-->
          <!--</div>-->
          <!--<slider :auto-play="false" ref="office">-->
          <!--&lt;!&ndash;<cube-slide-item>&ndash;&gt;-->
          <!--<home-office></home-office>-->
          <!--&lt;!&ndash;</cube-slide-item>&ndash;&gt;-->
          <!--<div slot="dots"></div>-->
          <!--</slider>-->
        </div>
        <!--<div style="height: 48px;"></div>-->
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeDean from 'components/home/home-dean'
  import HomeLife from 'components/home/home-life'
  import HomeOffice from 'components/home/home-office'
  import HomeOnline from 'components/home/home-online'
  import HomeOnline2 from 'components/home/home-online-2'
  import { mapMutations } from 'vuex'
  //  import { getUser } from 'api/user'
  import Slider from 'base/slider/slider'
  import SliderHome from 'base/slider-home/slider-home'

  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      SliderHome,
      Slider,
      HomeDean,
      HomeLife,
      HomeOffice,
      HomeOnline,
      HomeOnline2
    },
    activated () {
      setTimeout(() => {
        this.$refs.slide && this.$refs.slide.refresh()
        this.$refs.online && this.$refs.online.refresh()
        this.$refs.dean && this.$refs.dean.refresh()
        this.$refs.life && this.$refs.life.refresh()
        this.$refs.office && this.$refs.office.refresh()
      }, 20)
    },
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
//        getUser().then((res) => {
//          this.userInfo = res
//          this.items = []
//          this.items = this.items.concat(this.userInfo.news)
//          if (res.dean.username !== '') {
//            this.userInfo.yb.yb_studentid = this.userInfo.dean.username
//          }
//          if (this.userInfo.dean.dean > 1) {
//            this.showAlert()
//          }
//          this.setUinfo(this.userInfo.yb)
//          this.setBinddean(this.userInfo.dean)
//          this.setBinddorm(this.userInfo.dorm)
//        })
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
  @import "~common/stylus/mixin"
  a, a:hover {
    text-decoration: none;
    color: #333;
  }

  .home
    position fixed
    width 100%
    top 0
    bottom 0

  .title
    margin 15px 10px 0 10px
    font-size 14px
    text-align left
    word-wrap break-word
    no-wrap()

  .bottom
    position relative
    padding-top 10px
    font-size 12px
    color #AAAAAA

  .border
    padding-top 15px
    border-bottom 1px solid #000000
    margin-bottom 15px

  .type
    float left
    text-align left
    margin 0 10px
</style>
