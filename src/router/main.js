import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "PageHome" */ '@/pages/Home.vue'),
  },
  {
    path: '/stack',
    name: 'Stack',
    component: () => import(/* webpackChunkName: "PageStack" */ '@/pages/Stack.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "PageProjects" */ '@/pages/Projects.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "PageContact" */ '@/pages/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
