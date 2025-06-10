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
              <li class="d-block py-1">340+ Stores</li>
              <li class="d-block py-1">APAC</li>
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
              <li class="d-block py-1">2 months</li>
            </ul>
          </div>
        </div>
      </aside>

      <b-col md="9" offset-lg="1">
        <div class="ps-md-4 ps-lg-0">
          <!-- <div class="border-bottom pb-3 pb-sm-4 pb-lg-5 mb-4">
            <p class="text-dark lead mb-md-2 mb-lg-3 mb-xl-4">When a major distribution center was struggling with bottlenecks at their seven-station sorting facility, they discovered their barcode scanners were the hidden culprit behind operational inefficiencies. Processing 3 million items annually with scanning times ranging from 5-9 seconds per item, their sorting operation was operating far below capacity.</p>
          </div> -->
          <div v-for="(item, idx) in singleDescriptions" :key="idx">
            <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">{{ item.title }}</h2>
            <p class="fs-lg">{{ item.content }}</p>
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- <b-row class="py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
      <b-col sm="7" class="mb-4 mb-sm-0">
        <div class="position-relative mb-4">
          <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: #2663f2" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="250"></div>
          <img class="position-relative z-2" :src="singleImg02" alt="Img" data-aos="zoom-in" data-aos-duration="400" data-aos-offset="250" />
        </div>
        <div class="position-relative">
          <div class="bg-black position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="250"></div>
          <img class="position-relative z-2" :src="singleImg04" alt="Img" data-aos="zoom-in" data-aos-duration="400" data-aos-offset="250" />
        </div>
      </b-col>
      <b-col sm="5">
        <div class="position-relative">
          <div class="position-absolute top-0 start-0 w-100 h-100" style="max-height: 588px; background-color: #216d2a" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="250"></div>
          <img class="position-relative z-2" :src="singleImg03" alt="Img" data-aos="zoom-in" data-aos-duration="400" data-aos-offset="250" />
        </div>
      </b-col>
    </b-row> -->

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <h2 class="h1 pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-2">The Numbers Tell the Story</h2>
        <p class="fs-lg">
          Before the upgrade, their worst-case scenario involved 9 seconds per item across 7 feeding stations. With 3 million items annually, this translated to 27 million seconds—or 7,500 hours—of pure scanning time yearly. Even at their best performance of 5 seconds per item, they were still consuming 4,167 hours annually in scanning operations alone.<br />
          After implementing RFID readers at all seven stations, scanning time dropped to 1 second per item, requiring only 833 hours annually—a reduction of up to 6,667 hours per year.<br />
          The facility also gained real-time visibility into sorting performance, allowing managers to identify and address capacity constraints before they impacted operations.
        </p>
      
    </b-row>
    <!-- <div class="position-relative w-100 mx-auto pb-1 pb-sm-3 pb-md-4" style="max-width: 1043px">
      <img class="d-block position-relative z-5" :src="singleImg05" alt="Img" data-aos="fade-down-right" data-aos-duration="500" data-aos-offset="250" />
      <img class="d-block position-absolute top-0 start-0 z-2" :src="singleImg06" alt="Img" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="250" />
      <img class="d-block position-absolute top-0 start-0 z-1" :src="singleImg07" alt="Img" data-aos="fade-down" data-aos-duration="500" data-aos-offset="250" />
      <img class="d-block position-absolute top-0 start-0" :src="singleImg08" alt="Img" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" />
    </div> -->

    <!-- <b-row class="py-5 my-lg-3 my-xl-4 my-xxl-5">
      <b-col sm="5" class="mb-4 mb-sm-0">
        <div class="position-relative">
          <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="250"></div>
          <img class="position-relative z-2" :src="singleImg09" alt="Img" data-aos="zoom-in" data-aos-duration="400" data-aos-offset="250" />
        </div>
      </b-col>
      <b-col sm="7">
        <div class="position-relative">
          <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="250"></div>
          <img class="position-relative z-2" :src="singleImg10" alt="Img" data-aos="zoom-in" data-aos-duration="400" data-aos-offset="250" />
        </div>
      </b-col>
    </b-row> -->

    <Jarallax class="jarallax" data-jarallax data-speed="0.6">
      <div class="ratio ratio-16x9"></div>
      <div class="jarallax-img" :style="{ backgroundImage: `url('${parallaxImg}')` }"></div>
    </Jarallax>

    <b-row class="pt-sm-3 pt-md-4 pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <b-col md="7" xl="6" class="mb-4 mb-md-0">
        <h2 class="h1 pb-sm-2 pb-lg-3">Results</h2>
        <p class="fs-lg mb-0">
          By investing in RFID technology, this distribution center reclaimed nearly 20 hours of productive capacity daily while improving accuracy and operator satisfaction. What before was done by 7 to 9 operators, now it could be done by 1!
        <p class="fs-lg mb-0"> _</p>
        </p>
        <p class="fs-lg mb-0">
          The upgrade paid for itself within eight months through the labour savings alone. The company scrapped the idea to upgrade to a larger sorter or get a second one, proving that sometimes the smallest technological changes deliver the biggest operational impacts (even when shaving “just” a few seconds).
        </p>
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
import { singleDescriptions, single2counter, singlev2Result, singleImg02, singleImg03, singleImg04, singleImg05, singleImg06, singleImg07, singleImg08, singleImg09, singleImg10 } from '@/views/Makitapi/4Projects/Project1/data'
import Jarallax from '@/components/Jarallax.vue'
import parallaxImg from '@/assets/img/portfolio/Project1/Sorter_3.png'
</script>
