<template>
  <div class="home">
    <scroll class="home-scroll" :isScroll="isScroll" :data="sliderNews">
      <div>
        <div v-if="sliderNews.length">
          <slider class="slider-news" ref="slider">
            <div class="news" v-for="news in sliderNews">
              <a :href="news.link">
                <div class="title">
                  {{news.title}}
                </div>
                <div class="bottom">
                  <div class="type">{{news.author}}</div>
                  <!--<div class="time">一周前</div>-->
                </div>
              </a>
            </div>
          </slider>
          <div class="slider-icon">
            <div style="padding-bottom: 2px;">
              <p style="border-left: 5px solid #FF6699" text-left="">&nbsp;&nbsp;学工在线</p>
            </div>
            <slider dotPos="0">
              <home-online></home-online>
              <home-online2></home-online2>
            </slider>
            <div style="padding-bottom: 2px;">
              <p style="border-left: 5px solid #00CCFF" text-left="">&nbsp;&nbsp;教务服务</p>
            </div>
            <slider :showDot="hideDot" :autoPlay="hideDot">
              <home-dean></home-dean>
            </slider>
            <div style="padding-bottom: 2px;">
              <p style="border-left: 5px solid #FF0033" text-left="">&nbsp;&nbsp;生活服务</p>
            </div>
            <slider :showDot="hideDot" :autoPlay="hideDot">
              <home-life></home-life>
            </slider>
            <div style="padding-bottom: 2px;">
              <p style="border-left: 5px solid #CC00FF" text-left="">&nbsp;&nbsp;办公服务</p>
            </div>
            <slider :showDot="hideDot" :autoPlay="hideDot">
              <home-office></home-office>
            </slider>
          </div>
          <div style="height: 48px;"></div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import HomeDean from 'components/home/home-dean'
  import HomeLife from 'components/home/home-life'
  import HomeOffice from 'components/home/home-office'
  import HomeOnline from 'components/home/home-online'
  import HomeOnline2 from 'components/home/home-online-2'
  import { getSliderNews } from 'api/news'

  export default {
    data () {
      return {
        hideDot: false,
        isScroll: true,
        sliderNews: []
      }
    },
    activated () {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    components: {
      Slider,
      HomeDean,
      HomeLife,
      HomeOffice,
      HomeOnline,
      HomeOnline2,
      Scroll
    },
    mounted () {
      setTimeout(() => {
        getSliderNews().then((res) => {
          this.sliderNews = res
        })
        this.$refs.slider && this.$refs.slider.refresh()
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
    overflow: hidden
    .home-scroll
      height 100%
      .slider-news
        margin 9px
        height 50px
        border-bottom 1px solid #666666
        .news
          &.slider-item
            text-align left
            padding-left 10px
          .title
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
              padding-right 20px
      .slider-icon
        div
          p
            margin 8px 8px
</style>
