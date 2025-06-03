<template>
  <section class="position-relative pt-5 mb-5">
    <div class="bg-secondary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
    <div class="bg-secondary position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
    <b-container class="position-relative z-2 py-5 pb-lg-0">
      <b-breadcrumb class="pt-lg-2 pb-1" aria-label="breadcrumb">
        <b-breadcrumb-item>Home </b-breadcrumb-item>
        <b-breadcrumb-item>Portfolio</b-breadcrumb-item>
        <b-breadcrumb-item active aria-current="page">Single project v.2</b-breadcrumb-item>
      </b-breadcrumb>

      <div class="d-lg-flex align-items-center pt-3 pb-xxl-5">
        <img class="d-block order-lg-2 me-auto me-lg-0 ms-auto" :src="single2Img" width="480" alt="Img" />
        <div class="order-lg-1 text-center text-lg-start pe-lg-4 py-4 py-md-5">
          <h1 class="display-2 text-uppercase pb-3 pb-lg-4">Perfect Instagram shots and stories</h1>
          <p class="fs-lg mx-auto mx-lg-0 mb-0" style="max-width: 530px">Ac facilisis erosers sem in faucibus aliquet venenatis amet mentum nisi mauris consectres sem malesuada viverra a non sapien odio id risus volutpat at massa tellus.</p>
        </div>
      </div>

      <!-- Social links -->
      <ul class="nav justify-content-center justify-content-lg-start mx-n2 pt-lg-5 mb-0">
        <li class="nav-item me-3">
          <a class="nav-link p-2" href="#">instagram</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link p-2" href="#">dribbble</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-2" href="#">behance</a>
        </li>
      </ul>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import single2Img from '@/assets/img/portfolio/single/v2/01.png'
</script>
