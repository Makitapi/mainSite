<template>
  <div class="card-hover zoom-effect mx-auto" style="max-width: 620px">
    <div class="zoom-effect-wrapper rounded-5">
      <div class="zoom-effect-img">
        <img :src="article.image" alt="img" />
      </div>
    </div>
    <div class="pt-4 mt-lg-2">
      <h2 class="h5 mb-2">
        <router-link class="stretched-link text-nav" :to="{ name: 'portfolio.single-1' }">
          {{ article.title }}
        </router-link>
      </h2>
      <span class="fs-sm text-body-secondary opacity-0 d-none d-sm-block">{{ article.tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ArticleType } from '@/views/pages/Portfolio/Grid1/data'

defineProps({
  article: {
    type: Object as PropType<ArticleType>,
    required: true
  }
})
</script>
