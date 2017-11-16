import axios from 'axios'
import { prefix } from './config'

export function getBook () {
  const url = prefix + '/getBook'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getBookList (type = 0) {
  const url = prefix + '/getBookList'

  const data = Object.assign({}, {
    type: type
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSearchBookList (key = '') {
  if (!key) {
    return
  }
  const url = prefix + '/getSearchBookList'

  const data = Object.assign({}, {
    key: key
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

