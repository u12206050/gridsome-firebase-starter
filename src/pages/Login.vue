<template>
  <Layout>
    <div class="row">
      <div class="col-md-8 col-lg-6">

      </div>
      <div class="col-md-4 col-lg-6">
        <h2>Login or register to continue</h2>
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
  data() {
    return {
    }
  },
  methods: {
    onSuccess() {
      // Navigate to Dashboard page
    },
    onCancel() {
      // Navigate to Home page
    }
  }
}
</script>
