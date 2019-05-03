<template>
  <span @click="logout" class="Logout">Logout</span>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.signOut().then(() => {
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
