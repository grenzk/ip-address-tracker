import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import App from '@/App.vue'

import '@/assets/scss/styles.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'leaflet/dist/leaflet.css'

import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .component('Button', Button)
  .component('Divider', Divider)
  .component('InputText', InputText)
  .component('Toast', Toast)
  .mount('#app')
