<template>
  <header class="navbar navbar-expand-lg fixed-top bg-light">
    <b-container>
      <LogoBox />
      <ThemeSwitcher />
      <!-- Account + Cart -->
      <div class="nav align-items-center order-lg-3 ms-n1 me-3 me-sm-0">
        <router-link class="nav-link fs-4 p-2 mx-sm-1 d-none d-sm-flex" :to="{ name: 'auth.sign-in' }" aria-label="Account">
          <i class="ai-user"></i>
        </router-link>
        <a class="nav-link position-relative fs-4 p-2" role="button" v-b-toggle.cartOffcanvas>
          <i class="ai-cart"></i>
          <span v-if="cartItems > 0" class="badge bg-primary fs-xs position-absolute end-0 top-0 me-n1" style="padding: 0.25rem 0.375rem">{{ cartItems }}</span>
        </a>
      </div>
      <!-- Mobile menu toggler (Hamburger) -->
      <button class="navbar-toggler ms-sm-3" type="button" v-b-toggle="'navbar'">
        <span class="navbar-toggler-icon"></span>
      </button>
      <AppMenu />
    </b-container>
  </header>
  <CartOffcanvas />
</template>
<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import LogoBox from '@/components/NavBar/LogoBox.vue'
import ThemeSwitcher from '@/components/NavBar/ThemeSwitcher.vue'
import CartOffcanvas from '@/components/NavBar/CartOffcanvas.vue'
import { useShoppingStore } from '@/stores/shopping-context'
import { computed } from 'vue'

const useShopping = useShoppingStore()

const cartItems = computed(() => {
  return useShopping.state.cartItems.length
})
</script>
