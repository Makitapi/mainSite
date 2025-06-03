<template>
  <section class="bg-dark position-relative min-vh-100 overflow-hidden pt-5" data-bs-theme="dark">
    <svg class="position-absolute top-0" width="262" height="160" viewBox="0 0 262 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="left: 6%">
      <ellipse cx="131" cy="30.5" rx="131" ry="129.5" fill="white" fill-opacity=".03"></ellipse>
    </svg>
    <b-container class="position-relative z-5 text-center pt-5 mt-lg-4 mt-xl-5">
      <h1 class="display-1 pt-4 mt-sm-3">
        <span class="text-white fw-normal">Have a look </span>
        <span class="d-inline-flex align-items-center">
          <span class="text-white">Ar</span>
          <img class="flex-shrink-0 mt-2" :src="avatar" :width="51" alt="Img" />
          <span class="text-white">und!</span>
        </span>
      </h1>
      <p class="text-body fs-xl mb-5">And you will find everything you need to build a great looking website</p>
      <a class="scroll-down-btn" href="#landings" data-scroll data-scroll-offset="20">
        <div class="mouse"></div>
        <p>Landings</p>
      </a>
    </b-container>
    <div class="d-none d-lg-block" style="margin-top: -80px"></div>
    <div class="d-none d-sm-block d-lg-none" style="margin-top: -40px"></div>
    <CustomParallax id="parallax" custom-class="mx-auto mb-n5" :custom-style="{ maxWidth: '1606px' }">
      <div class="parallax-layer" data-depth="-0.1">
        <img :src="hero1" alt="Background shapes" />
      </div>
      <div class="parallax-layer z-2" data-depth="0.12">
        <img :src="hero2" alt="Foreground shape" />
      </div>
      <div class="parallax-layer z-2" data-depth="0.35">
        <img :src="hero3" alt="Foreground shape" />
      </div>
      <div class="parallax-layer z-2" data-depth="0.23">
        <img :src="hero4" alt="Foreground shape" />
      </div>
    </CustomParallax>
  </section>
</template>

<script setup lang="ts">
import CustomParallax from '@/components/Parallax.vue'

import avatar from '@/assets/img/landing/intro/avatar.png'
import hero1 from '@/assets/img/landing/intro/hero/01.png'
import hero2 from '@/assets/img/landing/intro/hero/02.png'
import hero3 from '@/assets/img/landing/intro/hero/03.png'
import hero4 from '@/assets/img/landing/intro/hero/04.png'
</script>

<style scoped>
.scroll-down-btn {
  display: inline-block;
  text-decoration: none;
}

.scroll-down-btn p {
  margin-top: 1.25rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.375rem;
  text-indent: 0.375rem;
  animation:
    colorText 5s ease-out infinite,
    nudgeText 5s ease-out infinite;
}

.mouse {
  background: #2c333e linear-gradient(transparent 0%, transparent 50%, white 50%, white 100%);
  position: relative;
  width: 38px;
  height: 65px;
  margin: 0 auto;
  border-radius: 6rem;
  background-size: 100% 200%;
  animation:
    colorSlide 5s linear infinite,
    nudgeMouse 5s ease-out infinite;
}

.mouse:before,
.mouse:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.mouse:before {
  width: 34px;
  height: 61px;
  background-color: #121519;
  border-radius: 6rem;
}

.mouse:after {
  background-color: white;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 100%;
  animation: trackBallSlide 5s linear infinite;
}

@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }

  20% {
    background-position: 0% 0%;
  }

  21% {
    background-color: #2c333e;
  }

  29.99% {
    background-color: white;
    background-position: 0% 0%;
  }

  30% {
    background-color: #2c333e;
    background-position: 0% 100%;
  }

  50% {
    background-position: 0% 0%;
  }

  51% {
    background-color: #2c333e;
  }

  59% {
    background-color: white;
    background-position: 0% 0%;
  }

  60% {
    background-color: #2c333e;
    background-position: 0% 100%;
  }

  80% {
    background-position: 0% 0%;
  }

  81% {
    background-color: #2c333e;
  }

  90%,
  100% {
    background-color: white;
  }
}

@keyframes trackBallSlide {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }

  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }

  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }

  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }

  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}

@keyframes nudgeMouse {
  0%,
  30%,
  60%,
  90% {
    transform: translateY(0);
  }

  20%,
  50%,
  80% {
    transform: translateY(8px);
  }
}

@keyframes nudgeText {
  0%,
  30%,
  60%,
  90% {
    transform: translateY(0);
  }

  20%,
  50%,
  80% {
    transform: translateY(2px);
  }
}

@keyframes colorText {
  21%,
  51%,
  81% {
    color: #2c333e;
  }

  30%,
  60%,
  90% {
    color: white;
  }
}
</style>
