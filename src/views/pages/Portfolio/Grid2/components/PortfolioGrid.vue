<template>
  <ShuffleJS>
    <b-row class="pb-lg-4 mb-2 mb-sm-3">
      <!-- Page title -->
      <b-col lg="4" xxl="3" class="text-center text-lg-start">
        <h1>Our Projects</h1>
        <p class="mb-4 mb-lg-0">We will put our industry expertise for creativity to work for your project</p>
      </b-col>

      <!-- Filters -->
      <b-col lg="8" xxl="9" class="d-flex">
        <ul class="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto me-lg-0 pb-3" style="max-width: 456px">
          <li class="nav-item mb-0">
            <a class="nav-link border active" href="#" data-group="all">All</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link border" href="#" data-group="branding">Branding</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link border" href="#" data-group="stationery">Stationery</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link border" href="#" data-group="web">Web</a>
          </li>
        </ul>
      </b-col>
    </b-row>

    <div class="masonry-grid masonry-filters" data-columns="2">
      <template v-for="(item, idx) in article" :key="idx">
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" :data-groups="[`&quot;${item.category}&quot;`]">
          <div class="zoom-effect position-relative border-bottom pb-3" :class="[idx == article.length - 3 ? 'ms-auto' : '', idx == article.length - 1 ? 'mx-auto' : '']" :style="`max-width: ${item.height};`">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img :src="item.image" alt="Img" />
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <router-link class="stretched-link" :to="{ name: item.link.name }">{{ item.title }}</router-link>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>{{ item.tag }}</span>
                <span>{{ item.year }}</span>
              </div>
            </div>
          </div>
        </article>
      </template>
    </div>
  </ShuffleJS>
</template>

<script lang="ts" setup>
import { article } from '@/views/pages/Portfolio/Grid2/data'
import ShuffleJS from '@/components/ShuffleJS.vue'
</script>
