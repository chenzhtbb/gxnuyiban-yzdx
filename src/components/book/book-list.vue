<template>
  <toggle>
    <div class="book-list">
      <scroll :data="items" style="height: 100%;" ref="scroll">
        <div class="col-xs-12">
          <div v-for="(item, index) in items">
            <div class="box box-warning">
              <div class="box-header with-border" @click="onClickCollapse(index)">
                <h3 class="box-title">{{item.department}}</h3>
                <div class="box-tools pull-right">
                  <button type="button" class="btn btn-box-tool"><i class="iconfont" :class="item.icon"></i>
                  </button>
                </div>
              </div>
              <div class="box-body" :style="item.style">
                <div class="box-footer no-padding">
                  <ul class="nav nav-stacked">
                    <li class="item" v-for="i in item.list" @click="tel(i.tel)">
                      <a>
                        {{i.name | wrap}}
                        <span class="pull-right tel">{{i.tel | areaCode}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </scroll>
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
      },
      wrap (val) {
        if (val.length > 14) {
          val = val.substring(0, 12) + '...'
        }
        return val
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
          this.items = res
          this.items[0].style = ''
          this.items[0].icon = 'fa-minus'
        })
      },
      onClickCollapse (index) {
        this.items[index].style = this.empty(this.items[index].style, index) ? 'display: none;' : ''
        setTimeout(() => {
          this.$refs.scroll && this.$refs.scroll.refresh()
        }, 20)
      },
      empty (val, index) {
        if (!val) {
          this.items[index].icon = 'icon-jia'
          return true
        } else {
          this.items[index].icon = 'fa-minus'
          return false
        }
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "~common/stylus/mixin"
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
