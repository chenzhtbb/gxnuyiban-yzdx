import storage from 'good-storage'

const HELP_KEY = '__help__'
const LOST_KEY = '__lost__'
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

export function setHelpFlag (flag) {
  storage.set(HELP_KEY, flag)
}

export function getHelpFlag () {
  return storage.get(HELP_KEY)
}

export function setLostFlag (flag) {
  storage.set(LOST_KEY, flag)
}

export function getLostFlag () {
  return storage.get(LOST_KEY)
}
