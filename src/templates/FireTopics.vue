<template>
  <main>
    <div class="text-center mx-auto max-w-sm">
      <h1 class="text-2xl">{{topic.name}}</h1>
      <figure>
        <g-image :src="topic.image" width="800" height="450" :alt="topic.name" />
        <figcaption>{{topic.info}}</figcaption>
      </figure>
    </div>
    <div class="row my-6 flex">
      <template v-for="post in posts">
        <g-link :key="post.id" :to="post.path" class="p-6 hover:bg-gray-100 text-center">
          <figure>
            <g-image :src="post.image" width="200" height="200" :alt="post.title" />
            <figcaption>{{post.title}}</figcaption>
          </figure>
        </g-link>
      </template>
    </div>
  </main>
</template>

<page-query>
query Topic ($id: ID!) {
  topic: fireTopics (id: $id) {
    id
    name
    info
    image (width: 800, height: 450)
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
      title: this.topic.name
    }
  },
  data() {
    return {
      pages: null
    }
  },
  computed: {
    topic() {
      return this.$page.topic
    },
    posts() {
      return this.topic.posts.edges && this.topic.posts.edges.map(e => e.node)
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
