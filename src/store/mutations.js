import * as types from './mutation-types'

const mutations = {
  [types.SET_UINFO] (state, uinfo) {
    state.uinfo = uinfo
  },
  [types.SET_BINDDEAN] (state, binddean) {
    state.binddean = binddean
  },
  [types.SET_BINDDORM] (state, binddorm) {
    state.binddorm = binddorm
  }
}

export default mutations
