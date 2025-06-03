<template>
  <b-container id="tickets">
    <b-row class="border border-light rounded-5 overflow-hidden g-0">
      <b-col md="7" xl="8">
        <b-card no-body class="h-100 bg-dark border-0 rounded-0 py-md-3 py-lg-4 py-xl-5 px-3 px-sm-4 px-lg-5" data-bs-theme="dark">
          <div class="position-absolute top-0 start-0 w-100 h-100" :style="{ backgroundImage: `url(${noise})`, mixBlendMode: 'soft-light', opacity: '12%' }"></div>
          <b-card-body class="position-relative z-2 py-5 px-2 mx-auto" style="max-width: 732px">
            <h2 class="h1">In-Person Experience</h2>
            <p class="pb-3 mb-lg-4">Aenean sollicitudin sit convallis auctor egestas urna massa semper ultrices libero suspendisse venenatis urna ac in vitae pharetra aliquam.</p>
            <div class="display-3 text-primary fw-bold pb-3 mb-1 mb-lg-3">{{ currency }}299</div>
            <ul class="list-unstyled mb-0">
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Non egestas pretium iaculis venenatis ipsum cras enim et amet.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Et purus quis laoreet ipsum.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Suspendisse turpis vehicula id ornare ut ut sollicitudin tempus vel.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Justo, quam tortor leo sed varius arcu sit rhoncus.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Sed maecenas sit vestibulum id ornare habitasse sit scelerisque.
              </li>
            </ul>
          </b-card-body>
          <div class="card-footer w-100 border-0 pt-0 pb-5 px-2 mx-0">
            <b-button size="lg" variant="primary" type="button">Buy ticket</b-button>
          </div>
        </b-card>
      </b-col>

      <b-col md="5" xl="4" class="border-top border-md-0 border-start-md border-light">
        <b-card no-body class="h-100 bg-secondary border-0 rounded-0 py-md-3 py-lg-4 py-xl-5 px-3 px-sm-4 px-lg-5">
          <b-card-body class="py-5 px-2">
            <h2 class="h1">Live Stream</h2>
            <p class="pb-3 mb-lg-4">Sit facilisis viverra ullamcorper vestibulum nunc tincidunt egestas.</p>
            <div class="display-3 text-primary fw-bold pb-3 mb-1 mb-lg-3">{{ currency }}89</div>
            <ul class="list-unstyled mb-0">
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Integer lacinia quisque etiam quis morbi aliquam commodo.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Neque, ullamcorper elit sit natoque.
              </li>
              <li class="d-flex pt-1 mt-2">
                <i class="ai-circle-check text-primary fs-xl mt-1 me-2"></i>
                Sed orci, lacus, nunc vestibulum mi vel etiam pulvinar erat.
              </li>
            </ul>
          </b-card-body>
          <div class="card-footer w-100 border-0 pt-0 pb-5 px-2 mx-0">
            <b-button size="lg" variant="primary" type="button">Buy ticket</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import { currency } from '@/helpers/constants'
import noise from '@/assets/img/landing/conference/noise.png'
</script>
