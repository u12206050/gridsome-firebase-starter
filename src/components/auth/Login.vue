<template>
  <div class="Login">
    <Logout class="logout-btn" v-if="$auth.isLoggedIn"></Logout>
    <div v-show="!$auth.isLoggedIn" :id="id"></div>
    <Loading v-if="loading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      id: `firebaseui-${Date.now()}`
    }
  },
  mounted() {
    const v = this
    if (typeof window !== 'undefined') {
      if (window.firebaseAuthUi) {
        document.getElementById(v.id).append(window.firebaseAuthUi.F.a)
        v.loading = false
      } else {
        window.firebaseAuthUi = new firebaseui.auth.AuthUI(v.$auth)
        window.firebaseAuthUi.start(`#${this.id}`, {
          callbacks: {
            signInSuccessWithAuthResult (authResult, redirectUrl) {
              // User successfully signed in
              v.$emit('success', v.$auth.currentUser)

              return false;
            },
            uiShown () {
              v.loading = false
            }
          },
          signInFlow: 'popup',
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
  }
}
</script>

<style lang="sass">
</style>