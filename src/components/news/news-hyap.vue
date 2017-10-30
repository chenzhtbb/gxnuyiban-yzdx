<template>
  <div class="news-hyap">
    <pdf-news></pdf-news>
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

</style>
