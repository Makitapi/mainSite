<template>
  <header>
    <div class="navbar navbar-expand-lg fixed-top" :class="customClass">
      <b-container>
        <LogoBox />


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
import { type PropType } from 'vue'

import { useThemeStore } from '@/stores/theme'
</script>
