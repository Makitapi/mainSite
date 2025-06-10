<template>
  <b-row class="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4" v-for="(item, idx) in listData" :key="idx">
    <!-- Image config -->
    <b-col md="7" lg="6" class="mb-4 mb-md-0">
      <router-link class="d-block position-relative" :to="{ name: item.link?.name }">
        <div class="rounded-5 position-absolute top-0 start-0 w-100 h-100" :class="`bg-${item.variant}`" :style="item.bgColor && `background-color: ${item.bgColor};`" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
        <img class="d-block position-relative z-2 mx-auto" :src="item.image" alt="img" data-aos="fade-in" data-aos-duration="200" data-aos-offset="250" />
      </router-link>
    </b-col>
    <b-col md="5" xl="4" offset-lg="1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
      <div class="ps-md-3 ps-lg-0">
        <!-- brand image -->
        <img class="d-block d-dark-mode-none mb-2 mb-lg-3" :src="item.brand?.image.dark" alt="img" />
        <img class="d-none d-dark-mode-block mb-2 mb-lg-3" :src="item.brand?.image.light" alt="img" />
        <!-- item title and description -->
        <template v-if="item.description">
          <h2 class="h4"><router-link :to="{ name: item.link.name }">{{ item.title }}</router-link></h2>
          <p class="fs-sm pb-3 pb-lg-4 mb-3">{{ item.description }}</p>
        </template>
        <!-- item title and features -->
        <template v-else>
          <h2 class="h4"><router-link :to="{ name: item.link.name }">{{ item.title }}</router-link></h2>
          <ul class="list-unstyled pb-1 pb-lg-2 mb-3">
            <li class="d-flex pb-1 mb-2" v-for="(feat, idx) in item.features" :key="idx">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              {{ feat }}
            </li>
          </ul>
        </template>
        <!-- link button -->
        <router-link class="btn btn-sm btn-outline-dark rounded-pill" :to="{ name: item.link?.name }">The story</router-link>
        <div v-if="item.awards" class="d-flex align-items-center pt-2 pt-lg-3 mt-3">
          <!-- extra images -->
          <h6 class="text-body mb-0 me-3">Awards:</h6>
          <template v-for="(award, idx) in item.awards" :key="idx">
            <img class="d-block d-dark-mode-none me-4" :src="award.image.dark" width="90" alt="img" />
            <img class="d-none d-dark-mode-block me-4" :src="award.image.light" width="90" alt="img" />
          </template>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { listData } from '@/views/Makitapi/4Projects/data'
</script>
