<template>
  <Layout>
    <article>
      <h1>{{post.title}}</h1>
      <figure>
        <g-image :src="post.image" width="800" height="450" fit="contain" :alt="post.title" />
        <figcaption>{{post.excerpt}}</figcaption>
      </figure>

      <div v-html="post.body"></div>

      <div class="footer">
        <div class="row">
          <g-link v-for="tag in post.tags" :key="tag.name" :to="tag.path">{{tag.name}}</g-link>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($id: String!) {
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
