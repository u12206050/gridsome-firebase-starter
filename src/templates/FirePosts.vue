<template>
  <main class="mx-auto max-w-6xl">
    <article>
      <div class="mx-auto max-w-lg text-center mb-4">
        <h1 class="text-3xl font-semibold">{{post.title}}</h1>
        <figure>
          <g-image :src="post.image" width="800" height="450" fit="contain" :alt="post.title" />
          <figcaption class="text-gray-600 text-sm">{{post.excerpt}}</figcaption>
        </figure>
      </div>

      <div v-html="post.body" class="p-2"></div>

      <div class="flex">
        <g-link v-for="tag in post.tags" :key="tag.name" :to="tag.path"
          class="rounded-lg bg-gray-600 px-2 text-white text-sm m-2 hover:bg-blue-600">{{tag.name}}</g-link>
      </div>
    </article>
  </main>
</template>

<page-query>
query Post ($id: ID!) {
  post: firePosts (id: $id) {
    id
    title
    excerpt
    body
    image (width: 800, height: 450)
    tags {
      name
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.post.title
    }
  },
  data() {
    return {
      pages: null
    }
  },
  computed: {
    post() {
      return this.$page.post
    },
  }
}
</script>

<style>
</style>
