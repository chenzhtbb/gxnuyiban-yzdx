<template>
  <div class="news-hyap">
    <iframe src="http://yiban.gxnu.edu.cn/gxnunews/index.php/Home/Index/index2"></iframe>
    <!--<pdf-news></pdf-news>-->
    <!--<news-view :items="items"></news-view>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import NewsView from 'base/news-view/news-view'
  import PdfNews from './pdf-news'
  import { getNewsList } from 'api/news'

  export default {
    components: {
      NewsView,
      PdfNews
    },
    data () {
      return {
        items: [],
        page: 0
      }
    },
    mounted () {
      setTimeout(() => {
        this._getNews()
        this.$refs.news.$on('pullingUp', () => {
          this._getNews()
        })
      }, 20)
    },
    methods: {
      _getNews () {
        getNewsList(2, this.page).then((res) => {
          this.items = this.items.concat(res)
        })
        this.page++
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  iframe
    border 0
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    padding-bottom 20px
    width 100%
    height 100%
</style>
