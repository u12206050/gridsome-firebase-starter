<template>
  <main>
    <section class="bg-gray-100 font-sans p-6">
      <div class="container m-auto flex flex-col md:flex-row max-w-4xl">
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
          <p class="text-sm">Meet</p>
          <h1 class="mb-2 font-bold text-3xl text-primary">Grid<span class="text-accent">Fire</span></h1>
          <p class="mb-4 pr-6 text-lg">GridFire is a website and blog starter theme built with Gridsome, powered by Google Firebase and styled with Tailwind CSS. GridFire was created by <a href="https://twitter.com/GLamusse">@GLamusse</a></p>
        </div>
        <div class="w-full lg:w-1/2 lg:py-6"><img src="https://stitches.hyperyolo.com/images/demo-devices.png" alt="image"></div>
      </div>
    </section>

    <section class="my-16 p-6 font-sans m-auto max-w-full">
      <div class="text-center">
        <p class="py-6 font-semibold text-2xl">Why <span class="mb-2 font-bold text-3xl text-primary">Grid<span class="text-accent">Fire</span></span> ?</p>
        <p class="leading-normal mb-4 max-w-sm m-auto">
          <a href="https://jamstack.org" class="inline-block text-gray-900 hover:text-gray-800">Jamstack</a> sites are  a new way of building websites and apps that deliver better performance, higher security, lower cost of scaling, and a better developer experience. Most Jamstack websites allow the visitor to view data very quickly. We have clients that also need their visitors to log in and see their account history, preferences, messages, etc. We combined Gridsome and Firebase to get the best of both worlds.</p>
      </div>
    </section>

    <section
      class="my-8 p-6 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="w-1/3 lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/gridsome-logo-circle.svg"/>
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
      class="my-8 pt-8 p-6 font-sans container max-w-xl m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start">
        <h1 class="my-4 font-semibold">Why Firebase?</h1>
        <p class="leading-normal mb-4 text-gray-900">Firebase lets you build more powerful, secure and scalable apps, using world-class infrastructure. Authentication, databases, cloud functions, and more.
        </p>
        <a href="https://firebase.google.com/" class="inline-block text-accent hover:text-gray-800">Learn more</a>
      </div>
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="w-1/3 lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/firebase-logo-flame.png"/>
      </div>
    </section>

    <section
      class="mt-8 px-6 font-sans container max-w-xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
      <div class="flex justify-center w-full lg:w-1/2">
        <g-image class="w-1/3 lg:w-1/2" fit="contain" alt="Gridsome Logo" src="~/assets/images/tailwind-logo.jpg"/>
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

    <section class="font-sans m-auto text-center py-8 pt-16">
      <hr class="border-b w-8 m-auto my-6">
      <label for="tagline" class="tracking-wide font-bold text-gray-900 text-3xl">Popular Topics</label>
      <h1 class="mt-2 mb-4 text-gray-600 max-w-sm m-auto">Pick any of these categories from our blog</h1>
      <div class="mt-16 sm:overflow-x-auto sm:overflow-y-hidden">
        <div class="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-2">
          <div v-for="(topic, i) in topics" :key="i" class="sm:mt-0 sm:w-80 sm:flex-shrink-0 mx-5">
            <div>
              <div class="relative pb-5/6">
                <g-image class="inset-0 w-full max-w-1/4 xs:max-w-full rounded-lg shadow-md object-cover" :src="topic.image" alt="topic.name" />
              </div>
              <div class="relative px-4 -mt-8">
                <div class="bg-gray-100 opacity-90 rounded-lg px-4 py-4 mb-8 shadow-lg text-center">
                  <g-link :key="topic.id" :to="topic.path">
                    <h4 class="mt-1 text-gray-900 font-semibold text-center text-lg underline cursor-pointer">{{topic.name}}</h4>
                  </g-link>
                  <div class="mt-2 text-sm text-gray-600">
                    <span class="ml-2">{{ topic.posts.count }} posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LazyHydrate when-idle>
      <Clicks />
    </LazyHydrate>

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
        image (width: 300, height: 200)
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
      return this.$page.allFireTopics.edges && this.$page.allFireTopics.edges.map(e => e.node).sort((a,b) => a.posts.count > b.posts.count? -1 : 1)
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
  components: {
    Clicks: () => import('~/singles/Clicks.vue')
  }
}
</script>

<style lang="scss" scoped>

</style>
