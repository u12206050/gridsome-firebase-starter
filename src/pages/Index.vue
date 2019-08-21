<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="row middle-xs">
      <g-image class="col-xs-5" alt="Gridsome Logo" src="~/assets/images/gridsome-logo.svg" width="300" />
      <p class="col-xs-2 center-xs amp-sign">&</p>
      <g-image class="col-xs-5" alt="Firebase Logo" src="~/assets/images/firebase-logo.png" width="300" />
    </div>

    <h2>Popular Topics</h2>
    <div class="row">
      <template v-for="topic in topics">
        <g-link :key="topic.id" :to="topic.path"><h2 class="topic">{{topic.name}}</h2></g-link>
      </template>
    </div>

    <div class="top-section" v-if="$auth.isLoggedIn">
      <strong>You are logged in</strong>
      <p>Checkout this block, it only shows if you are logged in.</p>
    </div>
    <div class="section">
      <p>Ready for an awesome Firebase & Gridsome powered app!</p>
      <p>You have clicked <strong v-text="clicks"></strong> times</p>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://firebase.google.com/docs" target="_blank" rel="noopener">Firebase Docs</a>
    </p>

  </Layout>
</template>

<page-query>
query Topics {
  allFireTopics {
    edges {
      node {
        id
        name
        image
        path
        posts: belongsTo {
          count: totalCount
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Gridsome Firebase Starter'
  },
  data() {
    return {
      id: null,
      pages: null
    }
  },
  mounted() {
    /**
     * This will update the `this.pages` property
     * with the data from the pages collection, thanks to firesync.js
     */
    // this.$bind(this.$db.collection('pages').where('words', '>', 200), pages)
  },
  computed: {
    topics() {
      return this.$page.allFireTopics.edges && this.$page.allFireTopics.edges.map(e => e.node)
    },
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

.section {
  margin-bottom: 2rem;
}

.top-section {
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.topic {
  margin-right: 1rem;
  margin-left: 3rem;
}
</style>
