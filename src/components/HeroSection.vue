<template>
    <div class="hero-section bg-cover bg-center h-screen flex items-center justify-center text-center">
      <div class="text-white">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Seja Bem-Vindo!</h1>
        <h4 class="text-lg md:text-xl lg:text-3xl mb-6">A melhor experiência está por vir.</h4>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
          Saiba Mais
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
    background-image: url('~@/assets/bg.jpg');
  }
  </style>
  