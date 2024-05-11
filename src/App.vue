<template>
  <div>
    <NavBar />
    <HeroSection />
    <div class="container mx-auto p-4">
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection
  }
}
</script>

<style>
/* Estilos globais ou específicos da App */
</style>
