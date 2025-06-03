<template>
  <main class="page-wrapper">
    <NavBar />
    <ContactDetails />
    <Map />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import ContactDetails from '@/views/pages/contacts/ContactsV3/components/ContactDetails.vue'
import Footer from '@/views/pages/contacts/ContactsV3/components/Footer.vue'
import Map from '@/views/pages/contacts/ContactsV3/components/Map.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
</script>
