<template>
  <b-container class="pt-5 mt-xl-3 mt-xxl-5">
    <b-row class="pt-1 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2">
      <b-col lg="4">
        <h2 class="h1 pb-1 pb-sm-2 mb-4">Who may attend Conference?</h2>
      </b-col>
      <b-col lg="8" xl="7" class="offset-xl-1">
        <Simplebar data-simplebar>
          <b-tabs content-class="py-2 pb-md-0 pt-sm-3 pt-lg-4 mb-4 mb-md-5" nav-class="flex-nowrap mb-2" nav-wrapper-class="ps-lg-4 ps-xl-0 overflow-auto">
            <template v-for="(item, idx) in targetAudience" :key="idx">
              <b-tab :title="item.type" title-link-class="text-nowrap px-4 px-lg-3 px-xl-4" :active="!idx">
                <p class="fs-xl mb-4">{{ item.description }}</p>
                <ul class="fs-xl mb-0">
                  <li class="mb-1" v-for="(benefit, idx) in item.benefits" :key="idx">{{ benefit }}</li>
                </ul>
              </b-tab>
            </template>
          </b-tabs>
          <a class="btn btn-lg btn-primary w-100 w-sm-auto" href="#tickets" data-scroll data-scroll-offset="120">
            Buy access pass
            <i class="ai-arrow-down ms-2 me-n2"></i>
          </a>
        </Simplebar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { targetAudience } from '@/views/landings/ConferenceEvent/data'
import Simplebar from 'simplebar-vue'
</script>
