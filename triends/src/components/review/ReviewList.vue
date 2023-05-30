<template>
  <div>
    <page-detail-header title="여행지 리뷰" />
    <div class="write-btn">
      <b-button 
      squared 
      variant="outline-secondary" 
      size="lg" 
      @click="moveToRegist">글쓰기</b-button>
    </div>
    <div class="review-card-container" v-for="review in reviews" :key="review.reviewId">
      <attraction-review-card :review="review"></attraction-review-card>
    </div>
  </div>
</template>

<script>
import AttractionReviewCard from "@/components/AttractionReviewCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import { reviewList } from "@/apis/review";

export default {
  name: "AttractionReviewView",
  data() {
    return {
      reviews: [],
    };
  },
  components: {
    AttractionReviewCard,
    PageDetailHeader,
  },
  created() {
    reviewList(
      ({ data }) => {
        this.reviews = data.data;
      },
      ({ error }) => {
        console.log(error);
        this.$router.push({ name: "error" });
      }
    )
  },
  methods: {
    moveToRegist: function () {
      this.$router.push({ name: 'reviewregist' });
    }
  },
};
</script>

<style>
.review-card-container {
  display: flex;
  justify-content: center;
}
.write-btn {
  text-align: right;
  padding-bottom: 20px;
}
</style>
