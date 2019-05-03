// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Loading from '~/components/Loading.vue'
import Logout from '~/components/auth/Logout.vue'
import '~/fire.js'
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
  }, {
    rel: 'stylesheet',
    href: 'https://cdn.firebase.com/libs/firebaseui/3.6.0/firebaseui.css'
  })
  head.script.push({
    rel: 'javascript',
    src: 'https://www.gstatic.com/firebasejs/5.11.1/firebase-app.js'
  }, {
    rel: 'javascript',
    src: 'https://www.gstatic.com/firebasejs/5.11.1/firebase-auth.js'
  }, {
    rel: 'javascript',
    src: 'https://www.gstatic.com/firebasejs/5.11.1/firebase-firestore.js'
  }, {
    rel: 'javascript',
    src: 'https://www.gstatic.com/firebasejs/5.11.1/firebase-functions.js'
  }, {
    rel: 'javascript',
    src: 'https://www.gstatic.com/firebasejs/5.11.1/firebase-storage.js'
  }, {
    rel: 'javascript',
    src: '/fireInit.js'
  }, {
    rel: 'javascript',
    src: 'https://cdn.firebase.com/libs/firebaseui/3.6.0/firebaseui.js'
  })
}
