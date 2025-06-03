<template>
  <b-card no-body class="border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
    <b-card-body>
      <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
        <i class="ai-user text-primary lead pe-1 me-2"></i>
        <h2 class="h4 mb-0">Basic info</h2>
        <router-link class="btn btn-sm btn-secondary ms-auto" :to="{ name: 'account.settings' }">
          <i class="ai-edit ms-n1 me-2"></i>
          Edit info
        </router-link>
      </div>
      <div class="d-md-flex align-items-center">
        <div class="d-sm-flex align-items-center">
          <div class="rounded-circle bg-size-cover bg-position-center flex-shrink-0" :style="`width: 80px; height: 80px; background-image: url(${avatar2});`"></div>
          <div class="pt-3 pt-sm-0 ps-sm-3">
            <h3 class="h5 mb-2">Isabella Bocouse<i class="ai-circle-check-filled fs-base text-success ms-2"></i></h3>
            <div class="text-body-secondary fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
              <div class="d-flex align-items-center me-3">
                <i class="ai-mail me-1"></i>
                email@example.com
              </div>
              <div class="d-flex align-items-center text-nowrap">
                <i class="ai-map-pin me-1"></i>
                USA, $
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 pt-3 pt-md-0 ms-md-auto" style="max-width: 212px">
          <div class="d-flex justify-content-between fs-sm pb-1 mb-2">
            Profile completion
            <strong class="ms-2">62%</strong>
          </div>
          <div class="progress" style="height: 5px">
            <div class="progress-bar" role="progressbar" style="width: 62%" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <b-row class="py-4 mb-2 mb-sm-3">
        <b-col md="6" class="mb-4 mb-md-0">
          <table class="table mb-0">
            <tbody>
              <tr>
                <td class="border-0 text-body-secondary py-1 px-0">Phone</td>
                <td class="border-0 text-dark fw-medium py-1 ps-3">+1 234 567 890</td>
              </tr>
              <tr>
                <td class="border-0 text-body-secondary py-1 px-0">Language</td>
                <td class="border-0 text-dark fw-medium py-1 ps-3">English</td>
              </tr>
              <tr>
                <td class="border-0 text-body-secondary py-1 px-0">Gender</td>
                <td class="border-0 text-dark fw-medium py-1 ps-3">Female</td>
              </tr>
              <tr>
                <td class="border-0 text-body-secondary py-1 px-0">Communication</td>
                <td class="border-0 text-dark fw-medium py-1 ps-3">Mobile, email</td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col md="6" class="d-md-flex justify-content-end">
          <div class="w-100 border rounded-3 p-4" style="max-width: 212px">
            <img class="d-block mb-2" :src="giftIcon" width="24" alt="Gift icon" />
            <h4 class="h5 lh-base mb-0">123 bonuses</h4>
            <p class="fs-sm text-body-secondary mb-0">1 bonus = {{ currency }}1</p>
          </div>
        </b-col>
      </b-row>
      <div class="alert alert-info d-flex mb-0" role="alert">
        <i class="ai-circle-info fs-xl"></i>
        <div class="ps-2">
          Fill in the information 100% to receive more suitable offers.
          <router-link class="alert-link ms-1" :to="{ name: 'account.settings' }">Go to settings!</router-link>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script lang="ts" setup>
import { currency } from '@/helpers/constants'
import avatar2 from '@/assets/img/avatar/02.jpg'
import giftIcon from '@/assets/img/account/gift-icon.svg'
</script>
