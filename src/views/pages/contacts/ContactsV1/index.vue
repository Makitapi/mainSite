<template>
  <NavBar />
  <main class="page-wrapper">
    <ContactDetails />
    <ContactForm />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'

import ContactDetails from '@/views/pages/contacts/ContactsV1/components/ContactDetails.vue'
import ContactForm from '@/views/pages/contacts/ContactsV1/components/ContactForm.vue'
import Footer from '@/views/pages/contacts/ContactsV1/components/Footer.vue'
</script>
