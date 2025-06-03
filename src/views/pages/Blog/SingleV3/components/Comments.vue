<template>
  <div class="pt-4 pt-xl-5 mt-4" id="comments">
    <h2 class="h1 py-lg-1 py-xl-3">14 comments</h2>

    <!-- Comment -->
    <div v-for="(comment, idx) in commentsData" :key="idx" :class="idx == commentsData.length - 1 ? 'pt-4 mt-2 mb-2' : 'border-bottom py-4 mt-2 mb-4'">
      <div class="d-flex align-items-center pb-1 mb-3">
        <img class="rounded-circle" :src="comment.author.avatar" width="48" alt="Comment author" />
        <div class="ps-3">
          <h6 class="mb-0">{{ comment.author.name }}</h6>
          <span class="fs-sm text-body-secondary">{{ comment.timestamp }}</span>
        </div>
      </div>
      <p class="pb-2 mb-0">{{ comment.content }}</p>
      <button class="nav-link fs-sm fw-semibold px-0 py-2" type="button">
        Reply
        <i class="ai-redo fs-xl ms-2"></i>
      </button>
      <!-- Comment reply -->
      <b-card no-body v-if="comment.reply" class="card-body border-0 bg-secondary mt-4">
        <div class="d-flex align-items-center pb-1 mb-3">
          <img class="rounded-circle" :src="comment.reply.avatar" width="48" alt="Comment author" />
          <div class="ps-3">
            <h6 class="mb-0">{{ comment.reply.author }}</h6>
            <span class="fs-sm text-body-secondary">{{ comment.reply.timestamp }}</span>
          </div>
        </div>
        <p class="mb-0">
          <a class="fw-bold text-decoration-none" href="#">{{ comment.reply.name }}</a> {{ comment.reply.content }}
        </p>
      </b-card>
    </div>

    <!-- All comments button -->
    <div class="text-end pb-5 mb-lg-1 mb-xl-3">
      <a class="btn btn-link px-0" href="#">
        Show all comments
        <i class="ai-chevron-right fs-lg ms-1"></i>
      </a>
    </div>

    <b-card no-body class="border-0 bg-secondary pt-2 p-md-2 p-xl-3 p-xxl-4 mt-n3 mt-md-0">
      <b-card-body>
        <h2 class="pb-2 pb-lg-3 pb-xl-4">Leave a comment</h2>
        <b-form class="row needs-validation g-4">
          <b-col sm="6">
            <label class="form-label" for="c-name">Name</label>
            <b-form-input class="" type="text" placeholder="Your name" required id="c-name" />
            <b-form-invalid-feedback>Please enter your name!</b-form-invalid-feedback>
          </b-col>
          <b-col sm="6">
            <label class="form-label" for="c-email">Email</label>
            <b-form-input class="" type="email" placeholder="Your email" required id="c-email" />
            <div class="invalid-feedback">Please provide a valid email address!</div>
          </b-col>
          <b-col cols="12">
            <label class="form-label" for="c-comment">Comment</label>
            <b-form-textarea class="" label="Comment" label-for="c-comment" rows="4" placeholder="Type your comment here..." required id="c-comment"></b-form-textarea>
            <div class="invalid-feedback">Please enter a comment message!</div>
          </b-col>
          <b-col cols="12">
            <b-form-checkbox class="mb-2" id="c-save">
              <label class="form-check-label" for="c-save">Save my name and email</label>
            </b-form-checkbox>
          </b-col>
          <b-col cols="12">
            <b-button variant="primary" type="submit">Post a comment</b-button>
          </b-col>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { commentsData } from '@/views/pages/Blog/SingleV3/data'
</script>
