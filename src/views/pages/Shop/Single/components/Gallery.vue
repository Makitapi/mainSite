<template>
  <h2 class="h1 d-md-none">Scented candle</h2>
  <div class="d-flex d-md-none align-items-center pb-3 mb-3">
    <div class="h3 mb-0 me-3">{{ currency }}14.00</div>
    <del class="fs-5 fw-medium text-body-secondary me-3">{{ currency }}19.00</del>
    <b-badge variant="danger" class="bg-opacity-10 text-danger d-md-none">Sale</b-badge>
  </div>

  <b-row class="pb-sm-1 pb-md-4">
    <LightGallery custom-class="gallery col-md-6 mb-3 mb-md-0">
      <a class="d-block gallery-item card-hover zoom-effect mb-4" :href="gallery01">
        <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
          <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
          <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
        </div>
        <div class="zoom-effect-wrapper rounded-1">
          <div class="zoom-effect-img bg-secondary p-4">
            <img class="d-block mx-auto" :src="gallery01" width="562" alt="Candle img #1" />
          </div>
        </div>
      </a>

      <b-row class="row-cols-1 row-cols-sm-2 g-4 mb-4">
        <b-col>
          <a class="d-block gallery-item card-hover zoom-effect" :href="gallery01">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <div class="zoom-effect-img bg-secondary p-4">
                <img class="d-block mx-auto" :src="galleryth01" width="226" alt="Candle img #2" />
              </div>
            </div>
          </a>
        </b-col>

        <b-col>
          <a class="d-block gallery-item card-hover zoom-effect" :href="gallery02">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
              <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-1">
              <div class="zoom-effect-img bg-secondary p-4">
                <img class="d-block mx-auto" :src="galleryth02" width="226" alt="Candle img #3" />
              </div>
            </div>
          </a>
        </b-col>
      </b-row>

      <a class="d-block gallery-item card-hover zoom-effect" :href="gallery03">
        <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-1 overflow-hidden z-2 opacity-0">
          <i class="ai-zoom-in fs-2 text-white position-relative z-2"></i>
          <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
        </div>
        <div class="zoom-effect-wrapper rounded-1">
          <div class="zoom-effect-img bg-secondary p-4">
            <img class="d-block mx-auto" :src="gallery03" width="460" alt="Candle img #4" />
          </div>
        </div>
      </a>
    </LightGallery>
    <ProductDetail />
  </b-row>
</template>

<script setup lang="ts">
import LightGallery from '@/components/LightGallery.vue'
import ProductDetail from '@/views/pages/Shop/Single/components/ProductDetail.vue'
import { currency } from '@/helpers/constants'

import gallery01 from '@/assets/img/shop/single/gallery/01.png'
import gallery02 from '@/assets/img/shop/single/gallery/02.png'
import gallery03 from '@/assets/img/shop/single/gallery/03.png'
import galleryth01 from '@/assets/img/shop/single/gallery/th01.png'
import galleryth02 from '@/assets/img/shop/single/gallery/th02.png'
</script>
