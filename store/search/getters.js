import { types } from './index'

export default {
  [types.Getters.ITEMS]: state => hideDeleted =>
    hideDeleted ? state.queries.filter(q => !q.deleted) : state.queries
}
