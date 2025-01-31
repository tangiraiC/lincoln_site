import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Add this to match Vite base config
  routes: [
    {
      path: '/',
      component: () => import('../components/Home.vue'),
    },
    { path: '/skills', component: () => import('../components/Skills.vue') },
    { path: '/projects', component: () => import('../components/ProjectCard.vue') },
    { path: '/about', component: () => import('../components/About.vue') },
    { path: '/contact', component: () => import('../components/ContactForm.vue') },
    { path: '/resume', component: () => import('../components/Resume.vue') }
  ]
})

export default router