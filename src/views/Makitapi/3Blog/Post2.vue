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
    <div class="d-none d-lg-block d-xl-none" style="height: 500px"></div>
    <div class="d-none d-md-block d-lg-none" style="height: 400px"></div>
    <div class="d-md-none" style="height: 300px"></div>
  </Jarallax>

  <b-container class="pt-5 mt-md-2 mt-lg-3 mt-xl-4">
    <b-row class="justify-content-center pt-xxl-2">
      <b-col lg="9" xl="8" class="pe-lg-4 pe-xl-0">
        <p class="fs-lg">{{ blogPostList[index].firstLine }}</p>
        <p class="fs-lg mb-3">
          This mindset—valuing speed over accuracy—is tempting, especially when short-term wins are on the line. You meet a deadline, satisfy a customer (for now), and keep KPIs looking good. But the truth is, without accurate data and processes, those wins are fragile. The cost of errors in the supply chain isn't always immediate, but it always adds up.
        </p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Errors propagate and compond</h2>
        <p class="fs-lg pb-4 pb-xl-5">
          When accuracy is sacrificed, errors begin to propagate throughout the value chain. Inventory gets miscounted, demand forecasts go off-track, shipments are misrouted, and customer orders are delayed or wrong. What’s worse, these errors often remain hidden until they snowball into bigger issues—stockouts, missed revenue, reputational hits, or expensive last-minute fixes.
        </p>
        <!-- <figure class="figure">
          <img class="figure-img rounded-5 mb-3" :src="singleImage" alt="Img" />
          <figcaption class="figure-caption">Data rules</figcaption>
        </figure> -->
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          It’s a classic case of “measure twice, cut once.” In modern supply chains, data accuracy is the new precision. Every inbound and outbound movement needs to be rooted in clean, timely, and verified information. That includes inventory counts, warehouse locations, shipping confirmations, and demand signals. If these inputs are even slightly off, downstream decisions compound the error.
        </p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Still, don't forget speed</h2>
        <p class="fs-lg">
          This doesn’t mean speed is unimportant. On the contrary—speed is still critical in a fast-moving market. But it must come after establishing a strong base of data accuracy. Once systems are calibrated for precision, automation and AI can kick in to deliver speed without sacrificing quality. With accurate data in place, decision-making accelerates, and real-time optimization becomes possible.
        </p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Aim for the long run</h2>
        <p class="fs-lg">
          In the long run, a supply chain built on accuracy is faster—not slower. Why? Because it doesn’t waste time fixing mistakes, dealing with returns, or smoothing over customer issues. It flows more predictably, adapts more confidently, and scales more reliably.
        </p>
        <p class="fs-lg">
          The next time you're tempted to push for faster output at the cost of precision, take a step back. The goal isn't just to move quickly—it's to move smartly.
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
import coverImg from '@/assets/img/blog/Post2.jpeg'

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
const index = ref(1)
</script>
