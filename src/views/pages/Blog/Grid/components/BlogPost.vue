<template>
  <div class="masonry-grid mb-2 mb-md-4 pb-lg-3" data-columns="3">
    <article class="masonry-grid-item" v-for="(post, idx) in blogPost" :key="idx">
      <b-card no-body class="border-0 bg-secondary">
        <router-link v-if="post.image" :to="{ name: post.link.name }">
          <img class="card-img-top" :src="post.image" alt="img" />
        </router-link>
        <b-card-body class="pb-4">
          <div class="d-flex align-items-center mb-4 mt-n1">
            <span class="fs-sm text-body-secondary">{{ post.time }}</span>
            <span class="fs-xs opacity-20 mx-3">|</span>
            <a class="badge text-nav fs-xs border" href="#">{{ post.category }}</a>
          </div>
          <h3 class="h4 card-title">
            <router-link :to="{ name: post.link.name }">{{ post.title }}</router-link>
          </h3>
          <p class="card-text">{{ post.content }}</p>
        </b-card-body>
        <b-card-footer class="pt-3">
          <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
            <img class="rounded-circle" :src="post.author.avatar" width="48" alt="Post author" />
            <h6 class="ps-3 mb-0">{{ post.author.name }}</h6>
          </a>
        </b-card-footer>
      </b-card>
    </article>
  </div>
  <!-- Pagination -->
  <b-row class="gy-3 align-items-center">
    <b-col md="4" cols="6" order-md="1" class="order-1">
      <div class="d-flex align-items-center">
        <span class="text-body-secondary fs-sm">Show</span>
        <b-form-select class="form-select-flush w-auto" :options="option" v-model="selected"> </b-form-select>
      </div>
    </b-col>
    <b-col md="4" cols="12" order-md="2" class="order-3 text-center">
      <b-button variant="primary" class="w-md-auto w-100">Load more posts</b-button>
    </b-col>
    <b-col md="4" cols="6" order-md="3" class="order-2">
      <nav aria-label="Page navigation">
        <b-pagination size="sm" class="justify-content-end" hide-goto-end-buttons :limit="10" v-model="currentPage" :total-rows="rows"> </b-pagination>
      </nav>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { blogPost } from '@/views/pages/Blog/Grid/data'
import { ref } from 'vue'
const selected = ref(null)
const option = [
  { value: null, text: 6 },
  { value: 9, text: 9 },
  { value: 12, text: 12 },
  { value: 24, text: 24 }
]
const currentPage = ref(1)
const rows = ref(100)
</script>
