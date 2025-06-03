<template>
  <b-container class="overflow-hidden pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <ShuffleJS>
      <b-row class="pb-lg-4 mb-2 mb-sm-3">
        <b-col xxl="3" lg="4" class="text-center text-lg-start">
          <h1>Our Projects</h1>
          <p class="mb-4 mb-lg-0">We will put our industry expertise for creativity to work for your project</p>
        </b-col>

        <b-col xxl="9" lg="8" class="d-flex">
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
        <article v-for="(item, idx) in projects" :key="idx" class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5" :data-groups="[`&quot;${item.category}&quot;`]">
          <div class="zoom-effect position-relative border-bottom pb-3" style="max-width: 512px">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img :src="item.image" alt="Img" />
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <router-link :to="{ name: item.link?.name }" class="stretched-link">
                  {{ item.title }}
                </router-link>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>
                  {{ toSentenceCase(item.category) }}
                </span>
                <span>{{ item.year }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center pb-sm-2 pb-md-4 mt-n1 mt-lg-n2">
        <a class="btn btn-lg btn-outline-dark rounded-0" href="#">Let's work together</a>
      </div>
    </ShuffleJS>
  </b-container>
</template>
<script setup lang="ts">
import ShuffleJS from '@/components/ShuffleJS.vue'
import { toSentenceCase } from '@/helpers/change-casing'
import { projects } from '@/views/landings/CreativeAgency/data'
</script>
