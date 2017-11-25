<template>
  <div class="news-gwgg">
    <div class="news-tab" v-if="startY">
      <div class="tab">
        <div class="tab-item tab-item-active" @click="active(6)" ref="gw">
          <span class="tab-link">公文</span>
        </div>
        <div class="tab-item" @click="active(1)" ref="gg">
          <span class="tab-link">公告</span>
        </div>
      </div>
    </div>
    <div class="news">
      <news-view :items="items" ref="news" :startY="startY"></news-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NewsView from 'base/news-view/news-view'
  import { getNewsList } from 'api/news'
  import { mapGetters } from 'vuex'
  import { addClass, moveClass, hasClass } from 'common/js/dom'

  export default {
    components: {
      NewsView
    },
    data () {
      return {
        items: [],
        cache1: [],
        cache6: [],
        page: 0,
        page1: 0,
        page6: 0,
        startY: 0
      }
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    mounted () {
      setTimeout(() => {
        this.type = 1
        if (this.uinfo.yb_identity !== '学生') {
          this.startY = 32
          this.type = 6
          this.page6 = 1
        } else {
          this.page1 = 1
        }
        this._getNews(this.type)
        this.$refs.news.$on('pullingUp', () => {
          this._getNews(this.type)
        })
      }, 20)
    },
    methods: {
      _getNews (type) {
        if (type === 1) {
          this.page = this.page1++
        } else {
          this.page = this.page6++
        }
        getNewsList(type, this.page).then((res) => {
          this.items = this.items.concat(res)
        })
      },
      active (type) {
        if (type === 1) {
          if (hasClass(this.$refs.gg, 'tab-item-active')) {
            return
          }
          addClass(this.$refs.gg, 'tab-item-active')
          moveClass(this.$refs.gw, 'tab-item-active')
          this.cache6 = this.items
          this.items = this.cache1
        } else {
          if (hasClass(this.$refs.gw, 'tab-item-active')) {
            return
          }
          addClass(this.$refs.gw, 'tab-item-active')
          moveClass(this.$refs.gg, 'tab-item-active')
          this.cache1 = this.items
          this.items = this.cache6
        }
        this.type = type
        this._getNews(type)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news-gwgg
    .news
      position fixed
      left 0
      right 0
      bottom 0
      top 32px
      z-index -1
    .news-tab
      border-bottom 1px solid #eeeeee
      .tab
        display flex
        height 32px
        line-height 32px
        background #FFFFFF
        .tab-item
          flex 1
          text-align center
          .tab-link
            padding-bottom 5px
          &.tab-item-active
            .tab-link
              color #0099FF
              border-bottom 2px solid #66CCFF
</style>
