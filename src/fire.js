import Vue from 'vue'

import firesync from './firesync'

const config = {
  apiKey: process.env.GRIDSOME_API_KEY,
  authDomain: process.env.GRIDSOME_AUTH_DOMAIN,
  databaseURL: process.env.GRIDSOME_DATABASE_URL,
  projectId: process.env.GRIDSOME_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_MESSAGING_SENDER_ID
}

Vue.prototype.$db = {}
Vue.prototype.$functions = {}
Vue.prototype.$auth = {}
Vue.prototype.$firestore = {}

function initializeFirebase() {

  firebase.initializeApp(config)
  const firestore = firebase.firestore
  const db = firebase.firestore()
  db.enablePersistence()

  const functions = firebase.functions()
  const storage = firebase.storage()

  /* Manage auth state */
  const auth = firebase.auth()
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

  auth.isLoggedIn = false
  auth.roles = {}
  auth.userId = null
  const $auth = Vue.observable(auth)

  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      $auth.isLoggedIn = true
      $auth.userId = currentUser.uid
      currentUser.getIdTokenResult().then(userToken => {
        $auth.roles = userToken.claims
      })
      firesync.onLogin(db, $auth.userId)
    } else {
      $auth.userId = null
      $auth.isLoggedIn = false
      $auth.roles = {}
      firesync.onLogout()
    }
  })

  Vue.prototype.$db = db
  Vue.prototype.$functions = functions
  Vue.prototype.$auth = $auth
  Vue.prototype.$firestore = firestore

  firesync.onInit(db)

  console.log('%c Firebase locked and loaded!', 'background: #ffcb2c; color: #f5820b');
}

if (typeof window !== 'undefined') {
  if (typeof firebase !== 'undefined') initializeFirebase()
  else {
    window.addEventListener('firebase-loaded', initializeFirebase)
    console.log('%c Awaiting firebase!', 'background: #f5820b; color: #ffcb2c');
  }
}
