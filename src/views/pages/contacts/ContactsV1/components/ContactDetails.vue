<template>
  <section class="bg-secondary py-5">
    <b-container class="pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
      <Breadcrumb title="Contacts v.1" :class="'pb-lg-4 pb-2'" />

      <h1 class="display-2">Contacts</h1>
      <p class="fs-lg pb-4 mb-2 mb-sm-3">Get in touch with us by completing the below form or call us now</p>

      <b-row class="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
        <b-col>
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <b-card-title class="mb-4">Address</b-card-title>
              <p class="fs-lg fw-medium pb-3 mb-3">514 Magnolia St. Orlando, FL 32806</p>
              <a class="btn btn-sm btn-outline-primary" href="#">
                <i class="ai-map-pin me-1"></i>
                Get directions
              </a>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col>
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <b-card-title class="mb-4">Phone</b-card-title>
              <ul class="list-unstyled mb-0">
                <li class="pb-1 mb-2">
                  <span class="d-block fs-sm text-body-secondary mb-1">Main office</span>
                  <a class="nav-link fs-lg p-0" href="tel:+178632256033">+1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;33</a>
                </li>
                <li>
                  <span class="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                  <a class="nav-link fs-lg p-0" href="tel:+178630056044">+1&nbsp;(786)&nbsp;300&nbsp;560&nbsp;44</a>
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col>
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <b-card-title class="mb-4">Schedule</b-card-title>
              <ul class="list-unstyled mb-0">
                <li class="pb-1 mb-2">
                  <span class="d-block fs-sm text-body-secondary mb-1">Mon - Thu</span>
                  <div class="d-flex align-items-center">
                    <span class="text-nav fs-lg fw-medium">10:00</span>
                    <span class="border-top mx-4" style="width: 36px; height: 1px"></span>
                    <span class="text-nav fs-lg fw-medium">22:00</span>
                  </div>
                </li>
                <li>
                  <span class="d-block fs-sm text-body-secondary mb-1">Fri - Sat</span>
                  <div class="d-flex align-items-center">
                    <span class="text-nav fs-lg fw-medium">10:00</span>
                    <span class="border-top mx-4" style="width: 36px; height: 1px"></span>
                    <span class="text-nav fs-lg fw-medium">20:00</span>
                  </div>
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col>
          <b-card no-body class="border-0 h-100">
            <b-card-body>
              <b-card-title class="mb-4">Email</b-card-title>
              <ul class="list-unstyled mb-0">
                <li class="pb-1 mb-2">
                  <span class="d-block fs-sm text-body-secondary mb-1">Main office</span>
                  <a class="nav-link fs-lg p-0" href="mailto:office@example.com">office@example.com</a>
                </li>
                <li>
                  <span class="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                  <a class="nav-link fs-lg p-0" href="mailto:reception@example.com">reception@example.com</a>
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div style="height: 250px"></div>
  </section>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>
