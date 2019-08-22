<template>
  <div @click="countClick">
    <transition v-if="notice" name="fade">
      <div class="notice-bar" v-text="notice"></div>
    </transition>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-between items-center border-t-3 border-primary">
        <g-link to="/" class="block text-left text-primary text-2xl font-bold">
          Grid<span class="text-accent">Fire</span>
        </g-link>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li><g-link to="/" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">Home</g-link></li>
            <li><g-link to="/about" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">About</g-link></li>
            <span class="flex" v-if="$auth.isLoggedIn">
              <Logout></Logout>
                <div class="md:ml-4 flex items-center justify-start md:mb-0 mb-4">
                  <img :src="authUser.photoURL" class="rounded-full w-10 h-10 border-2 border-transparent">
                </div>
              <li><p class="md:p-4 py-3 px-0 block border-b-2 border-transparent">{{authUser.displayName}}</p></li>
            </span>
              <li v-else><g-link to="/login" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">Log In</g-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <slot/>
    </main>

    <footer class="font-sans bg-black text-white py-8 px-4">
      <div class="mx-auto max-w-xl overflow-hidden flex justify-between items-center">
        <ul class="text-sm text-white list-reset flex items-center">
          <li>
            <a href="/" class="block mr-4 w-32">
              <g-image class="col-xs-5" alt="Gridsome Logo" src="~/favicon.png" width="30" />
            </a>
          </li>
          <li><a href="https://twitter.com/GLamusse" class="inline-block py-2 px-3 text-white hover:text-gray-100 no-underline">@GLamusse</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-white hover:text-gray-100 no-underline">Company</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-white hover:text-gray-100 no-underline">FAQs</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-white hover:text-gray-100 no-underline">About Us</a></li>
        </ul>
        <p class="inline-block py-2 px-3 text-white text-xs"> ©2019 GridFire. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      notice: ''
    }
  },
  methods: {
    /* Example of calling a mutation function on the store */
    countClick() {
      this.$store.CLICK()
    },
    setNotice(msg) {
      this.notice = msg
      setTimeout(() => {
        this.notice = ''
      }, 15000)
    },
  },
  computed: {
    /* Useful function to get the profile of the current user */
    authUser() {
      return this.$auth && this.$auth.currentUser
    }
  },
  watch: {
    "authUser" (authUser) {
      if (authUser) {
        if (!authUser.emailVerified) this.setNotice("We've sent you an email, please confirm you email address")
        else this.setNotice(`Welcome ${authUser.displayName}`)
      }
    }
  }
}
</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">

#menu-toggle:checked + #menu {
  display: block;
}

</style>
