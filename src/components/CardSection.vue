<template>
  <div class="w-full lg:px-56 bg-red-600 absolute lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-40 margintop">
    <div class="flex flex-row justify-center">
      <div class="flex flex-col lg:flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/cortes.png" alt="Logo" class="lg:mb-4 lg:mr-4" />
        <div class="hidden lg:block">
        <h1 class="text-2xl font-semibold mb-2">Entrecosto De Vitela</h1>
        <h2 class="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/beaf.png" alt="Logo" class="lg:mb-4" />
        <div class="hidden lg:block">
        <h1 class="text-2xl font-semibold mb-2">Lombo De Porco</h1>
        <h2 class="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center text-white p-6 text-left w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src="@/assets/pork.png" alt="Logo" class="lg:mb-4 lg:mr-4" />
        <div class="hidden lg:block">
        <h1 class="text-2xl font-semibold mb-2">Costelas De Boi</h1>
        <h2 class="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSection'
}
</script>

<style scoped>
.margintopn {
  margin-top: 1250px;
}
</style>