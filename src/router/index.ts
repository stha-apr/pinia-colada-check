import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import StandardView from '@/views/StandardView.vue'
import Colada1View from '@/views/Colada1View.vue'
import External1View from '@/views/External1View.vue'
import External2View from '@/views/External2View.vue'
import MutationView from '@/views/MutationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
    },
    {
      path: '/standard',
      name: 'standard',
      component: StandardView,
    },
    {
      path: '/colada',
      name: 'colada',
      component: Colada1View,
    },
    {
      path: '/external-one',
      name: 'external1',
      component: External1View,
    },
    {
      path: '/external-two',
      name: 'external2',
      component: External2View,
    },
    {
      path: '/mutation',
      name: 'mutation',
      component: MutationView,
    }
  ],
})

export default router
