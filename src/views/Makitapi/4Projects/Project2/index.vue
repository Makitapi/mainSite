<template>
  <main class="page-wrapper">
    <NavBar />

    <Hero />

    <ShowCase />

    <!-- <Testimonial /> -->

    <Footer />
  </main>
</template>

<script lang="ts" setup>
import Hero from '@/views/Makitapi/4Projects/Project2/components/Hero.vue'
import ShowCase from '@/views/Makitapi/4Projects/Project2/components/ShowCase.vue'
import Testimonial from '@/views/Makitapi/4Projects/Project2/components/Testimonial.vue'
import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'

import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'

onMounted(() => {
  document.querySelector('a.btn')?.classList.add('rounded-0')
})

onUnmounted(() => {
  document.querySelector('a.btn')?.classList.remove('rounded-0')
})
</script>
