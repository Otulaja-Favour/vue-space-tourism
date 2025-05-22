import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeview.vue'
// import destination from '../views/destinationview.vue'
// import crew from '../views/crewview.vue'
// import technology from '../views/technologyview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      
      component: () => import('../views/destinationview.vue'),
    },
    {
      path: '/crew',
      name: 'crew',
      
      component: () => import('../views/crewview.vue'),
    },
    {
      path: '/technology',
      name: 'technology',
      
      component: () => import('../views/technologyview.vue'),
    },
  ],
})

export default router
