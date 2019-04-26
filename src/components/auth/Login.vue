<template>
  <div class="Login">
    <div id="firebaseui-auth-container"></div>
    <Loader v-if="loading" />
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
  mounted() {
    fireUI.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult (authResult, redirectUrl) {
          // User successfully signed in
          this.$emit('success', authResult)
          return true;
        },
        uiShown () {
          this.loading = false
        }
      },

      signInOptions: [
        // Email address and password
        firebase.auth.EmailAuthProvider.PROVIDER_ID,

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

<style>

</style>
