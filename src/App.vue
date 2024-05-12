<template>
  <div>
    <NavBar />
    <HeroSection />
    <CardSection />
    <AboutSection />
    <div class="container mx-auto p-4">
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import CardSection from './components/CardSection.vue';
import AboutSection from './components/AboutSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    CardSection,
    AboutSection,
  }
}
</script>

<style>
/* Estilos globais ou específicos da App */
</style>
