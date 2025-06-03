<template>
  <b-container class="py-4 pt-sm-5 pb-md-5 my-2 my-lg-3 my-xxl-4">
    <b-row class="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
      <b-col md="6" lg="7" xl="6" class="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
        <img class="d-block rounded-5" :src="feature1" alt="Img" />
      </b-col>
      <b-col md="6" lg="5" class="order-md-1">
        <div class="pe-md-4 pe-lg-0">
          <h2 class="h1 pb-sm-2 pb-lg-3">Let's do business together</h2>
          <p class="fs-xl">We partner with more than 60 brands. Clients who have become our friends for many years.</p>
          <div class="border-dashed mb-4 mt-5"></div>
          <b-row class="row-cols-3 pt-2 g-4">
            <b-col>
              <img class="d-block d-dark-mode-none mx-auto" :src="starcraftDark" width="160" alt="Starcraft" />
              <img class="d-none d-dark-mode-block mx-auto" :src="starcraftLight" width="160" alt="Starcraft" />
            </b-col>
            <b-col>
              <img class="d-block mx-auto" :src="klinos" width="160" alt="Klinos" />
            </b-col>
            <b-col>
              <img class="d-block mx-auto" :src="auchan" width="160" alt="Auchan" />
            </b-col>
            <b-col>
              <img class="d-block d-dark-mode-none mx-auto" :src="championDark" width="160" alt="Champion" />
              <img class="d-none d-dark-mode-block mx-auto" :src="championLight" width="160" alt="Champion" />
            </b-col>
            <b-col>
              <img class="d-block mx-auto" :src="suzuki" width="160" alt="Suzuki" />
            </b-col>
            <b-col>
              <img class="d-block mx-auto" :src="philips" width="160" alt="Philips" />
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
      <b-col md="6" lg="7" xl="6" class="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
        <img class="d-block rounded-5" :src="feature2" alt="Img" />
      </b-col>
      <b-col md="6" lg="5" class="order-md-1">
        <div class="pe-md-4 pe-lg-0">
          <h2 class="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">Our professional approach to your business</h2>
          <b-row class="row-cols-1 row-cols-sm-2 g-4">
            <b-col v-for="(item, idx) in approach" :key="idx">
              <div class="text-body-secondary mb-2">{{ item.number }}</div>
              <h3 class="h5">{{ item.title }}</h3>
              <p class="mb-1">{{ item.description }}</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4">
      <b-col md="6" lg="7" xl="6" class="offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
        <img class="d-block rounded-5" :src="feature3" alt="Img" />
      </b-col>
      <b-col md="6" lg="5" class="order-md-1">
        <div class="pe-md-4 pe-lg-0">
          <h2 class="h1 pb-sm-2 pb-lg-3">Full range of business and consulting services</h2>
          <p class="fs-xl mb-lg-4">Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euvert fugiat neque congue.</p>
          <ul class="list-unstyled pb-3 mb-3 mb-lg-4">
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Forecasting and recommendations</li>
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Identification of patterns, analysis</li>
            <li class="d-flex pt-1 mt-2 mx-2 mx-md-0"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Segmentation by various methods</li>
          </ul>
          <router-link class="btn btn-primary" to="#">Book a free consultation</router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { approach } from '@/views/pages/services/ServicesV2/data'

import feature1 from '@/assets/img/landing/corporate/features/01.jpg'
import feature2 from '@/assets/img/landing/corporate/features/02.jpg'
import feature3 from '@/assets/img/landing/corporate/features/03.jpg'

import auchan from '@/assets/img/brands/auchan.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import starcraftLight from '@/assets/img/brands/starcraft-light.svg'
import starcraftDark from '@/assets/img/brands/starcraft-dark.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import philips from '@/assets/img/brands/philips.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
</script>
