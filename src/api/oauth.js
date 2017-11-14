import axios from 'axios'
import { prefix } from './config'

export function oauth (token, uid) {
  const url = prefix + '/oauth'

  const data = Object.assign({
    token: token,
    uid: uid
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
