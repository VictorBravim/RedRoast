<template>
  <div>
    <NavBar />
    <HeroSection />
    <CardSection />
    <AboutSection />
    <InfoSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import CardSection from './components/CardSection.vue';
import AboutSection from './components/AboutSection.vue';
import InfoSection from './components/InfoSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    CardSection,
    AboutSection,
    InfoSection,
  }
}
</script>

<style>
/* Estilos globais ou específicos da App */
</style>
