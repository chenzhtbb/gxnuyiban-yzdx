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

export function putFeedback (type = '', title = '', content = '') {
  const url = prefix + '/putFeedback'

  let formdara = new FormData()
  formdara.append('type', type)
  formdara.append('title', title)
  formdara.append('content', content)

  return axios.post(url, formdara).then((res) => {
    return Promise.resolve(res.data)
  })
}
