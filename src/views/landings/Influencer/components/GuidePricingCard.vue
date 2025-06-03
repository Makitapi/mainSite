<template>
  <b-card no-body class="h-100 border-0 rounded-4 pb-3">
    <div class="position-relative" data-bs-theme="light">
      <b-card-body class="position-absolute start-0 bottom-0 py-4">
        <div class="d-table badge bg-danger rounded-pill mb-2">{{ plan.programs }} programs</div>
        <div class="d-table badge bg-light text-nav rounded-pill">&gt; {{ plan.exercises }} exercises</div>
      </b-card-body>
      <img class="rounded-4 rounded-bottom-0" :src="plan.image" alt="Guide" />
    </div>
    <b-card-body class="pb-4">
      <div class="text-primary fw-bold pb-2 mb-1">{{ currency }}{{ plan.price }}</div>
      <h3 class="h4">{{ plan.title }}</h3>
      <ul class="fs-sm ps-4 mb-0">
        <li class="mb-2" v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</li>
      </ul>
    </b-card-body>
    <b-card-footer class="border-0 pt-0">
      <b-button variant="outline-primary" class="w-100" type="button" :href="buyLink">Buy now</b-button>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import { buyLink, currency } from '@/helpers/constants'
import type { PropType } from 'vue'
import type { GuidePricingType } from '@/views/landings/Influencer/types'

defineProps({
  plan: {
    type: Object as PropType<GuidePricingType>,
    required: true
  }
})
</script>
