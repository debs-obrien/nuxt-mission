<template>
  <div class="container">
    <div>
      <img :src="planet.image" alt="" />
      <h1 class="title">{{ planet.title }}</h1>
      <PlanetsList />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'bounce',
  head() {
    return {
      title: this.planet.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.planet.description,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://jamstack-explorers-nuxt-mission`,
        },
      ],
    }
  },
  async asyncData({ params }) {
    const planet = await fetch(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    ).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res.status)
    })
    return { planet }
  },
}
</script>
<style scoped>
h1 {
  font-family: Nunito, sans-serif;
}
img {
  height: 80px;
  width: auto;
  object-fit: cover;
}
</style>
