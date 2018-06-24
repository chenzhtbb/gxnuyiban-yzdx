<template>
  <div class="xk">
    <div style="margin:10px;font-weight: 400;color: #337ab7;">选课须知</div>
    <ul>
      <li>1.易班选课与教务处选课功能一致</li>
      <li>2.可能会存在易班选课提示已经选上，但是课程并没有选上的情况</li>
      <li>3.具体选课情况请在已选课程查看</li>
      <li>4.在选课高峰时期系统响应时间会变慢，敬请谅解</li>
      <li>5.预约选课功能仅提供顺利进入教务处的服务</li>
      <li>6.换课服务请在第二轮选课之后再使用，否则换课会失败</li>
      <li>7.易班选课仅提供选课服务，不保证选课一定成功</li>
      <li>8.课程的已选人数可能与选课系统有出入</li>
    </ul>
    <cube-button :light="true" @click="selCourse">立即选课</cube-button>
    <!--<cube-button :primary="true" @click="booksCourse">预约选课</cube-button>-->
    <!--<cube-button :light="true" @click="tradeCourse" :disabled="true">换课服务（暂不开放）</cube-button>-->
    <cube-button :primary="true" @click="mineCourse">已选课程</cube-button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      showToastTime0 () {
        this.toast = this.$createToast({
          time: 0,
          txt: '正在登陆选课系统...',
          mask: true
        })
        this.toast.show()
      },
      selCourse () {
        this.showToastTime0()
        this.$http.get('/loginDean').then((res) => {
          this.toast.hide()
          if (res.code === 200) {
            this.$router.push('/app/dean/xk/sel')
          } else {
            this.$createDialog({
              type: 'alert',
              title: '系统提示',
              content: '登录选课系统失败，可能原因：绑定的密码错误，或同时登陆的人数过多',
              icon: 'cubeic-alert'
            }).show()
          }
        }).catch(res => {
          this.toast.hide()
          this.$createDialog({
            type: 'alert',
            title: '系统提示',
            content: '登录选课系统失败，可能原因：绑定的选课密码错误;同时登陆的人数过多;网络异常',
            icon: 'cubeic-alert'
          }).show()
        })
      },
      booksCourse () {
        const timePicker = this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 10,
          day: {
            len: 8,
            format: 'M月d日'
          },
          onSelect: (selectedTime, selectedText) => {
            this.$createDialog({
              type: 'warn',
              title: `选中的时间戳是 ${selectedTime}`,
              content: `选中的内容是 ${selectedText}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
          }
        })
        timePicker.show()
      },
      tradeCourse () {
        this.$router.push('/app/dean/xk/trade')
      },
      mineCourse () {
        this.$router.push('/app/dean/xk/mine')
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .xk
    position fixed
    top 0
    width 100%
    bottom 0
    left 0
    right 0
    z-index 100
    background #EEEEEE

  ul
    margin: 10px
    li
      margin 5px

</style>
