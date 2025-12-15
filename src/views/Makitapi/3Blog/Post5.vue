<template>
  <main class="page-wrapper">
    <NavBar />

<b-container class="pt-5 my-5">
    <b-breadcrumb class="pt-lg-3" aria-label="breadcrumb">
      <b-breadcrumb-item :to="{ name: 'landing' }">{{ $t('nav.home') }}</b-breadcrumb-item>
      <b-breadcrumb-item :to="{ name: 'Blog' }">{{ $t('blog.breadcrumbTitle') }}</b-breadcrumb-item>
      <b-breadcrumb-item>{{ $t('blog.posts.post5.title') }}</b-breadcrumb-item>
    </b-breadcrumb>

      <!-- Post title-->
      <h1 class="display-5 text-center pb-2 pb-lg-3">{{ $t('blog.posts.post5.title', 'Managing the Flow') }}</h1>
      <h4 class="text-center">{{ $t('blog.posts.post5.subtitle', 'How Data Powers Warehouse Management and Material Flow') }}</h4>
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
        <p class="fs-lg">{{ $t('blog.posts.post5.description', 'Warehouse management and material flow form the backbone of supply chain operations. These aren\'t just about moving boxes—they\'re about orchestrating complex networks of assets, labor, and technology to ensure the efficient, reliable movement of goods. But beneath this orchestration lies something even more critical: data.') }}</p>
        <p class="fs-lg mb-3">{{ $t('blog.posts.post5.content.materialFlow', 'Material flow covers the movement of goods within a warehouse: receiving, storage, picking, packing, and shipping. Efficient material flow is vital to avoiding bottlenecks and maintaining throughput. However, this process is only as good as the data that supports it.') }}</p>
        <p class="fs-lg pb-4 pb-xl-5">{{ $t('blog.posts.post5.content.realTimeData', 'By leveraging real-time data, warehouses can track every item\'s location, predict potential delays, and optimize routes for picking and packing. Advanced technologies like RFID, IoT sensors, and AI-powered systems feed continuous streams of data that help forecast bottlenecks and adjust workflows in real-time. With this data intelligence, warehouses can move goods faster, reduce unnecessary steps, and optimize space and resources for greater throughput.') }}</p>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">
          {{ $t('blog.posts.post5.content.dataManagementIntro', 'Efficient intralogistics doesn\'t just rely on physical processes—it\'s built on data management. Organizations can gain deep insights into internal logistics by harnessing big data analytics. Real-time data feeds offer visibility into a range of critical metrics, such as:') }}
          <ul class="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
            <li class="d-inline-flex align-items-center text-body text-nowrap pt-1 me-4">
              <i class="ai-check-alt text-primary fs-xl me-2"></i>
              {{ $t('blog.posts.post5.content.metrics.stockLevels', 'Accurate, up-to-the-minute tracking of stock levels and product movement.') }}
            </li>
          </ul>
          <ul class="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
            <li class="d-inline-flex align-items-center text-body text-nowrap pt-1">
              <i class="ai-check-alt text-primary fs-xl me-2"></i>
              {{ $t('blog.posts.post5.content.metrics.orderStatus', 'Visibility into which orders are pending, in progress, or completed.') }}
            </li>
          </ul>
          <ul class="list-inline d-xl-flex text-center text-lg-start mt-auto mb-0 mb-sm-2">
            <li class="d-inline-flex align-items-center text-body text-nowrap pt-1">
              <i class="ai-check-alt text-primary fs-xl me-2"></i>
              {{ $t('blog.posts.post5.content.metrics.equipmentHealth', 'Monitoring the health and efficiency of equipment like conveyors, forklifts, or automated systems.') }}
            </li>
          </ul>
          {{ $t('blog.posts.post5.content.insightsBenefits', 'By centralizing and analyzing this data, warehouses can optimize workflows, predict maintenance needs, and fine-tune operational efficiency. All of this adds to a true track and trace of the whole value chain.') }}
        </p>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post5.content.warehouseManagementIntro', 'Warehouse management is about coordinating all tasks within a facility, from inventory control to space optimization. Data is at the heart of effective warehouse management, enabling businesses to streamline every aspect of their operations.') }}</p>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post5.content.wmsImportance', 'With the help of a robust Warehouse Management System (WMS), organizations can automate routine tasks, optimize space utilization, and improve order fulfillment accuracy. Data insights allow for more precise inventory forecasting, intelligent allocation of labor, and smarter order prioritization.') }}</p>
        <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">{{ $t('blog.posts.post5.content.conclusion', 'This results in improved accuracy, faster fulfillment times, and the ability to quickly respond to changing customer demands.') }}</p>
        <p class="fs-lg text-end ">{{ $t('blog.posts.post5.content.signOff.prefix', 'So:') }} <b>Maki<span class="ms-0" style="color: #0051a3">tapi</span></b> | {{ $t('blog.posts.post5.date', 'November 2025') }}</p>
      </b-col>
    </b-row>
  </b-container>  

  </main>

  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'

import Jarallax from '@/components/Jarallax.vue'
import coverImg from '@/assets/img/blog/post5.jpg'

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
