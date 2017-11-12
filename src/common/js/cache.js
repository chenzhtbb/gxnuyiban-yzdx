import storage from 'good-storage'

const HELP_KEY = '__help__'
const LOST_KEY = '__lost__'

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
