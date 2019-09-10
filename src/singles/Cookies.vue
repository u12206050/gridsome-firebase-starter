<template>
  <div class="cookies bg-black text-white border-white border-solid" v-if="showCookies">
    <div class="container mx-auto p-8">
      <h3 class="capitalize text-lg font-medium mx-2 my-4">Simple Cookies</h3>
      <div class="row middle-xs center-xs m-2">
        <code class="col-sm-12 col-md">Straight to the point. We will only load cookies if you allow us, otherwise we'll just be using your browser storage and not send any data to our servers</code>
      </div>
      <div class="row">
        <button aria-label="Accept all cookies" @click="setCookie('ALL')" class="py-3 px-6 uppercase text-sm tracking-wide m-2 border-2 bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md transition">Allow All</button>
        <button aria-label="Don't allow cookies" @click="setCookie('BASIC')" class="py-3 px-6 uppercase text-xs tracking-wide m-2 border-2 border-white hover:bg-gray-900">Local Storage Only</button>
      </div>
    </div>
  </div>
  <div v-else class="center-xs">
    <button class="mt-20 py-0 px-1 uppercase text-sm tracking-wide m-2 border-2 bg-indigo-400 text-white hover:bg-indigo-600 hover:shadow-md transition" aria-label="Remove cookies" @click="clearCookies">Clear Cookies</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookies: false
    }
  },
  methods: {
    clearCookies() {
      this.$store.$storage.remove('cookie')
      this.showCookies = true
      try {
        this.$gtm.enable(false)
      } catch(err) { console.warn('Could not toggle gtm') }
    },
    setCookie(level) {
      console.log(`Cookie level: ${level}`)
      this.$store.$storage.setItem('cookie', level)
      try {
        if (level === 'ALL') this.$gtm.enable(true)
      } catch(err) { console.warn('Could not toggle gtm') }
      this.showCookies = false
    },
    checkCookie() {
      let cookie = this.$store.$storage.getItem('cookie')
      console.info(`Cookie level: ${cookie}`)
      if (cookie) {
        this.showCookies = false
        if (cookie === 'ALL') this.$gtm.enable(true)
      } else this.showCookies = true
    }
  },
  mounted() {
    if (process.isClient) {
      setTimeout(() => {
        this.checkCookie()
      }, 1000)
    }
  }
}
</script>