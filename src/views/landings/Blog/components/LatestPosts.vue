<template>
  <b-container class="py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="h1 pb-3 py-md-4">Latest posts</h2>
    <b-row class="pb-md-4 pb-lg-5">
      <b-col lg="6" class="pb-2 pb-lg-0 mb-4 mb-lg-0">
        <b-card no-body class="h-100 border-0 position-relative overflow-hidden bg-size-cover bg-position-center me-lg-4" :style="`background-image: url(${blog4})`">
          <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60"></div>
          <b-card-body class="d-flex flex-column position-relative z-2 mt-sm-5">
            <h3 class="pt-5 mt-4 mt-sm-5 mt-lg-auto">
              <router-link class="stretched-link text-light" :to="{ name: 'blog.post-1' }">Travel destinations to inspire and restore resources </router-link>
            </h3>
            <p class="card-text text-light opacity-70">Morbi et massa scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet pharetra at condimentum...</p>
            <div class="d-flex align-items-center">
              <span class="fs-sm text-light opacity-50">9 hours ago</span>
              <span class="fs-xs text-light opacity-30 mx-3">|</span>
              <a class="badge text-ligh fs-xs border border-light" href="#">Travel</a>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="6">
        <b-row class="row-cols-1 row-cols-sm-2 g-4">
          <b-col v-for="(post, idx) in latestPosts" :key="idx" class="py-1 py-xl-2">
            <div class="border-bottom pb-4 ms-xl-3">
              <h3 class="h4">
                <router-link :to="{ name: post.link?.name }">{{ post.title }}</router-link>
              </h3>
              <p>{{ post.description }}</p>
              <div class="d-flex align-items-center">
                <span class="fs-sm text-body-secondary">{{ post.time }}</span>
                <span class="fs-xs opacity-20 mx-3">|</span>
                <router-link class="badge text-nav fs-xs border" to="#">{{ toSentenceCase(post.category) }} </router-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { toSentenceCase } from '@/helpers/change-casing'
import { latestPosts } from '@/views/landings/Blog/data'
import blog4 from '@/assets/img/landing/blog/04.jpg'
</script>
