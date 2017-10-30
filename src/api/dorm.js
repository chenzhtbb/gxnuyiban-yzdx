import axios from 'axios'
import { prefix } from './config'

export function bindDorm (type = 0, campus = '', room = '') {
  const url = prefix + '/bindDorm'
  const data = Object.assign({}, {
    type: type,
    campus: campus,
    room: room
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
