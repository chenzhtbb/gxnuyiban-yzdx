<template>
  <div class="news-gwgg">
    <div class="news-tab" v-if="startY">
      <div class="tab">
        <div class="tab-item tab-item-active" @click="_getNews(6)">
          <span class="tab-link">公文</span>
        </div>
        <div class="tab-item" @click="_getNews(1)">
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

  export default {
    components: {
      NewsView
    },
    data () {
      return {
        items: [],
        page: 0,
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
        let type = 1
        if (this.uinfo.yb_type === 'tea') {
          this.startY = 32
          type = 6
        }
        this._getNews(type)
        this.$refs.news.$on('pullingUp', () => {
          this._getNews()
        })
      }, 20)
    },
    methods: {
      _getNews (type) {
        getNewsList(type, this.page).then((res) => {
          this.items = this.items.concat(res)
        })
        this.page++
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
