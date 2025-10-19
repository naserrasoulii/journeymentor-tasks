import { createApp } from 'vue'
import '@/features/core/styles/style.css'
import App from './App.vue'
import { router } from '@/features/core/router'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
