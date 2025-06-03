<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <Simplebar class="overflow-auto pb-sm-4 pb-md-5 pt-sm-2 pt-md-3 mt-n2 mt-sm-0 mt-md-1 mt-lg-3 mb-lg-2" data-simplebar>
      <b-row class="row-cols-5 g-0 pb-2" style="min-width: 768px">
        <b-col class="d-flex justify-content-center" v-for="(partner, idx) in partners" :key="idx">
          <img class="d-dark-mode-none" :src="partner.image.light" width="196" :alt="partner.name" />
          <img class="d-none d-dark-mode-block" :src="partner.image.dark" width="196" :alt="partner.name" />
        </b-col>
      </b-row>
    </Simplebar>
  </b-container>
</template>

<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import { partners } from '@/views/landings/InsuranceCompany/data'
</script>
