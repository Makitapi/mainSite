<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-xxl-2 mt-md-3 mt-lg-0">
      <b-col lg="5" class="mb-5 mb-lg-0">
        <div class="h1 text-center text-lg-start pb-md-2 pb-xl-0 mb-4 mb-xl-5">Improve your skills and gain knowledge in one application. Become the best version of yourself</div>

        <!-- Market buttons -->
        <div class="d-flex justify-content-center justify-content-lg-start">
          <a class="btn btn-dark btn-lg px-3 py-2 me-3" href="#">
            <img class="d-dark-mode-none mx-1" :src="appStoreLight" width="136" alt="App Store" />
            <img class="d-none d-dark-mode-block mx-1" :src="appStoreDark" width="136" alt="App Store" />
          </a>
          <a class="btn btn-dark btn-lg px-3 py-2" href="#">
            <img class="d-dark-mode-none mx-1" :src="googleplayLight" width="135" alt="Google Play" />
            <img class="d-none d-dark-mode-block mx-1" :src="googleplayDark" width="135" alt="Google Play" />
          </a>
        </div>
      </b-col>
      <b-col lg="7" xl="6" class="offset-xl-1">
        <b-row class="row-cols-1 row-cols-sm-2 g-3 g-md-4">
          <b-col v-for="(item, idx) in statData" :key="idx">
            <div class="d-flex flex-column h-100 bg-opacity-10 rounded-3 text-center p-4" :class="`bg-${item.variant}`">
              <div class="h3 display-5 mt-1 mb-0">{{ item.stat }}</div>
              <div class="fs-lg mb-1">{{ item.title }}</div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { statData } from '@/views/landings/MobileShowcase/data'

import appStoreLight from '@/assets/img/market/appstore-light.svg'
import appStoreDark from '@/assets/img/market/appstore-dark.svg'
import googleplayLight from '@/assets/img/market/googleplay-light.svg'
import googleplayDark from '@/assets/img/market/googleplay-dark.svg'
</script>
