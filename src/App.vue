<template>
  <div>
    <NavBar />
    <HeroSection />
    <CardSection />
    <AboutSection />
    <InfoSection />
    <ProductSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import CardSection from './components/CardSection.vue';
import AboutSection from './components/AboutSection.vue';
import InfoSection from './components/InfoSection.vue';
import ProductSection from './components/ProductSection.vue';
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    CardSection,
    AboutSection,
    InfoSection,
    ProductSection,
    FooterSection
  }
}
</script>

<style>
/* Estilos globais ou específicos da App */
</style>
