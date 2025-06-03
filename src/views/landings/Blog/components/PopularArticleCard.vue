<template>
  <b-card no-body class="h-100 border-0 mx-auto" style="max-width: 416px">
    <router-link :to="{ name: article.link?.name }">
      <img class="card-img-top" :src="article.image" alt="Post img" />
    </router-link>
    <b-card-body class="pb-4">
      <div class="d-flex align-items-center mb-4 mt-n1">
        <span class="fs-sm text-body-secondary">{{ article.time }}</span>
        <span class="fs-xs opacity-20 mx-3">|</span>
        <router-link class="badge text-nav fs-xs border" to="#" v-if="article.category">{{ toSentenceCase(article.category) }}</router-link>
      </div>
      <h3 class="h4 card-title">
        <router-link :to="{ name: article.link?.name }">{{ article.title }}</router-link>
      </h3>
      <p class="card-text">{{ article.description }}</p>
    </b-card-body>
    <div class="card-footer pt-3">
      <router-link class="d-flex align-items-center text-decoration-none pb-2" to="#">
        <img class="rounded-circle" :src="article.author?.image" width="48" alt="" />
        <h6 class="ps-3 mb-0">{{ article.author?.name }}</h6>
      </router-link>
    </div>
  </b-card>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ArticleType } from '@/views/landings/Blog/types'
import { toSentenceCase } from '@/helpers/change-casing'

defineProps({
  article: {
    type: Object as PropType<ArticleType>,
    required: true
  }
})
</script>
