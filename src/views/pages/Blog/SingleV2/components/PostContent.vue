<template>
  <b-container class="pt-5 mt-md-2 mt-lg-3 mt-xl-4">
    <b-row class="justify-content-center pt-xxl-2">
      <b-col lg="9" xl="8" class="pe-lg-4 pe-xl-0">
        <p class="fs-lg">
          Dolor laoreet fermentum lectus praesent aenean molestie mollis integer. Sem ullamcorper montes, lorem ullamcorper orci, pellentesque ipsum malesuada gravida. Donec imperdiet nulla suscipit in. Dignissim ornare ac lorem consectetur massa a. Pellentesque urna pharetra, quis maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque imperdiet montes. Mauris massa elit pretium elementum eget tortor quis. Semper interdum lectus odio diam.
        </p>
        <p class="fs-lg mb-3">
          Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero id. Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis suspendisse enim blandit massa. Cursus augue dui mattis morbi velit.
        </p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Dolor laoreet fermentum lectus praesent aenean</h2>
        <p class="fs-lg pb-4 pb-xl-5">
          Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam laoreet eget id sapien a pharetra, ornare diam dignissim. Lorem amet nisl, enim mi aenean mauris. Porta nisl a ultrices ut libero id. Gravida a mi neque, tristique justo, et pharetra. Laoreet nulla est nulla cras ac arcu sed mattis tristique. Morbi convallis suspendisse enim blandit massa. Cursus augue dui mattis morbi velit.
        </p>
        <figure class="figure">
          <img class="figure-img rounded-5 mb-3" :src="singleImage" alt="Img" />
          <figcaption class="figure-caption">Image source tristique justo et pharetra</figcaption>
        </figure>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Cursus augue dui mattis morbi velit</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          Proin non congue sem, sed tristique ante. Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla, quis tempor sapien neque at nisl. Aliquam eu nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum elementum sit amet. Vivamus non ante nisl. Nunc faucibus velit at eros mollis semper. Curabitur aliquam eros tellus, nec facilisis nisl finibus sit amet. Ut et dolor nec lorem gravida elementum.
        </p>
        <b-card no-body class="border-0 bg-secondary mb-3">
          <b-card-body>
            <figure>
              <blockquote class="blockquote">
                <p>Ut pellentesque bibendum dignissim a molestie ultrices diam ut vel neque tincidunt eget sed ut quis sit semper nunc at etiam lacinia quam laoreet eget id sapien a pharetra, ornare diam dignissim neque tincidunt.</p>
              </blockquote>
              <figcaption class="blockquote-footer">Darlene Robertson</figcaption>
            </figure>
          </b-card-body>
        </b-card>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Lorem ipsum dolor sit amet consectetur</h2>
        <p class="fs-lg">Ut pellentesque bibendum dignissim a molestie. Ultrices diam ut vel neque tincidunt eget. Sed ut quis sit semper nunc at etiam lacinia. Quam laoreet eget id sapien a pharetra, ornare diam dignissim.</p>
        <ul>
          <li v-for="item in list" :key="item" class="mb-1">{{ item }}</li>
        </ul>
        <p class="fs-lg">Donec diam neque, efficitur vitae ante a, eleifend placerat est. Phasellus dapibus scelerisque diam, eu rhoncus lorem vulputate lobortis. Praesent pulvinar venenatis mauris, eget fringilla sem.</p>

        <!-- Tags -->
        <!-- <div class="d-flex flex-wrap pb-5 pt-3 pt-md-4 pt-xl-5 mt-xl-n2">
          <h3 class="h6 py-1 mb-0 me-4">Relevant tags:</h3>
          <a v-for="item in tag" :key="item" class="nav-link fs-sm py-1 px-0 me-3" href="#"> <span class="text-primary">#</span>{{ item }} </a>
        </div> -->

        <!-- Author widget -->
        <!-- <div class="border-top py-4">
          <div class="d-flex align-items-start py-2">
            <img class="d-block rounded-circle mb-3" :src="avatar04" width="56" alt="img" />
            <div class="d-md-flex w-100 ps-4">
              <div style="max-width: 26rem">
                <h3 class="h5 mb-2">Darlene Robertson</h3>
                <p class="fs-sm mb-0">Porta nisl a ultrices ut libero id. Gravida mi neque, tristique justo, et pharetra laoreet nulla est nulla cras ac arcu sed mattis tristique convallis suspen enim blandit massa cursus augue dui mattis morbi velit semper nunc at etiam lacinia.</p>
              </div>
              <div class="pt-4 pt-md-0 ps-md-4 ms-md-auto">
                <h3 class="h5">Share post:</h3>
                <div class="d-flex">
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram" aria-label="Instagram">
                    <i class="ai-instagram"></i>
                  </a>
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook" aria-label="Facebook">
                    <i class="ai-facebook"></i>
                  </a>
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Telegram" aria-label="Telegram">
                    <i class="ai-telegram fs-sm"></i>
                  </a>
                  <a class="nav-link p-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="X" aria-label="X">
                    <i class="ai-x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { list, tag } from '@/views/pages/Blog/SingleV2/data'

import singleImage from '@/assets/img/blog/single/image.jpg'
import avatar04 from '@/assets/img/avatar/04.jpg'
</script>
