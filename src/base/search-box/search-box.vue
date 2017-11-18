<template>
  <div class="search-box">
    <i class="iconfont icon-search"></i>
    <input class="input-box"
           style=""
           ref="query" v-model="query"
           :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="iconfont icon-dismiss"></i>
    <!--<input ref="query" v-model="query" class="box" :placeholder="placeholder"/>-->

  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from 'common/js/util'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索电话'
      }
    },
    data () {
      return {
        query: ''
      }
    },
    methods: {
      clear () {
        this.query = ''
      },
      blur () {
        this.$refs.query.blur()
      }
    },
    created () {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 6px 6px
    height 24px
    border-radius 6px
    background-color #F4F4F4
    .input-box
      border 0
      outline none
      font-size 14px
      line-height 24px
      height 24px
      width 100%
      margin 0 5px
      background-color #F4F4F4
      &::placeholder
        color: #333
    .icon-search
      font-size: 16px
      color: #333
    .icon-dismiss
      font-size: 14px
      color: #333
</style>
