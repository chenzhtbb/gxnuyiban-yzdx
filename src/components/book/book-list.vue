<template>
  <toggle>
    <div class="book-list">
      <scroll :data="items" style="height: 100%;">
        <div class="list">
          <ul>
            <li class="item" v-for="item in items" @click="tel(item.tel)">
              <div class="text">
                <p class="name">{{item.name}}</p>
              </div>
              <div class="item-left">
                <span>{{item.tel | areaCode}}</span>
              </div>
            </li>
          </ul>
          <div style="position: relative; height: 20px;"></div>
        </div>
      </scroll>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Scroll from 'base/scroll/scroll'
  import { getBookList } from 'api/book'
  import { phoneFun } from 'common/js/ybh5'

  export default {
    filters: {
      areaCode (val) {
        if (val.length === 7) {
          return '0773-' + val
        } else {
          return val
        }
      }
    },
    components: {
      Toggle,
      Scroll
    },
    data () {
      return {
        items: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.getBookList()
      }, 20)
    },
    methods: {
      tel (telephone) {
        let num = telephone
        if (telephone.length === 7) {
          num = '0773' + telephone
        }
        phoneFun(num)
//        this.$router.push({
//          path: `/book/booklist/tel`,
//          query: {num: num}
//        })
      },
      getBookList () {
        let page = this.$route.query.id
        getBookList(page).then((res) => {
          this.items = res.items
        })
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getNewsPage'
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .book-list
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #FFFFFF
    .list
      ul
        position relative
        left 0
        padding 0 5px
        margin-top 0
        li
          position relative
          background #FFFFFF
          .item-left
            padding-right 10px
            color #0099FF
      .item
        display flex
        align-items center
        box-sizing border-box
        padding-left 20px
        border-bottom 1px solid #EEEEEE
        .icon
          padding-right 20px
        .text
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 14px;
          overflow: hidden;
          font-size: 14px;
</style>
