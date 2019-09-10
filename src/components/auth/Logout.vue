<template>
  <li @click="logout" class="pr-2"><a href="#" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">Log Out</a></li>
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
