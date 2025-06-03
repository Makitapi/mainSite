<template>
  <div class="card-hover pb-3 mb-lg-2 mb-xl-3">
    <div class="position-relative">
      <img :src="member.image" alt="" />

      <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
        <a v-for="(item, idx) in member.socialMedia" :key="idx" href="#" class="btn btn-light btn-icon btn-sm rounded-circle mx-2" :class="`btn-${item.name}`" :aria-label="item.name">
          <i :class="item.icon"></i>
        </a>
      </div>
    </div>
    <div class="border-bottom pt-4 pb-3">
      <h3 class="h4 mb-2">{{ member.name }}</h3>
      <span class="fs-lg text-body-secondary">{{ member.designation }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { MemberType } from '@/views/landings/CreativeAgency/types'

defineProps({
  member: {
    type: Object as PropType<MemberType>,
    required: true
  }
})
</script>
