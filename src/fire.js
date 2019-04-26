import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'
import 'firebase/messaging'

const config = {
  apiKey: GRIDSOME_API_KEY,
  authDomain: GRIDSOME_AUTH_DOMAIN,
  databaseURL: GRIDSOME_DATABASE_URL,
  projectId: GRIDSOME_PROJECT_ID,
  storageBucket: GRIDSOME_STORAGE_BUCKET,
  messagingSenderId: GRIDSOME_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
firestore.enablePersistence()

const functions = firebase.functions()
const storage = firebase.storage()
const auth = firebase.auth()

export const db = firestore
export { auth, storage, functions }
export const { GeoPoint, Timestamp, FieldValue } = firebase.firestore