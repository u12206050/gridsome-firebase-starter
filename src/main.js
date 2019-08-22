// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Loading from '~/components/Loading.vue'
import Logout from '~/components/auth/Logout.vue'
import '~/fire.js'

export default function (Vue, { router, head, isClient }) {

  // Set default global components
  Vue.component('Layout', DefaultLayout)
  Vue.component('Loading', Loading)
  Vue.component('Logout', Logout)

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
    src: 'https://www.gstatic.com/firebasejs/6.4.0/firebase.js'
  }, {
    rel: 'javascript',
    body: true,
    async: true,
    defer: true,
    src: '/fireInit.js'
  }, {
    rel: 'javascript',
    body: true,
    async: true,
    defer: true,
    src: 'https://cdn.firebase.com/libs/firebaseui/4.1.0/firebaseui.js'
  })
}
