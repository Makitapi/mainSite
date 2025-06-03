<template>
  <router-link class="d-block card-hover text-decoration-none mx-auto" to="#" style="max-width: 416px">
    <div class="bg-secondary rounded-5 position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center opacity-0" :style="`background-image: url(${hoverImage});`"></div>
      <img class="position-relative z-2" :src="author.image" alt="Author pic" />
    </div>
    <div class="border-bottom pt-4 pb-3">
      <h3 class="h4 mb-1">{{ author.name }}</h3>
      <p class="text-body-secondary mb-0">{{ author.designation }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { AuthorType } from '@/views/landings/Blog/types'

import hoverImage from '@/assets/img/landing/blog/authors/hover.svg'
defineProps({
  author: {
    type: Object as PropType<AuthorType>,
    required: true
  }
})
</script>
