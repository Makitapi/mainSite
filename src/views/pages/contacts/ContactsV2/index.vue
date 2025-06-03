<template>
  <NavBar />
  <main class="page-wrapper">
    <b-container class="pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5">
      <Breadcrumb title="Contacts v.2" :class="'pb-lg-4 pb-2'" />
      <ContactForm />
    </b-container>
    <ContactDetails />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ContactForm from '@/views/pages/contacts/ContactsV2/components/ContactForm.vue'
import ContactDetails from '@/views/pages/contacts/ContactsV2/components/ContactDetails.vue'
import Footer from '@/views/pages/contacts/ContactsV2/components/Footer.vue'
</script>
