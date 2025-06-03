<template>
  <b-card no-body class="border-0 bg-secondary rounded-4 position-relative">
    <b-card-body class="d-sm-flex align-items-start text-center text-sm-start">
      <div class="w-100 pe-sm-4 mb-3 mb-sm-0" style="max-width: 27rem">
        <h3 class="mb-2">{{ plan.title }}</h3>
        <p class="fs-lg mb-0">{{ plan.validFor }}</p>
      </div>
      <div class="w-100 pe-sm-3 mx-auto me-sm-0 mb-3 mb-sm-0" style="max-width: 8rem">
        <div class="h3 text-primary mb-0 mb-sm-2">{{ currency }}{{ plan.price }}</div>
        <span class="fs-sm">{{ currency }}{{ plan.perClassPrice }} per class</span>
      </div>
      <b-button size="sm" variant="outline-primary" class="stretched-link w-100 w-sm-auto" type="button">Buy</b-button>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
import type { PropType } from 'vue'
import type { PricingType } from '@/views/landings/YogaStudio/types'

defineProps({
  plan: {
    type: Object as PropType<PricingType>,
    required: true
  }
})
</script>
