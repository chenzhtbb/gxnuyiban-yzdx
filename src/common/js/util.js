function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function checkRepeat (item, arr) {
  let i = 0
  while (arr[i]) {
    if (item.tel === arr[i].tel) {
      return
    }
    i++
  }
  return item
}

export function empty (val) {
  let isEmpty = false
  if (!val) {
    isEmpty = true
  }
  return isEmpty
}
