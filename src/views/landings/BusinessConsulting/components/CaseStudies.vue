<template>
  <b-container class="pt-2 pt-sm-4 pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">Recent case studies</h2>
    <b-row class="row-cols-1 row-cols-md-2 g-4">
      <b-col>
        <b-card no-body class="bg-primary border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
          <b-card-body class="position-relative z-2 pb-0">
            <h3 class="h4 card-title text-light">Robotics &amp; artificial intelligence</h3>
            <p class="card-text text-light opacity-80 pb-sm3 pb-md-4 mb-2">Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa.</p>
            <a class="btn btn-lg btn-link text-light px-0" href="#">
              Read case study
              <i class="ai-arrow-right ms-2"></i>
            </a>
          </b-card-body>
          <div class="d-flex justify-content-end mt-sm-n5 me-n4">
            <img :src="caseStudy1" width="347" alt="case-img" />
          </div>
        </b-card>
      </b-col>

      <b-col>
        <b-card no-body class="bg-primary bg-opacity-10 border-0 h-100 overflow-hidden pt-3 pt-xl-4 px-lg-3 px-xl-4">
          <b-card-body class="position-relative z-2 pb-0">
            <h3 class="h4 card-title text-primary">Toothbrush from natural eco materials</h3>
            <p class="card-text text-primary pb-sm3 pb-md-4 mb-2">Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa.</p>
            <a class="btn btn-lg btn-link px-0" href="#">
              Read case study
              <i class="ai-arrow-right ms-2"></i>
            </a>
          </b-card-body>
          <div class="d-flex justify-content-end mt-n4 mt-sm-n5 me-n4">
            <img :src="caseStudy2" width="291" alt="case-img" />
          </div>
        </b-card>
      </b-col>
    </b-row>

    <div class="text-center my-2 mt-sm-3 mt-lg-0 pt-4 pb-1 pb-sm-3 pb-md-4 pt-lg-5">
      <a class="btn btn-outline-primary" href="#">Read all case studies</a>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import caseStudy1 from '@/assets/img/landing/business-consulting/case-studies/01.png'
import caseStudy2 from '@/assets/img/landing/business-consulting/case-studies/02.png'
</script>
