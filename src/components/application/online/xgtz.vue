<template>
  <div class="notice">
    <cube-scroll
      :data="items"
      :options="options"
      @pulling-up="onPullingUp">
      <div class="box-body">
        <ul class="products-list product-list-in-box">
          <template v-for="item, index in items">
            <router-link class="item" tag="li" :to="{ path: `/app/online/notice/${item.key}`}">
              <div class="product-info">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="news-height">
                  <span class="product-description col-xs-6">{{item.author}}</span>
                  <span class="product-description col-xs-6 text-right">{{item.time | formatTime}}</span>
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
  export default {
    props: {
      type: {
        type: Number,
        default: 0
      }
    },
    filters: {
      formatTime (val) {
        val = val.replace(/T[^]*Z/g, '')
        return val
      }
    },
    data () {
      return {
        items: [],
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
    activated () {
      setTimeout(() => {
        this.key = this.$route.params.type
        this.getItems()
      }, 20)
    },
    deactivated () {
      this.page = 1
      this.items = []
    },
    methods: {
      getItems () {
        this.$http.get('/getXgbList', {
          key: this.key,
          page: this.page
        }).then((res) => {
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
          this.getItems()
        }, 300)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .notice
    background #FFFFFF
    position fixed
    top 0
    bottom 0
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
    padding-top 10px

  .item
    padding-bottom 0

  .box-body
    padding-top 0
</style>
