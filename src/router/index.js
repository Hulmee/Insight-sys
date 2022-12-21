import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VNOCView from '../views/VNOCView.vue'
import ElthamView from '../views/ElthamView.vue'
import MitchamView from '../views/MitchamView.vue'
import MelbourneView from '../views/MelbourneView.vue'
// import VermontView from '../views/VermontView.vue'
// import VictoriaView from '../views/VictoriaView.vue'
import NoControls from '../views/NoControls.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/VNOC',
      name: 'VNOC',
      component: VNOCView,
    },
    {
      path: '/Eltham',
      name: 'Eltham',
      component: ElthamView,
    },
    {
      path: '/Mitcham',
      name: 'Mitcham',
      component: MitchamView,
    },
    {
      path: '/Melbourne',
      name: 'Melbourne',
      component: MelbourneView,
    },
    {
      path: '/Vermont',
      name: 'Vermont',
      component: NoControls,
    },
    {
      path: '/Victoria',
      name: 'Victoria',
      component: NoControls,
    },
  ],
})

export default router
