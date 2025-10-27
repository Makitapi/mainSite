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
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/theme.scss'
import '@/assets/icons/around-icons.min.css'

// Pre-load enabled locales synchronously
import enLocales from '@/locales/en.json'
import ptLocales from '@/locales/pt.json'
import esLocales from '@/locales/es.json'

import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import Toast, { type PluginOptions } from 'vue-toastification'

const toastOptions: PluginOptions = {}

import App from './App.vue'
import router from './router'
import { enabledLanguages } from '@/helpers/languages'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: enLocales,
    pt: ptLocales,
    es: esLocales
  },
  allowComposition: true
})

// Set locale from localStorage if available
const savedLocale = localStorage.getItem('userLanguage')
if (savedLocale && enabledLanguages.some(lang => lang.code === savedLocale)) {
  i18n.global.locale.value = savedLocale as 'en' | 'pt' | 'es'
}

AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createBootstrap())
app.use(Vue3Lottie)
app.use(Toast, toastOptions)
app.mount('#app')
