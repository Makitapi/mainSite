<template>
  <b-row class="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
    <b-col md="10" lg="8" xl="7">
      <h2 class="pb-sm-2">Social networks</h2>
      <p class="fs-lg mb-2 mb-sm-3 mb-lg-2">Velit non pharetra eget eu varius amet dui pharetra nam velit purus id nec aliquet auctor scelerisque egestas magna nulla. Eget posuere fames id nibh nisi sodales malesuada nisl purus. Libero, velit, in tincidunt non habitasse dui, risus eros, vel laoreet euismod sit vitae, at urna nullam lacus urna ac ut pulvinar arcu lacus porttitor aliquam.</p>
    </b-col>
  </b-row>
  <b-row class="row-cols-1 row-cols-sm-2 pt-4 pt-lg-5">
    <b-col class="mb-4 mb-sm-0">
      <div class="d-flex align-items-center justify-content-center bg-secondary h-100 rounded-5 p-4 p-xl-5">
        <img class="d-block rounded-4 my-2" :src="singleImg02" width="367" alt="Img" />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex align-items-end justify-content-center bg-secondary h-100 rounded-5 px-4 px-xl-5">
        <img class="d-block rounded-4 rounded-bottom-0 mt-4" :src="singleImg03" width="524" alt="Img" />
      </div>
    </b-col>
  </b-row>

  <b-row class="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
    <b-col md="10" lg="8" xl="7" class="pt-md-3 pt-lg-4">
      <h2 class="pb-sm-2">Content marketing</h2>
      <p class="fs-lg mb-2 mb-sm-3 mb-lg-2">Diam at quam a sagittis non tellus penatibus massa, gravida eu sit nunc, eu, amet mattis massa tincidunt sagittis. Semper imperdiet viverra netus euismod eget sed condimentum netus. Lectus odio eros eu nibh habitant elementum elementum, morbi pharetra, amet neque in donec massa morbi sed vehicula varius ipsum et morbi eu ut.</p>
    </b-col>
  </b-row>
  <b-row class="pt-4 pt-lg-5">
    <b-col sm="8" class="mb-4 mb-sm-0">
      <img class="rounded-5" :src="singleImg04" alt="Img" />
    </b-col>
    <b-col sm="4">
      <img class="rounded-5" :src="singleImg05" alt="Img" />
    </b-col>
  </b-row>

  <b-row class="mt-5 pt-sm-2 pt-lg-3 pt-xl-4 pt-xxl-5">
    <b-col md="10" lg="8" xl="7" class="pt-md-3 pt-lg-4">
      <h2 class="pb-sm-2">Results</h2>
      <p class="fs-lg mb-2 mb-sm-3 mb-lg-2">Facilisi morbi habitant massa euismod. Vehicula viverra vestibulum at quis orci morbi nullam in. Etiam sit in platea faucibus venenatis. Morbi cursus vehicula nam pellentesque lacus neque aenean non. Feugiat feugiat nullam feugiat cras volutpat.</p>
    </b-col>
  </b-row>
  <b-row class="pt-4 pt-lg-5">
    <b-col md="9" lg="7" xl="6">
      <b-row class="row-cols-1 row-cols-sm-3">
        <b-col class="mb-4 mb-sm-0">
          <div class="h1 mb-0">1200+</div>
          <p class="fs-sm mb-0">leads for $ 2.1</p>
        </b-col>
        <b-col class="mb-4 mb-sm-0">
          <div class="h1 mb-0">130%</div>
          <p class="fs-sm mb-0">revenue increase</p>
        </b-col>
        <b-col class="mb-4 mb-sm-0">
          <div class="h1 mb-0">124+</div>
          <p class="fs-sm mb-0">new posts</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import singleImg02 from '@/assets/img/portfolio/single/v1/02.jpg'
import singleImg03 from '@/assets/img/portfolio/single/v1/03.jpg'
import singleImg04 from '@/assets/img/portfolio/single/v1/04.jpg'
import singleImg05 from '@/assets/img/portfolio/single/v1/05.jpg'
</script>
