import * as types from './mutation-types'
import { setHrefFlag } from 'common/js/cache'

export const saveHrefFlag = function ({commit}, flag) {
  commit(types.SET_HREFFLAG, setHrefFlag(flag))
}
