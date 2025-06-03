<template>
  <b-container class="pt-xl-2 pb-5 mb-md-2 mb-lg-4 mb-xl-5" id="comments">
    <b-row class="justify-content-center">
      <b-col lg="9" xl="8">
        <div class="border-top border-bottom">
          <!-- Comments collapse -->
          <b-collapse class="" id="commentsCollapse" style="max-width: 54rem">
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
                  <img class="rounded-circle" :src="comment.reply.author.avatar" width="48" alt="Comment author" />
                  <div class="ps-3">
                    <h6 class="mb-0">{{ comment.reply.author.name }}</h6>
                    <span class="fs-sm text-body-secondary">{{ comment.reply.timestamp }}</span>
                  </div>
                </div>
                <p class="pb-2 mb-0">{{ comment.content }}</p>
                <button class="nav-link fs-sm fw-semibold px-0 py-2" type="button">
                  Reply
                  <i class="ai-redo fs-xl ms-2"></i>
                </button>
                <!-- Comment reply -->
                <b-card no-body class="card-body border-0 bg-secondary mt-4">
                  <div class="d-flex align-items-center pb-1 mb-3">
                    <img class="rounded-circle" :src="comment.reply.author.avatar" width="48" alt="Comment author" />
                    <div class="ps-3">
                      <h6 class="mb-0">{{ comment.reply.author }}</h6>
                      <span class="fs-sm text-body-secondary">{{ comment.reply.timestamp }}</span>
                    </div>
                  </div>
                  <p class="mb-0">
                    <a class="fw-bold text-decoration-none" href="#">{{ comment.reply.name }}</a> {{ comment.reply.content }}
                  </p>
                </b-card>
              </b-card>
            </div>
          </b-collapse>

          <!-- Comments toggle -->
          <div class="nav">
            <button class="btn-more nav-link w-100 justify-content-center p-3 collapsed" type="button" v-b-toggle.collapse.commentsCollapse aria-label="Show / hide comments">Show all comments <span class="fw-normal opacity-70 ms-1">(4)</span></button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { commentsData } from '@/views/pages/Blog/SingleV2/data'
</script>
