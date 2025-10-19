import { createApp } from 'vue'
import '@/features/core/styles/style.css'
import App from './App.vue'
import { router } from '@/features/core/router'

createApp(App).use(router).mount('#app')
