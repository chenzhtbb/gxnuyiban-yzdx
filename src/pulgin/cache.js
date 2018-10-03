import storage from 'good-storage'

export function setCache(name, val) {
  storage.set(name, val)
}

export function getCache(name) {
  if (storage.has(name)) {
    return storage.get(name)
  } else {
    return []
  }
}
