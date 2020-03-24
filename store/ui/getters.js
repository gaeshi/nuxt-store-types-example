import { types } from './index'

export default {
  [types.Getters.HIDE_DELETED](state) {
    return state.hideDeleted
  }
}
