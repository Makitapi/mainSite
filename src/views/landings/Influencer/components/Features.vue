<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
    <b-row class="align-items-xl-center py-2 py-sm-3 my-md-3 mb-lg-4 mb-xl-5">
      <b-col md="6" class="pb-4 pb-md-0 mb-3 mb-md-0">
        <img class="rounded-4" :src="featureImage" alt="Influencer" />
      </b-col>
      <b-col md="6" xl="5" class="offset-xl-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
        <div class="ps-md-4 ps-xl-0">
          <h2 class="h1 pb-3 mb-2 mb-md-3 mb-xl-4">Why training with me?</h2>
          <ul class="list-unstyled pb-1 pb-xl-2">
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-fruit text-primary fs-4 mt-n1 me-3"></i>
              Nutrition guides for the best overall results.
            </li>
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-drop text-primary fs-4 mt-n1 me-3"></i>
              Individually designed programs and workout plans.
            </li>
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-stones text-primary fs-4 mt-n1 me-3"></i>
              Stretching routines.
            </li>
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-weight text-primary fs-4 mt-n1 me-3"></i>
              Workouts designed for optimal results.
            </li>
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-heart-alt text-primary fs-4 mt-n1 me-3"></i>
              Bonus features like weight history, gratitude journal, ect.
            </li>
            <li class="d-flex fs-lg pb-1 mb-3">
              <i class="ai-chat text-primary fs-4 mt-n1 me-3"></i>
              Direct coaching and 24/7 access to support community.
            </li>
          </ul>
          <h3 class="h5 text-body mb-lg-4">My achievements:</h3>
          <img class="d-dark-mode-none" :src="achievementImageLight" alt="Achievements" />
          <img class="d-none d-dark-mode-block" :src="achievementImageDark" alt="Achievements" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import featureImage from '@/assets/img/landing/influencer/features.jpg'
import achievementImageLight from '@/assets/img/landing/influencer/achievements-light.svg'
import achievementImageDark from '@/assets/img/landing/influencer/achievements-dark.svg'
</script>
