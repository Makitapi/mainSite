<template>
  <b-container class="py-5 my-lg-3 my-xl-4 my-xxl-5">
    <div class="text-center pt-sm-2 pt-md-4 pt-lg-3 pt-xl-4 pb-3 mx-auto mb-3 mb-lg-4" style="max-width: 720px">
      <h2 class="h1 pt-1 pt-sm-2">Take another look at Around Max</h2>
      <p class="mb-0">Turpis nullam netus sed aliquam consectetur at felis consequat tincidunt orci varius arcu urna neque eget maecenas consequat lacus habitasse adipiscing.</p>
    </div>
    <b-row class="g-4 mb-3 mb-xl-0 pb-sm-2 pb-md-4 pb-xl-5">
      <b-col md="5" lg="4" class="order-md-1">
        <b-card no-body class="border-0 h-100 bg-size-cover bg-position-top-center" :style="`min-height: 280px; background-image: url(${gallery1});`"></b-card>
      </b-col>
      <b-col md="7" lg="8" class="order-md-2">
        <b-card no-body class="border-0 bg-secondary h-100 px-xl-4 pb-sm-2 pb-xl-4">
          <img class="d-block mx-auto" :src="gallery3" width="408" alt="gallery3" />
          <b-card-body>
            <h3>Eco-friendly made from recycled plastic</h3>
            <p class="card-text">Turpis nullam netus sed aliquam at felis ante ipsum in consequat tincidunt orci varius arcu urna neque maecenas consequat lacus malesuada habitasse or adipiscing in lacus ipsum or natoque tincidunt arcu uter cursus et quam odio amet urna neque eget.</p>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="5" lg="4" class="order-md-4">
        <b-card no-body class="border-0 h-100 bg-size-cover bg-position-center" :style="`min-height: 280px; background-image: url(${gallery2});`"></b-card>
      </b-col>
      <b-col md="7" lg="8" class="order-md-3">
        <b-card no-body class="border-0 bg-secondary h-100">
          <b-row class="g-0">
            <b-col lg="6">
              <img class="d-block" :src="gallery4" width="377" alt="Img" />
            </b-col>
            <b-col lg="6" class="align-self-center mt-n4 mt-lg-0">
              <b-card-body>
                <h3>Headphones for sports, for life, for pleasure</h3>
                <p class="card-text">Donec urna, sed molestie tincidunt elit nunc pellentesque ipsum purus a turpis elementum augue magna hendrerit bibendum morbi elementum non egestas in nec donec sit magna amet et mauris nisl suscipit urna in morbi sit elementum venenatis.</p>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import gallery1 from '@/assets/img/landing/product/gallery/01.jpg'
import gallery2 from '@/assets/img/landing/product/gallery/02.jpg'
import gallery3 from '@/assets/img/landing/product/gallery/03.png'
import gallery4 from '@/assets/img/landing/product/gallery/04.png'
</script>
