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
const auth = firebase.auth()
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

Vue.prototype.$auth = Vue.observable(auth)

export { firebase, auth, storage, functions, db }
export const { GeoPoint, Timestamp, FieldValue } = firebase.firestore