export function getBook () {
  return this.$http.get('/getBook')
}

export function getBookList (type = 0) {
  return this.$http.get('getBookList', {type})
}

export function getSearchBookList (key = '') {
  if (!key) {
    return
  }
  return this.$http.get('/getSearchBookList', {key})
}
