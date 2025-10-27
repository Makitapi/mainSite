<template>
  <b-container class="pt-lg-2 pt-xl-4 pt-xxl-5">
    <b-row class="py-sm-3 py-md-4 py-lg-5">
      <!-- Sticky sidebar with brief -->
      <aside class="col-md-3 col-lg-2" style="margin-top: -125px">
        <div class="d-flex d-md-block flex-wrap position-sticky top-0" style="padding-top: 130px">
          <div class="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">{{ $t('projectDetails.sidebar.company') }}</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">{{ $t('projectDetails.project2.company.dc') }}</li>
              <li class="d-block py-1">{{ $t('projectDetails.project2.company.stores') }}</li>
              <li class="d-block py-1">{{ $t('projectDetails.project2.company.region') }}</li>
              <!-- <li class="d-block py-1"><a class="text-dark" href="#">Visit website</a></li> -->
            </ul>
          </div>
          <div class="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">{{ $t('projectDetails.sidebar.industry') }}</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">{{ $t('projectDetails.project2.industry') }}</li>
            </ul>
          </div>
          <div class="pb-3 mb-2 mb-lg-4">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">{{ $t('projectDetails.sidebar.timeSpent') }}</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">{{ $t('projectDetails.project2.timeSpent') }}</li>
            </ul>
          </div>
        </div>
      </aside>

      <b-col md="9" offset-lg="1">
        <div class="ps-md-4 ps-lg-0">
          <div>
            <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ $t('projectDetails.project2.sections.aboutClient.title') }}</h2>
            <p class="fs-lg">{{ $t('projectDetails.project2.sections.aboutClient.content') }}</p>

            <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ $t('projectDetails.project2.sections.challenge.title') }}</h2>
            <p class="fs-lg">{{ $t('projectDetails.project2.sections.challenge.content') }}</p>

            <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ $t('projectDetails.project2.sections.solution.title') }}</h2>
            <p class="fs-lg">{{ $t('projectDetails.project2.sections.solution.content') }}</p>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ $t('projectDetails.project2.sections.evolutionStory.title') }}</h2>
      <p class="fs-lg" v-html="$t('projectDetails.project2.sections.evolutionStory.content')"></p>
    </b-row>

    <Jarallax class="jarallax" data-jarallax data-speed="0.6">
      <div class="ratio ratio-16x9"></div>
      <div class="jarallax-img" :style="{ backgroundImage: `url('${parallaxImg}')` }"></div>
    </Jarallax>

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <b-col md="7" xl="6" class="mb-4 mb-md-0">
        <h2 class="h1 pb-sm-2 pb-lg-3">{{ $t('projectDetails.project2.sections.results.title') }}</h2>
        <p class="fs-lg mb-0">{{ $t('projectDetails.project2.sections.results.content1') }}</p>
        <p class="fs-lg mb-0">_</p>
        <p class="fs-lg mb-0">{{ $t('projectDetails.project2.sections.results.content2') }}</p>
      </b-col>
      <b-col md="5" offset-xl="1">
        <b-row class="row-cols-2 gx-3 gx-sm-4">
          <b-col v-for="(result, idx) in translatedResults" :key="idx">
            <div class="h2 display-1 mb-0">{{ result.number }}</div>
            <p class="fs-sm mb-0">{{ result.description }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { singleDescriptions, single2counter, singlev2Result, singleImg02, singleImg03, singleImg04, singleImg05, singleImg06, singleImg07, singleImg08, singleImg09, singleImg10 } from '@/views/Makitapi/4Projects/Project2/data'
import Jarallax from '@/components/Jarallax.vue'
import parallaxImg from '@/assets/img/portfolio/Project2/p2.jpeg'

const { t } = useI18n()

const translatedResults = computed(() =>
  singlev2Result.map((result, index) => ({
    ...result,
    description: t(`projectDetails.project2.results[${index}].description`) || result.description
  }))
)
</script>
