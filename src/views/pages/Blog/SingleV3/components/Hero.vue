<template>
  <b-container class="pt-5 mt-5">
    <BreadcrumbTwo subtitle="Single post v.3" title="Blog" :class="'pb-lg-4 pb-2'" />

    <b-row>
      <b-col lg="9" xl="8" class="pe-lg-4 pe-xl-0">
        <h1 class="pb-2 pb-lg-3">How to look for inspiration for new goals in life and remember to give yourself a break?</h1>
        <div class="d-flex flex-wrap align-items-center justify-content-between border-bottom mb-4">
          <div class="d-flex align-items-center mb-4 me-4">
            <span class="fs-sm me-2">By:</span>
            <a class="nav-link position-relative fw-semibold p-0" href="#author" data-scroll data-scroll-offset="80">
              Darlene Robertson
              <span class="d-block position-absolute start-0 bottom-0 w-100" style="background-color: currentColor; height: 1px"></span>
            </a>
          </div>
          <div class="d-flex align-items-center mb-4">
            <span class="fs-sm me-2">Share post:</span>
            <div class="d-flex">
              <a v-for="(icon, idx) in socialICon" :key="icon" class="nav-link p-2" :class="idx == socialICon.length - 1 ? '' : 'me-2'" href="#" data-bs-toggle="tooltip" v-b-tooltip.hover.top :title="icon" :aria-label="icon">
                <i :class="`ai-${icon.toLocaleLowerCase()}`"></i>
              </a>
            </div>
          </div>
        </div>

        <p class="fs-lg pt-2 pt-sm-3">
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

        <div class="d-flex flex-wrap pb-5 pt-3 pt-md-4 pt-xl-5 mt-xl-n2">
          <h3 class="h6 py-1 mb-0 me-4">Relevant tags:</h3>
          <a v-for="tag in tags" :key="tag" class="nav-link fs-sm py-1 px-0 me-3" href="#"> <span class="text-primary">#</span>{{ tag }} </a>
        </div>

        <div class="border-top border-bottom py-4" id="author">
          <div class="d-flex align-items-start py-2">
            <img class="d-block rounded-circle mb-3" :src="avatar04" width="56" alt="Author img" />
            <div class="d-md-flex w-100 ps-4">
              <div style="max-width: 26rem">
                <h3 class="h5 mb-2">Darlene Robertson</h3>
                <p class="fs-sm mb-0">Porta nisl a ultrices ut libero id. Gravida mi neque, tristique justo, et pharetra laoreet nulla est nulla cras ac arcu sed mattis tristique convallis suspen enim blandit massa cursus augue dui mattis morbi velit semper nunc at etiam lacinia.</p>
              </div>
              <div class="pt-4 pt-md-0 ps-md-4 ms-md-auto">
                <h3 class="h5">Share post:</h3>
                <div class="d-flex">
                  <a v-for="(icon, idx) in socialICon" :key="icon" class="nav-link p-2" :class="idx == socialICon.length - 1 ? '' : 'me-2 '" href="#" data-bs-toggle="tooltip" v-b-tooltip.hover.top :title="icon" :aria-label="icon">
                    <i :class="`ai-${icon.toLocaleLowerCase()}`"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Comments />
      </b-col>

      <Sidebar />
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { tags, socialICon, list } from '@/views/pages/Blog/SingleV3/data'
import Comments from '@/views/pages/Blog/SingleV3/components/Comments.vue'
import Sidebar from '@/views/pages/Blog/SingleV3/components/Sidebar.vue'

import singleImage from '@/assets/img/blog/single/image.jpg'
import avatar04 from '@/assets/img/avatar/04.jpg'
import BreadcrumbTwo from '@/components/BreadcrumbTwo.vue'
</script>
