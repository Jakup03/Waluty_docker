// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importuj komponenty dla poszczególnych stron
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Calculator from '../views/Calculator.vue'; // Dodaj nową stronę kalkulatora

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/calculator', component: Calculator }, // Dodaj trasę dla kalkulatora
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
