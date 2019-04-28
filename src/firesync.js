import store from './store'
import Vue from 'vue'

const subscriptions = []

function docData(doc) {
  let data = doc.data()
  data.id = doc.id
  data.__ref__ = doc.ref

  return data
}
Vue.prototype.$docData = docData

function subscribe(ref, property, cb) {
  return {
    ref,
    property,
    close: ref.onSnapshot((snap) => {
      console.info('onSnapshot', property, snap)
      Vue.set(store, property, snap.id ? docData(snap) : snap.docs.map(docData))
      if (cb) cb()
    }, (err) => console.warn('Subscribe Error: ', err))
  }
}

export default {
  onLogin(db, uid) {
    /* Get Teams */
    subscriptions.push(
      /**
       *
       * Add subscriptions you want to sync to store here:
       *
       * subscribe(ref, property, callbackFn?)
       *
      */
      subscribe(db.collection('users').doc(uid), 'user'),
      subscribe(db.collection('documents').where('count', '>', '20'), 'documents', () => {
        if (Array.isArray(store.documents)) {
          console.log(store.documents.length)
          store.loadedDocuments = true
        }
      })
    )
  },
  onLogout() {
    subscriptions.forEach(sub => {
      store[sub.property] = null
      sub.close()
    })
  }
}