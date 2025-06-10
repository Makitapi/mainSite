<template>
  <section class="bg-secondary py-5">
    <b-container class="py-lg-3 py-xl-4 py-xxl-5">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-sm-2 py-md-3 py-lg-4">
        <b-col v-for="(contact, idx) in contactDetails" :key="idx">
          <h2 class="h4 mb-4">{{ contact.title }}</h2>
          <ul class="list-unstyled mb-0">
            <li class="nav flex-nowrap mb-3">
              <i class="ai-phone lead text-primary me-2"></i>
              <a class="nav-link fw-normal p-0 mt-n1" href="tel:+178632256040">{{ contact.mobileNo }}</a>
            </li>
            <li class="nav flex-nowrap mb-3">
              <i class="ai-mail lead text-primary me-2"></i>
              <a class="nav-link fw-normal p-0 mt-n1" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </li>
            <li class="nav flex-nowrap mb-3">
              <i class="ai-map-pin lead text-primary me-2"></i>
              <router-link class="nav-link fw-normal p-0 mt-n1" to="#">{{ contact.address }}</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import { contactDetails } from '@/views/Makitapi/5Contact/data'
</script>
