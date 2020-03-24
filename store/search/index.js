import { withPrefix } from '~/utils/store'

export const types = {
  Actions: {
    DELETE_ITEM: 'deleteItem',
    EXECUTE_SEARCH: 'executeSearch'
  },
  Getters: {
    ITEMS: 'items'
  },
  Mutations: {
    DELETE_ITEM: 'deleteItem',
    APPEND_QUERY: 'appendQuery'
  }
}

export default withPrefix(types, 'search')
