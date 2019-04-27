import Vue from 'vue'

const store = Vue.observable({
  clicks: 0
})

store.CLICK = () => {
  console.log('clicking')
  store.clicks = store.clicks + 1
}


Vue.prototype.$store = store

export default store