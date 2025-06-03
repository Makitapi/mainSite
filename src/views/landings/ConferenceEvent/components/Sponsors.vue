<template>
  <section class="bg-secondary pb-md-2 pt-lg-2 pb-lg-4 py-xl-4 py-xxl-5">
    <b-container class="py-5">
      <h2 class="h1 text-center pb-sm-2 py-md-3 mt-sm-2 mb-lg-4">Sponsored by</h2>
      <Simplebar class="mb-4 mb-lg-5 pb-3 px-3" data-simplebar>
        <b-row class="row-cols-lg-4 flex-nowrap flex-lg-wrap gy-lg-5 mx-n3">
          <b-col style="min-width: 225px" v-for="(sponsor, idx) in sponsors" :key="idx">
            <img class="d-block d-dark-mode-none mb-2 mb-lg-2" :src="sponsor.image.dark" alt="Logo" />
            <img class="d-none d-dark-mode-block mb-2 mb-lg-2" :src="sponsor.image.light" alt="Logo" />
            <p class="text-body-secondary mb-2">{{ sponsor.description }}</p>
          </b-col>
        </b-row>
      </Simplebar>
      <div class="text-center mb-2 mb-sm-3">
        <a class="btn btn-lg btn-primary" href="#">Become sponsor</a>
      </div>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import { sponsors } from '@/views/landings/ConferenceEvent/data'
</script>
