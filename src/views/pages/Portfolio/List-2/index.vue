<template>
  <main class="page-wrapper">
    <NavBar />

    <b-container class="pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <Breadcrumb :class="'pb-lg-4'" title="Projects" />

      <h1 class="pb-3">A sample of our projects</h1>
      <Projects />
    </b-container>

    <!-- <Contact /> -->
  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
// import Contact from '@/views/pages/Portfolio/List-2/components/Contact.vue'
import Footer from '@/views/landings/CreativeAgency/components/Footer.vue'
import Projects from '@/views/pages/Portfolio/List-2/components/Projects.vue'
</script>
