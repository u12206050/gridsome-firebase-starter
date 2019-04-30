<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="row middle-xs">
      <g-image class="col-xs-5" alt="Gridsome Logo" src="~/assets/images/gridsome-logo.svg" width="300" />
      <p class="col-xs-2 center-xs amp-sign">&</p>
      <g-image class="col-xs-5" alt="Firebase Logo" src="~/assets/images/firebase-logo.png" width="300" />
    </div>

    <h1>Hello, world!</h1>

    <div v-if="$auth.isLoggedIn">
      <strong>You are logged in</strong>
      <p>Checkout this block, it only shows if you are logged in.</p>
    </div>
    <hr>
    <p>Ready for an awesome Firebase & Gridsome powered app!</p>

    <p>You have clicked <strong v-text="clicks"></strong> times</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://firebase.google.com/docs" target="_blank" rel="noopener">Firebase Docs</a>
    </p>

  </Layout>
</template>

<script>
import { db } from '~/fire'

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
      pages: null
    }
  },
  mounted() {
    /**
     * This will update the `this.pages` property
     * with the data from the pages collection, thanks to firesync.js
     */
    this.$bind(db.collection('pages').where('words', '>', 200), pages)
  },
  computed: {
    clicks() {
      return this.$store.clicks
    },
    user() {
      /**
       * This will get updated because
       * of the subscription in firesync.js
       */
      return this.$store.user
    },
    documents() {
      return this.$store.documents
    }
  },
}
</script>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
  color: var(--primary-link-color);
}

.amp-sign {
  font-size: 4rem;
  font-family: -webkit-pictograph;
  color: #424242;

  @include tablet {
    font-size: 6rem;
  }
  @include desktop {
    font-size: 8rem;
  }
}
</style>
