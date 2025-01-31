<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-white dark:bg-indigo-500">
    <Navbar />
    <!-- This is where your routed components will render -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <Footer />
  </div>
</template>