import * as types from './mutation-types'
import { setHelpFlag, setLostFlag } from 'common/js/cache'

export const saveHelpFlag = function ({commit}, flag) {
  commit(types.SET_HELPFLAG, setHelpFlag(flag))
}

export const saveLostFlag = function ({commit}, flag) {
  commit(types.SET_LOSTFLAG, setLostFlag(flag))
}
