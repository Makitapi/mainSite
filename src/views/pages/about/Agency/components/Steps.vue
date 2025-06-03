<template>
  <b-container class="pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
    <b-row class="align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
      <b-col md="6" xl="5" class="pb-3 pb-md-0 mb-4 mb-md-0">
        <div class="ratio ratio-1x1 d-flex align-items-center position-relative rounded-circle overflow-hidden bg-size-cover mx-auto" :style="`max-width: 530px; background-image: url(${stepImage});`">
          <div class="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
          <div class="position-relative z-2 p-4" data-bs-theme="dark">
            <div class="text-center mx-auto" style="max-width: 275px">
              <span class="d-block text-body fs-sm text-uppercase mb-3">How we work</span>
              <h2 class="display-6 mb-0">The key to success</h2>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6" xl="5" class="offset-xl-1">
        <div class="ps-md-4 ps-xl-0">
          <div class="steps steps-hoverable">
            <div v-for="(step, idx) in steps" :key="idx" class="step py-3 py-xl-4">
              <div class="step-number">
                <div class="step-number-inner">{{ step.stepNumber }}</div>
              </div>
              <div class="step-body">
                <h3 class="h5 pb-1 mb-2">{{ step.stepTitle }}</h3>
                <p class="mb-0">{{ step.stepDescription }}</p>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { steps } from '@/views/pages/about/Agency/data'
import stepImage from '@/assets/img/about/agency/steps-image.jpg'
</script>
