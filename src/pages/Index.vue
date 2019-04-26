<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
import { db } from '@/fire'

const users = db.collection('users')
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      id: null,
      user: null,
      documents: [],
    }
  },
  /* Example of VueFire Declarative binding https://vuefire.vuejs.org/vuefire/binding-subscriptions.html#declarative-binding */
  firestore: {
    documents: db.collection('documents'),
  },
  /* Example of VueFire Programmatic binding https://vuefire.vuejs.org/vuefire/binding-subscriptions.html#programmatic-binding */
  watch: {
    id: {
      // call it upon creation too
      immediate: true,
      handler(id) {
        this.$bind('user', users.doc(id))
      },
    },
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
