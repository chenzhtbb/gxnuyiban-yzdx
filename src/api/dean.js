export function getScore () {
  return this.$http.get('/getscore')
}

export function getTimetable () {
  return this.$http.get('/getTimetable')
}

export function getJxpgList () {
  return this.$http.get('/getJxpgList')
}

export function putJxpgInfo (kch, cj1, cj2, cj3, cj4, cj5, cj6, cj7, cj8, cj9, cj10, yd, qd, yi) {
  let formdara = new FormData()
  formdara.append('kch', kch)
  formdara.append('cj1', cj1)
  formdara.append('cj2', cj2)
  formdara.append('cj3', cj3)
  formdara.append('cj4', cj4)
  formdara.append('cj5', cj5)
  formdara.append('cj6', cj6)
  formdara.append('cj7', cj7)
  formdara.append('cj8', cj8)
  formdara.append('cj9', cj9)
  formdara.append('cj10', cj10)
  formdara.append('yd', yd)
  formdara.append('qd', qd)
  formdara.append('yi', yi)

  let header = {'X-Requested-With': 'XMLHttpRequest'}
  return this.$http.post('/putJxpgInfo', formdara, {
    headers: header
  })
}
