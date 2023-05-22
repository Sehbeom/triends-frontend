<template>
  <div>
    <page-button-header />
    <article-layout>
      <page-detail-header title="여행지 리뷰" />
      <div class="write-btn">
        <b-button
          ><router-link :to="{ name: 'reviewregist' }"
            >글쓰기</router-link
          ></b-button
        >
      </div>
      <div class="review-card-container" v-for="item in items" :key="item.id">
        <attraction-review-card :item="item"></attraction-review-card>
      </div>
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import AttractionReviewCard from "@/components/AttractionReviewCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";

export default {
  name: "AttractionReviewView",
  components: {
    ArticleLayout,
    AttractionReviewCard,
    PageDetailHeader,
    PageButtonHeader,
  },
};
</script>

<style>
</style>
