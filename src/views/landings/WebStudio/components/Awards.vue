<template>
  <b-container class="pb-5 pt-lg-3 pt-xl-4 pt-xxl-5 mt-n2 mt-md-0">
    <b-row class="justify-content-center row-cols-2 row-cols-3 row-cols-md-5 gx-0 gx-sm-3 gx-md-2 gx-lg-3 gx-xl-4">
      <b-col v-for="(award, idx) in awards" :key="idx">
        <div class="py-sm-2 my-xl-1">
          <img class="d-block d-dark-mode-none mx-auto" :src="award.image.dark" width="196" :alt="award.name" />
          <img class="d-none d-dark-mode-block mx-auto" :src="award.image.light" width="196" :alt="award.name" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { awards } from '@/views/landings/WebStudio/data'
</script>
