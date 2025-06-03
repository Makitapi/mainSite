<template>
  <b-container class="pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
    <b-row class="pb-md-4 pb-xl-5">
      <b-col md="6" class="mb-2 mb-md-0">
        <b-card no-body class="border-0 h-100 bg-size-cover bg-position-center" :style="`background-image: url(${service1});`">
          <div class="d-none d-sm-block d-md-none" style="height: 450px"></div>
          <div class="d-sm-none" style="height: 350px"></div>
        </b-card>
      </b-col>
      <b-col md="6" xl="5" class="offset-xl-1">
        <div class="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
          <h2 class="h1 pb-2 pb-sm-3 pb-xl-4">Benefits <br />of working with us</h2>
          <div class="d-flex mb-2 mb-xl-3" :class="benefits.length - 1 === idx ? '' : 'pb-3'" v-for="(benefit, idx) in benefits" :key="idx">
            <div class="text-body-secondary pt-1">{{ benefit.number }}</div>
            <div class="ps-3">
              <h3 class="h5">{{ benefit.title }}</h3>
              <p class="mb-0">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { benefits } from '@/views/pages/services/ServicesV1/data'
import service1 from '@/assets/img/services/v1/01.jpg'
</script>
