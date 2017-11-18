<template>
  <div class="book">
    <div class="box-footer no-padding">
      <div class="search-box-wrapper">
        <search-box @query="queryKey"></search-box>
      </div>
      <ul class="nav nav-stacked" v-if="!searches.length">
        <li v-for="item in items" class="item">
          <router-link tag="a" :to="{path: '/app/booklist', query:{id:item.type}}">
            {{item.name}}
          </router-link>
        </li>
      </ul>
      <div class="list" v-else>
        <search-list :searches="searches" @select="tel"></search-list>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getBook, getSearchBookList } from 'api/book'
  import SearchBox from 'base/search-box/search-box'
  import SearchList from 'base/search-list/search-list'
//  import { checkRepeat } from 'common/js/util'
  import { phoneFun, browser } from 'common/js/ybh5'

  export default {
    components: {
      SearchBox,
      SearchList
    },
    data () {
      return {
        items: [],
        searches: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.getBook()
      }, 20)
    },
    methods: {
      tel (telephone) {
        let num = telephone
        if (telephone.length === 7) {
          num = '0773' + telephone
        }
        if (browser.versions.ios) {
          window.location.href = `tel:${num}`
        } else if (browser.versions.android) {
          phoneFun(num)
        }
      },
      queryKey (val) {
        console.log(val)
        if (val === '') {
          this.searches = []
        } else {
          getSearchBookList(val).then((res) => {
            this.searches = res
//            for (let i = 0; i < res.length; i++) {
//              let item = checkRepeat(res[i], this.searches)
//              if (item) {
//                this.searches.push(item)
//              }
//            }
//            console.log(this.searches)
          })
        }
      },
      getBook () {
        getBook().then((res) => {
          this.items = res.items
        })
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .book
    position fixed
    top 0
    bottom 48px
    left 0
    right 0
    z-index 100
    .search-box-wrapper
      background #ffffff
      margin 10px 15px 0 15px
      z-index 100
    .list
      z-index -1
      position fixed
      top 48px
      left 0
      right 0
      bottom 0
      height 100%
      background #ffffff

  .item
    border-bottom 1px solid #eeeeee
</style>
