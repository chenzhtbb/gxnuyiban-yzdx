<template>
  <div class="yyy">
    <div class="indexbg" style="position: relative;">
      <img src="./indexbg.jpg" style="width: 100%;margin: 0 auto;position: absolute;">
      <img src="./shake.png"
           style="width: 63.125%;left: 50%;margin-left: -31.5625%;margin-top: 51.875%;position: absolute;">
      <img class="cp" src="./cp.png" style="width: 100%;z-index: 100;position: absolute;margin-top: 33%;">
    </div>
    <div style="position: absolute;margin-top:134%;left: 36%;margin-left: -31.5625%;">
      活动规则：<br>
      1.本活动仅限广西师范大学2018级新生参加<br>
      2.本次活动最终解释权归属广西师范大学学生工作部（处）易班发展中心<br>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yyy',
    mounted() {
      this.isHaveShaked = false
      if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', () => {
          this._yaoyiyaoHandler()
        }, false)
      }
    },
    methods: {
      _yaoyiyaoHandler() {
        let speed = 30 // 定义摇一摇加速度的临界值 值越小摇动的力度越小
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
            alert('开不开心？')
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
