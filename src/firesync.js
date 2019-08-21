/**
 * Firesync
 * Author: Gerard Lamusse
 * Version: 1.0
 *
 * Add your subscriptions within the functions at the bottom of the file.
 */

import store from './store'
import Vue from 'vue'

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
 * @param {Observable} store (optional)
 */
function subscribe(ref, property, cb, state = store) {
  return {
    ref,
    property,
    close: ref.onSnapshot((snap) => {
      const result = snap.id ? docData(snap) : snap.docs.map(docData)
      Vue.set(state, property, result)
      if (cb) cb(result)
    }, (err) => console.warn('Subscribe Error: ', err))
  }
}

/**
 * Bind a local property to firebase subscription
 * Within your components you can call:
 *
 * this.$bind(db.collection('documents'), docs, () => {
 *  this.loading = false
 * })
 */
Vue.prototype.$bind = function (ref, property, cb) {
  if (!this.__bindings) {
    this.__bindings = {}
    this.$options.destroyed.push(() => {
      Object.values(this.__bindings).forEach(sub => sub.close())
    })
  }
  this.__bindings[property] = subscribe(ref, property, cb, this)
}

store.$bind = function(ref, property, cb) {
  return store.__bindings[property] = subscribe(ref, property, cb)
}


/**
 * Unbind a local property
 *
 * Note that you don't have to manually call unbind
 * since that happens right before the component is destroyed
 */
Vue.prototype.$unbind = function (property, value) {
  if (this.__bindings && this.__bindings[property]) {
    this.__bindings[property].close()
    delete this.__bindings[property]
  }
  if (typeof value !== 'undefined') this[property] = value
}

store.$unbind = function(property, value) {
  if (store.__bindings[property]) {
    store.__bindings[property].close()
    delete store.__bindings[property]
  }
  if (typeof value !== 'undefined') store[property] = value
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
    /** Add public subscriptions here */

    /* EXAMPLE */
    /*
    store.$bind(db.collection('rates'), 'rates', () => {
      if (Array.isArray(store.rates)) {
        store.loadedExchangeRates = true
      }
    })
    */
  },
  onLogin(db, uid) {
    /** Add private, user only subscriptions here */
    store.$bind(db.collection('users').doc(uid), 'user')
  },
  onLogout() {
    /* Unsubscribes from private subscriptions */
    store.$unbind('user', null)
  }
}