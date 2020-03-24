<template>
  <div>
    <search-history />
  </div>
</template>

<script>
import SearchHistory from '@/components/SearchHistory'

export default {
  components: {
    SearchHistory
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-trending-up', text: 'Most Popular' },
      { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'Playlists' },
      { icon: 'mdi-clock', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>
