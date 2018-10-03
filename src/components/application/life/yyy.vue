<template>
  <div class="yyy">
    <div class="indexbg" style="position: relative;">
      <img src="./indexbg.jpg" style="width: 100%;margin: 0 auto;position: absolute;">
      <img src="./shake.png" @click="jp"
           style="width: 63.125%;left: 50%;margin-left: -31.5625%;margin-top: 51.875%;position: absolute;">
      <img class="cp" src="./cp.png" style="width: 100%;z-index: 100;position: absolute;margin-top: 33%;" @click="jp">
    </div>
    <div style="position: absolute;margin-top:134%;left: 36%;margin-left: -31.5625%;">
      活动规则：<br>
      1.本活动仅限广西师范大学2018级新生参加，摇动不生效可以点击图标<br>
      2.本次活动最终解释权归属广西师范大学学生工作部（处）易班发展中心<br>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {setYYYFlag, getYYYFlag} from 'common/js/cache'

  export default {
    name: 'yyy',
    mounted() {
      this.isHaveShaked = false
      console.log(this.uinfo)
      if (!this.uinfo.yb_studentid && getYYYFlag() !== 0) {
        setYYYFlag(1)
        setTimeout(() => {
          window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=f9ee046e5e05962a&redirect_uri=http://f.yiban.cn/iapp173069'
        }, 20)
      }
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', () => {
          this._yaoyiyaoHandler()
        }, false)
      }
    },
    computed: {
      ...mapGetters([
        'uinfo'
      ])
    },
    methods: {
      jp() {
        this.$http.get('jp', {xh: this.uinfo.yb_studentid}).then((res) => {
          if (res.isJp === '0') {
            this.$createDialog({
              type: 'confirm',
              title: '奖品详情',
              content: res.prize,
              icon: 'cubeic-alert',
              confirmBtn: {
                text: '立即查看',
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
                this.$router.replace('/app/life/jp')
              },
              onCancel: () => {
              }
            }).show()
          }
          if (res.isJp === '1') {
            this.$createDialog({
              type: 'confirm',
              title: '温馨提示',
              content: '您已经抽过奖了，请前往我的奖品页面查看奖品',
              icon: 'cubeic-alert',
              confirmBtn: {
                text: '立即前往',
                active: true,
                disabled: false,
                href: 'javascript:;'
              },
              cancelBtn: {
                text: '我知道了',
                active: false,
                disabled: false,
                href: 'javascript:;'
              },
              onConfirm: () => {
                this.$router.replace('/app/life/jp')
              },
              onCancel: () => {
              }
            }).show()
          }
          if (res.isJp === '2') {
            this.$createDialog({
              type: 'alert',
              title: '温馨提示',
              content: '只有学号以2018开头的新生可以参与抽奖哦~',
              icon: 'cubeic-alert'
            }).show()
          }
          if (res.isJp === '3') {
            this.$createDialog({
              type: 'alert',
              title: '温馨提示',
              content: '还没有到抽奖时间哦~',
              icon: 'cubeic-alert'
            }).show()
          }
          this.isHaveShaked = false
        }).catch(() => {
          this.$createDialog({
            type: 'alert',
            title: '系统异常',
            content: `${this.uinfo.yb_studentid}抽奖发生错误，请联系开发人员`,
            icon: 'cubeic-alert'
          }).show()
        })
      },
      _yaoyiyaoHandler() {
        let speed = 20 // 定义摇一摇加速度的临界值 值越小摇动的力度越小
        // 初始化x,y,z上加速度的默认值
        let x = 0
        let y = 0
        let z = 0
        let lastX = 0
        let lastY = 0
        let lastZ = 0
        // 用于记录是否在动画执行中
        /*
        获取x,y,z方向的即时加速度
        */
        let acceleration = event.accelerationIncludingGravity
        x = acceleration.x
        y = acceleration.y
        z = acceleration.z
        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
          // 摇一摇实际场景就是加速度的瞬间暴增/减
          if (!this.isHaveShaked) {
            // 手机震动0.5秒
            if (navigator.vibrate) {
              navigator.vibrate(500)
            } else if (navigator.webkitVibrate) {
              navigator.webkitVibrate(500)
            }
            this.isHaveShaked = true
            // 摇一摇所执行的操作
            this.jp()
            // this.isHaveShaked = false
          }
        }
        /*
        保存历史加速度
        */
        lastX = x
        lastY = y
        lastZ = z
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .yyy
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background #E4F0C4
</style>
