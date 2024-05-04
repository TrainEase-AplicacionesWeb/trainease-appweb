import { createRouter, createWebHistory } from 'vue-router';
import home from '../trainease-customers/pages/home.vue';
import login from '../public/pages/login.vue';
import routines from '../trainease-customers/pages/routines.vue';

const routes = [
    { path: '/', component: login },
    { path: '/home', component: home },
    { path: '/routine', component: routines}

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
