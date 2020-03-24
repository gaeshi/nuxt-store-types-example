import { withPrefix } from '~/utils/store'

export const types = {
  Getters: {
    HIDE_DELETED: 'hideDeleted'
  },
  Mutations: {
    TOGGLE_HIDE_DELETED: 'toggleHideDeleted'
  }
}

export default withPrefix(types, 'ui')
