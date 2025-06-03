<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
      <Breadcrumb title="Blog grid no sidebar" :class="'pb-lg-4'" />

      <Filter />

      <Post />
    </b-container>
  </main>

  <Subscription />

  <Footer />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Shuffle from 'shufflejs'
import ImageLoaded from 'imagesloaded'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Post from '@/views/pages/Blog/Grid/components/BlogPost.vue'
import Filter from '@/views/pages/Blog/Grid/components/Filter.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import Subscription from '@/views/pages/Blog/Grid/components/Subscription.vue'
import Footer from '@/views/pages/Blog/Grid/components/Footer.vue'

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
