import { getToken, setToken } from './cache'

export function getOauthToken () {
  return getToken()
}

export function setOauthToken (token) {
  setToken(token)
}

export function removeOauthToken () {
  setToken('')
}
