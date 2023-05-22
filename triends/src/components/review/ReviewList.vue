<template>
  <div>
    <page-detail-header title="여행지 리뷰" />
    <div class="write-btn">
      <b-button><router-link :to="{ name: 'reviewregist' }">글쓰기</router-link></b-button>
    </div>
    <div
      class="review-card-container"
      v-for="review in reviews"
      :key="review.reviewId"
      @click="viewReview(review)"
    >
      <attraction-review-card :review="review"></attraction-review-card>
    </div>
  </div>
</template>

<script>
import AttractionReviewCard from "@/components/AttractionReviewCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import http from "@/util/http-common";

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
    http.get("review/list/0").then(({ data }) => {
      console.log(data);
      this.reviews = data.data;
      console.log(this.reviews);
    });
  },
  methods: {
    viewReview(review) {
      console.log(review.reviewId);
      this.$router
        .push({
          name: "reviewDetail",
          params: { articleno: review.reviewId },
        })
        .catch(() => {
          console.log("uncaght error");
        });
    },
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
}
</style>
