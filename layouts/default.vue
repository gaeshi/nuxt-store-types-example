<template>
  <v-app>
    <v-app-bar app>
      <search-bar />
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>Foo</v-footer>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  components: {
    SearchBar
  }
}
</script>
