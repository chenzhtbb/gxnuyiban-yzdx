<template>
  <div class="news">

  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .news
    background #FFFFFF
    position fixed
    top 0
    bottom 48px
    left 0
    right 0
</style>
