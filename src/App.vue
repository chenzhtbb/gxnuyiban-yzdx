<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'

  export default {
    components: {
      Tab
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
