<template>
  <v-row align="center" class="mx-1">
    <v-text-field
      :append-icon-cb="() => {}"
      placeholder="Search..."
      single-line
      append-icon="mdi-magnify"
      color="white"
      hide-details
      @click:append="executeSearch(query)"
      @keyup.enter="executeSearch(query)"
      v-model="query"
    />
    <v-btn icon @click="toggleHideDeleted">
      <v-icon v-if="hideDeleted">mdi-file-hidden</v-icon>
      <v-icon v-else>mdi-file-outline</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import UiTypes from '~/store/ui'
import SearchTypes from '~/store/search'

export default {
  data: () => ({ query: '' }),
  computed: {
    ...mapGetters({
      hideDeleted: UiTypes.Getters.HIDE_DELETED
    })
  },
  methods: {
    ...mapActions({
      executeSearch: SearchTypes.Actions.EXECUTE_SEARCH
    }),
    ...mapMutations({
      toggleHideDeleted: UiTypes.Mutations.TOGGLE_HIDE_DELETED
    })
  }
}
</script>
