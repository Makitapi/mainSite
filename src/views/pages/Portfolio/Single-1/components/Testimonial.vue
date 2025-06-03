<template>
  <div class="py-5 my-lg-2 my-xl-4 my-xxl-5">
    <h2 class="h1 pb-2 pb-lg-4 pt-sm-4 pt-lg-5 mt-n3 mt-sm-0">Testimonial from Vintage</h2>
    <b-card no-body class="border-0 bg-secondary mb-2 mb-sm-3 mb-md-4 mb-lg-5">
      <b-card-body class="px-lg-0 py-lg-5">
        <b-row class="py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
          <b-col md="4" lg="3" offset-lg="1" class="mb-3 mb-md-0">
            <img class="d-block rounded-circle mb-3" :src="avatar21Img" width="86" alt="Lilian Bocouse" />
            <h4 class="mb-0">Lilian Bocouse</h4>
            <p class="fs-lg text-body-secondary mb-0">Head of Marketing</p>
          </b-col>
          <b-col md="8" lg="7">
            <p class="text-dark lead mb-0">“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”</p>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import avatar21Img from '@/assets/img/avatar/21.jpg'
</script>
