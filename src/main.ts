import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-creative'
import 'aos/dist/aos.css'
import 'jarallax/dist/jarallax.min.css'
import 'simplebar-vue/dist/simplebar.min.css'
import 'flatpickr/dist/flatpickr.css'
import 'leaflet/dist/leaflet.css'
import 'lightgallery/css/lg-fullscreen.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/theme.scss'
import '@/assets/icons/around-icons.min.css'

import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import AOS from 'aos'
import Toast, { type PluginOptions } from 'vue-toastification'

const toastOptions: PluginOptions = {}

import App from './App.vue'
import router from './router'

AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.use(Vue3Lottie)
app.use(Toast, toastOptions)
app.mount('#app')
