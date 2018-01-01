<template>
  <div class="news">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-up="onPullingUp"
    >
      <div>
        <div class="box-body">
          <ul class="products-list product-list-in-box">
            <li class="item" v-for="item in items">
              <div class="product-info">
                <router-link tag="div" :to="{path: 'news', query:{page:item.id}}" class="title">
                  {{item.title}}
                </router-link>
                <div class="news-height">
                  <span class="product-description col-xs-6">{{item.author}}</span>
                  <span class="product-description col-xs-6 text-right">{{item.time}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getNewsList } from 'api/news'

  export default {
    data () {
      return {
        items: [],
        options: {
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多...',
              noMore: '已到最后...'
            }
          }
        },
        page: 0
      }
    },
    mounted () {
      setTimeout(() => {
        this._getNews()
      }, 20)
    },
    methods: {
      _getNews () {
        getNewsList(3, this.page).then((res) => {
          if (res.length) {
            this.items = this.items.concat(res)
          } else {
            this.$refs.scroll.forceUpdate()
          }
        })
        this.page++
      },
      onPullingUp () {
        setTimeout(() => {
          this._getNews()
        }, 500)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 48px
    left 0
    right 0

  .title
    font-size 16px
    color black

  .product-info
    margin 0

  .product-description
    padding 0

</style>
