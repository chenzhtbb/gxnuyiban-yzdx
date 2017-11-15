import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
// import './permission'

import VueLazyload from 'vue-lazyload'
import VueImg from 'v-img'

Vue.use(VueLazyload, {
  loading: require('common/image/1c264fdfff5081e1f279a3fb643b00f3.png'),
  error: require('common/image/c07bf04c4452b9f354c5b9c201ffade4.png'),
  attempt: 3
})
const vueImgConfig = {
  altAsTitle: false,
  sourceButton: false
}
Vue.use(VueImg, vueImgConfig)

Vue.config.productionTip = false

import 'common/stylus/index.styl'

// import vConsole from 'vconsole'
import VConsole from 'vconsole/dist/vconsole.min'
/* eslint-disable no-unused-vars */
const vConsole = new VConsole()
console.log('test')

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
