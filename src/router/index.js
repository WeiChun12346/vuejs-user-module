import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/home.vue';
import UserListing from '@/pages/user/userListing.vue';
import UserDetail from '@/pages/user/userDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: UserListing },
  { path: '/user/create', component: UserDetail },
  { path: '/user/:id', component: UserDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
