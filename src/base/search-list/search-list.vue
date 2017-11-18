<template>
  <div class="search-list">
    <scroll :data="searches" class="scroll" ref="scroll" :isToTop="isToTop">
      <div>
        <transition-group name="list" tag="ul">
          <!--<li :key="{index: -1}" class="search-item" style="border: none;">-->
          <!--<div style="height: 40px;"></div>-->
          <!--</li>-->
          <li :key="index" class="search-item" @click="selectItem(item)" v-for="(item, index) in searches">
            <span class="text">{{item.name | wrap}}</span>
            <span class="tel">{{item.tel | areaCode}}</span>
          </li>
          <li :key="{index: 998}" class="search-item" style="border: none;">
            <div style="height: 80px;"></div>
          </li>
        </transition-group>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

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
    data () {
      return {
        isToTop: true
      }
    },
    components: {
      Scroll
    },
    props: {
      searches: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem (item) {
        this.$emit('select', item.tel)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  ul
    margin 0
    padding 0

  .scroll
    height: 100%;
    position: fixed;
    top: 40px
    bottom 40px
    left: 0;
    right: 0;

  .search-list
    .search-item
      display: flex
      align-items: center
      height: 40px
      overflow: hidden
      border-bottom 1px solid #eeeeee
      &.list-enter-active, &.list-leave-active
        transition: all 0.1s
      &.list-enter, &.list-leave-to
        height: 0
      .text
        padding-left 15px
        flex: 1
        color: #333
      .tel
        padding-right 15px
        color #0099FF
</style>
