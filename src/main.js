// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que la ruta a 'router' es correcta
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';  
import 'primevue/resources/primevue.min.css';            
import 'primeicons/primeicons.css';                      

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.mount('#app');
