import * as types from './mutation-types'
import { setHelpFlag } from 'common/js/cache'

export const saveHelpFlag = function ({commit}, flag) {
  commit(types.SET_HELPFLAG, setHelpFlag(flag))
}
