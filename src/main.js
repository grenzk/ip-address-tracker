import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from '@/App.vue'

import '@/assets/scss/styles.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'

createApp(App).use(PrimeVue, { ripple: true }).mount('#app')
