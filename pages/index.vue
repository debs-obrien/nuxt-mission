<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-mission</h1>

      <p v-if="$fetchState.pending">Fetching planets....</p>
      <p v-else-if="$fetchState.error">Error while fetching planets</p>
      <ul v-else>
        <li>
          <NuxtLink to="/nuxt">Nuxt</NuxtLink>
        </li>
        <li v-for="planet in planets" :key="planet.slug">
          <NuxtLink :to="planet.slug">
            {{ planet.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
<style scoped>
h1 {
  font-family: Nunito, sans-serif;
}
</style>
<style>
ul {
  list-style-type: none;
  padding: 0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
