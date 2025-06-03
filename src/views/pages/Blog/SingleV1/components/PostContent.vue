<template>
  <b-container class="py-5 my-md-2 my-lg-3 my-xl-4">
    <b-row class="pt-xxl-2">
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

        <div class="d-flex flex-wrap pt-3 pt-md-4 pt-xl-5 mt-xl-n2">
          <h3 class="h6 py-1 mb-0 me-4">Relevant tags:</h3>
          <a v-for="item in tag" :key="item" class="nav-link fs-sm py-1 px-0 me-3" href="#"> <span class="text-primary">#</span>{{ item }} </a>
        </div>
      </b-col>

      <aside class="col-lg-3 offset-xl-1 pt-4 pt-lg-0" style="margin-top: -7rem">
        <div class="position-sticky top-0 mt-2 mt-md-3 mt-lg-0" style="padding-top: 7rem">
          <h4 class="mb-4">Share this post:</h4>
          <div class="d-flex mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
            <a v-for="icon in socialICon" :key="icon" class="btn btn-outline-secondary btn-icon btn-sm rounded-circle mt-3 ms-3" :class="`btn-${icon}`" href="#" :aria-label="`${icon}`">
              <i :class="`ai-${icon}`"></i>
            </a>
          </div>

          <h4 class="pt-xl-1 mb-4">Relevant topics:</h4>
          <div class="d-flex flex-wrap mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
            <a v-for="btn in topics" :key="btn" class="btn btn-outline-secondary rounded-pill mt-3 ms-3" href="#">{{ btn }}</a>
          </div>

          <h4 class="pt-xl-1 mb-4">Trending posts:</h4>
          <ul class="list-unstyled mb-0">
            <li v-for="(post, idx) in trendingPost" :key="idx" :class="idx == trendingPost.length - 1 ? '' : 'border-bottom pb-3 mb-3'">
              <span class="h6 mb-0">
                <router-link :to="{ name: post.link.name }">{{ post.title }}</router-link>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { trendingPost, topics, socialICon, list, tag } from '@/views/pages/Blog/SingleV1/data'

import singleImage from '@/assets/img/blog/single/image.jpg'
</script>
