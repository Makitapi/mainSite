<template>
  <aside class="col-lg-3 offset-xl-1">
    <div size="lg" class="offcanvas-end" placement="end" header-class="h4" id="sidebar" title="Sidebar">
      <div class="offcanvas-body">
        <!-- Search box -->
        <div class="position-relative mb-4 mb-lg-5">
          <i class="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
          <input class="form-control ps-5" type="search" placeholder="Enter keyword" />
        </div>

        <h4 class="pt-1 pt-lg-0 mt-lg-n2">Most popular:</h4>
        <div class="mb-lg-5 mb-4">
          <article class="position-relative pb-2 mb-3 mb-lg-4">
            <img class="rounded-5" :src="blog01" alt="img" />
            <h5 class="h6 mt-3 mb-0">
              <router-link class="stretched-link" :to="{ name: 'blog.post-1' }">The fashion for eco bags with vintage prints will still be relevant for more than one year</router-link>
            </h5>
          </article>
          <article class="position-relative">
            <img class="rounded-5" :src="blog06" alt="img" />
            <h5 class="h6 mt-3 mb-0">
              <router-link class="stretched-link" :to="{ name: 'blog.post-2' }">A session with a psychologist as a personal choice or a fashion trend</router-link>
            </h5>
          </article>
        </div>

        <h4 class="pt-3 pt-lg-1 mb-4">Recent posts:</h4>
        <ul class="list-unstyled mb-lg-5 mb-4">
          <li v-for="(item, idx) in trendingPost" :key="idx" class="" :class="idx == trendingPost.length - 1 ? 'border-bottom pb-3' : 'border-bottom pb-3 mb-3'">
            <span class="h6 mb-0">
              <router-link :to="{ name: item.link.name }">{{ item.title }}</router-link>
            </span>
          </li>
        </ul>

        <h4 class="pt-3 pt-lg-1 mb-4">Relevant topics:</h4>
        <div class="d-flex flex-wrap mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
          <b-button v-for="tag in topics" :key="tag" class="mt-3 ms-3" pill variant="outline-secondary" href="#">{{ tag }}</b-button>
        </div>
      </div>
    </div>
  </aside>
  <b-button class="d-lg-none fs-sm w-100 rounded-0 fixed-bottom" variant="primary" size="sm" @click="offcanvas = !offcanvas" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
    <i class="ai-layout-column me-2"></i>
    Sidebar
  </b-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { topics, trendingPost } from '@/views/pages/Blog/SingleV3/data'
const offcanvas = ref(false)

import blog01 from '@/assets/img/blog/list/01.jpg'
import blog06 from '@/assets/img/blog/list/06.jpg'
</script>
