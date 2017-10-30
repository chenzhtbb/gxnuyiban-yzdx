import axios from 'axios'
import { prefix } from './config'

export function getLostList () {
  const url = prefix + '/getLostList'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
