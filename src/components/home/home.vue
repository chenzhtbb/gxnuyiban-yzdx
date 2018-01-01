<template>
  <div class="home">
    <cube-scroll :data="items">
      <div>
        <div v-if="items.length">
          <cube-slide>
            <cube-slide-item v-for="(item, index) in items" :key="index">
              <a :href="item.link">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="bottom">
                  <div class="type">{{item.author}}</div>
                </div>
              </a>
            </cube-slide-item>
            <!--<div slot="dots" :current="currentPageIndex" :dots="dots">-->
            <!--<span :class="{active: currentPageIndex === index}" v-for="(item, index) in dots"></span>-->
            <!--</div>-->
          </cube-slide>
          <div style="padding-bottom: 2px;">
            <p style="border-left: 5px solid #FF6699" text-left="">&nbsp;&nbsp;学工在线</p>
          </div>
          <cube-slide :auto-play="false">
            <cube-slide-item>
              <home-online></home-online>
              <!--<home-online2></home-online2>-->
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
          <div style="padding-bottom: 2px;">
            <p style="border-left: 5px solid #00CCFF" text-left="">&nbsp;&nbsp;教务服务</p>
          </div>
          <cube-slide :auto-play="false">
            <cube-slide-item>
              <home-dean></home-dean>
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
          <div style="padding-bottom: 2px;">
            <p style="border-left: 5px solid #FF0033" text-left="">&nbsp;&nbsp;生活服务</p>
          </div>
          <cube-slide :auto-play="false">
            <cube-slide-item>
              <home-life></home-life>
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
          <div style="padding-bottom: 2px;">
            <p style="border-left: 5px solid #CC00FF" text-left="">&nbsp;&nbsp;办公服务</p>
          </div>
          <cube-slide :auto-play="false">
            <cube-slide-item>
              <home-office></home-office>
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
        </div>
        <div style="height: 48px;"></div>
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
  import { getSliderNews } from 'api/news'

  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      HomeDean,
      HomeLife,
      HomeOffice,
      HomeOnline,
      HomeOnline2
    },
    mounted () {
      setTimeout(() => {
        getSliderNews().then((res) => {
          this.items = res
        })
      }, 20)
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

  /*.title
    font-size 14px
    word-wrap break-word
    no-wrap()

  .bottom
    position relative
    padding-top 15px
    font-size 12px
    color #AAAAAA

  .type
    float left
    text-align left

  .time
    text-align right
    padding-right 20px*/
</style>
