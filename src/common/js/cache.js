import storage from 'good-storage'

const HREF_KEY = '__href__'
const TOKEN_KEY = '__token__'

export function getSessionToken () {
  return storage.session.get(TOKEN_KEY)
}

export function setSessionToken () {
  storage.session.set(TOKEN_KEY, true)
}

export function getToken () {
  return storage.get(TOKEN_KEY)
}

export function setToken (token) {
  storage.set(TOKEN_KEY, token)
}

export function setHrefFlag (flag) {
  storage.set(HREF_KEY, flag)
}

export function getHrefFlag () {
  return storage.get(HREF_KEY)
}

export function setYYYFlag (v) {
  storage.set('yyy', v)
}

export function getYYYFlag () {
  return storage.get('yyy')
}
