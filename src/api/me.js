export function bindDean (type = 0, password = '') {
  return this.$http.get('/bindDean', {type, password})
}

export function bindDorm (type = 0, campus = '', room = '') {
  return this.$http.get('/bindDorm', {type, campus, room})
}

export function putFeedback (type = '', title = '', content = '') {
  return this.$http.get('/putFeedback', {type, title, content})
}
