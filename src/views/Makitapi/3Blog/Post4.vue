<template>
  <main class="page-wrapper">
    <NavBar />

  <b-container class="pt-5 my-5">
    <b-breadcrumb class="pt-lg-3" aria-label="breadcrumb">
      <b-breadcrumb-item :to="{ name: 'landing' }">Home</b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'Blog' }"> Blog </b-breadcrumb-item>
      <b-breadcrumb-item>{{ blogPostList[index].title }}</b-breadcrumb-item>
    </b-breadcrumb>

      <!-- Post title-->
      <h1 class="display-5 text-center pb-2 pb-lg-3">{{ blogPostList[index].title }}</h1>
      <h4 class="text-center">{{ blogPostList[index].subtitle }}</h4>
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
        <p class="fs-lg">{{ blogPostList[index].firstLine }}</p>
        <p class="fs-lg mb-3">
          Every decision in the supply chain is fueled by data. How many units are on hand? Where are they located right now? How many more will I need next week, and when should I place the next order? These are not just logistics questions—they're data questions. And getting accurate, timely answers to them is key to operating an efficient and responsive supply chain.
        </p>
        <p class="fs-lg pb-4 pb-xl-5">
          This is where analytics and AI come in. The need for fast, flexible reporting and data interpretation has never been greater. Traditional reporting might require days of work from analysts to pull, clean, and visualize data. But with AI, especially when integrated with natural language processing, you can now simply ask a question—like "How much stock will we have in California by Friday?"—and get a clear, contextual answer in seconds. AI can turn raw data into actionable insight almost instantly.
        </p>
        <figure class="figure">
          <img class="figure-img rounded-5 mb-3" :src="singleImage" alt="Img" />
          <figcaption class="figure-caption">Data rules</figcaption>
        </figure>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          However, there's a catch. While having a good AI engine is important, it's not the most critical part of the system. The real linchpin? Clean data.
        </p>
        <p class="fs-lg">
          AI is only as good as the data it consumes. If the data is incomplete, outdated, or inaccurate, even the most advanced AI will give poor recommendations or misleading reports. For automation and AI-driven decision-making to reach the gold standard of 99%+ accuracy, businesses must invest in collecting clean, timely, and relevant data across all touchpoints in the supply chain.
        </p>
        <p class="fs-lg">
          This includes real-time inventory tracking, standardized data formats, robust data validation processes, and seamless system integrations. Only then can AI operate at its full potential—detecting trends, forecasting demand, and enabling smart, autonomous decisions that were once manual and error-prone.
        </p>
        <p class="fs-lg">
          In the end, the future of supply chain isn't just faster delivery or better routing. It's about turning a complex web of moving parts into a system that sees clearly and responds intelligently. And that starts with the data.
        </p>
        <p class="fs-lg text-end">So: <b>Maki<span class="ms-0" style="color: #0051a3">tapi</span></b> | {{ blogPostList[index].date }}</p>
      </b-col>
    </b-row>
  </b-container>
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Jarallax from '@/components/Jarallax.vue'
import coverImg from '@/assets/img/blog/Post1.jpeg'
import singleImage from '@/assets/img/blog/post4.jpg'
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
const index = ref(3)
</script>
