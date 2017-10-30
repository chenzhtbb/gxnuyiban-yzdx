<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="group in data" class="list-group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" class="list-group-item">
            <img :src="item.avatar"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .listview
    position relative
    width 100%
    height 100%
    overflow hidden
    background #EEEEEE
    .list-group
      padding-bottom 30px
      .list-group-title
        height 30px
        line-height 30px
        padding-left 20px
        font-size 12px
        /*color */
        background #FFFFFF
      .list-group-item
        display flex
        align-items center
        padding 20px 0 0 30px
        .avatar
          width 50px
          height 50px
        .name
          margin-left 20px
          /*color */
          font-size 14px

</style>
