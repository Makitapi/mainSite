<template>
  <article class="row g-0 border-0 mb-4" v-for="(post, idx) in blogPostList.slice().reverse()" :key="idx" :class="post.shares == 6 ? '' : 'pt-3 pt-sm-0'">
    <router-link class="col-sm-5 col-lg-4 bg-repeat-0 bg-size-cover bg-position-center rounded-5" :to="{ name: post.link.name }" style="min-height: 16rem" :style="{ backgroundImage: `url('${post.image}')` }" aria-label="Post image"></router-link>
    <b-col sm="7" lg="8">
      <div class="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
        <h3>
          <router-link :to="{ name: post.link.name }">{{ post.title }}</router-link>
        </h3>
        <h6>{{ post.subtitle }}</h6>
        <p class="d-sm-none d-md-block">{{ post.firstLine }}</p>
        <div class="d-flex flex-wrap align-items-center mt-n2">
          <!-- <a class="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
            {{ post.shares }}
            <i class="ai-share fs-lg ms-1"></i>
          </a>
          <a class="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
            {{ post.comments }}
            <i class="ai-message fs-lg ms-1"></i>
          </a>
          <span class="fs-xs opacity-20 mt-2 mx-3">|</span> -->
          <span class="fs-sm text-body-secondary mt-2">{{ post.date }}</span>
          <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
          <!-- <a class="badge text-nav fs-xs border mt-2" href="#">{{ post.category }}</a> -->
        </div>
      </div>
    </b-col>
  </article>
  <!-- Pagination -->
  <!-- <b-row class="gy-3 align-items-center mt-lg-5 pt-2 pt-md-3 pt-lg-0 mb-md-2 mb-xl-4">
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
  </b-row> -->
</template>

<script setup lang="ts">
import { blogPostList } from '@/views/Makitapi/3Blog/data'

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
