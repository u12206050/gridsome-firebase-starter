<template>
  <main>
    <h1>{{author.name}}</h1>
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
query Author ($id: ID!) {
  author: fireAuthors (id: $id) {
    id
    fname
    image (width: 200, height: 200)
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
      title: this.author.name
    }
  },
  data() {
    return {
      pages: null
    }
  },
  computed: {
    author() {
      return this.$page.author
    },
    posts() {
      return this.author.posts.edges && this.author.posts.edges.map(e => e.node)
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

<style>
</style>
