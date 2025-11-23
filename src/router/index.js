import { createRouter, createWebHashHistory } from 'vue-router';
import HomeApp from '../views/HomeApp.vue';
import AboutApp from '../views/AboutApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutApp,
  },
];

// Menggunakan createWebHashHistory agar kompatibel dengan GitHub Pages
const router = createRouter({
  history: createWebHashHistory(), 
  routes,
});

export default router;