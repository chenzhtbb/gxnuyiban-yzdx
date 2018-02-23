<template>
  <toggle>
    <div class="pdf-news">
    </div>
  </toggle>
</template>

<script type="text/ecmascript-6">
  import Toggle from 'base/toggle/toggle'

  export default {
    components: {
      Toggle
    },
    data () {
      return {
        pdfurls: '//cdn.mozilla.net/pdfjs/tracemonkey.pdf',
        isshowpdf: true
      }
    },
    methods: {
      closepdf () {
        this.isshowpdf = false
      },
      pdferr (errurl) {
        console.log(errurl)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .pdf-news
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE
</style>
