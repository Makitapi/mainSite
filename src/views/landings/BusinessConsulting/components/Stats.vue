<template>
  <b-container class="pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
    <div class="bg-light rounded-5 py-4 py-md-5 px-lg-5">
      <b-row class="row-cols-2 row-cols-md-4 g-0">
        <b-col class="d-md-flex justify-content-center text-center text-md-start position-relative" v-for="(stat, idx) in stats" :key="idx">
          <div class="position-absolute top-50 end-0 translate-middle-y" :class="{ 'border-end': idx != stats.length - 1 }" style="height: 60px"></div>
          <div class="p-3 px-sm-0 py-sm-4">
            <div class="h2 display-5 text-primary mb-0">{{ stat.title }}</div>
            <span>{{ stat.description }}</span>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { stats } from '@/views/landings/BusinessConsulting/data'
</script>
