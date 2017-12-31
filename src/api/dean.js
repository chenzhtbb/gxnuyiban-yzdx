import axios from 'axios'
import { prefix } from './config'

export function getScore () {
  const url = prefix + '/getscore'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTimetable () {
  const url = prefix + '/getTimetable'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function bindUser (type = 0, username = '', password = '') {
  const url = prefix + '/bindUser'
  const data = Object.assign({}, {
    type: type,
    username: username,
    password: password
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getJxpgList () {
  const url = prefix + '/getJxpgList'
  const data = Object.assign({})
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function putJxpgInfo (kch, cj1, cj2, cj3, cj4, cj5, cj6, cj7, cj8, cj9, cj10, yd, qd, yi) {
  const url = prefix + '/putJxpgInfo'
  let formdara = new FormData()
  formdara.append('kch', kch)
  formdara.append('cj1', cj1)
  formdara.append('cj2', cj2)
  formdara.append('cj3', cj3)
  formdara.append('cj4', cj4)
  formdara.append('cj5', cj5)
  formdara.append('cj6', cj6)
  formdara.append('cj7', cj7)
  formdara.append('cj8', cj8)
  formdara.append('cj9', cj9)
  formdara.append('cj10', cj10)
  formdara.append('yd', yd)
  formdara.append('qd', qd)
  formdara.append('yi', yi)

  let header = {'X-Requested-With': 'XMLHttpRequest'}
  return axios.post(url, formdara, {
    headers: header
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
