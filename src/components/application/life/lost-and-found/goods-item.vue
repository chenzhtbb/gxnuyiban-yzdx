<template>
  <div class="goods-item">
    <cube-scroll
      :data="items"
      :options="options"
      @pulling-up="onPullingUp"
      style="background: #EEEEEE;">
      <div>
        <ul class="products-list product-list-in-box">
          <template v-for="item in items">
            <router-link class="item" tag="li" :to="{ path: `goods/${item.id}`}">
              <div class="box-header with-border">
                <div class="user-block">
                  <img class="img-circle" :src="item.photo">
                  <span class="username"><a href="#">{{item.author}}</a></span>
                  <span class="description">{{item.time}}</span>
                </div>
                <div class="box-tools">
                  <div>联系他</div>
                </div>
              </div>
              <div class="box-body">
                <div>时间：<span>2018年03月10日</span></div>
                <div>地点：<span>育才校区逸夫楼</span></div>
                <div>物品描述：<span>黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜黑色镜框眼镜</span></div>
              </div>
              <div class="box-footer">
                <x-scroll :data="item.img">
                  <img
                    v-for="img in item.img"
                    :src="img" v-img="{group: item.id}"
                    style="width: 128px;height: 128px;">
                </x-scroll>
              </div>
            </router-link>
          </template>
        </ul>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import XScroll from 'base/scroll/x-scroll'

  export default {
    props: {
      type: {
        type: Number,
        default: 0
      }
    },
    components: {
      XScroll
    },
    methods: {
      onPullingUp () {
        setTimeout(() => {
        }, 300)
      }
    },
    data () {
      return {
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
        items: [
          {
            id: 1,
            author: 'abc',
            photo: 'http://iph.href.lu/72x72',
            title: 'http://iph.href.lu/72x72http://iph.href.lu/72x72',
            content: 'http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72',
            time: '2018-02-02',
            img: [
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128',
              'http://iph.href.lu/375x667',
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128',
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128',
              'http://iph.href.lu/375x667',
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128',
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128',
              'http://iph.href.lu/375x667',
              'http://iph.href.lu/123x128',
              'http://iph.href.lu/124x128',
              'http://iph.href.lu/125x128'
            ]
          },
          {
            id: 2,
            author: 'abc',
            photo: 'http://iph.href.lu/72x72',
            content: 'http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72',
            time: '2018-02-02',
            img: [
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128'
            ]
          },
          {
            id: 3,
            author: 'abc',
            photo: 'http://iph.href.lu/72x72',
            content: 'http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72',
            time: '2018-02-02',
            img: [
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128'
            ]
          },
          {
            id: 4,
            author: 'abc',
            photo: 'http://iph.href.lu/72x72',
            content: 'http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72http://iph.href.lu/72x72',
            time: '2018-02-02',
            img: [
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128',
              'http://iph.href.lu/128x128'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .goods-item
    background #FFFFFF
    position fixed
    top 44px
    bottom 0
    left 0
    right 0

  .item
    padding 0

  .box-body
    padding 10px 10px 0 10px
    div
      span
        word-wrap break-word

  .box-footer
    border-bottom solid 10px #EEEEEE
</style>
