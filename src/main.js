// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import LazyHydrate from 'vue-lazy-hydration'
import DefaultLayout from '~/layouts/Default.vue'
import Loading from '~/components/Loading.vue'
import Logout from '~/components/auth/Logout.vue'
import VueGtm from 'vue-gtm'
import '~/fire.js'

export default function (Vue, { router, head, appOptions, isClient }) {

  // Set default global components

  Vue.component('LazyHydrate', LazyHydrate)
  Vue.component('Loading', Loading)
  Vue.component('Logout', Logout)

  appOptions.render = h => h(DefaultLayout, { attrs: { id: 'app' } })

  /* Google TAG Manager */
  if (isClient) {
    Vue.use(VueGtm, {
      vueRouter: router,
      id: process.env.GRIDSOME_GTM,
      enabled: false, // Will only be enabled once cookies are enabled
      debug: false
    })
  }

  // External cdn libraries, example to add font and styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  }, {
    rel: 'stylesheet',
    href: 'https://cdn.firebase.com/libs/firebaseui/4.1.0/firebaseui.css'
  })
  head.script.push({
    rel: 'javascript',
    body: true,
    async: true,
    defer: true,
    src: '/fireInit.js'
  })
}
