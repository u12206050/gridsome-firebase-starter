import Vue from 'vue'
import Storage from './local'

const store = Vue.observable({
  __bindings: {}, // DO NOT REMOVE

  documents: null,
  clicks: 0
})

/* Local storage */
store.$storage = new Storage('gridfire')

/* Example of a function */
store.CLICK = () => {
  console.log('clicking')
  store.clicks = store.clicks + 1
}


Vue.prototype.$store = store

export default store