<script setup>
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import Skills from './components/Skills.vue';
import ProjectCard from './components/ProjectCard.vue';
</script>

<template >
  <div class="bg-white dark:bg-indigo-500">
    <Navbar/>
    <HeroSection/>
    <Skills/>
    <ProjectCard/>
    <About/>
    <Footer/>
  </div>
</template>


