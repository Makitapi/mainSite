<template>
  <b-row class="mb-md-2 mb-xl-4">
    <b-col lg="8" xl="8" class="pe-lg-4 pe-xl-0">
      <h1 class="pb-3 pb-lg-4">Blog grid with sidebar</h1>
      <div class="masonry-grid mb-2 mb-md-4 pb-lg-3" data-columns="2">
        <article class="masonry-grid-item" v-for="(item, idx) in postsData" :key="idx">
          <b-card no-body class="border-0 bg-secondary">
            <router-link v-if="item.image" :to="{ name: item.link.name }">
              <img class="card-img-top" :src="item.image" alt="img" />
            </router-link>
            <b-card-body class="pb-4">
              <div class="d-flex align-items-center mb-4 mt-n1">
                <span class="fs-sm text-body-secondary">{{ item.time }}</span>
                <span class="fs-xs opacity-20 mx-3">|</span>
                <a class="badge text-nav fs-xs border" href="#">{{ item.category }}</a>
              </div>
              <h3 class="h4 card-title">
                <router-link :to="{ name: item.link.name }">{{ item.title }}</router-link>
              </h3>
              <p class="card-text">{{ item.content }}</p>
            </b-card-body>
            <b-card-footer class="pt-3">
              <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
                <img class="rounded-circle" :src="item.author.avatar" width="48" alt="Post author" />
                <h6 class="ps-3 mb-0">{{ item.author.name }}</h6>
              </a>
            </b-card-footer>
          </b-card>
        </article>
      </div>
      <b-row class="gy-3 align-items-center">
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
      </b-row>
    </b-col>

    <Sidebar />
  </b-row>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Shuffle from 'shufflejs'
import ImageLoaded from 'imagesloaded'
import { postsData } from '@/views/pages/Blog/GridSidebar/data'
import Sidebar from '@/views/pages/Blog/GridSidebar/components/Sidebar.vue'

const selected = ref(null)
const option = [
  { value: null, text: 6 },
  { value: 9, text: 9 },
  { value: 12, text: 12 },
  { value: 24, text: 24 }
]
const currentPage = ref(1)
const rows = ref(100)

onMounted(() => {
  const grid = document.querySelectorAll('.masonry-grid')

  if (grid === null) return

  for (let i = 0; i < grid.length; i++) {
    const msnry = new Shuffle(grid[i] as HTMLElement, {
      // options...
      itemSelector: '.masonry-grid-item',
      sizer: '.masonry-grid-item'
    })
    ImageLoaded(grid[i]).on('progress', () => {
      msnry.layout()
    })
  }
})
</script>
