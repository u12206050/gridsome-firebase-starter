import Vue from 'vue'

const store = Vue.observable({
  documents: null,
  clicks: 0
})

store.CLICK = () => {
  console.log('clicking')
  store.clicks = store.clicks + 1
}


Vue.prototype.$store = store

export default store