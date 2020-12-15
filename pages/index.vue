<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-mission</h1>
      <button @click="showPlanets">Show Planets</button>
      <div v-if="show">
        <LazyPlanetsList />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showPlanets() {
      this.show = true
    },
  },
}
</script>
