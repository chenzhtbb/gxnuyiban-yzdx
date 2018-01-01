<template>
  <div class="grid-center">
    <div @click="gotoDean('/app/score')">
      <span class="iconfont icon-chengjichaxun icon bg-00c0ef"></span>
      <span class="grid-center">成绩</span>
    </div>
    <div @click="gotoDean('/app/classtable')">
      <span class="iconfont icon-kebiaochaxun icon bg-00a65a"></span>
      <span class="grid-center">课表</span>
    </div>
    <router-link tag="div" to="/app/library">
      <span class="iconfont icon-tushuguan icon bg-ff851b"></span>
      <span class="grid-center">图书馆</span>
    </router-link>
    <router-link tag="div" to="/">
      <span class="iconfont icon-jingqingqidai icon bg-00a65a"></span>
      <span class="grid-center">选课</span>
    </router-link>
    <div @click="gotoDean('/app/pj')">
      <span class="iconfont icon-pingjiaopingxue icon bg-D81B60"></span>
      <span class="grid-center">评教</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'binddean'
      ])
    },
    methods: {
      gotoDean (path) {
        if (this.binddean.dean === 0) {
          this.showAlert()
        } else {
          this.$router.push(path)
        }
      },
      showAlert () {
        this.$createDialog(
          {
            type: 'confirm',
            title: '绑定提示',
            content: '您还没有绑定教务处账户,暂时无法使用该功能，是否马上绑定？',
            icon: 'cubeic-alert',
            confirmBtn: {
              text: '立即前往',
              active: true,
              disabled: false,
              href: 'javascript:;'
            },
            cancelBtn: {
              text: '稍后再说',
              active: false,
              disabled: false,
              href: 'javascript:;'
            },
            onConfirm: () => {
              this.$router.push('/app/binddean')
            },
            onCancel: () => {
            }
          }
        ).show()
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .grid-center
    display block
    text-align center
    color #666
    font-size 14px
    padding 5px 0
    div
      float left
      text-decoration none
      width 20%
    .icon
      display inline-block
      font-size 20px
      line-height 1
      background-color #35b3ed
      padding 9px
      border-radius 50%
      color #fff
      text-align center
</style>
