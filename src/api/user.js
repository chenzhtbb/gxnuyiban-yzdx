import axios from 'axios'
import { prefix } from './config'

export function getUser () {
  const url = prefix + '/getUser'

  const data = Object.assign({})

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

