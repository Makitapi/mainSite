<template>
  <div class="border-bottom py-4 py-lg-5">
    <b-row>
      <b-col lg="11" xl="10">
        <p class="text-dark lead mb-2 mb-lg-3-0 mb-xl-4 mb-xxl-3">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.</p>
        <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 g-sm-4 pt-4 pt-xxl-5 mb-2 mb-sm-3 pb-xxl-4">
          <b-col v-for="(list, idx) in listData" :key="idx">
            <h2 class="fs-base fw-normal text-body-secondary mb-2 mb-sm-3">{{ list.title }}</h2>
            <ul class="list-unstyled fs-lg fw-semibold text-dark mb-0">
              <li class="d-block py-1" v-for="(sublist, idx) in list.details" :key="idx">{{ sublist }}</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
  <div class="border-bottom py-md-2 py-lg-3 py-xl-4 py-xxl-5">
    <b-row class="my-5">
      <b-col md="10" lg="8" xl="7">
        <div v-for="(data, idx) in descriptionData" :key="idx">
          <h2 :class="idx == descriptionData.length - 3 ? 'h1 pb-2' : 'h1 pt-3 pt-sm-4 pt-xl-5 pb-2'">{{ data.title }}</h2>
          <p class="fs-lg" :class="idx == descriptionData.length - 1 ? 'mb-0' : ''">{{ data.content }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { listData, descriptionData } from '@/views/pages/Portfolio/Single-1/data'
</script>
