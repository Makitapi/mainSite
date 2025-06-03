<template>
  <div class="card-hover text-center" style="max-width: 306px">
    <img class="d-block rounded-5 mb-4" :src="member.image" alt="Img" />
    <h3 class="h5 mb-1">{{ member.name }}</h3>
    <p class="text-body-secondary mb-2">{{ member.designation }}</p>
    <div class="d-none d-lg-flex nav justify-content-center opacity-0">
      <router-link to="" v-for="(social, idx) in member.socialMedia" :key="idx" class="nav-link btn btn-icon btn-sm fs-sm fw-normal" :class="{ 'me-1': member.socialMedia.length - 1 != idx }">
        <i :class="social.icon"></i>
      </router-link>
    </div>
    <div class="d-lg-none nav justify-content-center">
      <template v-for="(social, idx) in member.socialMedia" :key="idx">
        <router-link to="" class="nav-link btn btn-icon btn-sm fs-sm fw-normal" :class="{ 'me-1': member.socialMedia.length - 1 != idx }">
          <i :class="social.icon"></i>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { MemberType } from '@/views/landings/MarketingAgency/types'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
