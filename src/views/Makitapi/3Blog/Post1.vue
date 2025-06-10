<template>
  <main class="page-wrapper">
    <NavBar />
    <b-container class="pt-5 my-5">
      <Breadcrumb title="Blog" :class="'pb-lg-4'" />

      <!-- Post title-->
      <h1 class="display-5 text-center pb-2 pb-lg-3">{{ blogPostList[index].title }}</h1>
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
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Begin with a Pilot Program</h2>
          <p class="fs-lg mb-3">Start small by selecting a specific area or process within your facility. Choose a high-value use case such as tracking critical components, monitoring work-in-progress inventory, or managing returnable containers. A focused pilot allows you to test the technology, understand its limitations, and build internal expertise without overwhelming your operations team.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Conduct a Thorough Site Assessment</h2>
          <p class="fs-lg pb-4 pb-xl-5">Evaluate your facility's physical environment, as metal structures, liquid products, and electromagnetic interference can affect RFID performance. Map out areas where tags will be read, considering factors like conveyor speeds, package density, and reader placement requirements. This assessment will help determine the appropriate RFID frequency (LF, HF, or UHF) and tag types for your specific environment.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Choose the Right Technology Partners</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Select RFID hardware vendors and system integrators with proven experience in intralogistics applications. Look for partners who can provide comprehensive support including tag selection, reader configuration, and integration with your existing warehouse management system (WMS) or enterprise resource planning (ERP) software.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Develop Clear ROI Metrics</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Establish baseline measurements for key performance indicators such as inventory accuracy, labor hours spent on manual scanning, order fulfillment speed, and shrinkage rates. Define specific targets for improvement that will justify your RFID investment and guide system optimization efforts.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Plan for Change Management</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Prepare your workforce for the transition by providing comprehensive training on new processes and addressing concerns about technology adoption. Clearly communicate how RFID will enhance rather than replace their roles, emphasizing benefits like reduced manual data entry and improved inventory visibility.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Scale Gradually</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Once your pilot demonstrates success, expand the program systematically. Apply lessons learned to additional areas while maintaining focus on processes that deliver the highest return on investment. Consider integrating RFID data with analytics platforms to unlock advanced insights about operational efficiency and inventory optimization.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">Scale Gradually</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Work closely with your IT team to ensure RFID data flows seamlessly into existing systems. Real-time inventory updates and automated alerts require robust middleware solutions that can handle high-volume data streams while maintaining system reliability.</p>
          <h2 class="h4 mb-lg-4 pt-3 pt-md-4 pt-xl-5">--</h2>
          <p class="fs-lg pb-2 pb-lg-0 mb-4 mb-lg-5">Success with RFID in intralogistics comes from treating it as an operational transformation rather than just a technology upgrade. With proper planning and execution, RFID can significantly improve inventory accuracy, reduce labor costs, and enhance overall supply chain visibility.</p>
          <p class="fs-lg text-end">
            So: <b>Maki<span class="ms-0" style="color: #0051a3">tapi</span></b> | {{ blogPostList[index].date }}
          </p>
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
const index = ref(0)
</script>
