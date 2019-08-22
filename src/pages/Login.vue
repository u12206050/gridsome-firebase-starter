<template>
  <main>
    <div class="row">
      <div class="col-md-8 col-lg-6 center-xs">
        <h2>Login or register to continue</h2>
      </div>
      <div class="col-md-4 col-lg-6 first-sm">
        <Login v-if="show" @success="onSuccess" @cancel="onCancel" />
        <button v-else @click="show = true">Login / Register</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  metaInfo: {
    title: 'Login'
  },
  components: {
    Login: () => import('~/components/auth/Login.vue')
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onSuccess() {
      // Navigate to Dashboard page
      this.$router.push('/')
    },
    onCancel() {
      // Navigate to Home page
    }
  }
}
</script>
