<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Tab from 'components/tab/tab'

  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      Tab,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
