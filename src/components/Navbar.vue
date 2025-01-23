<script setup>
import { ref } from 'vue'
const navOpen = ref(false)
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <!---mobile -->
    <div class="sm:hidden px-4 py-2 bg-indigo-500 shadow-lg">
      <div class="flex justify-between items-center">
        <a href="#" class="text-white font-bold">L I N C O L N</a>
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
        <a href="#" class="block py-1">Skills</a>
        <a href="#" class="block py-1">Projects</a>
        <a href="#" class="block py-1">About me</a>
        <a href="#" class="block py-1">Contact</a>
        <a href="#" class="block py-1">Resume</a>
      </nav>
    </div>

    <!--desktop-->
    <div class="px-4 py-4 bg-indigo-500 hidden sm:block shadow-lg">
      <div class="max-w-4xl mx-auto flex justify-center items-center gap-x-8 text-white">
        <a href="#" class="font-bold">L I N C O L N</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">About me</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </div>
    </div>
  </div>

  <!-- Spacer div to prevent content from hiding behind navbar -->
  <div class="h-16"></div>
</template>