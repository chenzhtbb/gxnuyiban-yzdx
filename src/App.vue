<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--<div class="oauth" v-if="isHide">-->
      <!--<loading :title="'正在前往授权服务器...'"></loading>-->
    <!--</div>-->
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Tab from 'components/tab/tab'
  import Loading from 'base/loading/loading'
  import { getSessionToken } from 'common/js/cache'

  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      Tab,
      Scroll,
      Loading
    },
    methods: {
      isHide () {
        return getSessionToken
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .oauth
    z-index -1
    position fixed
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>
