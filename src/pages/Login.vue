<template>
  <Layout>
    <div class="row">
      <div class="col-md-8 col-lg-6 center-xs">
        <h2>Login or register to continue</h2>
      </div>
      <div class="col-md-4 col-lg-6 first-sm">
        <Login @success="onSuccess" @cancel="onCancel" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Login from '~/components/auth/Login.vue'

export default {
  metaInfo: {
    title: 'Login'
  },
  components: {
    Login
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
