<template>
    <div class="font-sans text-center p-20 lg:px-0 bg-gray-100">
      <div class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow">
        <div class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
          <h2 class="capitalize font-medium">Ready for an awesome Firebase & Gridsome powered app!</h2>
          <p class="text-gray-900 mt-2 mb-6">You have clicked <strong v-text="clicks"></strong> times</p>
        </div>
        <div class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 mr-6 pb-6 sm:pl-0 sm:pb-0">
          <button class=" bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide">Click again</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    computed: {
      clicks() {
        return this.$store.clicks
      },
    }
}
</script>