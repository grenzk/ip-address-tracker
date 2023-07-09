import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import App from '@/App.vue'

import '@/assets/scss/styles.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'leaflet/dist/leaflet.css'

createApp(App).use(PrimeVue, { ripple: true }).use(ToastService).mount('#app')
