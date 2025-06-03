<template>
  <b-container class="pt-5 pb-lg-2 pb-xl-4 py-xxl-5 my-5">
    <Breadcrumb title="Contacts v.3" :class="'pb-lg-4 pb-2'" />
    <h1 class="display-2 pb-2 mb-sm-4 mb-lg-5">Contacts</h1>

    <div class="border-top pb-sm-3 pt-4">
      <b-row class="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-2">
        <b-col class="pb-2">
          <h4 class="mb-lg-4">Address</h4>
          <p class="fs-lg fw-medium pb-3 mb-3">514 Magnolia St. Orlando, FL 32806</p>
          <a class="btn btn-primary" href="#">
            <i class="ai-map-pin me-1"></i>
            Get directions
          </a>
        </b-col>

        <b-col class="pb-2">
          <h4 class="mb-lg-4">Phone</h4>
          <ul class="list-unstyled mb-0">
            <li class="pb-1 mb-2">
              <span class="d-block fs-sm text-body-secondary mb-1">Main office</span>
              <a class="nav-link fs-lg p-0" href="tel:+178632256033">+1&nbsp;(786)&nbsp;322&nbsp;560&nbsp;33</a>
            </li>
            <li class="pb-1 mb-2">
              <span class="d-block fs-sm text-body-secondary mb-1">Reception room</span>
              <a class="nav-link fs-lg p-0" href="tel:+178630056044">+1&nbsp;(786)&nbsp;300&nbsp;560&nbsp;44</a>
            </li>
            <li>
              <span class="d-block fs-sm text-body-secondary mb-1">Franchise</span>
              <a class="nav-link fs-lg p-0" href="tel:+178630050055">+1&nbsp;(786)&nbsp;300&nbsp;500&nbsp;55</a>
            </li>
          </ul>
        </b-col>

        <b-col class="pb-2">
          <h4 class="mb-lg-4">Schedule</h4>
          <ul class="list-unstyled mb-0">
            <li class="pb-1 mb-2">
              <span class="d-block fs-sm text-body-secondary mb-1">Mon - Thu</span>
              <div class="d-flex align-items-center">
                <span class="text-nav fs-lg fw-medium">10:00</span>
                <span class="border-top mx-4" style="width: 36px; height: 1px"></span>
                <span class="text-nav fs-lg fw-medium">22:00</span>
              </div>
            </li>
            <li class="pb-1 mb-2">
              <span class="d-block fs-sm text-body-secondary mb-1">Fri - Sat</span>
              <div class="d-flex align-items-center">
                <span class="text-nav fs-lg fw-medium">10:00</span>
                <span class="border-top mx-4" style="width: 36px; height: 1px"></span>
                <span class="text-nav fs-lg fw-medium">20:00</span>
              </div>
            </li>
            <li>
              <span class="d-block fs-sm text-body-secondary mb-1">Sun</span>
              <div class="d-flex align-items-center">
                <span class="text-nav fs-lg fw-medium">12:00</span>
                <span class="border-top mx-4" style="width: 36px; height: 1px"></span>
                <span class="text-nav fs-lg fw-medium">16:00</span>
              </div>
            </li>
          </ul>
        </b-col>

        <b-col class="pb-2">
          <h4 class="mb-lg-4">Email</h4>
          <a class="nav-link fs-lg p-0" href="mailto:email@example.com">email@example.com</a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>
