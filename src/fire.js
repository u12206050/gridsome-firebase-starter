import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/messaging'

const config = {
  apiKey: process.env.GRIDSOME_API_KEY,
  authDomain: process.env.GRIDSOME_AUTH_DOMAIN,
  databaseURL: process.env.GRIDSOME_DATABASE_URL,
  projectId: process.env.GRIDSOME_PROJECT_ID,
  storageBucket: process.env.GRIDSOME_STORAGE_BUCKET,
  messagingSenderId: process.env.GRIDSOME_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.enablePersistence()

const functions = firebase.functions()
const storage = firebase.storage()
const auth = firebase.auth()

export const db = firestore
export { firebase, auth, storage, functions }
export const { GeoPoint, Timestamp, FieldValue } = firebase.firestore