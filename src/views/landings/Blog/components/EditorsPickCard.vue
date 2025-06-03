<template>
  <b-card no-body class="border-0 bg-secondary">
    <b-card-body class="pb-4">
      <div class="d-flex align-items-center mb-4 mt-n1">
        <span class="fs-sm text-body-secondary">{{ article.time }}</span>
        <span class="fs-xs opacity-20 mx-3">|</span>
        <router-link class="badge text-nav fs-xs border" to="#">{{ article.category }}</router-link>
      </div>
      <h3 class="h4 card-title">
        <router-link :to="{ name: 'blog.post-1' }">{{ article.title }}</router-link>
      </h3>
      <p class="card-text">{{ article.description }}</p>
    </b-card-body>
    <b-card-footer class="pt-3">
      <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
        <img class="rounded-circle" :src="article.author?.image" width="48" alt="Post author" />
        <h6 class="ps-3 mb-0">{{ article.author?.name }}</h6>
      </a>
    </b-card-footer>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ArticleType } from '@/views/landings/Blog/types'

defineProps({
  article: {
    type: Object as PropType<ArticleType>,
    required: true
  }
})
</script>
