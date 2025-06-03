<template>
  <section class="position-relative overflow-hidden pt-5">
    <b-container class="position-relative z-2 pt-4 pt-sm-5 mt-2 mt-sm-0 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
      <b-row class="justify-content-center py-4">
        <b-col lg="11" xl="10" class="text-center pb-2 pb-sm-3 mb-lg-2 mb-xl-3">
          <h1 class="display-2 fw-normal mb-0"><span class="fw-bold">Segment your audience</span> using a variety of methods</h1>
        </b-col>
      </b-row>
      <Parallax id="parallax" custom-class="parallax">
        <div class="parallax-layer" data-depth="-0.05">
          <img class="d-dark-mode-none" :src="heroLight1" alt="Layer" />
          <img class="d-none d-dark-mode-block" :src="heroDark1" alt="Layer" />
        </div>
        <div class="parallax-layer" data-depth="0.1">
          <img class="d-dark-mode-none" :src="heroLight2" alt="Layer" />
          <img class="d-none d-dark-mode-block" :src="heroDark2" alt="Layer" />
        </div>
        <div class="parallax-layer z-2" data-depth="0.2">
          <img class="d-dark-mode-none" :src="heroLight3" alt="Layer" />
          <img class="d-none d-dark-mode-block" :src="heroDark3" alt="Layer" />
        </div>
        <div class="parallax-layer" data-depth="-0.2">
          <img class="d-dark-mode-none" :src="heroLight4" alt="Layer" />
          <img class="d-none d-dark-mode-block" :src="heroDark4" alt="Layer" />
        </div>
        <div class="parallax-layer" data-depth="-0.25">
          <img class="d-dark-mode-none" :src="heroLight5" alt="Layer" />
          <img class="d-none d-dark-mode-block" :src="heroDark5" alt="Layer" />
        </div>
      </Parallax>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import Parallax from '@/components/Parallax.vue'

import heroLight1 from '@/assets/img/about/product/hero/01-light.png'
import heroDark1 from '@/assets/img/about/product/hero/01-dark.png'
import heroLight2 from '@/assets/img/about/product/hero/02-light.png'
import heroDark2 from '@/assets/img/about/product/hero/02-dark.png'
import heroLight3 from '@/assets/img/about/product/hero/03-light.png'
import heroDark3 from '@/assets/img/about/product/hero/03-dark.png'
import heroLight4 from '@/assets/img/about/product/hero/04-light.png'
import heroDark4 from '@/assets/img/about/product/hero/04-dark.png'
import heroLight5 from '@/assets/img/about/product/hero/05-light.png'
import heroDark5 from '@/assets/img/about/product/hero/05-dark.png'
</script>
