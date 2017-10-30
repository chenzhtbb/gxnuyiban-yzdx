import axios from 'axios'
import { prefix } from './config'

export function getSliderNews () {
  const url = prefix + '/getSliderNews'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getNewsList (type, page) {
  const url = prefix + '/getNewsList'

  const data = Object.assign({}, {
    type: type,
    page: page
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getNews (id) {
  const url = prefix + '/getNews'

  const data = Object.assign({}, {
    id: id
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

