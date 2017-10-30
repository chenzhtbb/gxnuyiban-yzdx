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
