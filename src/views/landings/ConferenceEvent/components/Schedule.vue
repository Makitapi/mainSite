<template>
  <b-container class="py-5 mb-lg-2 mt-lg-3 my-xl-4 my-xxl-5">
    <div class="d-md-flex align-items-center justify-content-between pt-2 pt-sm-3 pb-3 mt-md-3 mb-3 mb-lg-4">
      <div class="d-flex align-items-center mb-4 mb-md-0">
        <h2 class="h1 mb-0">Event schedule</h2>
        <div class="text-warning flex-shrink-0 ps-sm-1 ms-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L12.6798 4.12733C13.2879 7.81883 16.1812 10.7121 19.8727 11.3202L24 12L19.8727 12.6798C16.1812 13.2879 13.2879 16.1812 12.6798 19.8727L12 24L11.3202 19.8727C10.7121 16.1812 7.81882 13.2879 4.12733 12.6798L0 12L4.12733 11.3202C7.81883 10.7121 10.7121 7.81882 11.3202 4.12733L12 0Z"></path>
          </svg>
        </div>
      </div>
      <ul class="nav nav-tabs flex-nowrap mb-0" role="tablist">
        <li class="nav-item me-1">
          <router-link class="nav-link px-3 px-sm-4" to="#dayOne" data-bs-toggle="tab" role="tab" :class="show && 'active'" @click="show = true">Day one (Nov 15) </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-3 px-sm-4" to="#dayTwo" data-bs-toggle="tab" role="tab" :class="!show && 'active'" @click="show = false">Day two (Nov 16) </router-link>
        </li>
      </ul>
    </div>

    <div class="tab-content border-top border-bottom mb-3 mb-sm-4 mb-lg-5">
      <div class="tab-pane fade" :class="show && 'show active'" id="dayOne" role="tabpanel">
        <template v-for="(item, idx) in eventScheduleDay1" :key="idx">
          <b-row class="py-3 my-2 my-md-3">
            <b-col md="3">
              <div class="h6 mb-2 mb-md-0">{{ item.time }}</div>
            </b-col>
            <b-col md="6">
              <h3 class="h4 mb-0">{{ item.topic }}</h3>
              <p class="pt-2 pt-md-3 mb-md-0" v-if="item.description">{{ item.description }}</p>
            </b-col>
            <b-col md="3" class="text-md-end" v-if="item.speakers">
              <div class="d-inline-flex">
                <template v-for="(speaker, idx) in item.speakers" :key="idx">
                  <div class="bg-light flex-shrink-0 rounded-circle position-relative ms-n3" :class="`z-${item.speakers?.length - idx}`" style="padding: 3px">
                    <img class="rounded-circle" :src="speaker.image" width="48" alt="Avatar" />
                  </div>
                </template>
              </div>
            </b-col>
          </b-row>
          <hr />
        </template>
      </div>

      <div class="tab-pane fade" :class="!show && 'show active'" id="dayTwo" role="tabpanel">
        <template v-for="(item, idx) in eventScheduleDay2" :key="idx">
          <b-row class="py-3 my-2 my-md-3">
            <b-col md="3">
              <div class="h6 mb-2 mb-md-0">{{ item.time }}</div>
            </b-col>
            <b-col md="6">
              <h3 class="h4 mb-0">{{ item.topic }}</h3>
              <p class="pt-2 pt-md-3 mb-md-0">{{ item.description }}</p>
            </b-col>
            <b-col md="3" class="text-md-end" v-if="item.speakers">
              <div class="d-inline-flex">
                <template v-for="(speaker, idx) in item.speakers" :key="idx">
                  <div class="bg-light flex-shrink-0 rounded-circle position-relative ms-n3" :class="`z-${item.speakers?.length - idx}`" style="padding: 3px">
                    <img class="rounded-circle" :src="speaker.image" width="48" alt="Avatar" />
                  </div>
                </template>
              </div>
            </b-col>
          </b-row>
          <hr />
        </template>
      </div>
    </div>
  </b-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { eventScheduleDay1, eventScheduleDay2 } from '@/views/landings/ConferenceEvent/data'

const show = ref(true)
</script>
