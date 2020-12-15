<template>
  <div>
    <p v-if="$fetchState.pending">fetching planets...</p>
    <p v-else-if="$fetchState.error">Error while fetching planets</p>

    <ul v-else>
      <li v-for="planet in planets" :key="planet.slug">
        <NuxtLink :to="planet.slug">
          {{ planet.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'home',
  async fetch() {
    this.planets = await fetch('https://api.nuxtjs.dev/planets').then((res) =>
      res.json()
    )
  },
  data() {
    return {
      planets: [],
    }
  },
}
</script>
