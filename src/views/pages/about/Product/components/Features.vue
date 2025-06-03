<template>
  <section class="bg-dark position-relative overflow-hidden py-5">
    <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, 0.03)"></div>
    <b-container class="position-relative z-2 pt-3 pb-sm-3 pt-sm-4 py-md-5 my-lg-2 my-xl-3 my-xxl-4" data-bs-theme="dark">
      <b-row class="align-items-center py-xxl-2" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
        <b-col md="6" class="pb-3 pb-md-0 mb-3 mb-md-0">
          <img :src="feature1" width="620" alt="Img" />
        </b-col>
        <b-col md="6" lg="5" xxl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
          <div class="ps-md-4 ps-lg-0">
            <h2 class="mb-lg-4">Segment your audience using a variety of methods</h2>
            <p class="text-body pb-lg-2 mb-xl-4">Segmentation allows you to divide users according to a given criterion, and then for each of the groups to develop an ads and product. Bibendum velit mi, ac sed ac malesuada ultrices non lectus mi pellentesque vel at tempus cras sed a eleifend augue amet mauris, leo ac amet erat malesuada ultrices.</p>
            <a class="btn btn-lg btn-link px-0" href="#">
              Learn more
              <i class="ai-arrow-right ms-2"></i>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <b-container class="pt-5 mt-lg-2 mt-xl-4 mt-xxl-5">
    <b-row class="align-items-center pt-2 pt-sm-4 pt-md-5 mt-xl-2 mt-xxl-3" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <b-col md="7" class="offset-xl-1 pb-3 pb-md-0 mb-3 mb-md-0 order-md-2">
        <img class="d-dark-mode-none" :src="featureLight2" width="744" alt="Img" />
        <img class="d-none d-dark-mode-block" :src="featureDark2" width="744" alt="Img" />
      </b-col>
      <b-col md="5" xl="4" class="order-md-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
        <h2 class="mb-lg-4">Key performance indicators of audience</h2>
        <p class="pb-1 pb-md-2 mb-xl-4">You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems. Nec id eget suada urna at sed est adipiscing auctor massa id duis fames.</p>
        <b-row class="row-cols-2">
          <b-col>
            <div class="d-table bg-info text-white rounded-1 p-2 mb-3">
              <i class="ai-time fs-3 m-1"></i>
            </div>
            <h3 class="h5 mb-2">Build in minutes</h3>
            <p class="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget commodo ornare et.</p>
          </b-col>
          <b-col>
            <div class="d-table bg-danger text-white rounded-1 p-2 mb-3">
              <i class="ai-cloud-download fs-3 m-1"></i>
            </div>
            <h3 class="h5 mb-2">Download data</h3>
            <p class="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo consequat in ornare.</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>

  <b-container class="pt-5 mt-lg-2 mt-xl-4 mt-xxl-5">
    <b-row class="align-items-center pt-2 pt-sm-4 pt-md-5 mt-xl-2 mt-xxl-3" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
      <b-col md="6" lg="5" class="pb-3 pb-md-0 mb-3 mb-md-0">
        <img :src="feature3" width="526" alt="Img" />
      </b-col>
      <b-col md="6" lg="5" xxl="4" class="offset-lg-1 offset-xxl-2" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
        <div class="ps-md-4 ps-lg-0">
          <h2 class="mb-lg-4">Make visualization of data analysis results simple and clear way</h2>
          <p class="pb-2 pb-md-3 mb-xl-4">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.</p>
          <a class="btn btn-lg btn-outline-primary rounded-pill" href="#">Start free 14-day trial</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import feature1 from '@/assets/img/about/product/features/01.png'
import featureLight2 from '@/assets/img/about/product/features/02-light.png'
import featureDark2 from '@/assets/img/about/product/features/02-dark.png'
import feature3 from '@/assets/img/about/product/features/03.png'
</script>
