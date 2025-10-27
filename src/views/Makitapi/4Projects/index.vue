<template>
  <main class="page-wrapper">
    <NavBar />

    <b-container class="pt-5 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <Breadcrumb :class="'pb-lg-4'" :title="$t('projects.breadcrumbTitle')" />

      <h1 class="pb-3">{{ $t('projects.mainTitle') }}</h1>
      <Projects />
    </b-container>

  </main>

  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'
import Projects from '@/views/Makitapi/4Projects/components/Projects.vue'
</script>
