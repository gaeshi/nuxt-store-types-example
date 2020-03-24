import { types } from './index'

export default {
  [types.Mutations.DELETE_ITEM](state, query) {
    const updatedQuery = { ...query, deleted: true }
    state.queries = [...state.queries.filter(i => i !== query), updatedQuery]
  },
  [types.Mutations.APPEND_QUERY](state, queryString) {
    state.queries.push({
      queryString,
      timestamp: new Date()
    })
  }
}
