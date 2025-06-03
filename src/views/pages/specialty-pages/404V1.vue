<template>
  <main class="page-wrapper">
    <b-container class="d-flex flex-column justify-content-center min-vh-100 py-5">
      <Vue3Lottie :animation-data="animation404" class="d-dark-mode-none mt-n5" background="transparent" :speed="1" loop autoplay></Vue3Lottie>
      <Vue3Lottie :animation-data="animationDark404" class="d-none d-dark-mode-block mt-n5" background="transparent" :speed="1" loop autoplay></Vue3Lottie>
      <div class="text-center pt-4 mt-lg-2">
        <h1 class="display-5">Page not found</h1>
        <p class="fs-lg pb-2 pb-md-0 mb-4 mb-md-5">The page you are looking for was moved, removed or might never existed.</p>
        <router-link class="btn btn-lg btn-primary" :to="{ name: 'landing' }">Go to homepage</router-link>
      </div>
    </b-container>
  </main>
</template>

<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import animation404 from '@/assets/json/animation-404-light.json'
import animationDark404 from '@/assets/json/animation-404-dark.json'
</script>
