<template>
  <div class="Login">
    <Logout class="logout-btn" v-if="isLoggedIn"></Logout>
    <div v-show="!isLoggedIn" id="firebaseui-auth-container"></div>
    <Loading v-if="loading" />
  </div>
</template>

<script>
import { firebase, auth } from '~/fire'
import firebaseui from 'firebaseui'

const fireUI = new firebaseui.auth.AuthUI(auth)
export default {
  data() {
    return {
      loading: true
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.$auth.currentUser
    }
  },
  mounted() {
    const v = this
    fireUI.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult (authResult, redirectUrl) {
          // User successfully signed in
          v.$emit('success', auth.currentUser)

          return false;
        },
        uiShown () {
          v.loading = false
        }
      },

      signInOptions: [
        // Email address and password
        //firebase.auth.EmailAuthProvider.PROVIDER_ID,

        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,

        // Phone number
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
    })
  }
}
</script>

<style lang="sass">
@import 'node_modules/firebaseui/dist/firebaseui';

</style>