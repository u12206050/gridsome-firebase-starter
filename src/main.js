// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Loader from '~/components/Loader.vue'
import Logout from '~/components/auth/Logout.vue'

import { firestorePlugin } from 'vuefire'
import store from '~/store'
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {

  Vue.use(firestorePlugin)

  // Set default global components
  Vue.component('Layout', DefaultLayout)
  Vue.component('Loader', Loader)
  Vue.component('Logout', Logout)

  // External cdn libraries
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })
}
