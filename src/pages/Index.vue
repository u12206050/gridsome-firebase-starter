<template>
  <main>
    <section class="bg-gray-100 font-sans">
      <div class="container m-auto flex flex-col md:flex-row max-w-4xl">
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
          <p class="text-sm">Meet</p>
          <h1 class="mb-2 font-bold text-3xl text-primary">Grid<span class="text-accent">Fire</span></h1>
          <p class="mb-4 pr-6 text-lg">GridFire is a website and blog starter theme built with Gridsome, powered by Google Firebase and styled with Tailwind CSS. GridFire was created by <a href="https://twitter.com/GLamusse">@GLamusse</a></p>
        </div>
        <div class="w-full lg:w-1/2 lg:py-6"><img src="https://stitches.hyperyolo.com/images/demo-devices.png" alt="image"></div>
      </div>
    </section>

    <section class="my-16 font-sans container m-auto max-w-full">
      <div class="text-center">
        <p class="py-6 font-semibold text-2xl">Why GridFire?</p>
        <p class="leading-normal mb-4 max-w-sm m-auto">
          <a href="https://jamstack.org" class="inline-block text-gray-900 hover:text-gray-800">Jamstack</a> sites are  a new way of building websites and apps that deliver better performance, higher security, lower cost of scaling, and a better developer experience. Most Jamstack websites allow the visitor to view data very quickly. We have clients that also need their visitors to log in and see their account history, preferences, messages, etc. We combined Gridsome and Firebase to get the best of both worlds.</p>
      </div>
  <!-- <div class="flex flex-col sm:flex-row flex-wrap my-8">
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-100 border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
      <div class="w-12 h-12 rounded-full bg-gray-100" alt=""></div>
      <h3 class="mt-4 mb-1">Digital</h3>
      <p class="mt-4 text-center text-gray-dark leading-normal px-6 hidden hover:block">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
      <p class="leading-normal mb-4 text-gray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-gray-100 border-r border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
      <div class="w-12 h-12 rounded-full bg-gray-100" alt=""></div>
      <h3 class="mt-4 mb-1">Branding</h3>
      <p class="mt-4 text-center text-gray-dark leading-normal hidden hover:block">Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 p-8  border-gray-100 border-b hover:shadow-md hover:border-0 bg-white hover:transform-scale-subtle transition-normal hover:show-child">
      <div class="w-12 h-12 rounded-full bg-gray-100" alt=""></div>
      <h3 class="mt-4 mb-1">Excellence</h3>
      <p class="mt-4 text-center text-gray-dark leading-normal hidden hover:block">Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
    </div>
  </div> -->
</section>

    <section
      class="my-8 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="h-18 w-full lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/gridsome-logo-circle.svg"/>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
        <h1 class="my-4 font-semibold">Why Gridsome?</h1>
        <p class="leading-normal mb-4 text-gray-900">
          Gridsome is a Vue.js-powered modern site generator that makes it easy and fun for developers to create beautiful JAMstack websites & PWAs that are fast by default.
        </p>
        <a href="https://gridsome.org/" class="inline-block text-primary hover:text-gray-800">Learn more</a>
      </div>
    </section>

    <section
      class="my-8 pt-8 font-sans container max-w-xl m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
        <h1 class="my-4 font-semibold">Why Firebase?</h1>
        <p class="leading-normal mb-4 text-gray-900">Firebase lets you build more powerful, secure and scalable apps, using world-class infrastructure. Authentication, databases, cloud functions, and more.
        </p>
        <a href="https://firebase.google.com/" class="inline-block text-accent hover:text-gray-800">Learn more</a>
      </div>
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="h-18 w-full lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/firebase-logo-flame.png"/>
      </div>
    </section>

    <section
      class="my-8 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="h-18 w-full lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/tailwind-logo.jpg"/>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
        <h1 class="my-4 font-normal">Why Tailwind CSS?</h1>
        <p class="leading-normal mb-4 text-gray-900">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
        </p>
        <a href="https://tailwindcss.com" class="inline-block text-gray-900 hover:text-gray-800">Learn more</a>
      </div>
    </section>

    <section class="font-sans text-center py-8 px-4 lg:px-0 bg-gray-100">
      <div class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow">
        <div class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
          <h2 class="capitalize font-medium">Ready for an awesome Firebase & Gridsome powered app!</h2>
          <p class="text-gray-900 mt-2 mb-6">You have clicked <strong v-text="clicks"></strong> times</p>
        </div>
        <div class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0">
          <button class=" bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide">Click Me</button>
        </div>
      </div>
    </section>

    <section class="font-sans container m-auto text-center py-8">
      <label for="tagline" class="uppercase tracking-wide font-bold text-gray-900">Popular Topics</label>
      <!-- <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">Those are important in Vanue Management</h1> -->
      <hr class="border-b w-8 m-auto my-6">
      <div v-for="topic in topics" :key="topic.id" class="flex flex-wrap justify-between items-start">
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-100" alt=""></div>
          <g-link :to="topic.path"><h2 class="my-4 font-medium text-gray-900">{{topic.name}}</h2></g-link>
          <!-- <p class="leading-normal mb-4 text-gray-900">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p> -->
        </div>
      </div>
    </section>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <div class="row middle-xs">
      <g-image class="col-xs-5" alt="Gridsome Logo" src="~/assets/images/gridsome-logo.svg" width="300" />
      <p class="col-xs-2 center-xs amp-sign">&</p>
      <g-image class="col-xs-5" alt="Firebase Logo" src="~/assets/images/firebase-logo.png" width="300" />
    </div> -->

    <div class="top-section" v-if="$auth.isLoggedIn">
      <strong>You are logged in</strong>
      <p>Checkout this block, it only shows if you are logged in.</p>
    </div>

  </main>
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

</style>
