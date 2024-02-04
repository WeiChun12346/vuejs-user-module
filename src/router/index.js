import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/home.vue';
import UserListing from '@/pages/user/userListing.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: UserListing }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
