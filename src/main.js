import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'
import router from './router'
import VueAnimXyz from '@animxyz/vue3'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@animxyz/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(VueAnimXyz)

app.mount('#app')
