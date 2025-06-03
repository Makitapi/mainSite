<template>
  <b-container class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pb-3 pt-sm-3 pt-lg-5 mb-3 mb-lg-4">Schedule</h2>
    <FullCalendar class="calendar" :options="calendarOptions" />
    <div class="text-center pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0">
      <a class="btn btn-outline-primary fs-base" href="#">Try a free lesson</a>
    </div>
  </b-container>
</template>

<script lang="ts" setup>
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import { INITIAL_EVENTS } from '@/views/landings/YogaStudio/data'

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin],
  themeSystem: 'bootstrap',
  initialView: 'dayGridMonth',
  initialDate: '2022-08-01',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek'
  },
  events: INITIAL_EVENTS,
  bootstrapFontAwesome: {
    prev: 'bi bi-chevron-left',
    next: 'bi bi-chevron-right'
  }
}
</script>

<style lang="css">
td,
th {
  border-right: 0 !important;
}
</style>
