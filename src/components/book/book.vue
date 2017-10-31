<template>
  <div class="book">
    <div class="box-footer no-padding">
      <ul class="nav nav-stacked">
        <li v-for="item in items" class="item">
          <router-link tag="a" :to="{path: '/app/booklist', query:{id:item.type}}">
            {{item.name}}
          </router-link>
        </li>
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

  .item
    border-bottom 1px solid #eeeeee
</style>
