<template>
  <b-container class="py-5 mt-5 mb-xl-3 mb-xxl-5">
    <b-row class="pt-2">
      <b-col lg="6" class="d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
        <h1 class="display-1 text-uppercase fw-bold mt-auto mb-2">Creative <span class="fw-normal">solutions</span> studio<span class="d-none d-md-inline-block align-middle ms-4" style="width: 120px; height: 2px; background-color: currentColor"></span></h1>
        <div class="d-flex align-items-center py-4 py-lg-5">
          <a class="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" href="#">Let's work together</a>
          <div class="flex-shrink-sm-0">
            <img class="d-dark-mode-none" :src="clutchDark" width="155" alt="Clutch" />
            <img class="d-none d-dark-mode-block" :src="clutchLight" width="155" alt="Clutch" />
          </div>
        </div>
        <ul class="nav mt-auto mx-n2 pt-sm-3 pt-lg-0">
          <li class="nav-item me-3">
            <a class="nav-link p-2" href="#">instagram</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link p-2" href="#">dribbble</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-2" href="#">behance</a>
          </li>
        </ul>
      </b-col>

      <b-col lg="6">
        <b-row class="row-cols-1 row-cols-sm-2 g-1">
          <b-col>
            <a class="card-flip" href="#">
              <div class="card-flip-inner">
                <div class="card-flip-front" :style="{ backgroundImage: `url(${services01})` }">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Strategy</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Strategy</h3>
                    <p class="text-body mb-3">Leo vitae sem eget eget at in vivamus placerat in sodales tristique a risusiis senectusic vitae sem eget eget at in vivamus placerat in sodales.</p>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <i class="ai-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </b-col>

          <b-col>
            <a class="card-flip" href="#">
              <div class="card-flip-inner">
                <div class="card-flip-front" :style="{ backgroundImage: `url(${services02})` }">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Social</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Social</h3>
                    <ul class="text-body ps-4 mb-3">
                      <li class="mb-2">Social media posts</li>
                      <li class="mb-2">Content plan</li>
                      <li class="mb-2">Advertising launch</li>
                      <li class="mb-2">Photo and video content</li>
                      <li class="mb-1">Cases and portfolio</li>
                    </ul>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <i class="ai-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </b-col>

          <b-col class="order-sm-2">
            <a class="card-flip" href="#">
              <div class="card-flip-inner">
                <div class="card-flip-front" :style="{ backgroundImage: `url(${services04})` }">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Web design</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Web design</h3>
                    <p class="text-body mb-3">Pharetra in morbi quis is massa maecenas arcu vulputate in pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <i class="ai-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </b-col>

          <b-col class="order-sm-1">
            <a class="card-flip" href="#">
              <div class="card-flip-inner">
                <div class="card-flip-front" :style="{ backgroundImage: `url(${services03})` }">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Branding</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Branding</h3>
                    <ul class="text-body ps-4 mb-3">
                      <li class="mb-2">Identity design</li>
                      <li class="mb-2">Brand book creation</li>
                      <li class="mb-2">Colors and fonts</li>
                      <li class="mb-2">Banners and covers</li>
                      <li class="mb-1">Visual style</li>
                    </ul>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <i class="ai-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import clutchDark from '@/assets/img/brands/clutch-rating-dark.svg'
import clutchLight from '@/assets/img/brands/clutch-rating-light.svg'
import services01 from '@/assets/img/landing/creative-agency/services/01.jpg'
import services02 from '@/assets/img/landing/creative-agency/services/02.jpg'
import services04 from '@/assets/img/landing/creative-agency/services/04.jpg'
import services03 from '@/assets/img/landing/creative-agency/services/03.jpg'
</script>
