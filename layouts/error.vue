<template>
  <div class="container">
    <p class="error-text">404</p>
    <div>
      <span>Take me</span>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  height: viewport;
  background-color: aqua;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.error-text {
  font-size: 130px;
}
</style>
