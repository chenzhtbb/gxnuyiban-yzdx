<template>
  <transition name="slide">
    <div class="news">
      <scroll style="height: 100%;" :data="[]">
        <div>
          <div class="news-header">
            <div class="row title">
              <div class="col-xs-12 text-center">
                titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
              </div>
            </div>
            <div class="row p-text">
              <div class="col-xs-6 text-left">gxnu</div>
              <div class="col-xs-6 text-right">2018/02/22</div>
            </div>
          </div>
          <div class="news-body">
            <div v-html="content"></div>
          </div>
          <div class="news-footer">
            <!--<template v-for="attachment in item.attachment">-->
            <ul ref="download">
              <li style="list-style-type: square">
                <a @click="download($event)">附件1：</a>
              </li>
            </ul>
            <!--</template>-->
          </div>
        </div>
      </scroll>
      <iframe></iframe>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import { getNews } from 'api/news'
  import { downloadFun, browser } from 'common/js/ybh5.js'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        item: [],
        content: '',
        isToTop: true,
        downloadList: []
      }
    },
    activated () {
      /* eslint-disable */
      this.content = `<div><p><span>各学院<span><font>(</font></span>部<span><font>)</font></span>、各单位：<span></span></span></p><p><span><span><font></font></span></span><span>根据桂林市公安局《</span><span>环广西公路自行车世界巡回赛“桂林站”预热赛交通管制通告》精神，</span><span><span><font>2017</font></span>年环广西公路自行车世界巡回赛桂林站预热赛将于<span><font>2017</font></span>年<span><font>9</font></span>月<span><font>29</font></span>日（星期五）在桂林市举行，交警部门将于<span><font>29</font></span>日上午<span><font>8:15</font></span>分开始，对桂阳公路全线双向封闭管制，预计<span><font>12:00</font></span>解除管制。为了保证教职工顺利往返雁山校区，</span><span>现将</span><span><font>9</font></span><span>月</span><span><font>29</font></span><span>日上午的校班车乘车时间作适当调整，具体乘车时间如下：</span><span></span></p><div><table><tbody><tr><td><p><b><span>发车<span></span></span></b></p><p><b><span>时间</span></b><b><span></span></b></p></td><td><p><b><span>王城校区、育才校区<span></span></span></b></p></td><td><p><b><span>发车<span></span></span></b></p><p><b><span>时间</span></b><b><span></span></b></p></td><td><p><b><span>雁山校区<span></span></span></b></p></td></tr><tr><td><p><b><span>7</span></b><b><span>：</span></b><b><span>10</span></b><b><span></span></b></p></td><td><p><b><span>王城→育才→雁山<span></span></span></b></p></td><td><p><b><span>12</span></b><b><span>：</span></b><b><span>15</span></b><b><span></span></b></p></td><td><p><b><span>雁山→育才→王城<span></span></span></b></p></td></tr><tr><td><p><b><span>7</span></b><b><span>：</span></b><b><span>25</span></b><b><span></span></b></p></td><td><p><b><span>育才→雁山<span></span></span></b></p></td><td><p><b><span>12</span></b><b><span>：</span></b><b><span>15</span></b><b><span></span></b></p></td><td><p><b><span>雁山→育才<span></span></span></b></p></td></tr><tr><td><p><b><span>8</span></b><b><span>：</span></b><b><span>30</span></b></p><p><b><span>（停运）</span></b><b><span></span></b></p></td><td><p><b><span>王城→育才→雁山<span></span></span></b></p></td><td><p><b><span>8:10</span></b></p><p><b><span>（停运）</span></b><b><span></span></b></p></td><td><p><b><span>雁山→育才<span></span></span></b></p></td></tr><tr><td><p><b><span>8</span></b><b><span>：</span></b><b><span>55</span></b></p><p><b><span>（停运）</span></b><b><span></span></b></p></td><td><p><b><span>育才→雁山<span></span></span></b></p></td><td><p><b><span>10:40</span></b></p><p><b><span>（停运）</span></b><b><span></span></b></p></td><td><p><b><span>雁山→育才→王城<span></span></span></b></p></td></tr><tr><td><p><b><span></span></b></p></td><td><p><b><span></span></b></p></td><td><p><b><span>10:40</span></b></p><p><b><span>（停运）</span></b><b><span></span></b></p></td><td><p><b><span>雁山→育才</span></b><b><span></span></b></p></td></tr></tbody></table></div><p><span>注：</span><span>其它班车车次不变。<span></span></span></p><p><span></span></p><div>未尽事宜，请联系后勤服务集团运输服务中心黄老师，电话 13977394911。</div><div></div><div></div><div></div><div></div><p><span>后勤基建处<span></span></span></p><p><span>后勤服务集团<span></span></span></p><p><span>2017</span><span>年<span><font>9</font></span>月<span><font>28</font></span>日<span></span></span></p></div>`
      this.content = `<div>${this.content}<style scoped>p{text-indent:2em;font-size:16px;}font{word-wrap:break-word;font-size:16px;}td{text-align:center;vertical-align:middle;border:solid #000; border-width:0px 1px 1px 0px; padding:10px 0px;}table{border:solid #000; border-width:1px 0px 0px 1px;}td>p {text-indent: 0;}</style></div>`
      console.log(this.$route.params.id)
      setTimeout(() => {
        if (this.item.length) {
          return
        }
        this.getNewsPage()
      }, 20)
    },
    deactivated () {
      this.item = []
    },
    methods: {
      download (event) {
        console.log(event)
//        return false
      },
      aDownload (target) {
        // http://www.gxnu.edu.cn/notice/download/
        if (this.downloadList[target].search(/\dhttp:/i) < 0) {
          if (browser.versions.ios) {
            window.location.href = this.downloadList[target]
          } else if (browser.versions.android) {
            downloadFun(this.downloadList[target])
          }
        } else {
          let link = this.downloadList[target].match(/\dhttp:.*$/i)[0]
          link = link.match(/http:.*$/i)[0]
          window.location.href = link
        }
      },
      getNewsPage () {
        let page = this.$route.query.page
        getNews(page).then((res) => {
          this.item = res
          setTimeout(() => {
            let alist = document.getElementsByTagName('a')
            for (let i = 0; i < alist.length; i++) {
              this.downloadList.push(alist[i].href)
              alist[i].href = 'javascript:;'
              alist[i].target = i
              console.log(alist[i])
              alist[i].onclick = (e) => {
                this.aDownload(e.target.target) // 下载附件
              }
            }
          }, 400)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .slide-enter-active, .slide-leave-active
    transition all 0.3s

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)

  iframe
    z-index -1
    width 0
    height 0
    border 0
    display none

  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 100
    .news-header
      padding 8px
      border-bottom 1px solid #EEE
      .title
        word-wrap break-word
        font-size 18px
      .p-text
        font-size 16px
    .news-body
      padding 8px
      font-size 16px
    .news-footer
      padding 8px
      border-top 1px solid #EEE
      ul
        margin-left 18px
        li
          font-size 20px
          a
            font-size 16px
</style>
