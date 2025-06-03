<template>
  <section class="py-5 bg-size-cover bg-position-center" :style="{ backgroundImage: `url(${ctaBg})` }">
    <b-container class="py-md-3 py-lg-5 my-xl-3 my-xxl-5">
      <b-row class="pt-2 pb-3 py-sm-4 py-md-5">
        <b-col cols="9" sm="8" md="6" lg="5" xl="4">
          <h2 class="h1 mb-md-4" data-bs-theme="light">Craft Your Custom Macaron Collection</h2>
          <p class="fs-lg text-dark opacity-70 pb-3 pb-sm-4 mb-3" data-bs-theme="light">Indecisive about our delightful flavors? Craft your custom box with your favorites. Enjoy it alone or share with others—it's all up to you!</p>
          <a class="btn btn-dark rounded-pill" href="#" data-bs-theme="light">Create your own box</a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script setup lang="ts">
import ctaBg from '@/assets/img/landing/shop-2/cta-bg.jpg'
</script>
