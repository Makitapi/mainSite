<template>
  <b-container class="pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 pb-3 pb-lg-4">Next projects</h2>
    <b-row class="row-cols-1 row-cols-sm-2 align-items-end mb-2 pb-md-4">
      <b-col v-for="(project, idx) in nextProjectData" :key="idx">
        <div class="zoom-effect position-relative border-bottom pb-3" :class="idx % 2 === 1 && 'ms-auto'" :style="`max-width: ${project.width}px;`">
          <div class="zoom-effect-wrapper">
            <div class="zoom-effect-img">
              <img :src="project.image" alt="Img" />
            </div>
          </div>
          <div class="pt-4 mt-lg-2">
            <h2 class="h4 mb-2">
              <router-link class="stretched-link" :to="{ name: project.link.name }">{{ project.name }}</router-link>
            </h2>
            <div class="d-flex justify-content-between fs-lg text-body-secondary">
              <span>{{ project.category }}</span>
              <span>2021</span>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { nextProjectData } from '@/views/pages/Portfolio/Single-2/data'
</script>
