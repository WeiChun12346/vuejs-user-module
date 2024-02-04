import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { globalMixin } from './globalMixins';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router';
import store from './store';

createApp(App)
.use(PrimeVue)
.mixin(globalMixin)
.use(store)
.use(router)
.mount('#app')
