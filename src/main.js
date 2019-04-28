// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Loading from '~/components/Loading.vue'
import Logout from '~/components/auth/Logout.vue'
import store from '~/store'
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {

  // Set default global components
  Vue.component('Layout', DefaultLayout)
  Vue.component('Loading', Loading)
  Vue.component('Logout', Logout)

  // External cdn libraries, example to add font and styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto'
  })
}
