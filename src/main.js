import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'                   // vuex状态管理
import router from './router'                 // 路由
// import './permission'                      // 前端授权 加速访问
import fastclick from 'fastclick'             // 取消移动端300ms点击延时
import VueLazyload from 'vue-lazyload'        // 图片懒加载
import VueImg from 'v-img'                    // 图片图库预览
import iosAlertView from 'vue-ios-alertview'  // 苹果风格弹窗
import VueStars from 'vue-stars'

const vueImgConfig = {
  altAsTitle: false,
  sourceButton: false
}
const vueLazyloadConfig = {
  loading: require('common/image/1c264fdfff5081e1f279a3fb643b00f3.png'),  // 加载中图片
  error: require('common/image/c07bf04c4452b9f354c5b9c201ffade4.png'),    // 加载错误拖
  attempt: 3                                                              // 重试次数
}

const iosAlertViewConfig = {
  okText: '确认',
  cancelText: '取消',
  remindDuration: 400
}

Vue.use(VueLazyload, vueLazyloadConfig)
Vue.use(VueImg, vueImgConfig)
Vue.use(iosAlertView, iosAlertViewConfig)
Vue.use(VueStars)

Vue.config.productionTip = false

import 'common/stylus/index.styl' // 应用全局样式

// import VConsole from 'vconsole/dist/vconsole.min'  // 微信console控制台插件
/* eslint-disable no-unused-vars */
// const vConsole = new VConsole()                    // 开启微信console控制台

fastclick.attach(document.body)  // 注册fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.filter('date', function (val) {
  let date = val.split(' ')
  let d = new Date()
  let nowDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  if (date < nowDate) {
    return date[0]
  } else {
    let time = date[1].split(':')
    let hours = d.getHours() - time[0]
    let minutes = d.getMinutes() - time[1]
    if (hours > 0) {
      return hours + '小时前'
    } else if (minutes > 0) {
      return minutes + '分钟前'
    } else {
      return d.getSeconds() - time[2] + '秒前'
    }
  }
})
