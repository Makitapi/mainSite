<template>
  <b-container class="pt-2 pt-xxl-3 pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <b-row class="pb-md-3">
      <b-col md="4" class="mb-2 mb-sm-3 mb-md-4 pb-2" style="margin-top: -120px">
        <div class="position-sticky top-0" style="padding-top: 120px">
          <h2 class="display-3 mb-0 mb-md-3 pb-lg-3">Meat our creative team</h2>
          <a class="btn btn-lg btn-link px-0" href="#">
            View all 16 members
            <i class="ai-arrow-right ms-2"></i>
          </a>
        </div>
      </b-col>
      <b-col md="8">
        <b-row class="row-cols-1 row-cols-sm-2 g-4">
          <b-col v-for="(member, idx) in teamData" :key="idx">
            <TeamMemberCard :member="member" :class="idx % 2 === 1 ? 'ms-sm-1 ps-xl-3' : 'me-sm-1 pe-xl-3'" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script setup lang="ts">
import TeamMemberCard from '@/views/landings/CreativeAgency/components/TeamMemberCard.vue'
import { teamData } from '@/views/landings/CreativeAgency/data'
</script>
