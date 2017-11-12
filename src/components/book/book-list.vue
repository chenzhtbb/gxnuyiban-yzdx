<template>
  <toggle>
    <div class="book-list">
      <scroll :data="items" style="height: 100%;">
        <div class="box-footer no-padding">
          <ul class="nav nav-stacked">
            <li class="item" v-for="item in items" @click="tel(item.tel)">
              <a>
                {{item.name}}
                <span class="pull-right tel">{{item.tel | areaCode}}</span>
              </a>
            </li>
          </ul>
        </div>
      </scroll>
      <div id="yibanhtml5"></div>
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'
  import Scroll from 'base/scroll/scroll'
  import { getBookList } from 'api/book'
  import { phoneFun, browser } from 'common/js/ybh5'

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
    activated () {
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
        if (browser.versions.ios) {
          window.location.href = `tel:${num}`
        } else if (browser.versions.android) {
          phoneFun(num)
        }
      },
      getBookList () {
        let page = this.$route.query.id
        getBookList(page).then((res) => {
          this.items = res.items
        })
      }
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

  .item
    border-bottom 1px solid #eeeeee

  .tel
    padding-right 10px
    color #0099FF
</style>
