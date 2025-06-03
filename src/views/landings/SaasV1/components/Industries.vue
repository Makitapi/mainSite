<template>
  <section class="bg-dark border-top border-light py-2 py-sm-3 py-md-4 py-lg-5" data-bs-theme="dark">
    <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
      <h2 class="h1 text-center text-md-start mt-lg-n3 pb-4 pb-md-5" style="max-width: 660px">Around suitable for any business, from stores to agencies</h2>
      <b-row class="pt-sm-2 pt-md-0 pt-xl-1 pt-xxl-3">
        <b-col md="6" xl="5" class="offset-xl-1 order-md-2 pb-4 pb-md-0 mb-2 mb-md-0">
          <div class="binded-content" style="max-width: 526px">
            <div v-for="(industry, idx) in industries" :class="show === industry.label && 'active'" :key="idx" class="binded-item" id="agencies-image">
              <div class="from-bottom">
                <div class="d-flex justify-content-center position-absolute top-0 start-0 w-100 h-100">
                  <div class="rounded-5 h-100" :class="`bg-${industry.bgColor}`" style="width: 88.2%"></div>
                </div>
                <img class="d-block position-relative z-2" :src="industry.image" alt="Img" />
              </div>
            </div>
          </div>
        </b-col>

        <b-col md="6" class="order-md-1">
          <b-tabs noNavStyle navClass="nav-tabs flex-nowrap overflow-auto text-nowrap pb-3 mb-3 mb-xl-4" contentClass="pt-lg-2 pt-xl-3">
            <b-tab v-for="(industry, idx) in industries" :key="idx" class="fade" :title="industry.label" @click="show = industry.label">
              <h3 class="mb-lg-4">{{ industry.title }}</h3>
              <p class="text-body">{{ industry.description }}</p>
              <router-link class="btn btn-lg btn-link px-0 mt-n2 mt-lg-0" to="#">
                Learn more
                <i class="ai-arrow-right ms-2"></i>
              </router-link>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { industries } from '@/views/landings/SaasV1/data'

const show = ref('Marketers')
</script>
