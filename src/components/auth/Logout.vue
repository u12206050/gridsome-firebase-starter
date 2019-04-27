<template>
  <span @click="logout" class="Logout">Logout</span>
</template>
<script>
import { auth } from '~/fire'
export default {
  methods: {
    logout() {
      auth.signOut().then(() => {
        alert('loggedout')
        this.$router.push('/')
      }).catch((error) => {
        this.$emit('error', error)
      });
    }
  }
}
</script>
<style lang="scss">
.Logout {
  cursor: pointer;
}
</style>
