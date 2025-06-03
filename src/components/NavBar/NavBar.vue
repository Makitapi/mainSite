<template>
  <header :data-bs-theme="useTheme.theme.mode === 'dark' ? 'dark' : theme">
    <div class="navbar navbar-expand-lg fixed-top" :class="customClass">
      <b-container>
        <LogoBox />

        <!-- Theme switcher -->
        <ThemeSwitcher />

        <a class="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" :class="buttonClass" :href="buyLink" target="_blank" rel="noopener">
          <i class="ai-cart fs-xl me-2 ms-n1"></i>
          Buy now
        </a>

        <!-- Mobile menu toggler (Hamburger) -->
        <button class="navbar-toggler ms-sm-3" v-b-toggle="'navbar'">
          <span class="navbar-toggler-icon"></span>
        </button>

        <AppMenu />
      </b-container>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import LogoBox from '@/components/NavBar/LogoBox.vue'
import ThemeSwitcher from '@/components/NavBar/ThemeSwitcher.vue'
import { type PropType } from 'vue'

import { useThemeStore } from '@/stores/theme'
import { buyLink } from '@/helpers/constants'

defineProps({
  theme: {
    type: String as PropType<'light' | 'dark'>
  },
  customClass: String,
  buttonClass: String
})

const useTheme = useThemeStore()
</script>
