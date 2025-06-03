<template>
  <b-container class="py-5 mb-sm-2 mb-md-0 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="h1 text-center text-sm-start pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mb-3 mb-lg-4">Our blog</h2>
    <b-row>
      <b-col lg="6" class="pb-3 mb-2 mb-sm-3">
        <!-- Featured article -->
        <a class="card h-100 border-0 rounded-1 overflow-hidden text-decoration-none bg-size-cover bg-position-center" href="#" :style="`max-width: 600px; min-height: 300px; background-image: url(${blogImg})`">
          <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
          <b-card-body class="d-flex flex-column justify-content-end h-100 position-relative z-2" data-bs-theme="dark">
            <h3>New business strategies for 2022</h3>
            <p class="text-body mb-0">Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim. Dapibus est ac risus maximus...</p>
          </b-card-body>
        </a>
      </b-col>
      <b-col lg="6">
        <b-row class="row-cols-1 row-cols-sm-2 g-4">
          <article class="col" v-for="(blog, idx) in blogs" :key="idx">
            <div class="pb-4 pt-2 pt-xl-3 ms-md-3 border-bottom">
              <h3 class="h4">
                <a href="#">{{ blog.title }}</a>
              </h3>
              <p class="mb-4">{{ blog.description }}</p>
              <div class="d-flex align-items-center">
                <span class="fs-sm text-body-secondary">{{ blog.publishedOn.month }} {{ blog.publishedOn.date }}, {{ blog.publishedOn.year }}</span>
                <span class="fs-xs opacity-20 mx-3">|</span>
                <a class="badge text-nav fs-xs border" href="#">{{ toSentenceCase(blog.category) }}</a>
              </div>
            </div>
          </article>
        </b-row>
      </b-col>
    </b-row>

    <div class="text-end pb-md-4 pt-3 mt-2 mt-sm-3 mt-lg-4">
      <a class="d-inline-flex align-items-center fw-semibold text-decoration-none" href="#">
        All articles
        <i class="ai-arrow-right fs-4 ms-2"></i>
      </a>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import { blogs } from '@/views/landings/Corporate/data'
import { toSentenceCase } from '@/helpers/change-casing'

import blogImg from '@/assets/img/landing/corporate/blog-img.jpg'
</script>
