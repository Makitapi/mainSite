<template>
  <b-container class="pt-lg-2 pt-xl-4 pt-xxl-5">
    <b-row class="py-sm-3 py-md-4 py-lg-5">
      <!-- Sticky sidebar with brief -->
      <aside class="col-md-3 col-lg-2" style="margin-top: -125px">
        <div class="d-flex d-md-block flex-wrap position-sticky top-0" style="padding-top: 130px">
          <div class="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">Company</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">1 DC</li>
              <li class="d-block py-1">300+ Stores</li>
              <li class="d-block py-1">LATAM</li>
              <!-- <li class="d-block py-1"><a class="text-dark" href="#">Visit website</a></li> -->
            </ul>
          </div>
          <div class="pb-3 mb-2 mb-lg-4 me-5 me-md-0">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">Industry</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">Fashion Retail</li>
            </ul>
          </div>
          <div class="pb-3 mb-2 mb-lg-4">
            <h2 class="fs-base fw-normal text-body-secondary mb-2">Time spent</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1">2 years</li>
            </ul>
          </div>
        </div>
      </aside>

      <b-col md="9" offset-lg="1">
        <div class="ps-md-4 ps-lg-0">
          <div v-for="(item, idx) in singleDescriptions" :key="idx">
            <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ item.title }}</h2>
            <p class="fs-lg">{{ item.content }}</p>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">From good to great</h2>
      <p class="fs-lg">
        The retailer's journey began with a baseline performance of 1,400 items per man-hour, exactly meeting their modest goal. However, their RFID implementation revealed that true transformation requires patience, iteration, and organizational commitment.

        <br />
        <br /><strong>RFID Pilot Stage:</strong> Initial portal installation delivered immediate 35% improvement, proving the technology's potential while maintaining existing workflows. <br /><strong>Hardware Fine-Tuning</strong> Optimizing read rates and portal positioning pushed performance to 50% above original baseline, demonstrating the importance of technical refinement. <br /><strong>Partner Training</strong> Educating suppliers and logistics partners on RFID-optimized processes
        delivered another performance leap, highlighting the ecosystem approach required. <br /><strong>DC Operations Changes</strong> The breakthrough came when they redesigned internal workflows around RFID capabilities rather than forcing the technology into existing processes—more than doubling original performance. <br /><strong>Redundant Operations Elimination</strong> The final transformation involved eliminating manual verification steps that RFID made obsolete, achieving a stunning 250%
        improvement over their starting point.
      </p>
    </b-row>

    <Jarallax class="jarallax" data-jarallax data-speed="0.6">
      <div class="ratio ratio-16x9"></div>
      <div class="jarallax-img" :style="{ backgroundImage: `url('${parallaxImg}')` }"></div>
    </Jarallax>

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <b-col md="7" xl="6" class="mb-4 mb-md-0">
        <h2 class="h1 pb-sm-2 pb-lg-3">Results</h2>
        <p class="fs-lg mb-0">This retailer's success story proves that RFID implementation isn't plug-and-play—it's a strategic journey. While immediate improvements are possible, transformational results require organizations to reshape operations around the technology's capabilities, not the reverse.</p>
        <p class="fs-lg mb-0">_</p>
        <p class="fs-lg mb-0">The 4,900 items per man-hour achievement represents over $200k in annual labor savings, but more importantly, it demonstrates how embracing technological change as an organizational evolution—rather than just a tool upgrade—unlocks exponential value.</p>
      </b-col>
      <b-col md="5" offset-xl="1">
        <b-row class="row-cols-2 gx-3 gx-sm-4">
          <b-col v-for="(result, idx) in singlev2Result" :key="idx">
            <div class="h2 display-1 mb-0">{{ result.number }}</div>
            <p class="fs-sm mb-0">{{ result.description }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { singleDescriptions, single2counter, singlev2Result, singleImg02, singleImg03, singleImg04, singleImg05, singleImg06, singleImg07, singleImg08, singleImg09, singleImg10 } from '@/views/Makitapi/4Projects/Project2/data'
import Jarallax from '@/components/Jarallax.vue'
import parallaxImg from '@/assets/img/portfolio/Project2/p2.jpeg'
</script>
