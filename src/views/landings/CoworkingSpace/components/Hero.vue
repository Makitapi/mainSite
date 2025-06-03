<template>
  <section class="pt-5">
    <b-container class="position-relative z-2 pt-5 mt-3 mt-sm-4 mt-md-5">
      <b-row class="pt-xl-3 pt-xxl-4">
        <b-col lg="7" xxl="6">
          <h1 class="display-3 text-center text-lg-start">The best space for work and business meetings</h1>
        </b-col>
        <b-col lg="5" class="offset-xxl-1 pt-sm-3">
          <p class="fs-lg text-center text-lg-start pb-3 pb-sm-0 pb-md-2 mb-4 mb-sm-5">Magna in purus in facilisis pretium eleifend in nullamer magna morbi eleifend vel convallis quis utrices neque tellus purus in facilisis pretium eleifend vel convallis.</p>

          <b-card no-body class="border-0 bg-primary py-4 px-xxl-4">
            <b-form class="card-body" data-bs-theme="dark">
              <h2 class="h3 card-title text-white text-center pb-2 pb-xxl-3">Reserve your spot</h2>
              <div class="mb-3">
                <b-form-group label="Space" label-class="pb-2">
                  <b-form-select size="lg" v-model="selectedSpace" :options="spaceOptions" />
                </b-form-group>
              </div>
              <div class="mb-3">
                <b-form-group label="Company size" label-class="pb-2">
                  <b-form-input size="lg" type="number" placeholder="1" required id="company" />
                </b-form-group>
              </div>
              <div class="mb-3">
                <FlatPicker id="date-and-time" label="Date and time" label-class="mb-2" placeholder="Choose date/time" custom-class="pe-5" :options="{ enableTime: true, altInput: true, altFormat: 'F j, Y H:i', dateFormat: 'Y-m-d H:i' }" />
              </div>
              <div class="mb-3">
                <b-form-group label="Email address" label-class="pb-2">
                  <b-form-input size="lg" type="email" placeholder="johnDoe@example.com" required id="email" />
                </b-form-group>
              </div>
              <div class="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row align-items-center justify-content-center justify-content-lg-start pt-3 pt-xxl-4">
                <b-button variant="light" class="w-100 w-sm-auto w-lg-100 w-xxl-auto mb-2 mb-sm-0 mb-lg-2 mb-xxl-0 me-sm-3 me-lg-0 me-xxl-3" type="submit">Book space now </b-button>
                <a class="d-flex align-items-center fs-sm fw-semibold text-white text-decoration-none px-3 py-2" href="tel:+15262200459">
                  <i class="ai-phone fs-xl me-2"></i>
                  +1&nbsp;526&nbsp;220&nbsp;0459
                </a>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <Jarallax custom-class="jarallax" :options="{ speed: 0.6 }">
      <div class="jarallax-img" :style="`background-image: url(${parallaxImage})`"></div>
      <div class="d-none d-xxl-block" style="height: 830px; margin-top: -470px"></div>
      <div class="d-none d-xl-block d-xxl-none" style="height: 780px; margin-top: -490px"></div>
      <div class="d-none d-lg-block d-xl-none" style="height: 700px; margin-top: -560px"></div>
      <div class="d-none d-sm-block d-lg-none" style="height: 520px; margin-top: -450px"></div>
      <div class="d-sm-none" style="height: 500px; margin-top: -450px"></div>
    </Jarallax>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Jarallax from '@/components/Jarallax.vue'
import FlatPicker from '@/components/FlatPicker.vue'
import parallaxImage from '@/assets/img/landing/coworking-space/parallax-image.jpg'

const selectedSpace = ref('Skype room 1')

const spaceOptions = [
  { value: 'choose-space', text: 'Choose space' },
  { value: 'Coworking main room', text: 'Coworking main room' },
  { value: 'Coworking terrace', text: 'Coworking terrace' },
  { value: 'Skype room 1', text: 'Skype room 1' },
  { value: 'Skype room 2', text: 'Skype room 2' },
  { value: 'Meeting room 1', text: 'Meeting room 1' },
  { value: 'Meeting room 2', text: 'Meeting room 2' },
  { value: 'Gaming room', text: 'Gaming room' }
]
</script>
