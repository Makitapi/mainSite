<template>
  <b-container class="py-5 my-md-2 my-lg-4 my-xl-5">
    <Simplebar class="overflow-auto" data-simplebar>
      <b-row class="row-cols-4 g-0 py-3 my-sm-3" style="min-width: 600px">
        <b-col>
          <img class="d-block mx-auto" :src="award1" width="226" alt="Award" />
        </b-col>
        <b-col>
          <img class="d-block mx-auto" :src="award2" width="226" alt="Award" />
        </b-col>
        <b-col>
          <img class="d-block d-dark-mode-none mx-auto" :src="award3Light" width="226" alt="Award" />
          <img class="d-none d-dark-mode-block mx-auto" :src="award3Dark" width="226" alt="Award" />
        </b-col>
        <b-col>
          <img class="d-block mx-auto" :src="award4" width="226" alt="Award" />
        </b-col>
      </b-row>
    </Simplebar>
  </b-container>
</template>

<script setup lang="ts">
import Simplebar from 'simplebar-vue'

import award1 from '@/assets/img/landing/shop-2/awards/01.png'
import award2 from '@/assets/img/landing/shop-2/awards/02.png'
import award3Light from '@/assets/img/landing/shop-2/awards/03-light.png'
import award3Dark from '@/assets/img/landing/shop-2/awards/03-dark.png'
import award4 from '@/assets/img/landing/shop-2/awards/04.png'
</script>
