<template>
  <div class="news-gwgg">
    <news-view :items="items" ref="news"></news-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import NewsView from 'base/news-view/news-view'
  import { getNewsList } from 'api/news'

  export default {
    components: {
      NewsView
    },
    data () {
      return {
        items: [],
        page: 0
      }
    },
    mounted () {
      setTimeout(() => {
        getNewsList(1, this.page).then((res) => {
          this.items = this.items.concat(res)
        })
        this.$refs.news.$on('pullingUp', () => {
          this._getNews()
        })
      }, 20)
    },
    methods: {
      _getNews () {
        this.page++
        getNewsList(1, this.page).then((res) => {
          this.items = this.items.concat(res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
