<template>
  <div class="home">
    <cube-scroll :data="sliderNews">
      <div>
        <div style="height: 70px;">
          <cube-slide ref="slide" v-if="sliderNews.length">
            <cube-slide-item v-for="(news, index) in sliderNews" :key="index">
              <a :href="news.link">
                <div class="title">
                  {{news.title}}
                </div>
                <div class="bottom">
                  <div class="type">{{news.author}}</div>
                </div>
                <div class="border-i"></div>
              </a>
            </cube-slide-item>
            <div slot="dots"></div>
          </cube-slide>
        </div>
        <template v-for="data in datas">
          <slider-home :items="data.items" :name="data.name" :color="data.color"></slider-home>
        </template>
        <div style="height: 50px"></div>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import Slider from 'base/slider/slider'
  import SliderHome from 'base/slider-home/slider-home'
  import {setYYYFlag, getYYYFlag} from 'common/js/cache'

  export default {
    data() {
      return {
        sliderNews: [],
        datas: [
          {
            name: '学工在线',
            color: '#FF6699',
            items: [
              {
                name: '学工通知',
                link: '/app/online/xgtz/9a9870f3ebbd8fde2da5d1dd615b5f54',
                icon: 'iconfont icon-tongzhi bg-D81B60'
              },
              {
                name: '资助育人',
                link: '/app/online/zzyr',
                icon: 'iconfont icon-icon_shengyuandizhuxuedaikuan bg-00a65a'
              },
              {
                name: '易班在线',
                link: '/app/online/xgtz/55938ef9fe8c8e8a617a093c90cf19ee',
                icon: 'iconfont icon-yibanlogo bg-00c0ef'
              },
              {
                name: '办事指南',
                link: '/app/online/xgtz/e42c9b4c2866afef633ee98f7c49c155',
                icon: 'iconfont icon-zhuyizhishi bg-ff851b'
              },
              {
                name: '就业服务',
                link: '/app/online/jyfw',
                icon: 'iconfont icon-jiuyeshuai bg-00c0ef'
              }
            ]
          },
          {
            name: '教务服务',
            color: '#00CCFF',
            items: [
              {
                name: '成绩',
                link: '/app/dean/cj',
                icon: 'iconfont icon-chengjichaxun bg-00c0ef'
              },
              {
                name: '课表',
                link: '/app/dean/kcb',
                icon: 'iconfont icon-kebiaochaxun bg-00a65a'
              },
              {
                name: '图书馆',
                link: '/app/dean/tsg',
                icon: 'iconfont icon-tushuguan bg-ff851b'
              },
              {
                name: '选课',
                link: '/app/dean/xk',
                icon: 'iconfont icon-xuanke bg-00a65a'
              },
              {
                name: '评教',
                link: '/app/dean/pj',
                icon: 'iconfont icon-pingjiaopingxue bg-D81B60'
              }
            ]
          },
          {
            name: '生活服务',
            color: '#FF0033',
            items: [
              {
                name: '校车时刻',
                link: '/app/life/xcsk',
                icon: 'iconfont icon-xiaochexinxi bg-ff851b'
              },
              {
                name: '新生专栏',
                link: '/app/life/new-stu-index',
                icon: 'iconfont icon-xsybd bg-00c0ef'
              },
              {
                name: '二手市场',
                link: '/app/life/essc',
                icon: 'iconfont icon-ershou bg-D81B60'
              },
              {
                name: '学费查询',
                link: '/app/life/zfcx',
                icon: 'iconfont icon-zifeibiaozhun bg-00a65a'
              },
              {
                name: '宿舍用电',
                link: '/app/life/ssyd',
                icon: 'iconfont icon-yongdianchaxun bg-00c0ef'
              }
            ]
          },
          {
            name: '办公服务',
            color: '#CC00FF',
            items: [
              {
                name: '公文公告',
                link: '/app/office/gg',
                icon: 'iconfont icon-gongwen bg-ff851b'
              },
              {
                name: '会议安排',
                link: '/app/office/hyap',
                icon: 'iconfont icon-iconhuiyianpai01 bg-00a65a'
              },
              {
                name: '教务通知',
                link: '/app/office/jwtz',
                icon: 'iconfont icon-jiaowuguanli bg-D81B60'
              },
              {
                name: '校园新闻',
                link: '/app/office/xyxw',
                icon: 'iconfont icon-xiaoyuanxinwen bg-00c0ef'
              },
              {
                name: '讲座报告',
                link: '/app/office/jzbg',
                icon: 'iconfont icon-jiangzuo bg-ff851b'
              }
            ]
          }
        ]
      }
    },
    components: {
      SliderHome,
      Slider
    },
    activated() {
      this.updateNews()
    },
    mounted() {
      setTimeout(() => {
        this.getUserInfo()
      }, 20)
    },
    methods: {
      updateNews() {
        setTimeout(() => {
          this.$refs.slide && this.$refs.slide.refresh()
        }, 20)
      },
      showAlert() {
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
      getUserInfo() {
        this.$http.get('/getUser').then((res) => {
          this.userInfo = res
          if (this.userInfo.news === undefined) {
            window.location.href = 'http://f.yiban.cn/iapp173069'
          }
          this.sliderNews = [].concat(this.userInfo.news)
//          this.updateNews()
          // 更改过教务处密码的提示
          if (this.userInfo.dean.dean > 1) {
            this.showAlert()
          }
          // 保存教务处，宿舍，用户信息
          this.setUinfo(this.userInfo.yb)
          this.setBinddean(this.userInfo.dean)
          this.setBinddorm(this.userInfo.dorm)
        })
        if (getYYYFlag() === 1) {
          setYYYFlag(0)
          this.$router.push('/app/life/yyy')
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
  @import "~common/stylus/mixin"
  a, a:hover {
    text-decoration: none;
    color: #333;
  }

  .home
    position fixed
    width 100%
    top 0
    bottom 48px

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

  .border-i
    padding-top 15px
    /*border-bottom 1px solid #000000*/
    margin-bottom 15px

  .type
    float left
    text-align left
    margin 0 10px
</style>
