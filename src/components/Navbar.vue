<script setup>
import { ref } from 'vue'

// Navigation state
const navOpen = ref(false)

// Navigation items array for easy maintenance
const navItems = [
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'About me', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' }
]
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <!-- Mobile Navigation -->
    <div class="sm:hidden px-4 py-2 bg-indigo-500 shadow-lg">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-white font-bold">L I N C O L N</router-link>
        <button @click="navOpen = !navOpen">
          <svg :class="navOpen ? 'hidden' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
          <svg :class="navOpen ? '' : 'hidden'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="navOpen ? '' : 'hidden'" class="text-white text-center py-2">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="block py-1"
          @click="navOpen = false"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>

    <!-- Desktop Navigation -->
    <div class="px-4 py-4 bg-indigo-500 hidden sm:block shadow-lg">
      <div class="max-w-4xl mx-auto flex justify-center items-center gap-x-8 text-white">
        <router-link to="/" class="font-bold">L I N C O L N</router-link>
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="hover:text-indigo-200 transition-colors"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>

  <!-- Spacer div to prevent content from hiding behind navbar -->
  <div class="h-16"></div>
</template>