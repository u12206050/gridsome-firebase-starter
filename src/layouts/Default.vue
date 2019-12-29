<template>
  <div @click="countClick">

    <transition v-if="notice" name="fade">
      <div class="notice-bar" v-text="notice"></div>
    </transition>

    <Header/>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <LazyHydrate when-idle>
      <Cookies />
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <Footer/>
    </LazyHydrate>
  </div>
</template>

<script>
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
  },
  components: {
    Header: () => import('~/structure/Header.vue'),
    Footer: () => import('~/structure/Footer.vue'),
    Cookies: () => import('~/singles/Cookies.vue')
  }
}
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

#menu-toggle:checked + #menu {
  display: block;
}

/* PAGE TRANSITIONs */
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}

</style>
