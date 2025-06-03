<template>
  <b-container class="mt-2 mt-md-0 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <b-row class="align-items-center">
      <b-col sm="8" lg="4" xl="3" class="offset-xl-1 order-sm-2 mb-3 mb-sm-0">
        <div class="position-relative mb-lg-2">
          <i class="ai-search fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
          <b-form-input class="rounded-pill ps-5" type="search" placeholder="Enter keywords.." />
        </div>
      </b-col>
      <b-col sm="4" lg="8" class="order-sm-1">
        <div class="d-none d-lg-flex flex-wrap align-items-center">
          <h3 class="h6 mb-2 me-4">Topics:</h3>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" href="#">Nature</a>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" href="#">Design</a>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" href="#">Books</a>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" href="#">Fashion</a>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2 me-3" href="#">Inspiration</a>
          <a class="btn btn-outline-secondary px-4 rounded-pill mb-2" href="#">Psychology</a>
        </div>

        <b-dropdown menu-class="my-1" variant="link" toggleClass="btn btn-outline-secondary rounded-pill" class="w-100 d-lg-none" text="Topics">
          <b-dropdown-item href="#">Nature</b-dropdown-item>
          <b-dropdown-item href="#">Design</b-dropdown-item>
          <b-dropdown-item href="#">Books</b-dropdown-item>
          <b-dropdown-item href="#">Fashion</b-dropdown-item>
          <b-dropdown-item href="#">Inspiration</b-dropdown-item>
          <b-dropdown-item href="#">Psychology</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row class="mt-sm-2 mt-lg-0 pt-4 pt-lg-5 pb-md-4">
      <b-col md="7" class="pb-2 pb-md-0 mb-4 mb-md-0">
        <article v-for="(post, idx) in featurePosts" :key="idx" class="pb-5 pt-sm-1 mb-lg-3 mb-xl-4">
          <router-link :to="{ name: post.link?.name }">
            <img class="rounded-5" :src="post.image" alt="Img" />
          </router-link>
          <h2 class="h3 pt-3 mt-2 mt-md-3">
            <router-link :to="{ name: post.link?.name }">{{ post.title }}</router-link>
          </h2>
          <p>{{ post.description }}</p>
          <div class="d-flex flex-wrap align-items-center pt-1 mt-n2">
            <a class="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
              {{ post.share }}
              <i class="ai-share fs-lg ms-1"></i>
            </a>
            <a class="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
              {{ post.comment }}
              <i class="ai-message fs-lg ms-1"></i>
            </a>
            <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
            <span class="fs-sm text-body-secondary mt-2">{{ post.time }}</span>
            <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
            <router-link class="badge text-nav fs-xs border mt-2" to="#">{{ toSentenceCase(post.category) }} </router-link>
          </div>
        </article>

        <router-link class="btn btn-primary mt-n2 mt-sm-n1 mt-md-0" :to="{ name: 'blog.list-sidebar' }">Read all articles </router-link>
      </b-col>

      <aside class="col-md-5 col-xl-4 offset-xl-1" style="margin-top: -115px">
        <div class="position-sticky top-0 ps-md-4 ps-xl-0" style="padding-top: 125px">
          <h2 class="h4">Relevant articles</h2>

          <article v-for="(article, idx) in articles" :key="idx" class="my-1 my-lg-0 py-2 py-lg-3">
            <h3 class="h6 mb-2 mb-lg-3">
              <router-link :to="{ name: article.link?.name }">{{ article.title }}</router-link>
            </h3>
            <div class="d-flex flex-wrap align-items-center mt-n2">
              <a class="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
                {{ article.share }}
                <i class="ai-share fs-lg ms-1"></i>
              </a>
              <a class="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
                {{ article.comment }}
                <i class="ai-message fs-lg ms-1"></i>
              </a>
              <span class="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span class="fs-sm text-body-secondary mt-2">{{ article.time }}</span>
            </div>
          </article>
        </div>
      </aside>
    </b-row>
  </b-container>
</template>

<script lang="ts" setup>
import { articles, featurePosts } from '@/views/landings/Blog/data'
import { toSentenceCase } from '@/helpers/change-casing'
</script>
