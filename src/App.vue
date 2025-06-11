<template>
  <RouterView />
  <BackToTop />
  <!-- <ThemeCustomizer /> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'
import BackToTop from '@/components/BackToTop.vue'
import ThemeCustomizer from '@/components/ThemeCustomizer/index.vue'
import configureFakeBackend from '@/helpers/fake-backend'
import { useShoppingStore } from './stores/shopping-context'
const { setTheme } = useThemeStore()
const { state } = useShoppingStore()
import { cartItems } from '@/assets/cart-items'

onMounted(() => {
  setTheme()
  state.cartItems = cartItems
})

configureFakeBackend()
</script>
