<template>
  <div class="hero-section bg-cover bg-center h-screen flex items-center justify-center text-center">
    <div class="text-white">
      <h1 class="text-4xl md:text-5xl lg:text-8xl font-bold mb-4">Fresh, Safe <br> Quality Meats</h1>
      <h4 class="text-gray-300 text-lg md:text-xl lg:text-3xl mb-6">A melhor experiência está por vir.</h4>
      <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12">
        SAIBA MAIS
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  background-image: url('~@/assets/bg.png');
}
</style>