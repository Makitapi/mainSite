<template>
  <b-container class="pt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
    <h2 class="h1 text-center">Recent case studies</h2>
    <p class="pb-4 mb-md-2 mb-lg-3 text-center">Below you'll find handpicked recent projects we are most proud of</p>

    <b-row class="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
      <b-col md="7" lg="6" class="mb-4 mb-md-0">
        <router-link :to="{ name: 'portfolio.single-1' }" class="d-block position-relative">
          <div class="bg-info rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
          <img class="d-block position-relative z-2 mx-auto" :src="list6" width="636" alt="Img" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
        </router-link>
      </b-col>
      <b-col md="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
        <div class="ps-md-3 ps-lg-0">
          <img class="d-block d-dark-mode-none mb-2 mb-lg-3" :src="championBlueDark" alt="Champion" />
          <img class="d-none d-dark-mode-block mb-2 mb-lg-3" :src="championBlueLight" alt="Champion" />
          <h2 class="h4">Development of an application for a national bank</h2>
          <p class="fs-sm pb-3 pb-lg-4 mb-3">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.</p>
          <router-link :to="{ name: 'portfolio.single-1' }" class="btn btn-sm btn-outline-dark rounded-pill">Read the full story </router-link>
          <div class="d-flex align-items-center pt-2 pt-lg-3 mt-3">
            <h6 class="text-body mb-0 me-3">Awards:</h6>
            <img class="d-block d-dark-mode-none me-4" :src="vuejsDark" width="90" alt="Vue.js" />
            <img class="d-none d-dark-mode-block me-4" :src="vuejsLight" width="90" alt="Vue.js" />
            <img class="d-block d-dark-mode-none" :src="deloitteDark" width="95" alt="Deloitte" />
            <img class="d-none d-dark-mode-block" :src="deloitteLight" width="95" alt="Deloitte" />
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
      <b-col md="7" lg="6" class="mb-4 mb-md-0">
        <router-link :to="{ name: 'portfolio.single-1' }" class="d-block position-relative">
          <div class="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
          <img class="d-block position-relative z-2 mx-auto" :src="list7" width="636" alt="Img" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
        </router-link>
      </b-col>
      <b-col md="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
        <div class="ps-md-3 ps-lg-0">
          <img class="d-block mb-2 mb-lg-3" :src="fosterGreen" alt="Foster" />
          <h2 class="h4">Design and development of a dashboard for data management</h2>
          <p class="fs-sm pb-3 pb-lg-4 mb-3">Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui varius amet et quam massa auctor.</p>
          <router-link :to="{ name: 'portfolio.single-1' }" class="btn btn-sm btn-outline-dark rounded-pill">Read the full story </router-link>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
      <b-col md="7" lg="6" class="mb-4 mb-md-0">
        <router-link :to="{ name: 'portfolio.single-1' }" class="d-block position-relative">
          <div class="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
          <img class="d-block position-relative z-2 ms-auto" :src="list8" width="636" alt="Img" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
        </router-link>
      </b-col>
      <b-col md="5" xl="4" class="offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
        <div class="ps-md-3 ps-lg-0">
          <img class="d-block mb-2 mb-lg-3" :src="boost" alt="Boost" />
          <h2 class="h4 mb-lg-4">Landing page for a marketing agency Boost</h2>
          <ul class="list-unstyled pb-1 pb-lg-2 mb-3">
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Faucibus sit est dui id gravida
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Lectus in sem eu facilisis ornare
            </li>
            <li class="d-flex pb-1 mb-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Massa maecenas cras vivamus
            </li>
          </ul>
          <router-link :to="{ name: 'portfolio.single-1' }" class="btn btn-sm btn-outline-dark rounded-pill">Read the full story </router-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import list6 from '@/assets/img/portfolio/list/06.png'
import list7 from '@/assets/img/portfolio/list/07.png'
import list8 from '@/assets/img/portfolio/list/08.png'

import championBlueDark from '@/assets/img/portfolio/brands/champion-blue-dark.svg'
import championBlueLight from '@/assets/img/portfolio/brands/champion-blue-light.svg'
import vuejsDark from '@/assets/img/portfolio/brands/vuejs-dark.svg'
import vuejsLight from '@/assets/img/portfolio/brands/vuejs-light.svg'
import deloitteDark from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloitteLight from '@/assets/img/portfolio/brands/deloitte-light.svg'
import fosterGreen from '@/assets/img/portfolio/brands/foster-green.svg'
import boost from '@/assets/img/portfolio/brands/boost.svg'
</script>
