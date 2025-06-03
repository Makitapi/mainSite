<template>
  <h1 class="text-center pb-3 pb-md-4 pb-lg-5 mb-lg-0 mb-xl-2 mb-xxl-4">Case studies</h1>

  <article v-for="(item, idx) in portfolioItems" :key="idx" class="row align-items-center card-hover pb-5 mb-md-2 mb-lg-3 mb-xl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280">
    <b-col md="7" class="mb-4 mb-md-0" :class="idx % 2 == 0 ? 'offset-xxl-1' : 'order-md-2'">
      <router-link :to="{ name: item.link?.name }">
        <img class="rounded-5" :src="item.image" width="700" alt="Img" />
      </router-link>
    </b-col>
    <b-col md="5" xl="4" data-aos="fade-up" :class="{ 'offset-xxl-1 order-md-1': idx % 2 != 0 }" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
      <div :class="idx % 2 == 0 ? 'ms-md-4 ms-lg-5 ms-xxl-0' : 'me-md-4 me-lg-5 me-xxl-0'" style="max-width: 330px">
        <div class="text-body-secondary mb-2">{{ item.category }}</div>
        <h2 class="mb-lg-4">
          <router-link :to="{ name: item.link?.name }">{{ item.title }}</router-link>
        </h2>
        <p class="mb-0 mb-md-1 mb-lg-3">{{ item.description }}</p>
        <router-link :to="{ name: item.link?.name }" class="btn btn-lg btn-link px-0 opacity-0 d-none d-md-inline-flex">
          Read more
          <i class="ai-arrow-right ms-2"></i>
        </router-link>
      </div>
    </b-col>
  </article>
</template>

<script setup lang="ts">
import { portfolioItems } from '@/views/pages/Portfolio/List-1/data'
</script>
