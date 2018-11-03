/* eslint-disable */
import request from './http'

export default {
  install (Vue, options) {
    const GET = 'get'
    const POST = 'post'
    Vue.prototype.$http = {
      get: (url, params, config = {}) => {
        return request(Object.assign({
          url: url,
          method: GET,
          params: params
        }, options, config))
      },
      post: (url, datas, config = {headers: {'X-Requested-With': 'XMLHttpRequest'}}) => {
        let data = new FormData()
        for (let key in datas) {
          if (datas.hasOwnProperty(key)) {
            data.append(key, datas[key])
          }
        }
        return request(Object.assign({
          url: url,
          method: POST,
          data: data
        }, options, config))
      }
    }
  }
}
