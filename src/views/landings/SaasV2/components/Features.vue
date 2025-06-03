<template>
  <section class="bg-secondary py-5">
    <b-container class="mt-1 py-md-2 py-lg-4 py-xxl-5">
      <h2 class="h1 text-center pt-1 pt-sm-4">Take your data to the next level</h2>
      <p class="text-center mx-auto pb-3 mb-3 mb-lg-4" style="max-width: 480px">Using basic data skills you can analysis and improve your business indicators with Around</p>
      <b-row class="g-4 pb-2 pb-sm-4 mb-sm-2">
        <b-col md="5">
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <router-link to="#">
                <img class="d-dark-mode-none" :src="featureImgLight1" alt="Img" />
                <img class="d-none d-dark-mode-block" :src="featureImgDark1" alt="Img" />
              </router-link>
              <div class="pt-3 mt-2 mt-lg-3">
                <h3>Simple control panel</h3>
                <p class="mb-0">Dashboard is to present analytical data in a compact form on one page for easy to interpret.</p>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="7">
          <b-card no-body class="border-0 h-100">
            <b-card-body class="overflow-hidden">
              <div class="d-sm-flex align-items-center">
                <a class="d-block order-sm-2 flex-shrink-0 mt-n4 mb-n2" href="#">
                  <img :src="featureImg2" width="308" alt="Img" />
                </a>
                <div class="order-sm-1 pe-sm-3 me-xl-4">
                  <h3>Segmentation by various methods</h3>
                  <p class="pb-3 mb-1 mb-xl-3">Segmentation allows you to divide users according to a given criterion, and then for each of the groups to develop an advertisement and product.</p>
                  <a class="btn btn-link p-0" href="#">
                    Learn more
                    <i class="ai-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="7">
          <b-card no-body class="border-0 h-100">
            <b-card-body class="overflow-hidden">
              <div class="d-sm-flex align-items-center">
                <a class="d-block order-sm-2 flex-shrink-0 mt-n4 mb-n2" href="#">
                  <img class="d-dark-mode-none" :src="featureImgLight3" width="308" alt="Img" />
                  <img class="d-none d-dark-mode-block" :src="featureImgDark3" width="308" alt="Img" />
                </a>
                <div class="order-sm-1 pe-sm-3 me-xl-4">
                  <h3>Key performance indicators</h3>
                  <p class="pb-3 mb-1 mb-xl-3">You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems.</p>
                  <a class="btn btn-link p-0" href="#">
                    Learn more
                    <i class="ai-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col md="5">
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <router-link to="#">
                <img class="d-dark-mode-none" :src="featureImgLight4" alt="Img" />
                <img class="d-none d-dark-mode-block" :src="featureImgDark4" alt="Img" />
              </router-link>
              <div class="pt-3 mt-2 mt-lg-3">
                <h3>Forecasting efficiency</h3>
                <p class="mb-0">Before launching any marketing activity, you need to assess how successful and effective it can be.</p>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import featureImgLight1 from '@/assets/img/landing/saas-2/features/01-light.png'
import featureImgDark1 from '@/assets/img/landing/saas-2/features/01-dark.png'
import featureImg2 from '@/assets/img/landing/saas-2/features/02.png'
import featureImgLight3 from '@/assets/img/landing/saas-2/features/03-light.png'
import featureImgDark3 from '@/assets/img/landing/saas-2/features/03-dark.png'
import featureImgLight4 from '@/assets/img/landing/saas-2/features/04-light.png'
import featureImgDark4 from '@/assets/img/landing/saas-2/features/04-dark.png'
</script>
