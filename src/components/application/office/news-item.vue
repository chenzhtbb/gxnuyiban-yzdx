<template>
  <div class="news">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-up="onPullingUp">
      <div class="box-body">
        <ul class="products-list product-list-in-box">
          <template v-for="item, index in items">
            <router-link class="item" tag="li" :to="{ path: `news/${item.id}`}">
              <div class="product-info">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="news-height">
                  <span class="product-description col-xs-6">{{item.author}}</span>
                  <span class="product-description col-xs-6 text-right">{{item.time}}</span>
                </div>
              </div>
            </router-link>
          </template>
        </ul>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getNewsList } from 'api/office'

  export default {
    props: {
      type: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        items: [
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          },
          {
            id: '1',
            title: '1',
            author: '1',
            time: '1'
          }
        ],
        options: {
          observeDOM: false,
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多...',
              noMore: '已到最后...'
            }
          }
        },
        page: 1
      }
    },
    mounted () {
      setTimeout(() => {
        this._getNews()
      }, 20)
    },
    methods: {
      _getNews () {
        getNewsList(this.type, this.page).then((res) => {
          if (res.length) {
            this.items = this.items.concat(res)
            this.page++
          } else {
            this.$refs.scroll.forceUpdate()
          }
        })
      },
      onPullingUp () {
        setTimeout(() => {
          this._getNews()
        }, 300)
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

  .news-height
    border-top 10px solid #ffffff

  .item
    padding-bottom 0

  .box-body
    padding-top 0
</style>
