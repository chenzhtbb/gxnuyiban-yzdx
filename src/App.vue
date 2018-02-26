<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import { browser } from 'common/js/ybh5'

  export default {
    mounted () {
      setTimeout(() => {
        if (process.env.NODE_ENV === 'production' && !browser.versions.mobile) {
          window.location.href = 'http://yiban.gxnu.edu.cn/score'
        }
      }, 20)
    }
  }
</script>
