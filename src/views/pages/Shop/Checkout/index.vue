<template>
  <Navbar3 />
  <div>
    <div class="d-none d-lg-block bg-secondary position-fixed top-0 start-0 h-100" style="width: 52.5%"></div>

    <CheckoutForm />

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Navbar3 from '@/components/NavBar/NavBar3.vue'
import CheckoutForm from '@/views/pages/Shop/Checkout/components/CheckoutForm.vue'
import Footer from '@/views/pages/Shop/Checkout/components/Footer.vue'
</script>
