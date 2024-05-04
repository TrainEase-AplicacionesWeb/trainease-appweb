import { createRouter, createWebHistory } from 'vue-router';
import home from '../trainease-customers/pages/home.vue';
import login from '../public/pages/login.vue'

const routes = [
    { path: '/', component: login },
    { path: '/home', component: home }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
