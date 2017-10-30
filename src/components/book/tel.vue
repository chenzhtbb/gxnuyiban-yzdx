<template>
  <div class="tel">
    <iframe :src="srcurl"></iframe>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        srcurl: ''
      }
    },
    mounted () {
      setTimeout(() => {
        let num = this.$route.query.num
        this.srcurl = `/yzdx/tel.html?num=${num}`
      }, 20)
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
