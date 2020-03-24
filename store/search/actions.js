import { types } from './index'

export default {
  [types.Actions.DELETE_ITEM]({ commit }, item) {
    commit(types.Mutations.DELETE_ITEM, item)
  },
  [types.Actions.EXECUTE_SEARCH]({ commit }, query) {
    commit(types.Mutations.APPEND_QUERY, query)
  }
}
