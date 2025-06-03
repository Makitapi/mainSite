<template>
  <b-breadcrumb class="pt-lg-3 pb-2" :class="props.class">
    <b-breadcrumb-item :to="{ name: 'landing' }">Home </b-breadcrumb-item>
    <b-breadcrumb-item active>{{ props.title }}</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  class: String
})
</script>
