<template>
  <b-container class="pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <b-row class="gy-3 pb-sm-3 pb-md-4 pb-lg-5">
      <b-col sm="6" lg="4" v-for="(item, idx) in benefits" :key="idx">
        <div class="d-flex align-items-center mb-3">
          <div class="flex-shrink-0 bg-primary rounded-1 p-2">
            <span v-html="item.icon" />
          </div>
          <h3 class="h5 ms-3 mb-0">{{ item.title }}</h3>
        </div>
        <p class="fs-sm">{{ item.description }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { benefits } from '@/views/landings/InsuranceCompany/data'
</script>
