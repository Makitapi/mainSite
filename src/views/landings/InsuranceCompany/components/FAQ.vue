<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="py-2 py-sm-4 py-md-5 mt-lg-2">
      <b-col sm="9" md="4" lg="5" class="mb-5 mb-md-0">
        <div class="position-relative mb-sm-2">
          <div class="position-absolute top-0" style="right: 37.26%">
            <img class="position-relative z-2 d-dark-mode-none" :src="staffLight" width="330" alt="Support staff" />
            <img class="position-relative z-2 d-none d-dark-mode-block" :src="staffDark" width="330" alt="Support staff" />
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none"></div>
            <div class="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block" style="background-color: #202327"></div>
          </div>
          <img :src="preview" style="-webkit-clip-path: url(#mask); clip-path: url(#mask)" alt="Img" />
          <svg width="0" height="0" viewBox="0 0 526 410" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(0.001901140684, 0.00243902439)">
                <path d="M0 392V119.598C0 109.648 8.0717 101.586 18.021 101.598L331.979 101.964C341.928 101.976 350 93.9133 350 83.964V18.3667C350 8.44183 358.033 0.389727 367.958 0.366699L507.958 0.0418617C517.916 0.0187578 526 8.08438 526 18.0418V392C526 401.941 517.941 410 508 410H18C8.05887 410 0 401.941 0 392Z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 class="h5 mt-4">Don't see the answer you need?</h3>
        <p class="mb-sm-4">That's ok. Just drop a message and we will get back to you ASAP.</p>
        <a class="btn btn-primary" href="#">Contact us</a>
      </b-col>
      <b-col md="8" lg="7">
        <div class="ps-md-3 ps-lg-4 ps-xl-5">
          <h2 class="h1 pb-sm-1 pb-md-3">Common Questions &amp; Answers</h2>
          <b-accordion>
            <b-accordion-item title="How often should I review and update my insurance coverage?" class="bg-transparent mb-n1 mb-xl-1" body-class="fs-sm" button-class="fs-6 py-3 px-0" visible>
              <p>It's essential to periodically review and update your insurance coverage to ensure it meets your current needs. Here are some guidelines for different types of insurance:</p>
              <ul class="mb-0">
                <li><strong>Car tnsurance:</strong> Review your policy annually or when you experience significant life changes, such as buying a new vehicle, moving to a new location, or a change in your driving habits.</li>
                <li><strong>Health insurance:</strong> Review your health insurance coverage during your open enrollment period or after major life events like marriage, having a child, or experiencing a change in income.Health Insurance: Review your health insurance coverage during your open enrollment period or after major life events like marriage, having a child, or experiencing a change in income.</li>
                <li><strong>Life Insurance:</strong> Review your life insurance coverage whenever you have a significant life change, such as marriage, the birth of a child, or when you have new financial responsibilities.</li>
              </ul>
            </b-accordion-item>
            <b-accordion-item title="How can I request a quote for insurance coverage?" class="bg-transparent mb-n1 mb-xl-1" body-class="fs-sm" button-class="fs-6 py-3 px-0">
              <p>To request a quote for insurance coverage, you have a few options:</p>
              <ul class="mb-0">
                <li>You can contact our customer service team by phone, and they will guide you through the process and provide a personalized quote.</li>
                <li>You can visit our website and use our online quote request form. Simply provide the required information, and you'll receive a quote shortly.</li>
                <li>Visit one of our local branches and speak with an agent who can assist you in person.</li>
              </ul>
            </b-accordion-item>
            <b-accordion-item title="What should I do in case of medical emergency?" class="bg-transparent mb-n1 mb-xl-1" body-class="fs-sm" button-class="fs-6 py-3 px-0">
              <p>In the event of a medical emergency during your stay, you must contact emergency assistance listed on your health insurance card before seeking care. In the event that you cannot contact emergency assistance prior to receiving treatments, you can ask someone to call for you, or call as soon as it is possible.</p>
              <p class="mb-0">Go to the nearest medical facility or hospital as soon as possible if it's safe to do so. Ensure you receive the necessary medical care without delay. After ensuring your safety and receiving initial medical care, please contact our 24/7 emergency hotline at + 1 526 220 0444. Our dedicated team is here to assist you during your medical emergency.</p>
            </b-accordion-item>
            <b-accordion-item title="What factors influence the cost of my insurance premium?" class="bg-transparent mb-n1 mb-xl-1" body-class="fs-sm" button-class="fs-6 py-3 px-0">
              <p>The cost of your insurance premium can be influenced by several factors, including but not limited to:</p>
              <ul>
                <li>The type of insurance coverage you need.</li>
                <li>Your driving history (for auto insurance).</li>
                <li>Your health status (for health insurance).</li>
                <li>The coverage limits and deductibles you choose.</li>
                <li>Any additional coverage or endorsements you add to your policy.</li>
                <li>Your credit score (in some cases).</li>
              </ul>
              <p class="mb-0">Keep in mind that the specific factors that affect your premium may vary depending on the type of insurance you're looking to purchase.</p>
            </b-accordion-item>
          </b-accordion>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import staffLight from '@/assets/img/landing/insurance/faq/staff-light.png'
import staffDark from '@/assets/img/landing/insurance/faq/staff-dark.png'
import preview from '@/assets/img/landing/insurance/faq/preview.jpg'
</script>
