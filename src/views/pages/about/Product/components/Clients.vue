<template>
  <b-container class="pt-5 mt-xl-3 mt-xxl-4">
    <h2 class="h4 text-center pb-3 pb-md-4 mb-lg-4">Join 1000+ companies who's reached Around</h2>
    <b-row class="row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 justify-content-center align-items-center g-4">
      <b-col class="text-center" v-for="(client, idx) in clients" :key="idx">
        <router-link class="swap-image my-1 my-sm-2" :to="{ name: client.link?.name, params: client.link?.params }">
          <img class="swap-to" :src="client.image.swapTo" :width="client.image.width" alt="Foster" />
          <div class="swap-from">
            <img class="d-dark-mode-none" :src="client.image.dark" :width="client.image.width" alt="Foster" />
            <img class="d-none d-dark-mode-block" :src="client.image.light" :width="client.image.width" alt="Foster" />
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { clients } from '@/views/pages/about/Product/data'
</script>
