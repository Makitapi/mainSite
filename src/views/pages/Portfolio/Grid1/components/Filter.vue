<template>
  <h1 class="text-center pb-2 pb-md-3 pb-lg-4">Portfolio</h1>

  <ShuffleJS>
    <ul class="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-4 mb-2 mb-sm-3" style="max-width: 590px">
      <li class="nav-item mb-0">
        <a class="nav-link border active" href="#" data-group="all">All</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link border" href="#" data-group="branding">Branding</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link border" href="#" data-group="ebook">E-books</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link border" href="#" data-group="identity">Identity</a>
      </li>
      <li class="nav-item mb-0">
        <a class="nav-link border" href="#" data-group="product">Product</a>
      </li>
    </ul>

    <div class="masonry-grid masonry-filters" data-columns="2">
      <template v-for="(article, idx) in articles" :key="idx">
        <article class="masonry-grid-item pb-lg-5 mb-3 mb-lg-0 mb-xl-2" :data-groups="[`&quot;${article.category}&quot;`]">
          <div class="card-hover zoom-effect mx-auto" style="max-width: 620px">
            <div class="zoom-effect-wrapper rounded-5">
              <div class="zoom-effect-img">
                <img :src="article.image" alt="img" />
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h5 mb-2">
                <router-link class="stretched-link text-nav" :to="{ name: article.link.name }">
                  {{ article.title }}
                </router-link>
              </h2>
              <span class="fs-sm text-body-secondary opacity-0 d-none d-sm-block">{{ article.tag }}</span>
            </div>
          </div>
        </article>
      </template>
    </div>
  </ShuffleJS>
  <nav class="mt-n1 mb-md-2 mb-lg-3 mb-xl-4" aria-label="Portfolio pagination">
    <b-pagination class="justify-content-center" :total-rows="100" v-model="current" hide-ellipsis hide-goto-end-buttons> </b-pagination>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShuffleJS from '@/components/ShuffleJS.vue'
import { articles } from '@/views/pages/Portfolio/Grid1/data'
const current = ref(1)
</script>
