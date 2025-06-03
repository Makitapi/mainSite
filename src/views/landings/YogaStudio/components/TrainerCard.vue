<template>
  <router-link :to="{ name: trainer.link?.name }" class="card-hover card-lifted d-inline-block text-decoration-none">
    <img class="card-lifted d-block rounded-5 mb-3" :src="trainer.image" width="340" alt="" />
    <h3 class="h5 mb-1">{{ trainer.name }}</h3>
    <p class="mb-0 text-body-secondary">{{ trainer.specialistIn }}</p>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { TrainerType } from '@/views/landings/YogaStudio/types'

defineProps({
  trainer: {
    type: Object as PropType<TrainerType>,
    required: true
  }
})
</script>
