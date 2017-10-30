import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'

import VueLazyload from 'vue-lazyload'
import VueImg from 'v-img'

Vue.use(VueLazyload, {
  loading: require('common/image/bg.jpg'),
  error: require('common/image/bg.jpg')
})
const vueImgConfig = {
  altAsTitle: false,
  sourceButton: false
}
Vue.use(VueImg, vueImgConfig)

Vue.config.productionTip = false
import 'common/stylus/index.styl'

fastclick.attach(document.body)

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
