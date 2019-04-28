/**
 * Add new subscriptions further down
 */

import store from './store'
import Vue from 'vue'

const subscriptions = []

/**
 * Shortcut function to give you a data object
 * from a Firestore Snapshot
 *
 * this.$docData(snap)
 *
 * @param {Snapshot} doc
 */
function docData(doc) {
  let data = doc.data()
  data.id = doc.id
  data.__ref__ = doc.ref

  return data
}
Vue.prototype.$docData = docData

/**
 * The subscribe function that will update the store with the latest data
 *
 * Data objects have .id and __ref__ that you can use
 *
 * @param {DocumentReference | CollectionReference} ref
 * @param {String} property
 * @param {Function} cb (optional)
 */
function subscribe(ref, property, cb) {
  return {
    ref,
    property,
    close: ref.onSnapshot((snap) => {
      Vue.set(store, property, snap.id ? docData(snap) : snap.docs.map(docData))
      if (cb) cb()
    }, (err) => console.warn('Subscribe Error: ', err))
  }
}

/**
 *
 * ::::ADD SUBSCRIPTIONS HERE::::
 * Subscriptions will sync to the $store
 *
 * Setup: `subscribe(ref, property, callbackFn?)`
 *
 * Access: `this.$store[property]`
 *
*/
export default {
  onInit(db) {
    /**
     * Add public subscriptions here on data for everyone
     */
    subscribe(db.collection('documents').where('count', '>', '20'), 'documents', () => {
      if (Array.isArray(store.documents)) {
        console.log(store.documents.length)
        store.loadedDocuments = true
      }
    })
  },
  onLogin(db, uid) {
    /**
     * Add private subscriptions here
     * that require a logged in user
     */
    subscriptions.push(
      subscribe(db.collection('users').doc(uid), 'user'),
    )
  },
  onLogout() {
    /* Unsubscribes from private subscriptions */
    subscriptions.forEach(sub => {
      store[sub.property] = null
      sub.close()
    })
  }
}