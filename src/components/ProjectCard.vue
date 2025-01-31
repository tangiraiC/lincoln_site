<script setup>
import { ref } from 'vue';

// Individual image index for each project
const imageIndices = {
  poverty: ref(0),
  fifa: ref(0),
  nyc: ref(0),
  resume: ref(0)
};

// Project images with base URL
const projectImages = {
  poverty: [
    import.meta.env.BASE_URL + 'project-images/poverty-alleviation/1.png',
    import.meta.env.BASE_URL + 'project-images/poverty-alleviation/2.png',
    import.meta.env.BASE_URL + 'project-images/poverty-alleviation/3.png'
  ],
  fifa: [
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Factors-Influencing-Finishing-Ability-in-Soccer-Players/1.png',
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Factors-Influencing-Finishing-Ability-in-Soccer-Players/2.png',
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Factors-Influencing-Finishing-Ability-in-Soccer-Players/3.png'
  ],
  nyc: [
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Property-Rental-Prices-and-Number-of-Reviews-in-the-NYC-in-2023/1.png',
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Property-Rental-Prices-and-Number-of-Reviews-in-the-NYC-in-2023/2.png',
    import.meta.env.BASE_URL + 'project-images/Analysis-of-Property-Rental-Prices-and-Number-of-Reviews-in-the-NYC-in-2023/3.png'
  ],
  resume: [
    import.meta.env.BASE_URL + 'project-images/resume-optimizer/interface.png',
    import.meta.env.BASE_URL + 'project-images/resume-optimizer/optimization-results.png',
    import.meta.env.BASE_URL + 'project-images/resume-optimizer/ai-suggestions.png'
  ]
};

const changeImage = (project, direction) => {
  const images = projectImages[project];
  if (direction === 'next') {
    imageIndices[project].value = (imageIndices[project].value + 1) % images.length;
  } else {
    imageIndices[project].value = imageIndices[project].value === 0 
      ? images.length - 1 
      : imageIndices[project].value - 1;
  }
};
</script>

<template>
  <section class="bg-white dark:bg-indigo-500">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Projects</h2>
        <p class="font-light text-graay-100 lg:mb-16 sm:text-xl dark:text-gray-100">
          Welcome to my projects section, where I showcase a diverse range of hands-on work that blends data science, machine learning, and full-stack development. Each project reflects a commitment to innovative problem-solving, drawing on techniques like predictive modeling, deep learning, and scalable application design. Whether it's analyzing complex datasets, creating intelligent recommendation engines, or building responsive web interfaces, these projects highlight my passion for turning raw data into actionable insights—and transforming those insights into meaningful, user-focused digital experiences.
        </p>
      </div> 
      
      <!-- Projects Grid -->
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
        <!-- Poverty Alleviation Project -->
        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <div class="relative w-full sm:w-1/2">
            <img 
              :src="projectImages.poverty[imageIndices.poverty]" 
              class="w-full h-96 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              alt="Poverty Alleviation Project"
            >
            <button @click="changeImage('poverty', 'prev')" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="changeImage('poverty', 'next')" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div class="p-5 w-full sm:w-1/2">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              World Bank Poverty Analytics Platform
            </h3>
            <span class="text-gray-500 dark:text-gray-300 text-sm">
              Geospatial Poverty Analysis Tool
            </span>
            
            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-300">
              A comprehensive data visualization platform leveraging the World Bank's SPID and GSAP databases to analyze subnational poverty patterns. The tool enables dynamic cross-country comparisons, temporal analysis, and integration of climate variables to understand spatial inequality distributions, supporting evidence-based poverty alleviation strategies.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Vue.js</span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">D3.js</span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Python</span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">GeoPandas</span>
            </div>

            <ul class="flex space-x-4 sm:mt-0">
              <li>
                <a href="https://github.com/yourusername/poverty-viz" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://poverty-viz-demo.vercel.app" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
            <!-- Resume Optimizer Project -->
