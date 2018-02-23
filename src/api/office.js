export function getNewsList (type, page) {
  return this.$http.get('/getNewsList', {type, page})
}

export function getNews (id) {
  return this.$http.get('/getNews', {id})
}

