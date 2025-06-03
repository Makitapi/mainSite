<template>
  <b-container class="py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
    <b-row class="align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
      <b-col lg="4" class="offset-xl-1">
        <h2 class="h1 text-center text-lg-start pb-3 pb-lg-1">Our servises</h2>

        <!-- Show on screens > 992px -->
        <ul class="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
          <li class="d-flex pt-2">
            <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
            Individual approach to the brand
          </li>
          <li class="d-flex pt-2">
            <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
            We guarantee the result after a month
          </li>
          <li class="d-flex pt-2">
            <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
            Completing tasks exactly on time
          </li>
        </ul>
        <a class="btn btn-primary d-none d-lg-inline-flex" href="#">See all servises</a>
      </b-col>

      <b-col lg="8" xl="7" xxl="6">
        <b-row class="row-cols-1 row-cols-sm-2">
          <b-col>
            <b-card no-body class="border-0 bg-primary bg-opacity-10">
              <b-card-body>
                <i class="ai-search-settings fs-1 text-primary d-block mb-3"></i>
                <h3 class="h4">SEO Website Audit</h3>
                <p class="fs-sm">Consectetur adipiscing elit proin volutpat mollis egestas nam in luctus facilisis ultrices llentesque volutpat ligula est dignissim.</p>
              </b-card-body>
            </b-card>
            <b-card no-body class="border-0 bg-info bg-opacity-10 mt-4">
              <b-card-body>
                <i class="ai-bulb-alt fs-1 text-info d-block mb-3"></i>
                <h3 class="h4">Content Marketing</h3>
                <p class="fs-sm">Morbi et massa fames ac lerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames ac massa.</p>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col class="pt-lg-3">
            <b-card no-body class="border-0 bg-warning bg-opacity-10 mt-4 mt-sm-0 mt-lg-4">
              <b-card-body>
                <i class="ai-mail-filled fs-1 text-warning d-block mb-3"></i>
                <h3 class="h4">Email Marketing</h3>
                <p class="fs-sm">Sapiener ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam diam natoque scelerisque viverra.</p>
              </b-card-body>
            </b-card>
            <b-card no-body class="border-0 bg-danger bg-opacity-10 mt-4">
              <b-card-body>
                <i class="ai-telegram fs-2 text-danger d-block mb-3"></i>
                <h3 class="h4">Social Networks</h3>
                <p class="fs-sm">Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- Show button on screens < 992px -->
        <div class="d-lg-none text-center pt-3 mt-3 mt-sm-4">
          <a class="btn btn-primary" href="#">See all servises</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts"></script>
