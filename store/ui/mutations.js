import { types } from './index'

export default {
  [types.Mutations.TOGGLE_HIDE_DELETED](state) {
    state.hideDeleted = !state.hideDeleted
  }
}
