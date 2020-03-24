<template>
  <v-card class="mx-auto" max-width="500">
    <v-list shaped>
      <v-list-item-group>
        <template v-for="(item, i) in items(hideDeleted)">
          <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>
          <v-list-item v-else :key="`item-${i}`" :value="item">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.queryString }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.timestamp }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="deleteItem(item)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      items: 'search/items',
      hideDeleted: 'ui/hideDeleted'
    })
  },
  methods: {
    ...mapActions({
      deleteItem: 'search/deleteItem'
    })
  }
}
</script>
