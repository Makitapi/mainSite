<template>
  <main class="page-wrapper">
    <NavBar customClass="bg-light" />
    <div class="vh-100 pt-5 pt-lg-4">
      <Slider />
    </div>
  </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Slider from '@/views/pages/Portfolio/Slider/components/Slider.vue'
</script>
