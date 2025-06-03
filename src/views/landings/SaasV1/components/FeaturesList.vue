<template>
  <b-container class="pt-5 pb-4 mb-2 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="justify-content-center pt-2 pt-sm-3 pt-md-4 mt-lg-2 pb-lg-2 pb-xl-0">
      <b-col sm="11" md="9" lg="8" xl="7" xxl="6" class="text-center">
        <h2 class="h1 mb-0">Powerful and highly customizable data analysis tool</h2>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <b-col md="6" class="pt-xl-2 offset-xl-1 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
        <img class="d-dark-mode-none" :src="featureImageLight2" width="636" alt="Img" />
        <img class="d-none d-dark-mode-block" :src="featureImageDark2" width="636" alt="Img" />
      </b-col>
      <b-col md="6" xl="5" class="order-md-1 pt-xl-2" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
        <div class="pe-md-3 pe-xl-0">
          <span class="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Team activities</span>
          <h3 class="h2 mb-lg-4">Key performance indicators of marketing activities</h3>
          <p class="mb-0">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.</p>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <b-col md="6" class="pt-xl-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
        <img class="d-dark-mode-none" :src="featureImageLight3" width="636" alt="Img" />
        <img class="d-none d-dark-mode-block" :src="featureImageDark3" width="636" alt="Img" />
      </b-col>
      <b-col md="6" xl="5" class="offset-xl-1 pt-xl-2" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
        <div class="ps-md-3 ps-xl-0">
          <span class="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Team activities</span>
          <h3 class="h2 mb-lg-4">Key performance indicators of marketing activities</h3>
          <ul class="list-unstyled mb-0">
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Segmenting the audience is easy and simple
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Functional dashboard for managing your data
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Key performance indicators of team interaction
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <b-col md="6" class="offset-xl-1 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
        <img class="d-dark-mode-none" :src="featureImageLight4" width="636" alt="Img" />
        <img class="d-none d-dark-mode-block" :src="featureImageDark4" width="636" alt="Img" />
      </b-col>
      <b-col md="6" xl="5" class="order-md-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
        <div class="pe-md-3 pe-xl-0">
          <span class="badge bg-primary bg-opacity-10 text-primary fs-sm mb-3 mb-lg-4">Segmentation</span>
          <h3 class="h2 mb-lg-4">Segmentation of the audience using different methods</h3>
          <p class="mb-0">Facilisi eu neque amet, orci tellus nibh amet tincidunt nunc, feugiat arcu vulputate duis. Quis odio mauris, in sed pharetra velit egestas risus purus tincidunt. Nisl in enim, gravida risus enim risus non et in iaculis non facilisis eget blandit id vulputate.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import featureImageLight2 from '@/assets/img/landing/saas-1/features/02-light.png'
import featureImageDark2 from '@/assets/img/landing/saas-1/features/02-dark.png'
import featureImageLight3 from '@/assets/img/landing/saas-1/features/03-light.png'
import featureImageDark3 from '@/assets/img/landing/saas-1/features/03-dark.png'
import featureImageLight4 from '@/assets/img/landing/saas-1/features/04-light.png'
import featureImageDark4 from '@/assets/img/landing/saas-1/features/04-dark.png'
</script>
