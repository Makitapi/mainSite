<template>
  <section class="pt-5 mt-2 mt-xl-4 mt-xxl-5">
    <b-container class="pt-3 pt-sm-4 pt-lg-5 mt-xl-2 mt-xxl-3">
      <div class="fs-sm text-uppercase mb-3">Our team</div>
      <h2 class="display-6 pb-3 mb-lg-4">Team of professionals</h2>
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <b-col v-for="(member, idx) in teamMembers" :key="idx">
          <TeamMemberCard :member="member" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { teamMembers } from '@/views/pages/about/Agency/data'
import TeamMemberCard from '@/views/pages/about/Agency/components/TeamMemberCard.vue'
</script>
