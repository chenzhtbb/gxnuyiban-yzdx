import axios from 'axios'
import { prefix } from './config'

export function getXgbList (key = '', page = 0) {
  const url = prefix + '/getXgbList'

  const data = Object.assign({}, {
    key: key,
    page: page
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getXgbNotice (key = '') {
  const url = prefix + '/getXgbNotice'

  const data = Object.assign({}, {
    key: key
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
