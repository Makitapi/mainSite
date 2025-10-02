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
          Modern intralogistics isn't just about automation or robotic picking. It's about having clean, real-time, high-visibility data that powers every internal movement of goods. From inventory accuracy to faster fulfillment, it all starts with knowing what's happening inside your four walls.
        </p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Faster Fulfillment Through Real-Time Data</h2>
        <p class="fs-lg pb-4 pb-xl-5">
          Speed begins with visibility. Accurate, real-time data on inventory location, order priority, and picker availability enables faster decision-making and smoother order flows. When systems are fed with clean, current data, you can ship more orders faster—without cutting corners or introducing costly errors.
        </p>
        <figure class="figure">
          <img class="figure-img rounded-5 mb-3" :src="Image1" alt="Img" />
          <!-- <figcaption class="figure-caption">Data rules</figcaption> -->
        </figure>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Personalization Requires Precise Data</h2>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          Whether it's gift wrapping, special notes, or custom bundling, personalized orders introduce complexity. Handling them efficiently requires structured data on customer preferences, item configurations, and order history. Clean data ensures flexibility without bottlenecks.
        </p>
        <b-card no-body class="border-0 bg-secondary mb-3">
          <b-card-body>
            <figure>
              <blockquote class="blockquote">
                <p>If we have data, let's look at data. If all we have are opinions, let's go with mine.</p>
              </blockquote>
              <figcaption class="blockquote-footer">Jim Barksdale (Netscape CEO)</figcaption>
            </figure>
          </b-card-body>
        </b-card>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Scaling Order Volume Without Chaos</h2>
        <p class="fs-lg">High order volume is only a problem when data is disorganized. Scalable intralogistics starts with scalable data architecture—with standardized processes, real-time syncing, and system interoperability. This allows you to process a growing number of orders while maintaining speed and accuracy.</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Cost Reduction Through Automation and Accurate Inputs</h2>
        <p class="fs-lg">Automation only works when the data that drives it is reliable. Robots can't make decisions if item locations are incorrect or demand signals are outdated. Clean data ensures automation is effective, reducing manual work and preventing errors that cost time and money.</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Accuracy That Builds Trust</h2>
        <p class="fs-lg">Nothing undermines customer trust faster than fulfillment mistakes. Technologies like RFID and barcode scanning help—but only when backed by systems that store and process data accurately. Visibility into every movement ensures orders are picked and packed exactly as intended.</p>
        <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Inventory Optimization Starts With Data</h2>
        <p class="fs-lg">Inventory management isn't just about counting what's on the shelf—it's about forecasting, positioning, and replenishing the right stock at the right time. Clean, timely data enables dynamic decision-making that reduces both overstock and stockouts.</p>
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
import coverImg from '@/assets/img/blog/post3.jpeg'
import Image1 from '@/assets/img/blog/data.jpg'

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
const index = ref(2)

</script>
