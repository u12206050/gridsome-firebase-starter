<template>
  <Layout>
    <Login @success="onSuccess" @cancel="onCancel" />
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
