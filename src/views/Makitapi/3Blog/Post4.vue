<template>
  <main class="page-wrapper">
    <NavBar />

  <b-container class="pt-5 my-5">
    <Breadcrumb title="Blog" :class="'pb-lg-4'" />

    <!-- Post title + post meta -->
    <h1 class="display-5 text-center pb-2 pb-lg-3">{{ blogPostList[index].title }}</h1>
    <!-- <div class="d-flex flex-wrap align-items-center justify-content-center mt-n2">
      <span class="text-body-secondary fs-sm fw-normal p-0 mt-2 me-3">
        12
        <i class="ai-share fs-lg ms-1"></i>
      </span>
      <a class="nav-link position-relative text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#comments" data-scroll data-scroll-offset="60">
        <span class="position-absolute w-100 h-100 top-0 start-0" data-bs-toggle="collapse" data-bs-target="#commentsCollapse"></span>
        4
        <i class="ai-message fs-lg ms-1"></i>
      </a>
      <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
      <span class="fs-sm text-body-secondary mt-2">16 hours ago</span>
      <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
      <a class="badge text-nav fs-xs border mt-2" href="#">Data</a>
    </div> -->
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
          This is where analytics and AI come in. The need for fast, flexible reporting and data interpretation has never been greater. Traditional reporting might require days of work from analysts to pull, clean, and visualize data. But with AI, especially when integrated with natural language processing, you can now simply ask a question—like “How much stock will we have in California by Friday?”—and get a clear, contextual answer in seconds. AI can turn raw data into actionable insight almost instantly.
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
          In the end, the future of supply chain isn't just faster delivery or better routing. It's about turning a complex web of moving parts into a system that sees clearly and responds intelligently. And that starts with the data.        </p>
        </p>
        <p class="fs-lg text-end ">So: <b>Maki<span class="ms-0" style="color: #0051a3">tapi</span></b> | {{ blogPostList[index].date }}</p>


        <!-- Author widget -->
        <!-- <div class="border-top py-4">
          <div class="d-flex align-items-start py-2">
            <img class="d-block rounded-circle mb-3" :src="avatar04" width="56" alt="img" />
            <div class="d-md-flex w-100 ps-4">
              <div style="max-width: 26rem">
                <h3 class="h5 mb-2">Darlene Robertson</h3>
                <p class="fs-sm mb-0">Porta nisl a ultrices ut libero id. Gravida mi neque, tristique justo, et pharetra laoreet nulla est nulla cras ac arcu sed mattis tristique convallis suspen enim blandit massa cursus augue dui mattis morbi velit semper nunc at etiam lacinia.</p>
              </div>
              <div class="pt-4 pt-md-0 ps-md-4 ms-md-auto">
                <h3 class="h5">Share post:</h3>
                <div class="d-flex">
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Instagram" aria-label="Instagram">
                    <i class="ai-instagram"></i>
                  </a>
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Facebook" aria-label="Facebook">
                    <i class="ai-facebook"></i>
                  </a>
                  <a class="nav-link p-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Telegram" aria-label="Telegram">
                    <i class="ai-telegram fs-sm"></i>
                  </a>
                  <a class="nav-link p-2" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="X" aria-label="X">
                    <i class="ai-x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </b-col>
    </b-row>
  </b-container>
  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'

import Jarallax from '@/components/Jarallax.vue'
import coverImg from '@/assets/img/blog/Post1.jpeg'


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
