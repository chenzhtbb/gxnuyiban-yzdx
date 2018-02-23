export function getXgbList (key = '', page = 0) {
  return this.$http.get('/getXgbList', {key, page})
}

export function getXgbNotice (key = '') {
  return this.$http.get('/getXgbNotice')
}
