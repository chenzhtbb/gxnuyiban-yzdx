<template>
  <toggle>
    <div class="xgb-notice">
      <scroll
        ref="wrapper"
        :data="items"
        style="height: 100%;"
        :pullUpLoad="pullUpLoad"
        @pullingUp="pullingUp"
      >
        <div>
          <div class="xgb-list">
            <div v-for="item in items" class="xgb-item">
              <router-link tag="div" class="xgb" :to="{path: 'notice', query:{page:item.key}}">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="bottom">
                  <div class="author">{{item.author}}</div>
                  <div class="time">{{item.time | formatTime}}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </scroll>
      <div class="loading-container" v-show="!items.length">
        <loading></loading>
      </div>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getXgbList } from 'api/xgb'

  export default {
    filters: {
      formatTime (val) {
        val = val.replace(/T[^]*Z/g, '')
        return val
      }
    },
    components: {
      Toggle,
      Scroll,
      Loading
    },
    data () {
      return {
        items: [],
        pullUpLoad: true,
        key: '',
        page: 0
      }
    },
    activated () {
      setTimeout(() => {
        this.key = this.$route.query.notice
        this.getXgbList()
      }, 20)
    },
    deactivated () {
      this.page = 0
      this.key = ''
      this.items = []
    },
    methods: {
      getXgbList () {
        getXgbList(this.key, this.page).then((res) => {
          if (res.length === 0) {
            return
          }
          this.items = this.items.concat(res)
          this.page++
        })
      },
      pullingUp () {
        setTimeout(() => {
          this.getXgbList()
        }, 20)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .xgb-notice
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
    .xgb-list
      top 10px
      background #FFFFFF
      .xgb-item
        padding 16px 10px
        /*margin 16px 10px*/
        border-bottom 1px solid #EEEEEE
        .xgb
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
