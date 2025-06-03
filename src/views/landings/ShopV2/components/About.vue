<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
      <b-col sm="6" lg="4">
        <h2 class="display-2">About us</h2>
        <p class="fs-xl mb-0">These unique macarons have their roots in a love for baking, creative craftsmanship, and a quest for perfection.</p>
      </b-col>
      <b-col sm="6" lg="4">
        <img class="rounded-5" :src="gallery1" alt="gallery01" />
      </b-col>
      <b-col sm="6" lg="4">
        <img class="rounded-5" :src="gallery2" alt="gallery02" />
      </b-col>
      <b-col sm="6" lg="4">
        <img class="rounded-5" :src="gallery3" alt="gallery03" />
      </b-col>
      <b-col sm="6" lg="4" class="d-flex align-items-center">
        <p class="fs-xl text-center mb-0">In recent years, we've dedicated ourselves to perfecting macarons, creating surprising flavors. Our macarons are made with love to provide an exceptional experience.</p>
      </b-col>
      <b-col sm="6" lg="4">
        <img class="rounded-5" :src="gallery4" alt="gallery04" />
      </b-col>
      <b-col sm="6" lg="4">
        <img class="rounded-5" :src="gallery5" alt="gallery05" />
      </b-col>
      <b-col sm="6" lg="4" class="mb-2 mb-lg-0">
        <img class="rounded-5" :src="gallery6" alt="gallery06" />
      </b-col>
      <b-col lg="4" class="d-flex justify-content-center align-items-center">
        <div class="text-center px-xl-3 px-xxl-5">
          <h3 class="h2 mb-4">All of our Macarons are gluten-free.</h3>
          <a class="btn btn-dark rounded-pill" href="#">Explore our collection</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import gallery1 from '@/assets/img/landing/shop-2/gallery/01.jpg'
import gallery2 from '@/assets/img/landing/shop-2/gallery/02.jpg'
import gallery3 from '@/assets/img/landing/shop-2/gallery/03.jpg'
import gallery4 from '@/assets/img/landing/shop-2/gallery/04.jpg'
import gallery5 from '@/assets/img/landing/shop-2/gallery/05.jpg'
import gallery6 from '@/assets/img/landing/shop-2/gallery/06.jpg'
</script>
