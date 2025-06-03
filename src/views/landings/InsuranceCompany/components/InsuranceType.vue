<template>
  <section class="overflow-hidden pb-5">
    <b-container class="pb-sm-3 mb-md-2 mb-lg-3">
      <b-row class="g-4">
        <b-col md="7" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <img class="object-fit-cover w-100 h-100 rounded-3" :src="service1" alt="Img" />
        </b-col>
        <b-col md="5" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <div class="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
            <h2 class="mb-xl-4">Car insurance</h2>
            <p class="mb-4 mb-xl-5">Explore our car insurance plans designed to give you peace of mind on the road. Whether you're a daily commuter, a weekend adventurer, or a family driver, we've got you covered. With competitive rates, customizable coverage options, and a commitment to your safety, our car insurance is your trusted driving companion. Get a quote today and experience the ease of driving with confidence.</p>
            <ul class="list-unstyled mb-4 mb-xl-5">
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Comprehensive coverage
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Customizable plans
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Financial security
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Car insurance discounts
              </li>
            </ul>
            <div class="mt-auto">
              <a class="btn btn-outline-primary" href="#">Learn more</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="overflow-hidden pb-5">
    <b-container class="pb-sm-3 mb-md-2 mb-lg-3">
      <b-row class="g-4">
        <b-col md="7" class="order-md-2" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <img class="object-fit-cover w-100 h-100 rounded-3" :src="service2" alt="Img" />
        </b-col>
        <b-col md="5" class="order-md-1" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <div class="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
            <h2 class="mb-xl-4">Travel insurance</h2>
            <p class="mb-4 mb-xl-5">Explore the world with confidence, knowing you're protected wherever you go. Discover our travel insurance plans designed to keep you safe on your journeys. From solo escapades to family getaways, we offer a range of travel insurance options to match your travel style and needs.</p>
            <ul class="list-unstyled mb-4 mb-xl-5">
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Comprehensive protection
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Tailored plans
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Emergency medical assistance
              </li>
            </ul>
            <div class="mt-auto">
              <a class="btn btn-outline-primary" href="#">Learn more</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>

  <section class="overflow-hidden pb-5">
    <b-container class="pb-sm-3 mb-md-2 mb-lg-3">
      <b-row class="g-4">
        <b-col md="7" data-aos="fade-right" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <img class="object-fit-cover w-100 h-100 rounded-3" :src="service3" alt="Img" />
        </b-col>
        <b-col md="5" data-aos="fade-left" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
          <div class="d-flex flex-column h-100 bg-secondary rounded-3 py-5 px-4 px-lg-5">
            <h2 class="mb-xl-4">Health insurance</h2>
            <p class="mb-4 mb-xl-5">Your health and well-being are our top priorities. We're more than just insurance; we're your partner in good health. We offer a range of health insurance options to suit your unique healthcare needs.</p>
            <ul class="list-unstyled mb-4 mb-xl-5">
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Manage your policy online - anywhere, anytime
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                International coverage
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Fast access to treatment
              </li>
              <li class="d-flex pb-2 mb-1">
                <span class="bg-primary mt-2 me-2" style="width: 10px; height: 10px; border-radius: 2px"></span>
                Fast, simple claiming
              </li>
            </ul>
            <div class="mt-auto">
              <a class="btn btn-outline-primary" href="#">Learn more</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import service1 from '@/assets/img/landing/insurance/services/01.jpg'
import service2 from '@/assets/img/landing/insurance/services/02.jpg'
import service3 from '@/assets/img/landing/insurance/services/03.jpg'
</script>
