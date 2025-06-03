<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3">Our classes</h2>
    <p class="text-center pb-3 mb-3 mb-lg-4">Whether you are a beginner or an experienced yoga</p>

    <b-tabs align="center" navItemClass="mb-0" nav-class="flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-2 mb-3 mb-lg-4">
      <b-tab :title="yogaClass.name" v-for="(yogaClass, idx) in yogaClasses" :key="idx">
        <b-row class="align-items-lg-center">
          <b-col md="6" class="pb-4 pb-md-0 mb-2 mb-md-0">
            <img class="rounded-5" :src="yogaClass.image" alt="Beginners" />
          </b-col>
          <b-col md="6" lg="5" xl="4" class="offset-lg-1">
            <div class="ps-md-4 ps-lg-0">
              <h2 class="mb-xl-4">{{ yogaClass.name }}</h2>
              <p class="pb-3 mb-3 mb-xl-4">{{ yogaClass.description }}</p>
              <b-row class="row-cols-2 g-4 pb-2 pb-xl-0 mb-4 mb-xl-5">
                <b-col v-for="(service, idx) in yogaClass.services" :key="idx">
                  <i :class="service.icon" class="d-block h2 text-primary fw-normal pb-2 mb-1"></i>
                  <h3 class="h6 mb-2">{{ service.title }}</h3>
                  <p class="fs-sm mb-0">{{ service.description }}</p>
                </b-col>
              </b-row>
              <b-button class="w-100 w-sm-auto" variant="primary">Try a free lesson</b-button>
            </div>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script lang="ts" setup>
import { yogaClasses } from '@/views/landings/YogaStudio/data'
</script>
