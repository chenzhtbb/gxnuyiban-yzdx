import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'                   // vuex状态管理
import router from './router'                 // 路由
import './permission'                          // 前端授权 加速访问
// import fastclick from 'fastclick'             // 取消移动端300ms点击延时
import VueLazyload from 'vue-lazyload'        // 图片懒加载
import Cube from 'cube-ui'
import Http from './pulgin/http/index'
import VueImg from './pulgin/v-img/index'                    // 图片图库预览
import VeHistogram from 'v-charts/lib/histogram'
import VeGauge from 'v-charts/lib/gauge'
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeGauge.name, VeGauge)
Vue.use(Cube)
const vueImgConfig = {
  altAsTitle: false,
  sourceButton: true,
  thumbnails: true
}
const vueLazyloadConfig = {
  loading: require('common/image/1c264fdfff5081e1f279a3fb643b00f3.png'),  // 加载中图片
  error: require('common/image/c07bf04c4452b9f354c5b9c201ffade4.png'),    // 加载错误拖
  attempt: 3                                                              // 重试次数
}
const httpConfig = {
  baseURL: process.env.API_PREFIX,
  timeout: 10000
}

Vue.use(VueLazyload, vueLazyloadConfig)
Vue.use(VueImg, vueImgConfig)
Vue.use(Http, httpConfig)

process.env.NODE_ENV === 'development' && require('./mock/mock') // 引入mockjs

Vue.config.productionTip = false

import 'common/stylus/index.styl' // 应用全局样式

// import VConsole from 'vconsole/dist/vconsole.min'  // 微信console控制台插件
/* eslint-disable no-unused-vars */
// const vConsole = new VConsole()                    // 开启微信console控制台

// fastclick.attach(document.body)  // 注册fastclick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 全局过滤器，更改时间显示方式
Vue.filter('formatDate', function (val) {
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
