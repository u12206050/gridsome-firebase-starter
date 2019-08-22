<template>
  <main>
    <h1>{{tag.name}}</h1>
    <div class="row">
      <template v-for="post in posts">
        <g-link :key="post.id" :to="post.path" class="post_card">
          <figure>
            <g-image :src="post.image" width="300" height="300" :alt="post.title" />
            <figcaption>{{post.title}}</figcaption>
          </figure>
        </g-link>
      </template>
    </div>
  </main>
</template>

<page-query>
query Tag ($id: String!) {
  tag: fireTags (id: $id) {
    id
    name
    posts: belongsTo (limit: 4) {
      edges {
        node {
          ... on FirePosts {
            id
            title
            image (width: 300, height: 300)
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.tag.name
    }
  },
  data() {
    return {
      pages: null
    }
  },
  computed: {
    tag() {
      return this.$page.tag
    },
    posts() {
      return this.tag.posts.edges && this.tag.posts.edges.map(e => e.node)
    }
  },
  mounted() {
    /**
     * This will update the `this.pages` property
     * with the data from the pages collection, thanks to firesync.js
     */
    // this.$bind(this.$db.collection('pages').where('words', '>', 200), pages)
  }
}
</script>

<style scoped>

</style>
