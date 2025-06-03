<template>
  <b-col xl="4">
    <div class="d-none d-lg-block">
      <div class="offcanvas-xl offcanvas-start position-absolute position-xl-relative h-100 bg-light rounded-5 border border-xl-0" id="contactsList" data-bs-scroll="true" data-bs-backdrop="false">
        <div class="rounded-5 overflow-hidden">
          <div class="card-header w-100 border-0 px-4 pt-4 pb-3">
            <div class="d-flex d-xl-none justify-content-end mt-n2 mb-2">
              <button class="btn btn-outline-secondary border-0 px-3 me-n2" type="button" data-bs-dismiss="offcanvas" data-bs-target="#contactsList">
                <i class="ai-cross me-2"></i>
                Close
              </button>
            </div>
            <div class="position-relative">
              <input class="form-control pe-5" type="text" placeholder="Search by name or email" />
              <i class="ai-search fs-lg text-nav position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
          </div>
          <Simplebar class="card-body px-0 pb-4 pb-xl-0 pt-1" data-simplebar style="max-height: 700px">
            <a v-for="(contact, idx) in contacts" :key="idx" :class="contact.isActive && 'bg-gray'" class="d-flex align-items-center text-decoration-none px-4 py-3" href="#">
              <ContactCard :contact="contact" />
            </a>
          </Simplebar>
        </div>
      </div>
    </div>

    <b-offcanvas v-model="showOffcanvas" body-class="p-0 m-0" header-class="p-0 m-0" placement="start" class="offcanvas-xl position-absolute position-xl-relative h-100 bg-light rounded-5 border border-xl-0" id="sidebarAccount">
      <template #header>
        <div class="card-header w-100 border-0 px-4 pt-4 pb-3">
          <div class="d-flex d-xl-none justify-content-end mt-n2 mb-2">
            <button class="btn btn-outline-secondary border-0 px-3 me-n2" type="button" @click="props.toggleOffcanvas">
              <i class="ai-cross me-2"></i>
              Close
            </button>
          </div>
          <div class="position-relative">
            <input class="form-control pe-5" type="text" placeholder="Search by name or email" />
            <i class="ai-search fs-lg text-nav position-absolute top-50 end-0 translate-middle-y me-3"></i>
          </div>
        </div>
      </template>
      <Simplebar class="card-body px-0 pb-4 pb-xl-0 pt-1" data-simplebar style="max-height: 700px">
        <a v-for="(contact, idx) in contacts" :key="idx" :class="contact.isActive && 'bg-gray'" class="d-flex align-items-center text-decoration-none px-4 py-3" href="#">
          <ContactCard :contact="contact" />
        </a>
      </Simplebar>
    </b-offcanvas>
  </b-col>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Simplebar from 'simplebar-vue'
import { contacts } from '@/views/account/Chat/data'
import ContactCard from '@/views/account/Chat/components/ContactCard.vue'
const props = defineProps(['showOffcanvas', 'toggleOffcanvas'])

const showOffcanvas = ref(props.showOffcanvas)

watch(
  () => props.showOffcanvas,
  (newVal) => {
    showOffcanvas.value = newVal
  }
)
</script>
