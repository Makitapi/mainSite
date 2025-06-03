<template>
  <main class="page-wrapper">
    <NavBar theme="dark" />

    <Hero />

    <Statistics />

    <TargetAudience />

    <Speakers />

    <Sponsors />

    <Schedule />

    <Tickets />

    <Testimonials />

    <Gallery />

    <Contact />
  </main>

  <Footer />
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Hero from '@/views/landings/ConferenceEvent/components/Hero.vue'
import Statistics from '@/views/landings/ConferenceEvent/components/Statistics.vue'
import TargetAudience from '@/views/landings/ConferenceEvent/components/TargetAudience.vue'
import Speakers from '@/views/landings/ConferenceEvent/components/Speakers.vue'
import Sponsors from '@/views/landings/ConferenceEvent/components/Sponsors.vue'
import Schedule from '@/views/landings/ConferenceEvent/components/Schedule.vue'
import Tickets from '@/views/landings/ConferenceEvent/components/Tickets.vue'
import Testimonials from '@/views/landings/ConferenceEvent/components/Testimonials.vue'
import Gallery from '@/views/landings/ConferenceEvent/components/Gallery.vue'
import Contact from '@/views/landings/ConferenceEvent/components/Contact.vue'
import Footer from '@/views/landings/ConferenceEvent/components/Footer.vue'
</script>
