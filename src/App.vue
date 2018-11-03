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
      // 电脑端
      if (!browser.versions.mobile) {
        setTimeout(() => {
          this.$createDialog(
            {
              type: 'alert',
              content: '本应用仅限于在易班手机客户端访问',
              onConfirm: () => {
                window.location.href = 'http://yiban.gxnu.edu.cn'
              }
            }
          ).show()
        }, 20)
      }
    }
  }
</script>

