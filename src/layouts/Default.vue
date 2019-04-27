<template>
  <div class="layout" @click="countClick">
    <transition v-if="notice" name="fade">
      <div class="notice-bar" v-text="notice"></div>
    </transition>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav row middle-xs">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <span class="row middle-xs" v-if="isLoggedIn">
          <Logout class="nav__link"></Logout>
          <img :src="authUser.photoURL" class="profile-img">
          <p>{{authUser.displayName}}</p>
        </span>
        <g-link v-else class="nav__link" to="/login">Login</g-link>
      </nav>
    </header>
    <slot/>
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
    /* Useful function to check if the user is logged in */
    isLoggedIn() {
      return !!this.$auth.currentUser
    },
    /* Useful function to get the profile of the current user */
    authUser() {
      return this.$auth.currentUser
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: var(--primary-bg);
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.notice-bar {
  text-align: center;
  width: 100%;
  padding: 1rem;
  background: var(--secondary-bg);
  color: var(--secondary-color);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: var(--header-height);
}

.nav__link {
  margin-left: 20px;
  color: var(--primary-link-color);
}

.profile-img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  object-position: center;
  border-radius: 2rem;
  margin-left: 1rem;
}
</style>
