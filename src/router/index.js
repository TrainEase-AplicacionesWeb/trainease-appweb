import { createRouter, createWebHistory } from 'vue-router';
import home from '../trainease-customers/pages/home.vue';
import login from '../public/pages/login.vue';
import signin from '../public/pages/signin.vue'
import routines from '../trainease-customers/pages/routines.vue';
import myprofile from '../trainease-customers/pages/myprofile.vue';
import FAQ from '../trainease-customers/pages/faq.vue';
import schedule from '../trainease-customers/pages/schedule.vue'

const routes = [
    { path: '/', component: login },
    { path: '/signin', component: signin},
    { path: '/home', component: home },
    { path: '/routine', component: routines},
    { path: '/myprofile', component: myprofile},
    { path: '/FAQ', component: FAQ},
    { path: '/schedule', component: schedule},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
