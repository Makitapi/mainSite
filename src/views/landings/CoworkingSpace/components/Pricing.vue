<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mb-3 mb-lg-4">Choose a convenient plan</h2>

    <b-row class="row-cols-3 flex-nowrap pb-3 overflow-auto">
      <b-col style="min-width: 19rem">
        <b-card no-body class="h-100 py-lg-4">
          <b-card-body class="w-100 mx-auto text-center" style="max-width: 23rem">
            <h3>Light</h3>
            <div class="display-2 text-primary">{{ currency }}8</div>
            <div class="mb-4">per day</div>
            <p class="mb-4 pb-4">Phasellus in hendrerit interdum lorem proin pretium dictum urna</p>
            <button class="btn btn-primary w-100" type="button">Get this plan now</button>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col style="min-width: 19rem">
        <b-card no-body class="border-primary bg-primary h-100 py-lg-4">
          <b-card-body class="w-100 mx-auto text-center" style="max-width: 23rem">
            <h3 class="text-light">Pro</h3>
            <div class="display-2 text-light">{{ currency }}97</div>
            <div class="text-light opacity-70 mb-4">per month</div>
            <p class="text-light opacity-70 mb-4 pb-4">Morbi et massa fames ac scelerisque sit commodo dignissim aucibus</p>
            <button class="btn btn-light w-100" type="button">Get this plan now</button>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col style="min-width: 19rem">
        <b-card no-body class="h-100 py-lg-4">
          <b-card-body class="w-100 mx-auto text-center" style="max-width: 23rem">
            <h3>Medium</h3>
            <div class="display-2 text-primary">{{ currency }}36</div>
            <div class="mb-4">per week</div>
            <p class="mb-4 pb-4">Enim aenean phasellus in hendrerit interdum lorem proin pretium</p>
            <button class="btn btn-primary w-100" type="button">Get this plan now</button>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { currency } from '@/helpers/constants'
</script>
