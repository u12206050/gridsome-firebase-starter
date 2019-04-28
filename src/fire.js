import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/messaging'

firebase.initializeApp({
  apiKey: process.env.GRIDSOME_API_KEY,
  authDomain: process.env.GRIDSOME_AUTH_DOMAIN,
  databaseURL: process.env.GRIDSOME_DATABASE_URL,
  projectId: process.env.GRIDSOME_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_MESSAGING_SENDER_ID
})

const db = firebase.firestore()
db.enablePersistence()
const functions = firebase.functions()
const storage = firebase.storage()

/* Manage auth state */
const auth = firebase.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

auth.isLoggedIn = false
auth.roles = {}
const $auth = Vue.observable(auth)

auth.onAuthStateChanged((currentUser) => {
  if (currentUser) {
    $auth.isLoggedIn = true
    auth.getIdTokenResult().then(userToken => {
      $auth.roles = userToken.claims
    })
  } else {
    $auth.isLoggedIn = false
    $auth.roles = {}
  }
})

Vue.prototype.$auth = $auth

export { firebase, auth, storage, functions, db }
export const { GeoPoint, Timestamp, FieldValue } = firebase.firestore