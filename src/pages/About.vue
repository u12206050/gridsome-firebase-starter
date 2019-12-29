<template>
  <main class="mx-auto max-w-6xl">
    <h1 class="text-3xl font-semibold">About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

    <LazyHydrate when-idle>
      <Clicks />
    </LazyHydrate>

  </main>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    Clicks: () => import('~/singles/Clicks.vue')
  }
}
</script>
