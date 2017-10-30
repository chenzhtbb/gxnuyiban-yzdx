<template>
  <div class="lost">
    <div style="position: relative; height: 10px;"></div>
    <div class="insert">
      <div @click="putInfo()" class="iconfont icon-jia icon"></div>
    </div>
    <list-info :data="items"></list-info>
  </div>
</template>

<script type="text/ecmascript-6">
  import ListInfo from 'base/list-info/list-info'
  import { getLostList } from 'api/lost-and-found'

  export default {
    name: 'lost',
    components: {
      ListInfo
    },
    data () {
      return {
        items: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.getLostList()
      }, 20)
    },
    methods: {
      getLostList () {
        getLostList().then((res) => {
          this.items = res.list
        })
      },
      putInfo () {
        this.$router.push('put')
      }
    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .lost
    position fixed
    width 100%
    top 44px
    bottom 0
    .insert
      position fixed
      z-index 150
      bottom 15px
      right 15px
      .icon
        width 24px
        height 24px
        border-radius 50%
        border 16px solid #0099ff
        background #0099ff
        font-size 2rem
        line-height 1
        color #fff
        text-align center
        &.iconfont
          font-size 24px
</style>
