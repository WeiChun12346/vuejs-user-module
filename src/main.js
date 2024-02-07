import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { globalMixin } from './globalMixins';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router';
import store from './store';
import { defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});


createApp(App)
.use(PrimeVue)
.mixin(globalMixin)
.use(store)
.use(router)
.mount('#app')
