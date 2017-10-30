<template>
  <div class="list-info">
    <scroll class="list-view" :data="data">
      <div>
        <ul>
          <li v-for="item in data" class="list-group">
            <div class="top">
              <img class="avatar"
                   src="https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e5611bbc9d16fdfad86cc1e88cb4eb69/a08b87d6277f9e2f4586fd9f1f30e924b999f3f2.jpg">
              <div class="top-body">
                <span class="name">{{item.username}}</span>
                <p class="time">{{item.datetime | date}}</p>
              </div>
              <div class="tel">联系他:{{item.tel}}</div>
            </div>
            <div class="content">
              <p>物品：{{item.goods}}</p>
              <p>时间：{{item.datetime}}</p>
              <p>地点：{{item.site}}</p>
              <p>
                补充说明：{{item.content}}</p>
            </div>
            <div class="img-list" v-if="item.img!==0">
              <img
                v-for=" img in item.img"
                @click="clickImg(item.img)"
                v-lazy="img.imgurl">
            </div>
          </li>
        </ul>
        <div style="position: relative; height: 10px;"></div>
      </div>
    </scroll>
    <preview ref="open"></preview>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Preview from 'base/preview/preview'

  export default {
    data () {
      return {}
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll,
      Preview
    },
    methods: {
      clickImg (images) {
        console.log(images)
        this.$refs.open.show(images)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  ul
    margin 0
    padding 0

  .list-info
    height 100%
    .list-view
      position relative
      width 100%
      height 100%
      overflow hidden
      background #EEEEEE
      .list-group
        padding 5px 16px
        background #FFFFFF
        border-bottom 10px solid #EEEEEE
        .img-list
          position relative
          height 72px
          img
            width 72px
            height 72px
            margin-right 5px
        .content
          position relative
          p
            font-size 14px
            margin 5px 0
        .top
          height 60px
          .avatar
            position absolute
            width 50px
            height 50px
            border-radius 50%
          .top-body
            position absolute
            left 50px
            height 50px
            padding-left 26px
            margin-top 8px
            .name
              font-size 16px
              height 25px
            .time
              margin 5px 0
              font-size 14px
              color #FFFFF
              height 25px
          .tel
            margin-top 8px
            position absolute
            right 20px
            font-size 14px
            color #0066FF

</style>
