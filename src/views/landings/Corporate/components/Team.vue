<template>
  <b-container class="pt-5 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
    <b-row class="g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2">
      <b-col lg="4" class="d-flex flex-column">
        <h2 class="display-2 d-none d-lg-block">Meet our team</h2>
        <h2 class="h1 d-lg-none text-center mb-0">Meet our team</h2>
        <div class="d-none d-lg-flex mt-auto mb-n3">
          <div data-aos="fade-left" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
            <svg class="text-info" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="84.5" cy="84.5" r="84.5"></circle>
            </svg>
          </div>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
            <svg class="text-primary" width="169" height="169" viewBox="0 0 169 169" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169 84.5C169 101.213 164.044 117.55 154.759 131.446C145.474 145.342 132.277 156.172 116.837 162.568C101.396 168.963 84.4063 170.637 68.0149 167.376C51.6235 164.116 36.567 156.068 24.7495 144.251C12.9319 132.433 4.88409 117.377 1.62364 100.985C-1.63681 84.5937 0.0365658 67.6036 6.43217 52.1632C12.8278 36.7229 23.6583 23.5258 37.5543 14.2408C51.4503 4.95583 67.7875 -6.12546e-06 84.5 -7.38722e-06L84.5 84.5L169 84.5Z"></path>
            </svg>
          </div>
        </div>
      </b-col>

      <b-col sm="6" md="4" v-for="(member, idx) in teamData.slice(0, 3)" :key="idx">
        <TeamMemberCard :member="member" />
      </b-col>

      <b-col lg="4" class="d-none d-lg-flex flex-column justify-content-center text-center">
        <p class="lead px-3 mb-0">The main competencies of the team: find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia viverra arcu in rhoncus egestas lorem consequat sollicitudin.</p>
      </b-col>

      <b-col sm="6" md="4" v-for="(member, idx) in teamData.slice(3, teamData.length)" :key="idx">
        <TeamMemberCard :member="member" />
      </b-col>

      <b-col lg="4" class="d-flex flex-column justify-content-center text-center">
        <div class="mx-auto" style="max-width: 245px">
          <h3 class="h2 mb-4">Get to know our team better</h3>
          <a class="btn btn-outline-primary" href="#">About us</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/views/landings/Corporate/components/TeamMemberCard.vue'
import { teamData } from '@/views/landings/Corporate/data'
</script>
