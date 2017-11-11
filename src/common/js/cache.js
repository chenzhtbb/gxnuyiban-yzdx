import storage from 'good-storage'

const HELP_KEY = '__help__'

export function setHelpFlag (flag) {
  storage.set(HELP_KEY, flag)
}

export function getHelpFlag () {
  return storage.get(HELP_KEY)
}
