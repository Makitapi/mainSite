<template>
  <b-breadcrumb class="pt-lg-3" aria-label="breadcrumb" :class="props.class">
    <b-breadcrumb-item :to="{ name: 'landing' }">Home </b-breadcrumb-item>
    <b-breadcrumb-item>{{ props.title }}</b-breadcrumb-item>
    <b-breadcrumb-item active aria-current="page">{{ props.subtitle }}</b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String,
  class: String
})
</script>
