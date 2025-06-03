<template>
  <b-row class="g-3 g-xl-4">
    <b-col md="4" sm="6" v-for="(stat, idx) in stats" :key="idx">
      <StatsCard :stat="stat" />
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import { stats } from '@/views/account/Earnings/data'
import StatsCard from '@/views/account/Earnings/components/StatsCard.vue'
</script>
