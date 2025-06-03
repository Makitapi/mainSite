<template>
  <b-card no-body class="card-flip">
    <div class="card-flip-inner">
      <div class="card-flip-front bg-secondary rounded-5 py-2 py-lg-4 px-0">
        <b-card-body class="text-center">
          <span v-html="benefit.cardFront.icon" />
          <h3>{{ benefit.cardFront.heading }}</h3>
          <p class="card-text">{{ benefit.cardFront.paragraph }}</p>
        </b-card-body>
      </div>
      <div class="card-flip-back rounded-5 py-2 py-lg-4 px-0" :class="`bg-${benefit.cardBack.color}`">
        <b-card-body class="text-center">
          <span v-html="benefit.cardBack.icon" />
          <div class="h3 display-4 text-white pb-1 mb-2">{{ benefit.cardBack.heading }}</div>
          <p class="card-text text-white opacity-70">{{ benefit.cardBack.paragraph }}</p>
        </b-card-body>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { BenefitType } from '@/views/pages/about/Product/data'

defineProps({
  benefit: {
    type: Object as PropType<BenefitType>,
    required: true
  }
})
</script>
