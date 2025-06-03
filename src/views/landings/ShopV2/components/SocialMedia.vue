<template>
  <section>
    <h2 class="container h1 pb-2 pb-sm-3 pb-lg-4">Let's be social</h2>
    <Simplebar class="overflow-auto" data-simplebar>
      <b-row class="row-cols-8 g-0" style="min-width: 1200px">
        <b-col v-for="(post, index) in socialPosts" :key="index">
          <a class="card-hover zoom-effect d-block position-relative" href="#">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 z-2 opacity-0">
              <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-60"></div>
              <div class="d-flex align-items-center text-light position-relative z-2">
                <i class="ai-heart me-1"></i>
                <span class="text-light fs-sm me-3">{{ post.likes }}</span>
                <i class="ai-message me-1"></i>
                <span class="text-light fs-sm">{{ post.comments }}</span>
              </div>
            </div>
            <div class="zoom-effect-wrapper">
              <img class="zoom-effect-img" :src="post.image" alt="Img" />
            </div>
          </a>
        </b-col>
      </b-row>
    </Simplebar>
  </section>
</template>

<script setup lang="ts">
import Simplebar from 'simplebar-vue'
import { socialPosts } from '@/views/landings/ShopV2/data'
</script>
