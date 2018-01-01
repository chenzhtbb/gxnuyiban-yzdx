<template>
  <div class="news-view">
    <cube-scroll
      ref="scroll"
      :data="items"
      :options="options"
      @pulling-up="onPullingUp"
    >
      <div>
        <div class="news-list">
          <div v-for="item in items" class="news-item">
            <router-link tag="div" class="news" :to="{path: 'news', query:{page:item.id}}">
              <div class="title">
                {{item.title | top(item.top)}}
              </div>
              <div class="bottom">
                <div class="author">{{item.author}}</div>
                <div class="time">{{item.time}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </cube-scroll>
    <div style="position: relative; height: 70px;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'

  export default {
    filters: {
      top (value, top) {
        if (top === '1') {
          return '【置顶】' + value
        }
        return value
      }
    },
    components: {
      Scroll,
      Loading
    },
    data () {
      return {
        options: {
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多...',
              noMore: '已到最后...'
            }
          }
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.$refs.wrapper.$on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }, 20)
    },
    props: {
      items: {
        type: Array,
        default: []
      },
      startY: {
        type: Number,
        default: 0
      }
    },
    watch: {
      items () {
        this.$refs.scroll.forceUpdate()
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news-view
    background #FFFFFF
    position fixed
    top 0
    bottom 48px
    left 0
    right 0
    .news-list
      top 10px
      background #FFFFFF
      .news-item
        padding 16px 10px
        /*margin 16px 10px*/
        border-bottom 1px solid #EEEEEE
        .news
          .title
            font-size 16px
          .bottom
            top 14px
            padding 0
            position relative
            color #888888
            font-size 14px
            .author
              float left
            .time
              padding-left 10px
              text-align right
            .type
              text-align right

  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
