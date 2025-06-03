<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="py-2 py-sm-3 my-md-3">
      <b-col lg="5" xl="4" class="pb-2 pb-sm-0 mb-4 mb-sm-5 mb-lg-0" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
        <h2 class="h1 pb-3 mb-lg-4">Results after taking the guide</h2>
        <div class="d-flex align-items-center">
          <div class="d-flex me-3">
            <div class="bg-light flex-shrink-0 rounded-circle position-relative z-4" style="padding: 3px">
              <img class="rounded-circle" :src="avatar7" width="48" alt="Avatar" />
            </div>
            <div class="bg-light flex-shrink-0 rounded-circle position-relative z-3 ms-n3" style="padding: 3px">
              <img class="rounded-circle" :src="avatar9" width="48" alt="Avatar" />
            </div>
            <div class="bg-light flex-shrink-0 rounded-circle position-relative z-2 ms-n3" style="padding: 3px">
              <img class="rounded-circle" :src="avatar5" width="48" alt="Avatar" />
            </div>
            <div class="bg-light flex-shrink-0 rounded-circle position-relative z-1 ms-n3" style="padding: 3px">
              <img class="rounded-circle" :src="avatar11" width="48" alt="Avatar" />
            </div>
          </div>
          <p class="mb-0"><strong class="text-dark">400+</strong> got the result</p>
        </div>
      </b-col>
      <b-col lg="7" xxl="6" class="offset-xl-1 offset-xxl-2">
        <b-row class="row-cols-1 row-cols-sm-2 gy-4 gy-lg-5">
          <b-col data-aos="fade-up" data-aos-offset="280" data-disable-parallax-down="md">
            <div class="pe-sm-2 pe-md-4 me-xl-3">
              <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i class="ai-target fs-1"></i></div>
              <h3 class="h5 fw-bold mb-2">Reach your goals</h3>
              <p class="fs-lg mb-2">Eu pharetra sagittis ornarenam elit scelerisque pellentesque mauris diam outertn.</p>
            </div>
          </b-col>
          <b-col data-aos="fade-up" data-aos-delay="250" data-aos-offset="280" data-disable-parallax-down="md">
            <div class="pe-sm-2 pe-md-4 me-xl-3">
              <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i class="ai-fruit fs-1"></i></div>
              <h3 class="h5 fw-bold mb-2">Healthy eating habits</h3>
              <p class="fs-lg mb-2">Ultricies at vitae nunc,facilisi sagittis nullam mattis nunc metus suspendisse.</p>
            </div>
          </b-col>
          <b-col data-aos="fade-up" data-aos-delay="500" data-disable-parallax-down="md">
            <div class="pe-sm-2 pe-md-4 me-xl-3">
              <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i class="ai-body fs-1"></i></div>
              <h3 class="h5 fw-bold mb-2">Nice &amp; healthy body</h3>
              <p class="fs-lg mb-2">Nunc congue dolor sodales faucibus nun faucibus tristique tempor in diam.</p>
            </div>
          </b-col>
          <b-col data-aos="fade-up" data-aos-delay="700" data-disable-parallax-down="md">
            <div class="pe-sm-2 pe-md-4 me-xl-3">
              <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><i class="ai-heart-alt fs-1"></i></div>
              <h3 class="h5 fw-bold mb-2">Feel great</h3>
              <p class="fs-lg mb-2">Lacus neque sed fringilla proin bibendum interdum vivamus verum dignissim.</p>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar7 from '@/assets/img/avatar/07.jpg'
import avatar9 from '@/assets/img/avatar/09.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
</script>
