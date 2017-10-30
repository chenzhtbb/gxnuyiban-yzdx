<template>
  <div class="book">
    <div class="list">
      <ul>
        <div v-for="item in items">
          <li @click="selectItem(item)" class="item">
            <div class="text">
              <p class="name">{{item.name}}</p>
            </div>
            <div class="item-left">
              <i class="iconfont icon-jiantouyou"></i>
            </div>
          </li>
        </div>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scorll from 'base/scroll/scroll'
  import { getBook } from 'api/book'

  export default {
    components: {
      Scorll
    },
    data () {
      return {
        items: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.getBook()
      }, 20)
    },
    methods: {
      getBook () {
        getBook().then((res) => {
          this.items = res.items
        })
      },
      selectItem (item) {
        this.$router.push({
          path: `/app/booklist`,
          query: {id: item.type}
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .book
    position relative
    top 0
    bottom 0
    left 0
    right 0
    .list
      .list-title
      ul
        position absolute
        left 0
        right 5px
        padding 0
        margin-top 0
        li
          position relative
          background #FFFFFF
          .item-left
            padding-right 10px
            color #CCCCCC
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
