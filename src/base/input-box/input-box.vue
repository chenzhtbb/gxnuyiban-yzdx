<template>
  <div class="input-box">
    <i class="iconfont icon-renyuan icon-input"></i>
    <input class="box" :placeholder="placeholder" :type="type" @click="">
    <i class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: '请输入...'
      }
    },
    mounted () {

    },
    methods: {

    }
  }

</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .input-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 6px 6px
    height 40px
    border-radius 6px
    background #FFFFFF
    .icon-input
      font-size 24px
    .box
      flex 1
      margin 0 5px
      line-height 18px
      border 0
      outline none
      font-size 16px
      &::placeholder
        color chocolate
    .icon-dismiss
      font-size 14px
</style>
