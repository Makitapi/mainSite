<template>
  <main class="page-wrapper">
    <NavBar />

<b-container class="pt-5 my-5">
    <b-breadcrumb class="pt-lg-3" aria-label="breadcrumb">
      <b-breadcrumb-item :to="{ name: 'landing' }">{{ $t('nav.home') }}</b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'Blog' }">{{ $t('blog.breadcrumbTitle') }}</b-breadcrumb-item>
      <b-breadcrumb-item>{{ $t('blog.posts.post6.title') }}</b-breadcrumb-item>
    </b-breadcrumb>

      <!-- Post title-->
      <h1 class="display-5 text-center pb-2 pb-lg-3">{{ $t('blog.posts.post6.title', 'Digital Kanban with RFID Integration') }}</h1>
      <h4 class="text-center">{{ $t('blog.posts.post6.subtitle', 'Say Goodbye to Manual Tracking Forever') }}</h4>
  </b-container>
  <Jarallax custom-class="jarallax" :options="{ speed: 0.65 }">
    <div class="jarallax-img bg-position-center-y" :style="{ backgroundImage: `url('${coverImg}')` }"></div>
    <div class="d-none d-xxl-block" style="height: 760px"></div>
    <div class="d-none d-xl-block d-xxl-none" style="height: 650px"></div>
    <div class="d-none d-md-block d-lg-none" style="height: 400px"></div>
    <div class="d-md-none" style="height: 300px"></div>
  </Jarallax>

  <b-container class="pt-5 mt-md-2 mt-lg-3 mt-xl-4">
    <b-row class="justify-content-center pt-xxl-2">
      <b-col lg="9" xl="8" class="pe-lg-4 pe-xl-0">
        <p class="fs-lg">{{ $t('blog.posts.post6.description', 'Traditional Kanban methods work... until they don\'t. Physical cards get lost, information lags, and coordination requires constant communication. RFID-enabled digital Kanban transforms this outdated system into an automated, intelligent operation that updates itself and alerts you only when strategic intervention is needed.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.automaticUpdates.title', 'Automatic Progress Updates That Save You Hours Daily') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.automaticUpdates.text', 'Forget asking "What\'s the status?" ever again. RFID-enabled digital Kanban boards update themselves. When materials move through your facility, RFID readers automatically advance cards from "Ordered" to "Received" to "Deployed." Instead of spending 2-3 hours daily collecting status updates, you get real-time visibility that lets you focus on strategic decisions rather than data gathering. Your morning meetings become 10-minute strategic sessions instead of hour-long status marathons.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.bottleneckPrediction.title', 'Bottlenecks Identified Before You Even Know They Exist') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.bottleneckPrediction.text', 'Here\'s what traditional tracking can\'t do: predict problems. Digital Kanban with RFID integration analyzes material flow patterns and flags potential bottlenecks before they impact operations. The system alerts you when Station 3 typically runs short on components based on consumption patterns, giving you time to preemptively address issues. You go from fighting fires to preventing them entirely.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.transparency.title', 'Transparency That Eliminates the "Blame Game"') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.transparency.text', 'RFID integration creates an unalterable digital trail of exactly when items moved, where they went, and who handled them. No more "I thought someone else was handling that" or "The parts never arrived." Your digital Kanban board shows definitive accountability, reducing finger-pointing and increasing problem-solving. Your team spends energy on solutions instead of excuses.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.automaticCommunication.title', 'Communication That Happens Without You') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.automaticCommunication.text', 'Digital Kanban systems automatically notify relevant team members when their action items are ready. When RFID readers detect that incoming materials have arrived, the system instantly alerts the team responsible for the next step. You\'re no longer the communication hub that everything flows through—the system handles coordination while you focus on optimization.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.processImprovement.title', 'Process Improvement That Writes Itself') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.processImprovement.text', 'RFID data integration provides analytics that manual systems simply cannot match. You\'ll discover that Route A actually takes 15% longer than Route B, or that certain suppliers consistently deliver late on Thursdays. These insights drive improvement initiatives with hard data backing your decisions.') }}</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">{{ $t('blog.posts.post6.content.bottomLine.title', 'The Bottom Line Benefit') }}</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post6.content.bottomLine.text', 'Digital Kanban with RFID integration transforms you from a status-chasing supervisor into a strategic leader. You reclaim 15-20 hours weekly previously spent on manual tracking, while gaining predictive insights that prevent problems before they cost money. The question isnt whether you can afford this technology—its whether you can afford to keep managing the hard way.') }}</p>
        <p class="fs-lg text-end ">{{ $t('blog.posts.post6.content.signOff.prefix', 'So:') }} <b>Maki<span class="ms-0" style="color: #0051a3">tapi</span></b> | {{ $t('blog.posts.post6.date', 'December 2025') }}</p>
      </b-col>
    </b-row>
  </b-container>

  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'

import Jarallax from '@/components/Jarallax.vue'
import coverImg from '@/assets/img/blog/post6.jpg'

import Footer from '@/views/Makitapi/1Landing/components/Footer.vue'

import { blogPostList } from '@/views/Makitapi/3Blog/data'

import { ref } from 'vue'
const selected = ref(null)
const option = [
  { value: null, text: 6 },
  { value: 9, text: 9 },
  { value: 12, text: 12 },
  { value: 24, text: 24 }
]
const currentPage = ref(1)
const rows = ref(100)
const index = ref(4)

</script>
