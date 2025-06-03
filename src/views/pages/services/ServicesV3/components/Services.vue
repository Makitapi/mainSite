<template>
  <b-container class="py-4 py-sm-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="align-items-center py-4 py-xl-5 my-2">
      <b-col md="6" class="offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
        <img class="rounded-5" :src="service1" alt="Img" />
      </b-col>
      <b-col md="6" xl="5" class="order-md-1">
        <div class="pe-md-4 pe-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">Web &amp; App development</h2>
          <p class="pb-2 pb-lg-0 mb-4 mb-lg-5">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean auctor cursus tortor non fermentum. Fusce ornare pulvinar nibh, sed facilisis eros congue pretium. Suspendisse et fermentum massa.</p>
          <b-row class="row-cols-2">
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3">
                <img class="d-block d-dark-mode-none m-1" :src="monitorDark" width="28" alt="Icon" />
                <img class="d-none d-dark-mode-block m-1" :src="monitorLight" width="28" alt="Icon" />
              </div>
              <h3 class="h5 mb-2">Custom websites</h3>
              <p class="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
            </b-col>
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3">
                <img class="d-block d-dark-mode-none m-1" :src="cloudDark" width="28" alt="Icon" />
                <img class="d-none d-dark-mode-block m-1" :src="cloudLight" width="28" alt="Icon" />
              </div>
              <h3 class="h5 mb-2">Cloud computing</h3>
              <p class="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-4 py-xl-5 my-2">
      <b-col md="6" class="pb-2 mb-4 mb-md-0"><img class="rounded-5" :src="service2" alt="Img" /></b-col>
      <b-col md="6" xl="5" class="offset-xl-1">
        <div class="ps-md-4 pe-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">Mobile app design</h2>
          <p class="pb-2 pb-lg-0 mb-4 mb-lg-5">More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor. Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam ultrices interdum vitae.</p>
          <b-row class="row-cols-2">
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3"><img class="d-block d-dark-mode-none m-1" :src="cogDark" width="28" alt="Icon" /><img class="d-none d-dark-mode-block m-1" :src="cogLight" width="28" alt="Icon" /></div>
              <h3 class="h5 mb-2">For iOS &amp; Android</h3>
              <p class="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
            </b-col>
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3"><img class="d-block d-dark-mode-none m-1" :src="timeDark" width="28" alt="Icon" /><img class="d-none d-dark-mode-block m-1" :src="timeLight" width="28" alt="Icon" /></div>
              <h3 class="h5 mb-2">Speed optimization</h3>
              <p class="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row class="align-items-center py-4 py-xl-5 my-2">
      <b-col md="6" class="offset-xl-1 order-md-2 pb-2 mb-4 mb-md-0">
        <img class="rounded-5" :src="service3" alt="Img" />
      </b-col>
      <b-col md="6" xl="5" class="order-md-1">
        <div class="pe-md-4 pe-xl-0">
          <h2 class="h1 pb-2 pb-lg-3">UI &amp; UX design</h2>
          <p class="pb-2 pb-lg-0 mb-4 mb-lg-5">Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia amet minim mollit non deserunt ullamco est sit aliqua dolor malesuada fames ac ante ipsum.</p>
          <b-row class="row-cols-2">
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3">
                <img class="d-block d-dark-mode-none m-1" :src="monitorDark" width="28" alt="Icon" />
                <img class="d-none d-dark-mode-block m-1" :src="monitorLight" width="28" alt="Icon" />
              </div>
              <h3 class="h5 mb-2">All business niches</h3>
              <p class="fs-sm mb-0">Eu dignissim arcu, iaculis orci hendrerit commodo leo eget</p>
            </b-col>
            <b-col>
              <div class="d-table bg-secondary rounded-1 p-2 mb-3">
                <img class="d-block d-dark-mode-none m-1" :src="sizeDark" width="28" alt="Icon" />
                <img class="d-none d-dark-mode-block m-1" :src="sizeLight" width="28" alt="Icon" />
              </div>
              <h3 class="h5 mb-2">Customer focus</h3>
              <p class="fs-sm mb-0">Adipiscing in aliquam iaculis pellentesque facilisi commo</p>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import service1 from '@/assets/img/services/v3/01.jpg'
import service2 from '@/assets/img/services/v3/02.jpg'
import service3 from '@/assets/img/services/v3/03.jpg'
import monitorDark from '@/assets/img/services/v3/icons/monitor-dark.svg'
import monitorLight from '@/assets/img/services/v3/icons/monitor-light.svg'
import cloudLight from '@/assets/img/services/v3/icons/cloud-light.svg'
import cloudDark from '@/assets/img/services/v3/icons/cloud-dark.svg'
import cogDark from '@/assets/img/services/v3/icons/cog-dark.svg'
import cogLight from '@/assets/img/services/v3/icons/cog-light.svg'
import timeDark from '@/assets/img/services/v3/icons/time-dark.svg'
import timeLight from '@/assets/img/services/v3/icons/time-light.svg'
import sizeDark from '@/assets/img/services/v3/icons/size-dark.svg'
import sizeLight from '@/assets/img/services/v3/icons/size-light.svg'
</script>