<div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
  <div class="relative w-full sm:w-1/2">
    <img 
      :src="projectImages.resume[imageIndices.resume]" 
      class="w-full h-96 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
      alt="Resume Optimizer Project"
    >
    <button @click="changeImage('resume', 'prev')" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="changeImage('resume', 'next')" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  
  <div class="p-5 w-full sm:w-1/2">
    <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
      AI-Powered Resume Optimizer
    </h3>
    <span class="text-gray-500 dark:text-gray-300 text-sm">
      Full-Stack AI Application
    </span>
    
    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-300">
      Developed a sophisticated resume optimization tool leveraging DeepSeek AI and Flask. The application analyzes resumes against job descriptions, providing intelligent suggestions for improvements, keyword optimization, and content enhancements. Features include real-time AI feedback, ATS compatibility checking, and tailored recommendations for different industries and job roles.
    </p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
        Python
      </span>
      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
        Flask
      </span>
      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
        DeepSeek AI
      </span>
      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
        HTML/CSS
      </span>
      <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
        JavaScript
      </span>
    </div>

    <ul class="flex space-x-4 sm:mt-0">
      <li>
        <a href="https://github.com/tangiraiC/resume-optimizer" 
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://resume-optimizer-h6ap.onrender.com/" 
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
        <!-- FIFA Wage Analysis Project -->
        [Next project card - would you like me to continue with the FIFA project card?]

        <!-- FIFA Wage Analysis Project -->
        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <div class="relative w-full sm:w-1/2">
            <img 
              :src="projectImages.fifa[imageIndices.fifa]" 
              class="w-full h-96 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              alt="FIFA Wage Analysis Project"
            >
            <button @click="changeImage('fifa', 'prev')" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="changeImage('fifa', 'next')" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div class="p-5 w-full sm:w-1/2">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              FIFA Wage Analysis: Brazilian vs Spanish Players
            </h3>
            <span class="text-gray-500 dark:text-gray-300 text-sm">
              Statistical Analysis & Data Visualization Project
            </span>
            
            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-300">
              Conducted a comprehensive statistical analysis investigating wage disparities between Brazilian and Spanish FIFA substitute players. The project involved hypothesis testing, variance analysis, and effect size calculations to examine potential nationality-based wage differences. Implemented robust data cleaning procedures and advanced statistical methods including t-tests and power analysis, providing actionable insights for FIFA's talent acquisition strategies.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                R
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Statistical Analysis
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Data Visualization
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Hypothesis Testing
              </span>
            </div>

            <ul class="flex space-x-4 sm:mt-0">
              <li>
                <a href="https://github.com/yourusername/fifa-wage-analysis" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- NYC Property Analysis Project -->
        <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <div class="relative w-full sm:w-1/2">
            <img 
              :src="projectImages.nyc[imageIndices.nyc]" 
              class="w-full h-96 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              alt="NYC Property Analysis"
            >
            <button @click="changeImage('nyc', 'prev')" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="changeImage('nyc', 'next')" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div class="p-5 w-full sm:w-1/2">
            <h3 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
              NYC Property Analysis 2023
            </h3>
            <span class="text-gray-500 dark:text-gray-300 text-sm">
              Rental Price and Review Analysis
            </span>
            
            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-300">
              Conducted an in-depth statistical analysis examining the relationship between property rental prices and review volumes in New York City's 2023 market. Utilized OLS regression analysis to investigate pricing patterns, implemented comprehensive data cleaning procedures, and performed robust statistical testing. The study revealed key insights about the limited correlation between review quantities and rental prices, providing valuable market insights for property managers and renters.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                R
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Statistical Analysis
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Regression Modeling
              </span>
              <span class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Data Visualization
              </span>
            </div>

            <ul class="flex space-x-4 sm:mt-0">
              <li>
                <a href="https://github.com/yourusername/nyc-rental-analysis" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" 
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div> <!-- End of Projects Grid -->
    </div>
  </section>
</template>